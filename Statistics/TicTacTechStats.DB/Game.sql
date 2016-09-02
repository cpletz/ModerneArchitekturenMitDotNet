CREATE TABLE [dbo].[Game]
(
	[GameId] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [StartTime] nvarchar(50) NOT NULL, 
    [EndTime] nvarchar(50) NULL, 
    [PlayerX] NVARCHAR(50) NOT NULL, 
    [PlayerO] NVARCHAR(50) NOT NULL, 
    [Winner] NCHAR(1) NULL, 
    [FinalBoard] NCHAR(9) NULL 
)
