-- conversation table
CREATE TABLE `conversation` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uid` VARCHAR(255) NOT NULL UNIQUE,
  `title` TEXT NOT NULL,
  `creator_id` INT NOT NULL,
  `message_count` INT NOT NULL DEFAULT 0,
  `last_message_at` BIGINT,
  `created_ts` BIGINT NOT NULL DEFAULT (UNIX_TIMESTAMP()),
  `updated_ts` BIGINT NOT NULL DEFAULT (UNIX_TIMESTAMP()),
  `row_status` VARCHAR(20) NOT NULL DEFAULT 'NORMAL' CHECK (`row_status` IN ('NORMAL', 'ARCHIVED')),
  FOREIGN KEY (`creator_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);

CREATE INDEX `idx_conversation_creator_id` ON `conversation`(`creator_id`);
CREATE INDEX `idx_conversation_updated_ts` ON `conversation`(`updated_ts` DESC);

-- message table
CREATE TABLE `message` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uid` VARCHAR(255) NOT NULL UNIQUE,
  `conversation_id` INT NOT NULL,
  `role` VARCHAR(20) NOT NULL CHECK (`role` IN ('user', 'assistant')),
  `content` TEXT NOT NULL,
  `created_ts` BIGINT NOT NULL DEFAULT (UNIX_TIMESTAMP()),
  `updated_ts` BIGINT NOT NULL DEFAULT (UNIX_TIMESTAMP()),
  FOREIGN KEY (`conversation_id`) REFERENCES `conversation`(`id`) ON DELETE CASCADE
);

CREATE INDEX `idx_message_conversation_id` ON `message`(`conversation_id`);
CREATE INDEX `idx_message_created_ts` ON `message`(`created_ts` DESC);

-- message_attachment table
CREATE TABLE `message_attachment` (
  `message_id` INT NOT NULL,
  `attachment_id` INT NOT NULL,
  PRIMARY KEY (`message_id`, `attachment_id`),
  FOREIGN KEY (`message_id`) REFERENCES `message`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`attachment_id`) REFERENCES `resource`(`id`) ON DELETE CASCADE
);

CREATE INDEX `idx_message_attachment_message_id` ON `message_attachment`(`message_id`);

