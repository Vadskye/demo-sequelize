const Sequelize = require('sequelize');

function main() {
  const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {dialect: 'postgres'}
  );

  return sequelize.query(`select * from person limit 10`);
}

if (require.main === module) {
  main();
}
