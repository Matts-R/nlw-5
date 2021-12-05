module.exports = 
{
	"type": "postgres",
	"database": process.env.DB_NAME,
	"host": process.env.DB_HOST,
	"port": process.env.DB_PORT,
	"username": process.env.DB_USER,
	"password": process.env.DB_PASSWORD,
  "migrations": ["./src/database/migrations/**.ts"],
  "entities": ["./src/database/entities/**.ts"],
	"logging": true,
	"cli": {
		"migrationsDir": "./src/database/migrations"
	}, 
}
