'use strict';
import {
  Model
} from 'sequelize';

type ProjectAttributes = {
  id: number;
  title: string;
  status: string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class Project extends Model<ProjectAttributes> 
  implements ProjectAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    title!: string;
    status!: string;

    static associate(models:any) {
      // define association here
      Project.belongsToMany(models.User, {
        through: "ProjectAssignments"
      })
    }
  }
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};