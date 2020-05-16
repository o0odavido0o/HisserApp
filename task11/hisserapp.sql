-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: hisserapp_database
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hashtags`
--

DROP TABLE IF EXISTS `hashtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hashtags` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `hashtag` varchar(255) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hashtags`
--

LOCK TABLES `hashtags` WRITE;
/*!40000 ALTER TABLE `hashtags` DISABLE KEYS */;
INSERT INTO `hashtags` VALUES (1,'#darkspawns'),(2,'#Normandy'),(3,'#Thoughts'),(4,'#Friends'),(5,'#Corporations'),(6,'#Cold'),(7,'#Despair'),(8,'#Love'),(9,'#Creator'),(10,'#Hero'),(11,'#World'),(12,'#Humans'),(13,'#Weakness');
/*!40000 ALTER TABLE `hashtags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `photo_link` varchar(255) DEFAULT NULL,
  `likes` varchar(255) DEFAULT NULL,
  `hashtags` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `FOREIGN_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,2,'I won`t allow quarrels with me at my ship. Especially when it does my ship.','2020-04-30 08:48:10',NULL,'David Shepard','#Normandy'),(2,3,'I don`t know which is worse: cold or corporations. The first - frostbite your ass, the second - will sell it directly from under you.','2020-04-30 08:48:10',NULL,'David Shepard','#Corporations #Cold'),(3,4,'Here are some who complain that there are a lot of people in residential areas. But somehow I don`t. Before me all part.','2020-04-30 08:48:10',NULL,'',NULL),(4,5,'Why is it whenever someone says \"with all due respect\", they really mean \"kiss my ass\"?','2020-04-30 08:48:10',NULL,'David Shepard','#Thoughts'),(5,6,'Your species must know its place.','2020-04-30 08:48:10',NULL,'','#Thoughts'),(6,7,'I will save this world at any cost!','2020-04-30 08:48:10',NULL,'David Shepard, Grey Warden','#World #Hero'),(7,8,'If earlier it was possible to hide from despair, now it appeared and waved a pen.','2020-04-30 08:48:10',NULL,'','#Despair'),(8,9,'Humans, they are so ignorant and weak, even the best of them.','2020-04-30 08:48:10',NULL,NULL,'#Humans #Weakness'),(9,10,'Love is immensely selfish. It requires that the lover devote himself to the one and only person, to the one who fills his whole mind and heart and uproots everything else from them.','2020-04-30 08:48:10',NULL,'Grey Warden, Leliana','#Love'),(10,11,'He left us because we wanted to go our own way, even if we were to our own detriment, and he could not look at it.','2020-04-30 08:48:10',NULL,'','#Creator'),(11,12,'Yes ... Haven`t you read fairy tales? Heroes always die, well, unless the hero has a bosom buddy ... Then? Then friend die. Oh, now I understand what the catch is!','2020-04-30 08:48:10',NULL,'Grey Warden','#Friends'),(12,7,'New day, new darkspawns.','2020-05-04 16:27:47',NULL,'Grey Warden','#darkspawns');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'David Shepard'),(3,'Joker'),(4,'Rex'),(5,'Ashley Williams'),(6,'Saren Arterius'),(7,'Grey Warden'),(8,'Alistair'),(9,'Sheyla'),(10,'Wynne'),(11,'Leliana'),(12,'Zevran');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-11 11:11:11
