const app = require("express")();
const cors = require("cors");
const proxy = require("express-http-proxy");

// Destructure env variables with sensible defaults
const { PORT = 8000, CORS_HOSTS = "http://localhost:3000", API_KEY } = process.env;

// Only allow Cross Origin Requests from select hosts
const hosts = CORS_HOSTS.split(", ");
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (hosts.indexOf(origin) === -1) {
      var msg = "The CORS policy for this site does not " + "allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
};
app.use(cors(corsOptions));

// Proxy requests to github api
app.use(
  "/",
  proxy("http://data.fixer.io/", {
    proxyReqPathResolver: function (req) {
      return (
        "/api" +
        req.path +
        `?access_key=${API_KEY}` +
        Object.entries(req.query)
          .map(([key, value]) => `&${key}=${value}`)
          .join("")
      );
    },
    https: false,
  })
);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
