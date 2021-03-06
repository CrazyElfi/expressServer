const { DataTypes } = require('sequelize')
module.exports = function (sequelize) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
        isInt: true,
        msg: 'Must be an integer number',
      },
    },
    name: DataTypes.STRING,
    sellingPrice: DataTypes.INTEGER,
    costPrice: DataTypes.INTEGER,
    discountRate: DataTypes.INTEGER,
    mURL: DataTypes.STRING,
    description: DataTypes.TEXT,
    features: DataTypes.JSONB,
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      nullable: false,
      defaultValue: 0,
    },
    craftable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    visitCounter: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    tableName: 'products',
    // underscored: true, // this will make mURL into m_u_r_l

  })

  return Product
}
