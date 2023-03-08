const Sequelize = require('sequelize');

const sequelize = new Sequelize('alunos-chatgpt', 'aluno', 'aluno', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
