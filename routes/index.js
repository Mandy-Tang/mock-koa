let Router = require('koa-router')
let router = new Router()

router.get('/hello', require('./hello'))
router.get('/json', require('./json'))

module.exports = router
