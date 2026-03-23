-- CreateTable
CREATE TABLE `contact` (
    `contact_id` INTEGER NOT NULL,
    `instagram` VARCHAR(256) NULL,
    `facebook` VARCHAR(256) NULL,
    `tel` VARCHAR(256) NULL,

    PRIMARY KEY (`contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) NULL,
    `gender` VARCHAR(256) NULL,
    `age` VARCHAR(256) NULL,
    `type` VARCHAR(256) NULL,
    `breed` VARCHAR(256) NULL,
    `info` TEXT NULL,
    `address` VARCHAR(256) NULL,
    `contact_id` INTEGER NOT NULL,
    `img` VARCHAR(256) NULL,

    INDEX `contact_id`(`contact_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(256) NOT NULL,
    `hashed_password` VARCHAR(256) NOT NULL,
    `email` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pets` ADD CONSTRAINT `contact_id` FOREIGN KEY (`contact_id`) REFERENCES `contact`(`contact_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
