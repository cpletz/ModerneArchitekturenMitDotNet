namespace PersistenceService.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.GameMoves",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.GameResults",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        GameStart = c.DateTime(nullable: false),
                        GameEnd = c.DateTime(nullable: false),
                        P1Name = c.String(),
                        P2Name = c.String(),
                        GameOutcome = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.GameResults");
            DropTable("dbo.GameMoves");
        }
    }
}
