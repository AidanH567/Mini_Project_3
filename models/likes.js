const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

// Import models after Sequelize instance is initialized
const User = require("./user");
const Post = require("./posts");

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

// Establish relationships after model initialization
Like.belongsTo(User, { foreignKey: "userId" }); // Like belongs to User
Like.belongsTo(Post, { foreignKey: "postId" }); // Like belongs to Post

module.exports = Like;
