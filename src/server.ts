import { app } from "./app";
import { PORT, NODE_ENV } from "./global";
import "dotenv/config";

const bootstrap = async () => {
  console.log(`\n🚀 Server is up on port: ${PORT}`);

  if (NODE_ENV === "dev") {
    console.log(`\n🔗 http://localhost:${PORT}/`);
  }
};

export const server = app.listen(PORT, bootstrap);
