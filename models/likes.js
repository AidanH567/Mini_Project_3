const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

Like.init(
  {
    likeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Makes postId required
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Makes userId required
    },
    // liked: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false, // Makes userId required
    // },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "likes", // Table name in lowercase plural format
    timestamps: false, // We are manually handling `createdAt`
    freezeTableName: true, // Prevents Sequelize from pluralizing table name
  }
);

module.exports = Like;
