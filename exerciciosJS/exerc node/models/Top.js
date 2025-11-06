import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Top = connection.define("topLaner", {
  campeao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  classe: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  motivo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Top.sync({ force: false });

export default Top;
