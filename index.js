const logger = {
  info: (mensaje) => console.log(`[INFO] ${mensaje}`),
  warn: (mensaje) => console.log(`[WARN] ${mensaje}`),
  error: (mensaje) => console.log(`[ERROR] ${mensaje}`),
  debug: (mensaje) => console.log(`[DEBUG] ${mensaje}`),
}

module.exports = logger
