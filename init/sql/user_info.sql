CREATE TABLE    IF NOT EXISTS `user_info` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) DEFAULT NULL,
    `password` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `nick` VARCHAR(255) DEFAULT NULL,
    `detail_info` longtext DEFAULT NULL,
    `create_time` VARCHAR(20) DEFAULT NULL,
    `modified_time` VARCHAR(20) DEFAULT NULL,
    `level` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`) 
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO `user_info` set name = 'admin001', email = 'admin001@example.com', password = '123456';