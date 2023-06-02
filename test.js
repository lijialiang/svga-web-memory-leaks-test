function url() {
  return 'http://127.0.0.1:8080/'
}

async function action(page) {
  await new Promise(resolve => setTimeout(resolve, 10000))
}

module.exports = { action, url }
