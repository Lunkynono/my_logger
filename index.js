const chalk = require('chalk')
const fechaHora = () => new Date().toLocaleString('es-ES')

const logger = {
  info: (mensaje) =>
    console.log(chalk.blue(`[${fechaHora()}] [INFO] ${mensaje}`)),
  warn: (mensaje) =>
    console.log(chalk.yellow(`[${fechaHora()}] [WARN] ${mensaje}`)),
  error: (mensaje) =>
    console.log(chalk.red(`[${fechaHora()}] [ERROR] ${mensaje}`)),
  debug: (mensaje) =>
    console.log(chalk.gray(`[${fechaHora()}] [DEBUG] ${mensaje}`)),
}

module.exports = logger
