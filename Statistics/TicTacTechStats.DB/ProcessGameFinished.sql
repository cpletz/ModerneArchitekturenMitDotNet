CREATE PROCEDURE [dbo].[ProcessGameFinished]
	@json nvarchar(max)
AS
	update g 
	   set EndTime = d.EndTime,
		   Winner = case when d.Result like '%X%' then 'X' when d.Result like '%O%' then 'O' else null end,
		   FinalBoard = d.Board
	  from dbo.Game g 
	       join
           openjson(@json) with (
				GameId uniqueidentifier '$.gameId',
				EndTime datetime '$.endTime',
				Result nvarchar(50) '$.result',
				Board nchar(9) '$.board') d
		   on g.GameId = d.GameId
RETURN 0
