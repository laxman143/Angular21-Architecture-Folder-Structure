module.exports = {
  default: {
    require: ['e2e/steps/**/*.ts','e2e/support/**/*.ts'],
    paths: ['e2e/features/**/*.feature'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    timeout: 60000
  }
};