const Sequelize = require('sequelize');

function main() {
  const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {dialect: 'postgres', operatorsAliases: false}
  );

  return sequelize.query(`select 1`);
}

if (require.main === module) {
  main();
}
