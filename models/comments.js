const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init(
  {
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    createdAt: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", // lowercase plural format
    timestamps: false, // we're manually handling `createdAt`
    freezeTableName: true,
  }
);

// Establish relationships (assuming you have Post and User models already defined)
Comment.belongsTo(User, { foreignKey: "userId" }); // A Comment belongs to a User
Comment.belongsTo(Post, { foreignKey: "postId" }); // A Comment belongs to a Post

module.exports = Comment;
