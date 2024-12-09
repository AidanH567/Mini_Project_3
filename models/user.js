const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

// Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures first name is required
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures last name is required
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures email is required
      unique: true, // Enforces unique constraint
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures password is required
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", // Use lowercase plural format
    timestamps: true, // Automatically adds createdAt and updatedAt columns
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
  }
);

module.exports = User;
