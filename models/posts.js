const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user");

const sequelizeInstance = dbConnect.Sequelize;

class post extends Model {}

post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures title is required
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures description is required
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures image is required
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensures userId is required for the post
      references: {
        model: User,
        key: "id",
      },
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // Default value for likes is 0
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "post", // Model name in lowercase
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
  }
);

// Defining the relationship (Post belongs to User)
post.belongsTo(User);

module.exports = post;
