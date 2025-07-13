const http = require('http');
const port = process.env.PORT || 9000;
http.createServer((req, res) => {
  res.end('Medusa backend is running 🚀');
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
