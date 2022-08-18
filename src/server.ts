import { app } from "./app";
import { AppDataSource } from "./data-source";
import { PORT, NODE_ENV } from "./global";

const bootstrap = async () => {
  const dataSource = await AppDataSource.initialize();

  const { type } = dataSource.options;

  if (NODE_ENV === "dev") {
    console.log(`\n🚀 Server: server is up on port: ${PORT}`);

    console.log(`\n🔗 Link: http://localhost:${PORT}/`);

    console.log(`\n💾 Database: connected with ${type}`);
  }
};

export const server = app.listen(PORT, bootstrap);
