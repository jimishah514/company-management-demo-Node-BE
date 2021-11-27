'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.employees.belongsTo(models.offices, { foreignKey: 'officeId' })
      models.employees.hasMany(models.tags, { foreignKey: 'employeeId'})
    }
  };
  employees.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    officeId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'employees',
  });
  return employees;
};