const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

// Sequelize will create this table if it doesn't exist on startup
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
      allowNull: false,
      required: true,
    },
    userId: {
      type: DataTypes.INTEGER,
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
    modelName: "likes", // use lowercase plural format
    timestamps: false, // we're manually handling `createdAt`
    freezeTableName: true,
  }
);

// Establish relationships (assuming you have Post and User models already defined)
Like.belongsTo(User, { foreignKey: "userId" }); // A Like belongs to a User
Like.belongsTo(Post, { foreignKey: "postId" }); // A Like belongs to a Post

module.exports = Like;
