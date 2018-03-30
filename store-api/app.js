'use strict'

const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const convert = require('koa-convert')
const views = require('koa-views')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const app = new Koa()

const router = new Router()
router.get('/index', async (ctx, next) => {
    await ctx.render('index.html')
})
router.get('/about', async (ctx, next) => {
    await ctx.render('about.html')
})

app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.use(bodyParser())
app.use(convert(koaStatic(path.join(__dirname, '../static'))))
app.use(views(path.join(__dirname, './views')))

app.use(router.routes(), router.allowedMethods())

http.createServer(app.callback()).listen(port, hostname, () => {
    console.log(`server 运行在 https://${hostname}:${port}/`)
})
