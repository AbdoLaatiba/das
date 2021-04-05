"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      Schedule.hasMany(models.Slot, {
        onDelete: "cascade",
      });
      Schedule.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Schedule.init(
    {
      date: {
        type: DataTypes.DATE,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "schedule",
    }
  );
  return Schedule;
};
