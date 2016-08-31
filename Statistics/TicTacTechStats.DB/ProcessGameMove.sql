CREATE PROCEDURE [dbo].[ProcessGameMove]
	@json nvarchar(max)
AS
	insert dbo.Move (GameId, MoveBy, Position, Board)
	select * 
	  from openjson(@json) with (
		GameId uniqueidentifier '$.gameId',
		MoveBy nchar(1) '$.moveBy',
		Position int '$.position',
		Board nchar(9) '$.board'
	  )
RETURN 0
