import { createServer, IncomingMessage, ServerResponse } from "node:http";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log("🚀 ~ handler ~ req:", req.url);
  
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello World!" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const port = 3000;
console.log(`Server is running at http://localhost:${port}`);
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

