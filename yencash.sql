-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 21, 2018 at 08:21 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yencash`
--

-- --------------------------------------------------------

--
-- Table structure for table `calendar_events`
--

CREATE TABLE `calendar_events` (
  `calendar_id` int(12) NOT NULL,
  `country_id` int(12) NOT NULL DEFAULT '0',
  `state_id` int(12) NOT NULL DEFAULT '0',
  `city_id` int(12) NOT NULL DEFAULT '0',
  `gallery_category_id` int(12) NOT NULL DEFAULT '0',
  `sub_category_id` int(12) DEFAULT '0',
  `event_name` varchar(250) NOT NULL DEFAULT '',
  `event_description` text NOT NULL,
  `event_start_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `event_end_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `website_link` varchar(250) NOT NULL DEFAULT '',
  `link_string` varchar(250) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `EmpTable`
--

CREATE TABLE `EmpTable` (
  `Name` varchar(250) NOT NULL,
  `Password` varchar(250) NOT NULL,
  `Role` int(12) NOT NULL,
  `CreatedBy` varchar(250) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `UserId` int(12) NOT NULL,
  `EmployeeId` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `EmpTable`
--

INSERT INTO `EmpTable` (`Name`, `Password`, `Role`, `CreatedBy`, `CreateDate`, `UserId`, `EmployeeId`) VALUES
('vinod', '12345', 1, 'vinod', '2018-04-08 00:00:00', 1, '1002'),
('niranjan', '123456', 2, 'vinod', '0000-00-00 00:00:00', 2, '1001');

-- --------------------------------------------------------

--
-- Table structure for table `Questions`
--

CREATE TABLE `Questions` (
  `Qid` int(12) NOT NULL,
  `Question` varchar(250) DEFAULT '',
  `OptionA` varchar(250) DEFAULT '',
  `OptionB` varchar(250) DEFAULT '',
  `OptionC` varchar(250) DEFAULT '',
  `RightAnswer` varchar(250) DEFAULT '',
  `NoViews` int(12) DEFAULT '0',
  `Status` varchar(250) DEFAULT '',
  `Subject` varchar(250) DEFAULT '',
  `PostedBy` int(12) DEFAULT '0',
  `postedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `ModifiedBy` int(12) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Questions`
--

INSERT INTO `Questions` (`Qid`, `Question`, `OptionA`, `OptionB`, `OptionC`, `RightAnswer`, `NoViews`, `Status`, `Subject`, `PostedBy`, `postedDate`, `ModifiedDate`, `ModifiedBy`) VALUES
(12, 'sadas', 'asdas', 'dasd', 'adsadas', 'das', 0, '', 'Maths', 2, '2018-04-21 05:56:59', '2018-04-21 11:26:59', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Websiteusers`
--

CREATE TABLE `Websiteusers` (
  `UserId` int(12) NOT NULL,
  `UserName` varchar(250) DEFAULT NULL,
  `Email` varchar(250) NOT NULL,
  `Phone` varchar(250) DEFAULT NULL,
  `Address` varchar(250) DEFAULT NULL,
  `CreatedBy` varchar(250) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifiedBy` varchar(250) DEFAULT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `Password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `EmpTable`
--
ALTER TABLE `EmpTable`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`Qid`),
  ADD UNIQUE KEY `Qid_2` (`Qid`),
  ADD KEY `Qid` (`Qid`);

--
-- Indexes for table `Websiteusers`
--
ALTER TABLE `Websiteusers`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `EmpTable`
--
ALTER TABLE `EmpTable`
  MODIFY `UserId` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Questions`
--
ALTER TABLE `Questions`
  MODIFY `Qid` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `Websiteusers`
--
ALTER TABLE `Websiteusers`
  MODIFY `UserId` int(12) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
