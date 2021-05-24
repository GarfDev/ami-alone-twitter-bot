import { Sequelize } from "sequelize";

const createClient = () => {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
  });
  return () => sequelize;
};

export default createClient();
