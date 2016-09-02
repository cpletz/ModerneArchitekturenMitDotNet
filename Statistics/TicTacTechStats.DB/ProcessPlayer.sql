CREATE PROCEDURE [dbo].[ProcessPlayer]
	@json nvarchar(max)
AS
	insert dbo.Player
	select * 
	  from openjson(@json) with (
		PlayerId nvarchar(50) '$.id',
		FirstName nvarchar(100) '$.firstName',
		LastName nvarchar(100) '$.lastName',
		EMail nvarchar(200) '$.email'
	  )
RETURN 0
