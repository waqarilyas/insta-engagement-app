const https = require("https");
const fs = require("fs");
const path = require("path");
const next = require("next");

const app = next({ dev: true }); // Adjust `dev` as needed for your environment
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "localhost.key")),
  cert: fs.readFileSync(path.join(__dirname, "localhost.crt")),
};

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(3000, () => {
      console.log("> Ready on https://localhost:3000");
    });
});
