-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `book_seq`
--

DROP TABLE IF EXISTS `book_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_seq` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `book_name` varchar(45) DEFAULT NULL,
  `book_year` int NOT NULL,
  `book_add` int DEFAULT NULL,
  `book_author` varchar(45) DEFAULT NULL,
  `book_image` text,
  PRIMARY KEY (`book_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `book_seq_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category_seq` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_seq`
--

LOCK TABLES `book_seq` WRITE;
/*!40000 ALTER TABLE `book_seq` DISABLE KEYS */;
INSERT INTO `book_seq` VALUES (1,1,'Sherlock Holmes',2000,21,'Arthur Conan Doyle','https://m.media-amazon.com/images/I/91XHDtSt7qL._AC_UF1000,1000_QL80_.jpg'),(2,3,'When Breathe Becomes Air',2016,3,'Paul Kalanithi','https://bizweb.dktcdn.net/100/326/228/products/when-breath-becomes-air-by-paul-kalanithi-bookworm-hanoi-5180ecc8-f9d4-4953-9b90-ce5c1e044953.jpg?v=1544072005923'),(3,2,'Gone with the wind',1998,5,'Margaret Mitchell','https://m.media-amazon.com/images/I/91w1IHrUqZL._AC_UF1000,1000_QL80_.jpg'),(4,5,'The Shining',1977,2,'Stephen King','https://vn-test-11.slatic.net/p/ba87c78ebf09e516d23562c16beb0749.jpg'),(5,6,'The Lightning Thief',2005,12,'Rick Riordan','https://m.media-amazon.com/images/I/91MviRX17FL._AC_UF1000,1000_QL80_.jpg'),(6,4,'Pride and Prejudice',1813,13,'Jane Austen','https://cdn2.penguin.com.au/covers/original/9780141949055.jpg'),(7,1,'Murder on the Orient Express',1974,17,'Agatha Christie','https://prodimage.images-bn.com/pimages/9780062678058_p2_v3_s600x595.jpg'),(8,2,'The Kite Runner',2003,7,'Khaled Hosseini','https://m.media-amazon.com/images/I/81IzbD2IiIL._AC_UF1000,1000_QL80_.jpg'),(9,3,'The Sorrows of Others',2023,4,'Ada Zhang','https://i0.wp.com/www.nationalbook.org/wp-content/uploads/2023/03/the_sorrows_of_others_by_ada_zhang-1.jpg?fit=1181%2C1800&ssl=1'),(10,4,'Me Before You',2012,6,'Jojo Moyes','https://cdn2.penguin.com.au/covers/original/9780718177027.jpg');
/*!40000 ALTER TABLE `book_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-13 20:16:27
