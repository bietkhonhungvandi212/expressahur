import { Server } from "node:http";

const handler = (req: Request): Response => {
  console.log("🚀 ~ handler ~ req:", req)
  if (req.url.endsWith("/")) {
    return new Response(JSON.stringify({ message: "Hello World!" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  
  return new Response(JSON.stringify({ error: "Not Found" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
};

const port = 3000;
console.log(`Server is running at http://localhost:${port}`);

const server = new Server(handler);
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
