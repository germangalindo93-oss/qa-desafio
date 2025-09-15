module.exports = {
    testDir: './tests',
    timeout: 60000,
    retries: 0,
    use: {
      headless: true,
      video: 'on',
      screenshot: 'only-on-failure',
      trace: 'retain-on-failure'
    },
    reporter: [['html', { outputFolder: 'report' }]]
  };
  