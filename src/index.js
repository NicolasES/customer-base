const app = require('./config/server')

app.listen(process.env.PORT || 3000, () => {
    if (process.env.NODE_ENV == 'test') {
        console.log('rodando test')
    }
    console.log('server started')
    // console.log(process.env)
    // node -r dotenv/config src dotenv_config_path=.env.test
})