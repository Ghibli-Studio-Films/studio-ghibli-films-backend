import { app } from "./app";
import { PORT } from "./global";
import "dotenv/config";

const bootstrap = async () => {
  console.log(`\n🚀 Server is up on port: ${PORT}`);

  if (process.env.NODE_ENV === "dev") {
    console.log(`\n🔗 http://localhost:${PORT}/`);
  }
};

export const server = app.listen(PORT, bootstrap);
