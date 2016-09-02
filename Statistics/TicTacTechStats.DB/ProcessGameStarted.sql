CREATE PROCEDURE [dbo].[ProcessGameStarted]
	@json nvarchar(max)
AS
	insert dbo.Game (GameId, StartTime, PlayerX, PlayerO)
	select * 
	  from openjson(@json) with (
		GameId uniqueidentifier '$.gameId',
		StartTime nvarchar(50) '$.startTime',
		PlayerX nvarchar(50) '$.playerX',
		PlayerO nvarchar(50) '$.playerO'
	  )
RETURN 0
