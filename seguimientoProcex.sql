-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_seguimientosprocex
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `gestion_seguimiento`
--

DROP TABLE IF EXISTS `gestion_seguimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gestion_seguimiento` (
  `ID_GESTION_SEGUIMIENTO` int NOT NULL AUTO_INCREMENT,
  `ID_SEGUIMIENTOS` int NOT NULL,
  `DESCRIPCION` varchar(5000) NOT NULL,
  `FECHA_CREACION` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `USUARIO_CREACION` varchar(100) NOT NULL,
  `FECHA_MODIFICACION` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `USUARIO_MODIFICACION` varchar(100) NOT NULL,
  `Comentarios` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ID_GESTION_SEGUIMIENTO`),
  KEY `FK_ID_SEGUIMIENTOS` (`ID_SEGUIMIENTOS`),
  CONSTRAINT `FK_ID_SEGUIMIENTOS` FOREIGN KEY (`ID_SEGUIMIENTOS`) REFERENCES `seguimientos` (`ID_SEGUIMIENTOS`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gestion_seguimiento`
--

LOCK TABLES `gestion_seguimiento` WRITE;
/*!40000 ALTER TABLE `gestion_seguimiento` DISABLE KEYS */;
INSERT INTO `gestion_seguimiento` VALUES (1,5,'prueba seguimiento ','2021-09-21 17:41:04','david.mosquera','2021-09-21 17:41:04','david.mosquera',''),(2,6,'nueva gestion','2021-09-21 21:04:44','david.mosquera','2021-09-21 21:04:44','david.mosquera',''),(3,6,'','2021-09-21 21:20:57','david.mosquera','2021-09-21 21:20:57','david.mosquera','nuevo va validando '),(4,6,'nueva gestion de usuario','2021-09-22 14:14:03','yicson.mosquera','2021-09-22 14:14:03','yicson.mosquera','esta mal validado'),(5,11,'nuevo','2021-09-24 20:16:15','gabriel.isaza','2021-09-24 20:16:15','gabriel.isaza',''),(6,12,'PRUEBA','2021-09-24 20:32:22','david.mosquera','2021-09-24 20:32:22','david.mosquera',''),(7,9,'IJIIJ','2021-09-24 20:37:12','david.mosquera','2021-09-24 20:37:12','david.mosquera',''),(8,9,'AAAAAAAAAAAAA','2021-09-24 20:37:37','david.mosquera','2021-09-24 20:37:37','david.mosquera',''),(9,9,'EEEEEEEEEEEEEEEEEEEE','2021-09-24 20:37:48','david.mosquera','2021-09-24 20:37:48','david.mosquera',''),(10,10,'prueba 1','2021-09-27 20:43:01','david.mosquera','2021-09-27 20:43:01','david.mosquera',''),(11,10,'prueba2','2021-09-27 20:43:20','david.mosquera','2021-09-27 20:43:20','david.mosquera',''),(12,10,'prueba 3','2021-09-27 20:44:53','david.mosquera','2021-09-27 20:44:53','david.mosquera',''),(13,19,'pruba','2021-09-30 14:13:50','david.mosquera','2021-09-30 14:13:50','david.mosquera','');
/*!40000 ALTER TABLE `gestion_seguimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_combo_seguimientos`
--

DROP TABLE IF EXISTS `lista_combo_seguimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lista_combo_seguimientos` (
  `ID_LISTA_COMBO_SEGUIMIENTO` int NOT NULL AUTO_INCREMENT,
  `CODIGO_LISTA` varchar(50) NOT NULL,
  `CODIGO_OPCION` varchar(50) NOT NULL,
  `NOMBRE_OPCION` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_LISTA_COMBO_SEGUIMIENTO`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_combo_seguimientos`
--

LOCK TABLES `lista_combo_seguimientos` WRITE;
/*!40000 ALTER TABLE `lista_combo_seguimientos` DISABLE KEYS */;
INSERT INTO `lista_combo_seguimientos` VALUES (1,'seguimiento.medio','C','Correo'),(2,'seguimiento.medio','R','Reunion'),(3,'seguimiento.medio','T','Telefono'),(4,'seguimiento.medio','W','whatsapp'),(5,'seguimiento.tipoRequerimiento','N','Nuevo'),(6,'seguimiento.tipoRequerimiento','A','Ajuste'),(7,'seguimiento.tipoRequerimiento','E','Error'),(8,'seguimiento.categoria','M','Modulo'),(9,'seguimiento.categoria','I','Informe'),(10,'seguimiento.categoria','In','Indicadores'),(11,'seguimiento.categoria','C','Carga de archivos'),(12,'seguimiento.categoria','T','Tipo proceso'),(13,'seguimiento.estado','P','pendiente'),(14,'seguimiento.estado','E','En proceso'),(15,'seguimiento.estado','R','Realizado'),(16,'seguimiento.prestador','N','Nueva Eps'),(17,'seguimiento.prestador','S','Sanitas'),(18,'seguimiento.prestador','M','Mutual ser'),(19,'seguimiento.prestador','F','Famisanar'),(20,'seguimiento.prestador','C','Colmedica'),(21,'seguimiento.prestador','CS','Colsanitas');
/*!40000 ALTER TABLE `lista_combo_seguimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil` (
  `ID_PERFIL` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_PERFIL`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
INSERT INTO `perfil` VALUES (1,'Director de negocios'),(2,'Directora de proyectos'),(3,'Analista'),(4,'Soporte'),(5,'Desarrollo'),(6,'Coordinador de soporte');
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro`
--

DROP TABLE IF EXISTS `registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registro` (
  `ID_REGISTRO` varchar(20) NOT NULL,
  `Nombres` varchar(100) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `Correo` varchar(100) DEFAULT NULL,
  `Telefono` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`ID_REGISTRO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro`
--

LOCK TABLES `registro` WRITE;
/*!40000 ALTER TABLE `registro` DISABLE KEYS */;
INSERT INTO `registro` VALUES ('10388221','David','Sanchez Mosquera','david@gmail.com','1234567'),('10389871','David','Acosta','davidAc@gmail.com','123456789'),('12345','prueba2','prueba2','prueba@gmail.com','1234567'),('123456','Yicsson','Mosquera','yicson.mosquera@procex.co','3012342'),('123456789','Gabriel','Isaza','gabriel@gmail.com','123456789'),('987654321','Director','Proyectos','director@gmail.com','1234567');
/*!40000 ALTER TABLE `registro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguimientos`
--

DROP TABLE IF EXISTS `seguimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguimientos` (
  `ID_SEGUIMIENTOS` int NOT NULL AUTO_INCREMENT,
  `EPS` varchar(50) NOT NULL,
  `FECHA_REQUERIMIENTO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `MEDIO` varchar(10) DEFAULT NULL,
  `TIPO_REQUERIMIENTO` varchar(50) DEFAULT NULL,
  `TITULO_REQUERIMIENTO` varchar(50) DEFAULT NULL,
  `DESCRIPCION_REQUERIMIENTO` varchar(500) DEFAULT NULL,
  `AREA_VALIDACION` varchar(100) DEFAULT NULL,
  `ESTADO` varchar(50) DEFAULT NULL,
  `FECHA_ENTREGA` varchar(10) DEFAULT NULL,
  `FECHA_FINALIZACION` varchar(30) DEFAULT NULL,
  `SEGUIMIENTO` varchar(50) DEFAULT NULL,
  `RUTA_SOPORTES` varchar(1000) DEFAULT NULL,
  `Categoria` varchar(50) DEFAULT NULL,
  `USUARIO_CREACION` varchar(100) NOT NULL,
  `ID_PERFIL` int DEFAULT NULL,
  `ID_REGISTRO` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_SEGUIMIENTOS`),
  KEY `FK_ID_PERFIL1` (`ID_PERFIL`),
  CONSTRAINT `FK_ID_PERFIL1` FOREIGN KEY (`ID_PERFIL`) REFERENCES `perfil` (`ID_PERFIL`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguimientos`
--

LOCK TABLES `seguimientos` WRITE;
/*!40000 ALTER TABLE `seguimientos` DISABLE KEYS */;
INSERT INTO `seguimientos` VALUES (1,'Nueva Eps','2021-09-10 17:04:24','Reunion','Error','Cargue vacunacion','error al crear el modulo carga de archivos, se extiende hasta el 2020, validando ','prueba','Pendiente','2021-11-27','','','','Carga de archivos','',NULL,NULL),(2,'','2021-09-17 16:25:23','','','','validando 123','prueba','Realizado','2021-09-02','2021-09-02','','','','',NULL,NULL),(3,'SANITAS','2021-09-20 16:54:53','Reunion','Ajuste','MODULO CANCER','PRUEBA','PRUEBA','Pendiente','2021-09-21','','','','Modulo','',NULL,NULL),(4,'Nueva Eps','2021-09-20 17:10:55','Telefono','Error','Cargue res 202','cargue','cargue','Realizado','2021-09-22','2021-09-23','','','Carga de archivos','',NULL,NULL),(5,'Nueva Eps','2021-09-20 21:28:40','Reunion','Nuevo','nuevo modulo carga','crear un nuevo modulo de carga','pendiente','Realizado','2021-09-24','2021-09-21 03:55:19 PM','','','Carga de archivos','',NULL,NULL),(6,'Nueva Eps','2021-09-20 21:33:36','Reunion','Ajuste','cargue nuevo','nuevo seguimiento','','Realizado','2021-09-21','2021-09-22 10:15:14 AM','','','Carga de archivos','',NULL,NULL),(7,'Mutual ser','2021-09-22 17:33:17','Reunion','Ajuste','sdsd','sds','sdsd','Realizado','2021-09-03','2021-09-24 10:05:37 AM','','','Informe','',NULL,NULL),(8,'Sanitas','2021-09-23 16:18:31','Reunion','Ajuste','Cargue vacunacion','','','Realizado','2021-10-07','2021-09-24 03:11:09 PM','','','Carga de archivos','',NULL,NULL),(9,'Famisanar','2021-09-24 13:14:16','Reunion','Ajuste','Cargue vacunacion','PRUEBA','PRUEBA','Realizado','2021-09-16','2021-09-27 10:44:22 AM','','','Indicadores','yicson.mosquera',NULL,NULL),(10,'Famisanar','2021-09-24 13:15:17','Reunion','Ajuste','Cargue vacunacion','PRUEBA','pendiente','Realizado','2021-09-30','2021-09-28 12:23:48 PM','','','Carga de archivos','yicson.mosquera',NULL,NULL),(11,'Sanitas','2021-09-24 20:08:36','Reunion','Ajuste','Cargue vacunacion','PRUEBA','prueba 3','Realizado','2021-09-30','2021-09-27 03:38:43 PM','','','Informe','yicson.mosquera',NULL,NULL),(12,'Sanitas','2021-09-24 20:31:36','Reunion','Nuevo','Cargue vacunacion','PRUEBA','','Realizado','2021-09-25','2021-09-27 10:44:30 AM','','','Carga de archivos','david.mosquera',NULL,NULL),(13,'Mutual ser','2021-09-29 16:33:51','Telefono','Ajuste','Cargue vacunacion','adad','','Pendiente','2021-09-17','','','','Indicadores','david.mosquera',NULL,NULL),(14,'Famisanar','2021-09-29 16:34:12','Telefono','Ajuste','Cargue res 202','adad','adad','Pendiente','2021-09-24','','','','Informe','david.mosquera',NULL,NULL),(15,'Mutual ser','2021-09-29 17:16:29','Telefono','Ajuste','nuevo','prueba','','Pendiente','2021-09-10','','','','Modulo','david.mosquera',NULL,NULL),(16,'Colmedica','2021-09-29 17:16:51','whatsapp','Ajuste','modulo','prueba','','Pendiente','2021-10-01','','','','Modulo','david.mosquera',NULL,NULL),(17,'Colsanitas','2021-09-29 17:18:07','Reunion','Ajuste','Cargue vacunacion','prueba','','Pendiente','2021-09-10','','','','Indicadores','david.mosquera',NULL,NULL),(18,'Mutual ser','2021-09-29 17:38:09','whatsapp','Error','Cargue res 202','prueba','','Pendiente','2021-09-10','','','','Indicadores','david.mosquera',NULL,NULL),(19,'Mutual ser','2021-09-29 20:07:14','Telefono','Ajuste','Cargue vacunacion','ssdsd','','Realizado','2021-09-03','2021-09-30 09:14:03 AM','','','Indicadores','david.mosquera',3,'123456789'),(20,'Mutual ser','2021-09-29 20:14:54','Reunion','Error','Cargue vacunacion','123','adsda','Pendiente','2021-09-15','','','','Informe','david.mosquera',5,'123456'),(21,'Famisanar','2021-09-29 20:41:42','Reunion','Ajuste','Cargue vacunacion','sfs','sfsfs','Realizado','2021-09-30','2021-09-30 10:44:59 AM','','','Indicadores','david.mosquera',5,'123456'),(22,'Mutual ser','2021-09-29 21:57:13','Telefono','Ajuste','Cargue vacunacion','adddasda','adad','Pendiente','2021-09-10','','','','Indicadores','david.mosquera',4,'12345'),(23,'Mutual ser','2021-09-30 17:23:58','Correo','Ajuste','Cargue vacunacion','adsad','adasdasd','Pendiente','2021-09-02','','','','Informe','david.mosquera',3,'123456789'),(24,'Sanitas','2021-09-30 17:28:05','Reunion','Error','Cargue vacunacion','sadadsd','adadsda','Realizado','2021-09-09','2021-09-30 12:28:22 PM','','','Informe','david.mosquera',3,'123456789'),(25,'Nueva Eps','2021-09-30 19:34:38','Telefono','Ajuste','Cargue vacunacion','sasasa','asasa','Pendiente','2021-09-10','','','','Indicadores','yicson.mosquera',5,'123456'),(26,'Colmedica','2021-09-30 19:47:07','Telefono','Error','Cargue res 202','dsdsdsdsd','dsdsdsdsd','Pendiente','2021-09-03','','','','Carga de archivos','yicson.mosquera',5,'123456'),(27,'Nueva Eps','2021-09-30 20:18:44','Telefono','Nuevo','nuevo','nuevo','nuevo','Pendiente','2021-10-01','','','','Tipo proceso','david.mosquera',1,'10388221'),(28,'Sanitas','2021-10-04 14:15:40','Reunion','Ajuste','Cargue res 202','nuevo','nuevo','Pendiente','2021-10-15','','','','Carga de archivos','david.mosquera',5,'123456'),(29,'Sanitas','2021-10-04 15:24:55','Telefono','Ajuste','Cargue vacunacion','nuevo','nuevo','Realizado','2021-10-02','2021-10-04 10:32:52 AM','','','Informe','david.mosquera',1,'10388221'),(30,'Sanitas','2021-10-04 15:25:31','Telefono','Ajuste','Cargue vacunacion','nuevo','nuevo','Pendiente','2021-10-02','','','','Informe','david.mosquera',1,'10388221'),(31,'Famisanar','2021-10-04 15:27:04','Reunion','Error','Cargue res 202','','','Realizado','2021-10-28','2021-10-04 10:32:47 AM','','','Carga de archivos','david.mosquera',1,'10388221'),(32,'Nueva Eps','2021-10-04 15:33:23','Reunion','Nuevo','Cargue vacunacion','nuevo','nuevo','En proceso','2021-10-08','','','','Indicadores','david.mosquera',5,''),(33,'Mutual ser','2021-10-04 15:34:07','Telefono','Ajuste','Cargue res 202','prueba','prueba','Pendiente','2021-10-01','','','','Carga de archivos','david.mosquera',3,'123456789'),(34,'Colmedica','2021-10-04 15:34:47','Telefono','Ajuste','Cargue res 202','indicadores','indicadores','En proceso','2021-10-08','','','','Indicadores','david.mosquera',4,''),(35,'Famisanar','2021-10-04 15:35:38','Correo','Ajuste','nuevo','nuevo','nuevo','En proceso','2021-10-30','','','','Tipo proceso','david.mosquera',1,''),(36,'Nueva Eps','2021-10-04 15:41:47','whatsapp','Error','Informe','nuevo','nuevo','En proceso','2021-10-30','','','','Informe','david.mosquera',2,''),(37,'Nueva Eps','2021-10-04 15:44:23','Correo','Ajuste','Informe','nuevo','nuevo','Pendiente','2021-10-29','','','','Informe','david.mosquera',2,'987654321'),(38,'Colmedica','2021-10-04 15:48:44','Reunion','Nuevo','ajuste cac','nuevo','nuevo','En proceso','2021-10-30','','','','Modulo','david.mosquera',6,''),(39,'Colsanitas','2021-10-04 15:53:04','Reunion','Ajuste','Informe','nuevo','nuevo','Pendiente','2021-10-23','','','','Informe','david.mosquera',6,'10389871');
/*!40000 ALTER TABLE `seguimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soportes`
--

DROP TABLE IF EXISTS `soportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soportes` (
  `ID_soporte` int NOT NULL AUTO_INCREMENT,
  `nombre_archivo` varchar(200) NOT NULL,
  `tipo_archivo` varchar(200) NOT NULL,
  `usuario_creacion` varchar(200) NOT NULL,
  `ID_GESTION_SEGUIMIENTO` int DEFAULT NULL,
  `RUTA_SOPORTES` varchar(200) NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_soporte`),
  KEY `ID_GESTION_SEGUIMIENTO` (`ID_GESTION_SEGUIMIENTO`),
  CONSTRAINT `ID_GESTION_SEGUIMIENTO` FOREIGN KEY (`ID_GESTION_SEGUIMIENTO`) REFERENCES `gestion_seguimiento` (`ID_GESTION_SEGUIMIENTO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soportes`
--

LOCK TABLES `soportes` WRITE;
/*!40000 ALTER TABLE `soportes` DISABLE KEYS */;
/*!40000 ALTER TABLE `soportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
  `ID_REGISTRO` varchar(20) NOT NULL,
  `ID_PERFIL` int NOT NULL,
  `USUARIO` varchar(100) NOT NULL,
  `Contrasena` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_USUARIO`),
  KEY `FK_ID_REGISTRO` (`ID_REGISTRO`),
  KEY `FK_ID_PERFIL` (`ID_PERFIL`),
  CONSTRAINT `FK_ID_PERFIL` FOREIGN KEY (`ID_PERFIL`) REFERENCES `perfil` (`ID_PERFIL`),
  CONSTRAINT `FK_ID_REGISTRO` FOREIGN KEY (`ID_REGISTRO`) REFERENCES `registro` (`ID_REGISTRO`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'10388221',1,'david.mosquera','$2b$11$Yc0X38mWRoeIlKkvPuIWYe300yyM39zKWGbw90J59T8heWckgYPx6'),(3,'12345',4,'prueba.prueba','$2b$11$HaeLsjtpPS8JvxwyoEiNbuerei2KBbfbqH6NzWxwfekg4/9KhDIR2'),(4,'123456789',3,'gabriel.isaza','$2b$11$Yl7TOfPB9x2tbVcl90R2A.ODFkuQs2vbYsytayXGCSYWWXnXuarrm'),(5,'123456',5,'yicson.mosquera','$2b$11$1kzJgi95mDMCeA/EbsvbguCFTIYnhKn7j2dNeAlXGFXdASCCvUryC'),(6,'987654321',2,'admin.admin','$2b$11$eu0xAE98MK.htNlX35Sma.TNjXJq7wy6thaJ.FoeaFR81DN./cDW2'),(7,'10389871',6,'davidAc@gmail.com','$2b$11$TEPOZMDiYN.t7qBSQFn6UOF2uQawLDe1xLkbQSy5DrwCAnTRStrQK');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-07 15:11:11
