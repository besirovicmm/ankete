-- CreateTable
CREATE TABLE `ankete` (
    `idAnkete` INTEGER NOT NULL AUTO_INCREMENT,
    `ime_ankete` VARCHAR(250) NULL,

    PRIMARY KEY (`idAnkete`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `korisnici` (
    `id_korisnika` INTEGER NOT NULL AUTO_INCREMENT,
    `ime_korisnika` VARCHAR(250) NULL,

    PRIMARY KEY (`id_korisnika`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `odgovori` (
    `id_odgovora` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pitanja` INTEGER NULL,
    `odgovor` TEXT NOT NULL,

    INDEX `id_pitanja`(`id_pitanja`),
    PRIMARY KEY (`id_odgovora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `odgovori_korisnika` (
    `id_odg_korisnika` INTEGER NOT NULL AUTO_INCREMENT,
    `id_odgovora` INTEGER NULL,
    `id_korisnika` INTEGER NULL,

    INDEX `id_korisnika`(`id_korisnika`),
    INDEX `id_odgovora`(`id_odgovora`),
    PRIMARY KEY (`id_odg_korisnika`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pitanja` (
    `id_pitanja` INTEGER NOT NULL AUTO_INCREMENT,
    `id_ankete` INTEGER NULL,
    `tip_pitanja` VARCHAR(255) NOT NULL,
    `pitanje` TEXT NOT NULL,

    INDEX `id_ankete`(`id_ankete`),
    PRIMARY KEY (`id_pitanja`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `date_created` DATE NULL DEFAULT (curdate()),
    `date_fulfilled` DATE NULL,
    `customer_name` VARCHAR(300) NOT NULL,
    `product_name` VARCHAR(300) NOT NULL,
    `volume` DECIMAL(10, 3) NOT NULL,
    `is_recurring` BOOLEAN NULL DEFAULT false,
    `is_disputed` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `odgovori` ADD CONSTRAINT `odgovori_ibfk_1` FOREIGN KEY (`id_pitanja`) REFERENCES `pitanja`(`id_pitanja`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `odgovori_korisnika` ADD CONSTRAINT `odgovori_korisnika_ibfk_2` FOREIGN KEY (`id_korisnika`) REFERENCES `korisnici`(`id_korisnika`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `odgovori_korisnika` ADD CONSTRAINT `odgovori_korisnika_ibfk_1` FOREIGN KEY (`id_odgovora`) REFERENCES `odgovori`(`id_odgovora`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pitanja` ADD CONSTRAINT `pitanja_ibfk_1` FOREIGN KEY (`id_ankete`) REFERENCES `ankete`(`idAnkete`) ON DELETE NO ACTION ON UPDATE NO ACTION;
