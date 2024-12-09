const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE, // This is the correct datatype for createdAt
      allowNull: false,
      defaultValue: DataTypes.NOW, // This is typically how you would handle automatic timestamps
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments",
    timestamps: false, // Optionally false if you are managing `createdAt` manually
    freezeTableName: true,
  }
);

module.exports = Comment;
