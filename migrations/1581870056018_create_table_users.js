module.exports = {
    "up": "CREATE TABLE `influencers` (`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, `email` VARCHAR(50) DEFAULT NULL, `interest` TEXT NOT NULL, `name` VARCHAR(30) DEFAULT NULL), `pict` VARCHAR(250) DEFAULT NULL, `instagram` VARCHAR(30) DEFAULT NULL",
    "down":"DROP TABLE `influencers`"
}