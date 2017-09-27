let Router = require('koa-router')
let router = new Router()

router.get('/hello', async (ctx) => {
  ctx.body = 'hello World'
})

router.get('/users', require('./user_retrieve'))
router.get('/user/:id', require('./user_detail'))
router.post('/user', require('./user_create'))
router.put('/user/:id', require('./user_update'))
router.delete('/user/:id', require('./user_delete'))

module.exports = router
