import { DataTypes, Model } from "sequelize";
import util from 'util'
import connectToDB from "./db.js";

export const db = await connectToDB('postgresql:///my_portfolio')

export class TableName extends Model {
    [util.inspect.custom]() {
      return this.toJSON()
    }
  }
  