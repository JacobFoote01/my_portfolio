import { DataTypes, Model } from "sequelize";
import util from 'util'
import connectToDB from "./db.js";

export const db = await connectToDB('postgresql:///my_portfolio')

export class Project extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

Project.init(
  {
    projectId: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      primaryKey: true,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    projectDesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectGit: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    modelName: 'project',
    sequelize: db,
  }
  )

export class Skill extends Model {
    [util.inspect.custom]() {
      return this.toJSON()
    }
  }
  
  Skill.init(
    {
      skillId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      skillName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      skillLogo: {
        type: DataTypes.STRING,
      }
    },
    {
      modelName: 'skill',
      sequelize: db,
    }
    )

  Project.hasMany(Skill, { foreignKey: 'projectId' })
  Skill.belongsTo(Project, { foreignKey: 'projectId' })