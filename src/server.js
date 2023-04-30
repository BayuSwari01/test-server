const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route([
    {
      method: "GET",
      path: "/home",
      handler: (request, h) => {
        const response = h.response({
          status: "success",
          data: "Hallo",
        });
        response.code(200);
        return response;
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
