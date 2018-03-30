'use strict';

const fs = require('fs')
fs.stat('2.jpg', (err, stat) => {
    console.log('NODE stat ---------------------->')
    if (err) {
        console.log(err)
    } else {
        console.log('文件：' + stat.isFile())
        if (stat.isFile()) {
            console.log('大小：' + stat.size)
            console.log('创建时间：' + stat.birthtime)
            console.log('修改时间：' + stat.mtime)
        }
    }
    console.log('NODE stat <----------------------')
})

const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>NODE https</h1>')
})
server.listen(port, hostname, () => {
    console.log('server 运行在 https://${hostname}:${port}/')
})
/**
 * ...
 */
