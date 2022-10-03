module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env(
        'DATABASE_HOST',
        'dpg-ccsdhh6n6mptlbqqm37g-a.oregon-postgres.render.com'
      ),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_xcz7'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'ybYtLyoEqt3bfLX0K0nYG38M9Dg4J5n8'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
})
