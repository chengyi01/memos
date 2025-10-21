package postgres

import (
	"context"
	"fmt"
	"strings"

	"github.com/google/uuid"

	"github.com/usememos/memos/store"
)

func (d *DB) CreateConversation(ctx context.Context, create *store.Conversation) (*store.Conversation, error) {
	fields := []string{"uid", "title", "creator_id"}
	placeholders := []string{"$1", "$2", "$3"}
	args := []any{uuid.New().String(), create.Title, create.CreatorID}

	stmt := fmt.Sprintf(`
		INSERT INTO conversation (%s)
		VALUES (%s)
		RETURNING id, uid, title, creator_id, message_count, last_message_at, created_ts, updated_ts, row_status
	`, strings.Join(fields, ", "), strings.Join(placeholders, ", "))

	conversation := &store.Conversation{}
	if err := d.db.QueryRowContext(ctx, stmt, args...).Scan(
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
	return conversation, nil
}

func (d *DB) ListConversations(ctx context.Context, find *store.FindConversation) ([]*store.Conversation, error) {
	where, args := []string{"1 = 1"}, []any{}
	argCounter := 1

	if v := find.ID; v != nil {
		where = append(where, fmt.Sprintf("id = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := find.UID; v != nil {
		where = append(where, fmt.Sprintf("uid = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := find.CreatorID; v != nil {
		where = append(where, fmt.Sprintf("creator_id = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := find.RowStatus; v != nil {
		where = append(where, fmt.Sprintf("row_status = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}

	query := fmt.Sprintf(`
		SELECT id, uid, title, creator_id, message_count, last_message_at, created_ts, updated_ts, row_status
		FROM conversation
		WHERE %s
		ORDER BY updated_ts DESC
	`, strings.Join(where, " AND "))

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
	argCounter := 1

	if v := update.Title; v != nil {
		set = append(set, fmt.Sprintf("title = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := update.MessageCount; v != nil {
		set = append(set, fmt.Sprintf("message_count = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := update.LastMessageAt; v != nil {
		set = append(set, fmt.Sprintf("last_message_at = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	set = append(set, "updated_ts = EXTRACT(EPOCH FROM NOW())")

	args = append(args, update.UID)
	stmt := fmt.Sprintf(`
		UPDATE conversation
		SET %s
		WHERE uid = $%d
		RETURNING id, uid, title, creator_id, message_count, last_message_at, created_ts, updated_ts, row_status
	`, strings.Join(set, ", "), argCounter)

	conversation := &store.Conversation{}
	if err := d.db.QueryRowContext(ctx, stmt, args...).Scan(
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
	return conversation, nil
}

func (d *DB) DeleteConversation(ctx context.Context, uid string) error {
	stmt := `DELETE FROM conversation WHERE uid = $1`
	if _, err := d.db.ExecContext(ctx, stmt, uid); err != nil {
		return err
	}
	return nil
}

func (d *DB) CreateMessage(ctx context.Context, create *store.Message) (*store.Message, error) {
	stmt := `
		INSERT INTO message (uid, conversation_id, role, content)
		VALUES ($1, $2, $3, $4)
		RETURNING id, uid, conversation_id, role, content, created_ts, updated_ts
	`

	message := &store.Message{}
	if err := d.db.QueryRowContext(ctx, stmt,
		uuid.New().String(),
		create.ConversationID,
		create.Role,
		create.Content,
	).Scan(
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
	return message, nil
}

func (d *DB) ListMessages(ctx context.Context, find *store.FindMessage) ([]*store.Message, error) {
	where, args := []string{"1 = 1"}, []any{}
	argCounter := 1

	if v := find.ID; v != nil {
		where = append(where, fmt.Sprintf("id = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := find.UID; v != nil {
		where = append(where, fmt.Sprintf("uid = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := find.ConversationID; v != nil {
		where = append(where, fmt.Sprintf("conversation_id = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}
	if v := find.Role; v != nil {
		where = append(where, fmt.Sprintf("role = $%d", argCounter))
		args = append(args, *v)
		argCounter++
	}

	query := fmt.Sprintf(`
		SELECT id, uid, conversation_id, role, content, created_ts, updated_ts
		FROM message
		WHERE %s
		ORDER BY created_ts ASC
	`, strings.Join(where, " AND "))

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
	stmt := `INSERT INTO message_attachment (message_id, attachment_id) VALUES ($1, $2)`
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
		WHERE ma.message_id = $1
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
