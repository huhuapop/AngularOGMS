-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2018 at 08:08 PM
-- Server version: 8.0.12
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ogms`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_info`
--

CREATE TABLE `tbl_student_info` (
  `PantherID` varchar(20) NOT NULL,
  `FirstName` varchar(25) NOT NULL,
  `MiddleName` varchar(25) DEFAULT NULL,
  `LastName` varchar(25) DEFAULT NULL,
  `Email` varchar(100) NOT NULL DEFAULT '',
  `MobileNumber` varchar(25) NOT NULL,
  `College` varchar(25) DEFAULT NULL,
  `Department` varchar(25) NOT NULL,
  `Location` varchar(25) NOT NULL,
  `Degree` varchar(30) DEFAULT NULL,
  `Major` varchar(25) DEFAULT NULL,
  `Concentration` varchar(25) DEFAULT NULL,
  `matricTerm` varchar(50) DEFAULT NULL,
  `Position` varchar(25) DEFAULT NULL,
  `Status` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_student_info`
--

INSERT INTO `tbl_student_info` (`PantherID`, `FirstName`, `MiddleName`, `LastName`, `Email`, `MobileNumber`, `College`, `Department`, `Location`, `Degree`, `Major`, `Concentration`, `matricTerm`, `Position`, `Status`) VALUES
('2211604', 'Ahmet', '', 'Keller', 'ahmet@gsu.edu', '', 'AS', 'CSC', '', 'PHD', 'CSC', '', NULL, 'notinstructor', 'active'),
('2277957', 'A K ', '', 'Lucy', 'lucy@gsu.edu', '', 'AS', 'CSC', '', 'PHD', 'CSC', '', '4', 'instructor', 'active'),
('547811', 'Ah', '', 'Green', 'ah@gsu.edu', '', 'AS', 'CSC', '', 'PHD', 'CSC', 'Bioinformatics', '4', 'instructor', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_student_info`
--
ALTER TABLE `tbl_student_info`
  ADD PRIMARY KEY (`PantherID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
