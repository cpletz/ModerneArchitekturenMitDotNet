CREATE PROCEDURE [dbo].[RetrieveHighscore]
AS
	SELECT top 50 a.Player as playerId, FirstName + ' ' + LastName as name, points
	  FROM (
		SELECT Player, sum(Points) as Points
		  FROM (
			SELECT PlayerX as Player,
				   3 as Points
			  FROM dbo.Game 
			 WHERE Winner = 'X'
			UNION ALL	
			SELECT PlayerO as Player,
				   3 as Points
			  FROM dbo.Game 
			 WHERE Winner = 'O'
			UNION ALL	
			SELECT PlayerX as Player,
				   1 as Points
			  FROM dbo.Game 
			 WHERE Winner is null
			UNION ALL	
		   SELECT PlayerO as Player,
				  1 as Points
			  FROM dbo.Game 
			 WHERE Winner is null) Points
		GROUP BY Player) a
		LEFT OUTER JOIN 
		dbo.Player p on p.PlayerId = a.Player
		ORDER BY Points desc
		FOR JSON AUTO

RETURN 0
