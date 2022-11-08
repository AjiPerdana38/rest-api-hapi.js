const Hapi = require('@hapi/hapi')
const routes = require('./routes')
const PORT = 5000

const init = async () => {
  const server = Hapi.Server({
    host: 'localhost',
    port: PORT,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()
  console.log(`Server Berjalan pada ${server.info.uri}`)
}

init()
