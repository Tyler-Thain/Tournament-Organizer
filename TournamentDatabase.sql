USE [master]
GO
/****** Object:  Database [TournamentApp]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE DATABASE [TournamentApp]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TournamentApp', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\TournamentApp.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TournamentApp_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\TournamentApp_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [TournamentApp] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TournamentApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TournamentApp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TournamentApp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TournamentApp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TournamentApp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TournamentApp] SET ARITHABORT OFF 
GO
ALTER DATABASE [TournamentApp] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [TournamentApp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TournamentApp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TournamentApp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TournamentApp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TournamentApp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TournamentApp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TournamentApp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TournamentApp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TournamentApp] SET  ENABLE_BROKER 
GO
ALTER DATABASE [TournamentApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TournamentApp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TournamentApp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TournamentApp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TournamentApp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TournamentApp] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [TournamentApp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TournamentApp] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [TournamentApp] SET  MULTI_USER 
GO
ALTER DATABASE [TournamentApp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TournamentApp] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TournamentApp] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TournamentApp] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TournamentApp] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [TournamentApp] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [TournamentApp] SET QUERY_STORE = OFF
GO
USE [TournamentApp]
GO
/****** Object:  Schema [AthleticParks]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [AthleticParks]
GO
/****** Object:  Schema [Coaches]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Coaches]
GO
/****** Object:  Schema [Equipments]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Equipments]
GO
/****** Object:  Schema [Fields]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Fields]
GO
/****** Object:  Schema [Games]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Games]
GO
/****** Object:  Schema [GameSummaries]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [GameSummaries]
GO
/****** Object:  Schema [Participate_Ins]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Participate_Ins]
GO
/****** Object:  Schema [Players]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Players]
GO
/****** Object:  Schema [Referees]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Referees]
GO
/****** Object:  Schema [Teams]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Teams]
GO
/****** Object:  Schema [TournamentOrganizers]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [TournamentOrganizers]
GO
/****** Object:  Schema [Tournaments]    Script Date: 2021-12-18 10:31:29 PM ******/
CREATE SCHEMA [Tournaments]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AthleticParks]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AthleticParks](
	[ParkID] [int] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Address] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_AthleticPark] PRIMARY KEY CLUSTERED 
(
	[ParkID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Coaches]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Coaches](
	[SIN] [nvarchar](100) NOT NULL,
	[FName] [nvarchar](100) NOT NULL,
	[LName] [nvarchar](100) NOT NULL,
	[TName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Coaches] PRIMARY KEY CLUSTERED 
(
	[SIN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Equipments]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Equipments](
	[EquipID] [int] NOT NULL,
	[Sport] [nvarchar](100) NOT NULL,
	[ParkID] [int] NOT NULL,
	[GameID] [int] NOT NULL,
 CONSTRAINT [PK_Equipments] PRIMARY KEY CLUSTERED 
(
	[EquipID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Fields]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fields](
	[FieldNo] [int] NOT NULL,
	[GameID] [int] NOT NULL,
	[ParkID] [int] NOT NULL,
	[Sport] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Fields] PRIMARY KEY CLUSTERED 
(
	[FieldNo] ASC,
	[GameID] ASC,
	[ParkID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Games]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Games](
	[GameID] [int] NOT NULL,
	[Day] [nvarchar](100) NOT NULL,
	[Month] [nvarchar](100) NOT NULL,
	[Year] [nvarchar](100) NOT NULL,
	[Time] [nvarchar](100) NOT NULL,
	[TID] [int] NOT NULL,
	[HName] [nvarchar](100) NOT NULL,
	[AName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Games] PRIMARY KEY CLUSTERED 
(
	[GameID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GameSummaries]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GameSummaries](
	[Score] [nvarchar](100) NOT NULL,
	[GameID] [int] NOT NULL,
	[Winner] [nvarchar](100) NOT NULL,
	[Loser] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_GameSummaries] PRIMARY KEY CLUSTERED 
(
	[Score] ASC,
	[GameID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Participate_Ins]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Participate_Ins](
	[TName] [nvarchar](100) NOT NULL,
	[TID] [int] NOT NULL,
 CONSTRAINT [PK_Participate_Ins] PRIMARY KEY CLUSTERED 
(
	[TName] ASC,
	[TID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Players]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Players](
	[Username] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
	[FName] [nvarchar](100) NOT NULL,
	[LName] [nvarchar](100) NOT NULL,
	[Age] [int] NOT NULL,
	[Number] [int] NOT NULL,
	[Position] [nvarchar](100) NOT NULL,
	[TName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Players] PRIMARY KEY CLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Referees]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Referees](
	[SIN] [nvarchar](100) NOT NULL,
	[Sport] [nvarchar](100) NOT NULL,
	[FName] [nvarchar](100) NOT NULL,
	[LName] [nvarchar](100) NOT NULL,
	[GameID] [int] NOT NULL,
 CONSTRAINT [PK_Referees] PRIMARY KEY CLUSTERED 
(
	[SIN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Teams]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teams](
	[Name] [nvarchar](100) NOT NULL,
	[NoPlayers] [int] NOT NULL,
 CONSTRAINT [PK_Teams] PRIMARY KEY CLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TournamentOrganizers]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TournamentOrganizers](
	[Username] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
	[FName] [nvarchar](100) NOT NULL,
	[LName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_TournamentOrganizers] PRIMARY KEY CLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tournaments]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tournaments](
	[ID] [int] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Sport] [nvarchar](100) NOT NULL,
	[startDate] [nvarchar](100) NOT NULL,
	[endDate] [nvarchar](100) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[ParkID] [int] NOT NULL,
 CONSTRAINT [PK_Tournaments] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Coaches]  WITH CHECK ADD  CONSTRAINT [FK_Coaches_Teams] FOREIGN KEY([TName])
REFERENCES [dbo].[Teams] ([Name])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Coaches] CHECK CONSTRAINT [FK_Coaches_Teams]
GO
ALTER TABLE [dbo].[Equipments]  WITH CHECK ADD  CONSTRAINT [FK_Equipments_AthleticParks] FOREIGN KEY([ParkID])
REFERENCES [dbo].[AthleticParks] ([ParkID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Equipments] CHECK CONSTRAINT [FK_Equipments_AthleticParks]
GO
ALTER TABLE [dbo].[Equipments]  WITH CHECK ADD  CONSTRAINT [FK_Equipments_Games] FOREIGN KEY([GameID])
REFERENCES [dbo].[Games] ([GameID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Equipments] CHECK CONSTRAINT [FK_Equipments_Games]
GO
ALTER TABLE [dbo].[Fields]  WITH CHECK ADD  CONSTRAINT [FK_Fields_AthleticParks] FOREIGN KEY([ParkID])
REFERENCES [dbo].[AthleticParks] ([ParkID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Fields] CHECK CONSTRAINT [FK_Fields_AthleticParks]
GO
ALTER TABLE [dbo].[Fields]  WITH CHECK ADD  CONSTRAINT [FK_Fields_Games] FOREIGN KEY([GameID])
REFERENCES [dbo].[Games] ([GameID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Fields] CHECK CONSTRAINT [FK_Fields_Games]
GO
ALTER TABLE [dbo].[Games]  WITH CHECK ADD  CONSTRAINT [FK_Games_Games] FOREIGN KEY([GameID])
REFERENCES [dbo].[Games] ([GameID])
GO
ALTER TABLE [dbo].[Games] CHECK CONSTRAINT [FK_Games_Games]
GO
ALTER TABLE [dbo].[Games]  WITH CHECK ADD  CONSTRAINT [FK_Games_Teams] FOREIGN KEY([HName])
REFERENCES [dbo].[Teams] ([Name])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Games] CHECK CONSTRAINT [FK_Games_Teams]
GO
ALTER TABLE [dbo].[Games]  WITH CHECK ADD  CONSTRAINT [FK_Games_Teams1] FOREIGN KEY([AName])
REFERENCES [dbo].[Teams] ([Name])
GO
ALTER TABLE [dbo].[Games] CHECK CONSTRAINT [FK_Games_Teams1]
GO
ALTER TABLE [dbo].[Games]  WITH CHECK ADD  CONSTRAINT [FK_Games_Tournaments] FOREIGN KEY([TID])
REFERENCES [dbo].[Tournaments] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Games] CHECK CONSTRAINT [FK_Games_Tournaments]
GO
ALTER TABLE [dbo].[GameSummaries]  WITH CHECK ADD  CONSTRAINT [FK_GameSummaries_Games] FOREIGN KEY([GameID])
REFERENCES [dbo].[Games] ([GameID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[GameSummaries] CHECK CONSTRAINT [FK_GameSummaries_Games]
GO
ALTER TABLE [dbo].[Participate_Ins]  WITH CHECK ADD  CONSTRAINT [FK_Participate_Ins_Teams] FOREIGN KEY([TName])
REFERENCES [dbo].[Teams] ([Name])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Participate_Ins] CHECK CONSTRAINT [FK_Participate_Ins_Teams]
GO
ALTER TABLE [dbo].[Participate_Ins]  WITH CHECK ADD  CONSTRAINT [FK_Participate_Ins_Tournaments] FOREIGN KEY([TID])
REFERENCES [dbo].[Tournaments] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Participate_Ins] CHECK CONSTRAINT [FK_Participate_Ins_Tournaments]
GO
ALTER TABLE [dbo].[Players]  WITH CHECK ADD  CONSTRAINT [FK_Players_Teams] FOREIGN KEY([TName])
REFERENCES [dbo].[Teams] ([Name])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Players] CHECK CONSTRAINT [FK_Players_Teams]
GO
ALTER TABLE [dbo].[Referees]  WITH CHECK ADD  CONSTRAINT [FK_Referees_Games] FOREIGN KEY([GameID])
REFERENCES [dbo].[Games] ([GameID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Referees] CHECK CONSTRAINT [FK_Referees_Games]
GO
ALTER TABLE [dbo].[Tournaments]  WITH CHECK ADD  CONSTRAINT [FK_Tournaments_AthleticParks] FOREIGN KEY([ParkID])
REFERENCES [dbo].[AthleticParks] ([ParkID])
GO
ALTER TABLE [dbo].[Tournaments] CHECK CONSTRAINT [FK_Tournaments_AthleticParks]
GO
ALTER TABLE [dbo].[Tournaments]  WITH CHECK ADD  CONSTRAINT [FK_Tournaments_TournamentOrganizers] FOREIGN KEY([Username])
REFERENCES [dbo].[TournamentOrganizers] ([Username])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Tournaments] CHECK CONSTRAINT [FK_Tournaments_TournamentOrganizers]
GO
/****** Object:  StoredProcedure [AthleticParks].[deleteAthleticPark]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [AthleticParks].[deleteAthleticPark]
	@ParkID int
as
	delete from AthleticParks
	Where ParkID = @ParkID;
GO
/****** Object:  StoredProcedure [AthleticParks].[insertAthleticPark]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [AthleticParks].[insertAthleticPark]
	@ParkID int,
	@Name varchar(100),
	@Address varchar(100)
as
	insert into AthleticParks
	values (@ParkID, @Name, @Address);
GO
/****** Object:  StoredProcedure [AthleticParks].[updateAthleticPark]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [AthleticParks].[updateAthleticPark]
	@ParkID int,
	@Name varchar(100),
	@Address varchar(100)
as
	update AthleticParks
	set Name = @Name, Address = @Address
	Where ParkID = @ParkID;
GO
/****** Object:  StoredProcedure [Coaches].[deleteCoach]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Coaches].[deleteCoach]
	@SIN varchar(100)
as
	delete from Coaches
	where SIN = @SIN;
GO
/****** Object:  StoredProcedure [Coaches].[insertCoach]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Coaches].[insertCoach]
	@SIN varchar(100),
	@FName varchar(100),
	@LName varchar(100),
	@TName varchar(100)
as
	Insert into Coaches
	values (@SIN, @FName, @LName, @TName);
GO
/****** Object:  StoredProcedure [Coaches].[updateCoach]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [Coaches].[updateCoach]
	@SIN varchar(100),
	@FName varchar(100),
	@LName varchar(100),
	@TName varchar(100)
as
	update Coaches
	set FName = @FName, LName = @LName, TName = @TName
	where SIN = @SIN;
GO
/****** Object:  StoredProcedure [Equipments].[deleteEquipment]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Equipments].[deleteEquipment]
	@EquipID int
as
	delete Equipments
	where EquipID = @EquipID;
GO
/****** Object:  StoredProcedure [Equipments].[insertEquipment]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Equipments].[insertEquipment]
	@EquipID int,
	@Sport varchar(100),
	@ParkID int,
	@GameID int
as
	insert into Equipments
	values (@EquipID, @Sport, @ParkID, @GameID);
GO
/****** Object:  StoredProcedure [Equipments].[updateEquipment]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Equipments].[updateEquipment]
	@EquipID int,
	@Sport varchar(100),
	@ParkID int,
	@GameID int
as
	update Equipments
	set Sport = @Sport, ParkID = @ParkID, GameID = @GameID
	where EquipID = @EquipID;
GO
/****** Object:  StoredProcedure [Fields].[deleteField]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Fields].[deleteField]
	@FieldNo int,
	@GameID int,
	@ParkID int
as
	delete from Fields
	where FieldNo = @FieldNo AND GameID = @GameID AND ParkID = @ParkID;
GO
/****** Object:  StoredProcedure [Fields].[getFieldByTournament]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create procedure [Fields].[getFieldByTournament]
	@ID int
AS
	SET NOCOUNT ON;
	SELECT f.FieldNo, f.GameID, f.ParkID, f.Sport 
	FROM Fields as f, Tournaments as t, Games as g 
	WHERE t.ID = @ID AND t.ParkID = f.ParkID AND g.GameID = f.GameID AND g.TID = t.ID;
GO
/****** Object:  StoredProcedure [Fields].[insertField]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Fields].[insertField]
	@FieldNo int,
	@GameID int,
	@ParkID int, 
	@Sport varchar(100)
as
	insert into Fields
	values(@FieldNo, @GameID, @ParkID, @Sport);
GO
/****** Object:  StoredProcedure [Fields].[updateField]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Fields].[updateField]
	@FieldNo int,
	@GameID int,
	@ParkID int, 
	@Sport varchar(100)
as
	update Fields
	set Sport = @Sport
	where FieldNo = @FieldNo AND GameID = @GameID AND ParkID = @ParkID;
GO
/****** Object:  StoredProcedure [Games].[deleteGame]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Games].[deleteGame]
	@GameID int
	
as
	delete from Games
	where GameID = @GameID;
GO
/****** Object:  StoredProcedure [Games].[getGameByTournament]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [Games].[getGameByTournament]
    @ID int
AS
    SET NOCOUNT ON;
    SELECT g.GameID, g.Day, g.Month, g.Year, g.Time, g.TID, g.HName, g.AName
    FROM Games as g, Tournaments as t
    WHERE t.ID = @ID AND g.TID = t.ID;
GO
/****** Object:  StoredProcedure [Games].[insertGame]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Games].[insertGame]
	@GameID int,
	@Day varchar(100),
	@Month varchar(100),
	@Year varchar(100),
	@Time varchar(100),
	@TID int,
	@HName varchar(100),
	@AName varchar(100)
as
	insert into Games
	values (@GameID, @Day, @Month, @Year, @Time, @TID, @HName, @AName);
GO
/****** Object:  StoredProcedure [Games].[updateGame]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Games].[updateGame]
	@GameID int,
	@Day varchar(100),
	@Month varchar(100),
	@Year varchar(100),
	@Time varchar(100),
	@TID int,
	@HName varchar(100),
	@AName varchar(100)
as
	update Games
	set Day = @Day, Month = @Month, Year = @Year, Time = @Time, TID = @TID, HName = @HName, AName = @AName
	where GameID = @GameID;
GO
/****** Object:  StoredProcedure [GameSummaries].[deleteGameSummary]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [GameSummaries].[deleteGameSummary]
	@Score varchar(100),
	@GameID int
AS
	DELETE FROM GameSummaries
	WHERE Score = @Score AND GameID = @GameID;
GO
/****** Object:  StoredProcedure [GameSummaries].[getGameSummaryByTournament]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [GameSummaries].[getGameSummaryByTournament]
    @ID int
AS
    SET NOCOUNT ON;
    SELECT g.Score, g.GameID, g.Winner, g.Loser
    FROM GameSummaries as g, Games as ga, Tournaments as t
    WHERE ga.GameID = g.GameID AND ga.TID = @ID AND ga.TID = t.ID;
GO
/****** Object:  StoredProcedure [GameSummaries].[insertGameSummary]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [GameSummaries].[insertGameSummary]
	@Score varchar(100),
	@GameID int,
	@Winner varchar(100),
	@Loser varchar(100)
AS
	SET NOCOUNT ON;
	INSERT INTO GameSummaries VALUES (
		@Score, 
		@GameID,
		@Winner,
		@Loser
	);
GO
/****** Object:  StoredProcedure [GameSummaries].[updateGameSummary]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [GameSummaries].[updateGameSummary]
	@Score varchar(100),
	@GameID int,
	@Winner varchar(100),
	@Loser varchar(100)
AS
	SET NOCOUNT ON;
	UPDATE GameSummaries
	SET Winner = @Winner, Loser = @Loser
	WHERE Score = @Score AND GameID = @GameID;
GO
/****** Object:  StoredProcedure [Participate_Ins].[deleteParticipateIn]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Participate_Ins].[deleteParticipateIn]
	@TName varchar(100),
	@TID int
as
	delete Participate_Ins
	where TName = @TName AND TID = @TID;
GO
/****** Object:  StoredProcedure [Participate_Ins].[insertParticipateIn]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Participate_Ins].[insertParticipateIn]
	@TName varchar(100),
	@TID int
as
	insert into Participate_Ins
	values (@TName, @TID);
GO
/****** Object:  StoredProcedure [Players].[deletePlayer]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Players].[deletePlayer]
	@Username varchar(100)
AS
	DELETE FROM Players
	WHERE Username = @Username;
GO
/****** Object:  StoredProcedure [Players].[getPlayerByUsername]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [Players].[getPlayerByUsername]
    @Username nvarchar(50)
AS
    SET NOCOUNT ON;
    SELECT * FROM Players
    WHERE Username = @Username;
GO
/****** Object:  StoredProcedure [Players].[getPlayerOnTeam]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE  [Players].[getPlayerOnTeam]
	@TName nvarchar(50)
AS
	SET NOCOUNT ON;
	SELECT p.Username, p.Password, p.FName, p.LName, p.Age, p.Number, p.Position, p.TName 
	FROM Players as p, Teams as t 
	WHERE p.TName = t.Name AND t.Name = @TName;
GO
/****** Object:  StoredProcedure [Players].[insertPlayer]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Players].[insertPlayer]
	@Username varchar(100),
	@Password varchar(100),
	@FName varchar(100),
	@LName varchar(100),
	@Age int,
	@Number int,
	@Positon varchar(100),
	@TName varchar(100)
AS
	INSERT INTO Players
	VALUES (@Username, @Password, @FName, @LName, @Age, @Number, @Positon, @TName);
GO
/****** Object:  StoredProcedure [Players].[login]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [Players].[login]
    @Username nvarchar(50),
    @Password nvarchar(50)
AS
    SET NOCOUNT ON;
    SELECT * FROM Players
    WHERE Username = @Username AND Password = @Password;
GO
/****** Object:  StoredProcedure [Players].[updatePlayer]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Players].[updatePlayer]
	@Username varchar(100),
	@Password varchar(100),
	@FName varchar(100),
	@LName varchar(100),
	@Age int,
	@Number int,
	@Position varchar(100),
	@TName varchar(100)
AS
	UPDATE Players
	SET Password = @Password, FName = @FName, LName = @LName, Age = @Age,
		Number = @Number, Position = @Position, TName = @TName
	WHERE Username = @Username;
GO
/****** Object:  StoredProcedure [Referees].[deleteReferee]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [Referees].[deleteReferee]
	@SIN varchar(100)
as
	delete from Referees
	where SIN = @SIN;
GO
/****** Object:  StoredProcedure [Referees].[insertReferee]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Referees].[insertReferee]
	@SIN varchar(100),
	@Sport varchar(100),
	@FName varchar(100),
	@LName varchar(100),
	@GameID int
as
	insert into Referees
	values (@SIN, @Sport, @FName, @LName, @GameID);
GO
/****** Object:  StoredProcedure [Referees].[updateReferee]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Referees].[updateReferee]
	@SIN varchar(100),
	@Sport varchar(100),
	@FName varchar(100),
	@LName varchar(100),
	@GameID int
as
	update Referees
	set Sport = @Sport, FName = @FName, LName = @LName, GameID = @GameID
	where SIN = @SIN;
GO
/****** Object:  StoredProcedure [Teams].[deleteTeam]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Teams].[deleteTeam]
	@Name varchar(100)
as
	Delete from Teams
	where Name = @Name;
GO
/****** Object:  StoredProcedure [Teams].[getTeamByTournament]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [Teams].[getTeamByTournament]
    @ID int
AS
    SET NOCOUNT ON;
    SELECT t.Name, t.NoPlayers
    FROM Teams as t, Participate_Ins as p
    WHERE p.TID = @ID AND p.TName = t.Name;
GO
/****** Object:  StoredProcedure [Teams].[insertTeam]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [Teams].[insertTeam]
	@Name varchar(100),
	@NoPlayers int
as
	insert into Teams
	values (@Name, @NoPlayers);
GO
/****** Object:  StoredProcedure [Teams].[updateTeam]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [Teams].[updateTeam]
	@Name varchar(100),
	@NoPlayers int
as
	update Teams
	set NoPlayers = @NoPlayers
	where Name = @Name;
GO
/****** Object:  StoredProcedure [TournamentOrganizers].[insertTournamentOrganizer]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [TournamentOrganizers].[insertTournamentOrganizer]
	@Username varchar(100),
	@Password varchar(100),
	@FName varchar(100),
	@LName varchar(100)
as
	Insert into TournamentOrganizers
	values (@Username, @Password, @FName, @LName);
GO
/****** Object:  StoredProcedure [TournamentOrganizers].[login]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [TournamentOrganizers].[login]
    @Username nvarchar(50),
    @Password nvarchar(50)
AS
    SET NOCOUNT ON;
    SELECT * FROM TournamentOrganizers
    WHERE Username = @Username AND Password = @Password;
GO
/****** Object:  StoredProcedure [Tournaments].[deleteTournament]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Tournaments].[deleteTournament]
	@ID int
as
	Delete from Tournaments
	where ID = @ID;
GO
/****** Object:  StoredProcedure [Tournaments].[insertTournament]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Tournaments].[insertTournament]
	@ID int,
	@Name varchar(100),
	@Sport varchar(100),
	@startDate varchar(100),
	@endDate varchar(100),
	@Username varchar(100),
	@ParkID int
as
	Insert into Tournaments
	values(@ID, @Name, @Sport, @startDate, @endDate, @Username, @ParkID);
GO
/****** Object:  StoredProcedure [Tournaments].[updateTournament]    Script Date: 2021-12-18 10:31:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [Tournaments].[updateTournament]
	@ID int,
	@Name varchar(100),
	@Sport varchar(100),
	@startDate varchar(100),
	@endDate varchar(100),
	@Username varchar(100),
	@ParkID int
as
	Update Tournaments
	set Name = @Name, Sport = @Sport, startDate = @startDate, endDate = @endDate, Username = @Username, ParkID = @ParkID
	where ID = @ID;
GO
USE [master]
GO
ALTER DATABASE [TournamentApp] SET  READ_WRITE 
GO
