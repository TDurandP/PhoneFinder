-- CreateTable
CREATE TABLE `Phone` (
    `phone_id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone_name` VARCHAR(255) NOT NULL,
    `phone_IMEI` VARCHAR(17) NOT NULL,
    `phone_color` VARCHAR(10) NOT NULL,
    `phone_storage` VARCHAR(3) NOT NULL,
    `phone_brand_id` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`phone_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brand` (
    `brand_id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_label` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`brand_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
