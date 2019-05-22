const app = require('./config/server')

app.listen(process.env.PORT || 3000, () => {
    if (process.env.NODE_ENV == 'test') {
        console.log('rodando test')
    } else {
        console.log('server started')
    }
})