
USE mysql_vita;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_c` DATETIME(3) NOT NULL,
    `server` INTEGER NOT NULL,
    `dados` JSON NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO `logs` (`id`, `data_c`, `server`, `dados`) VALUES
(1, '2023-10-15', 1, '{"data":"2023-09-16 11:15:56","id":1,"Volume_corrente":500,"Razao_IE":0.7,"Frequencia":15,"Fluxo_medio":1.5}'),
(2, '2023-10-16', 1, '{"data":"2023-09-16 11:15:56","id":1,"Volume_corrente":480,"Razao_IE":0.8,"Frequencia":16,"Fluxo_medio":1.6}'),
(3, '2023-10-17', 1, '{"data":"2023-09-17 11:15:56","id":1,"Volume_corrente":490,"Razao_IE":0.75,"Frequencia":16,"Fluxo_medio":1.7}'),
(4, '2023-10-18', 1, '{"data":"2023-09-18 11:15:56","id":1,"Volume_corrente":510,"Razao_IE":0.72,"Frequencia":17,"Fluxo_medio":1.8}'),
(5, '2023-10-19', 1, '{"data":"2023-09-19 11:15:56","id":1,"Volume_corrente":495,"Razao_IE":0.78,"Frequencia":16,"Fluxo_medio":1.9}'),
(6, '2023-11-11', 666, '{"data":"2023-11-11","id":1,"Volume_corrente":500,"Razao_IE":0.7,"Frequencia":15,"Fluxo_medio":1.5}'),
(7, '2023-11-11', 666, '{"data":"2023-11-11","id":1,"Volume_corrente":480,"Razao_IE":0.8,"Frequencia":16,"Fluxo_medio":1.6}');