const Sequelize = require('sequelize');

function main() {
  const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
      native: true,
      ssl: true,
      dialect: 'postgres',
      logging: false,
      operatorsAliases: false,
    }
  );

  sequelize.query(`select * from person limit 10`)
    .then(function(data) {
      console.log('data', data);
    });
}

if (require.main === module) {
  main();
}
