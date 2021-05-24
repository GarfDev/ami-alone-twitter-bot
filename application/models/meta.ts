import _ from "lodash";
import Sequelize, { Model } from "sequelize";
import { getSequelize } from "utils/sequelize";

const sequelize = getSequelize();

interface IMeta {
  count: number;
}

export interface MetaModel extends Model<MetaModel, IMeta> {
  id: number;
  count: number;
}

export const Meta = sequelize.define<MetaModel, any>("meta", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  count: Sequelize.INTEGER,
});

/* Utils */
export const getCount = async () => {
  const [record] = await Meta.findOrCreate({
    where: { id: 1 },
    defaults: { count: 1 },
  });
  const count = _.clone(record.count);
  await record.update({
    count: (record.count += 1),
  });
  return count;
};
