const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: '.',
    // cleanUrls: true, // Optional: useful for removing .html extensions
    // headers: [ // Optional: good for security headers
    //   {
    //     source: '**',
    //     headers: [
    //       {
    //         key: 'X-Content-Type-Options',
    //         value: 'nosniff'
    //       }
    //     ]
    //   }
    // ]
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
