package mysql

import (
	"context"
	"fmt"
	"strings"

	"github.com/google/uuid"

	"github.com/usememos/memos/store"
)

func (d *DB) CreateConversation(ctx context.Context, create *store.Conversation) (*store.Conversation, error) {
	fields := []string{"`uid`", "`title`", "`creator_id`"}
	placeholder := []string{"?", "?", "?"}
	args := []any{uuid.New().String(), create.Title, create.CreatorID}

	stmt := "INSERT INTO `conversation` (" + strings.Join(fields, ", ") + ") VALUES (" + strings.Join(placeholder, ", ") + ")"
	result, err := d.db.ExecContext(ctx, stmt, args...)
	if err != nil {
		return nil, err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return nil, err
	}

	id32 := int32(id)
	conversations, err := d.ListConversations(ctx, &store.FindConversation{ID: &id32})
	if err != nil {
		return nil, err
	}
	if len(conversations) == 0 {
		return nil, fmt.Errorf("conversation not found after creation")
	}
	return conversations[0], nil
}

func (d *DB) ListConversations(ctx context.Context, find *store.FindConversation) ([]*store.Conversation, error) {
	where, args := []string{"1 = 1"}, []any{}

	if v := find.ID; v != nil {
		where, args = append(where, "`id` = ?"), append(args, *v)
	}
	if v := find.UID; v != nil {
		where, args = append(where, "`uid` = ?"), append(args, *v)
	}
	if v := find.CreatorID; v != nil {
		where, args = append(where, "`creator_id` = ?"), append(args, *v)
	}
	if v := find.RowStatus; v != nil {
		where, args = append(where, "`row_status` = ?"), append(args, *v)
	}

	query := "SELECT `id`, `uid`, `title`, `creator_id`, `message_count`, `last_message_at`, `created_ts`, `updated_ts`, `row_status` FROM `conversation` WHERE " + strings.Join(where, " AND ") + " ORDER BY `updated_ts` DESC"

	if v := find.Limit; v != nil {
		query = fmt.Sprintf("%s LIMIT %d", query, *v)
	}
	if v := find.Offset; v != nil {
		query = fmt.Sprintf("%s OFFSET %d", query, *v)
	}

	rows, err := d.db.QueryContext(ctx, query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	list := []*store.Conversation{}
	for rows.Next() {
		conversation := &store.Conversation{}
		if err := rows.Scan(
			&conversation.ID,
			&conversation.UID,
			&conversation.Title,
			&conversation.CreatorID,
			&conversation.MessageCount,
			&conversation.LastMessageAt,
			&conversation.CreatedTs,
			&conversation.UpdatedTs,
			&conversation.RowStatus,
		); err != nil {
			return nil, err
		}
		list = append(list, conversation)
	}
	return list, rows.Err()
}

func (d *DB) UpdateConversation(ctx context.Context, update *store.UpdateConversation) (*store.Conversation, error) {
	set, args := []string{}, []any{}

	if v := update.Title; v != nil {
		set, args = append(set, "`title` = ?"), append(args, *v)
	}
	if v := update.MessageCount; v != nil {
		set, args = append(set, "`message_count` = ?"), append(args, *v)
	}
	if v := update.LastMessageAt; v != nil {
		set, args = append(set, "`last_message_at` = ?"), append(args, *v)
	}
	set = append(set, "`updated_ts` = UNIX_TIMESTAMP()")

	args = append(args, update.UID)
	stmt := "UPDATE `conversation` SET " + strings.Join(set, ", ") + " WHERE `uid` = ?"
	if _, err := d.db.ExecContext(ctx, stmt, args...); err != nil {
		return nil, err
	}

	conversations, err := d.ListConversations(ctx, &store.FindConversation{UID: &update.UID})
	if err != nil {
		return nil, err
	}
	if len(conversations) == 0 {
		return nil, fmt.Errorf("conversation not found after update")
	}
	return conversations[0], nil
}

func (d *DB) DeleteConversation(ctx context.Context, uid string) error {
	stmt := "DELETE FROM `conversation` WHERE `uid` = ?"
	if _, err := d.db.ExecContext(ctx, stmt, uid); err != nil {
		return err
	}
	return nil
}

func (d *DB) CreateMessage(ctx context.Context, create *store.Message) (*store.Message, error) {
	stmt := "INSERT INTO `message` (`uid`, `conversation_id`, `role`, `content`) VALUES (?, ?, ?, ?)"
	result, err := d.db.ExecContext(ctx, stmt,
		uuid.New().String(),
		create.ConversationID,
		create.Role,
		create.Content,
	)
	if err != nil {
		return nil, err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return nil, err
	}

	id32 := int32(id)
	messages, err := d.ListMessages(ctx, &store.FindMessage{ID: &id32})
	if err != nil {
		return nil, err
	}
	if len(messages) == 0 {
		return nil, fmt.Errorf("message not found after creation")
	}
	return messages[0], nil
}

func (d *DB) ListMessages(ctx context.Context, find *store.FindMessage) ([]*store.Message, error) {
	where, args := []string{"1 = 1"}, []any{}

	if v := find.ID; v != nil {
		where, args = append(where, "`id` = ?"), append(args, *v)
	}
	if v := find.UID; v != nil {
		where, args = append(where, "`uid` = ?"), append(args, *v)
	}
	if v := find.ConversationID; v != nil {
		where, args = append(where, "`conversation_id` = ?"), append(args, *v)
	}
	if v := find.Role; v != nil {
		where, args = append(where, "`role` = ?"), append(args, *v)
	}

	query := "SELECT `id`, `uid`, `conversation_id`, `role`, `content`, `created_ts`, `updated_ts` FROM `message` WHERE " + strings.Join(where, " AND ") + " ORDER BY `created_ts` ASC"

	if v := find.Limit; v != nil {
		query = fmt.Sprintf("%s LIMIT %d", query, *v)
	}
	if v := find.Offset; v != nil {
		query = fmt.Sprintf("%s OFFSET %d", query, *v)
	}

	rows, err := d.db.QueryContext(ctx, query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	list := []*store.Message{}
	for rows.Next() {
		message := &store.Message{}
		if err := rows.Scan(
			&message.ID,
			&message.UID,
			&message.ConversationID,
			&message.Role,
			&message.Content,
			&message.CreatedTs,
			&message.UpdatedTs,
		); err != nil {
			return nil, err
		}
		list = append(list, message)
	}
	return list, rows.Err()
}

func (d *DB) CreateMessageAttachment(ctx context.Context, create *store.MessageAttachment) error {
	stmt := "INSERT INTO `message_attachment` (`message_id`, `attachment_id`) VALUES (?, ?)"
	if _, err := d.db.ExecContext(ctx, stmt, create.MessageID, create.AttachmentID); err != nil {
		return err
	}
	return nil
}

func (d *DB) ListMessageAttachments(ctx context.Context, messageID int32) ([]*store.Attachment, error) {
	stmt := `
		SELECT r.id, r.uid, r.filename, r.type, r.size, r.reference, r.storage_type, r.payload, r.created_ts, r.updated_ts
		FROM resource r
		INNER JOIN message_attachment ma ON r.id = ma.attachment_id
		WHERE ma.message_id = ?
		ORDER BY r.created_ts ASC
	`

	rows, err := d.db.QueryContext(ctx, stmt, messageID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	list := []*store.Attachment{}
	for rows.Next() {
		attachment := &store.Attachment{}
		var storageType, payload string
		if err := rows.Scan(
			&attachment.ID,
			&attachment.UID,
			&attachment.Filename,
			&attachment.Type,
			&attachment.Size,
			&attachment.Reference,
			&storageType,
			&payload,
			&attachment.CreatedTs,
			&attachment.UpdatedTs,
		); err != nil {
			return nil, err
		}
		list = append(list, attachment)
	}
	return list, rows.Err()
}
