-- CreateTable
CREATE TABLE `contas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NULL,
    `plano` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
