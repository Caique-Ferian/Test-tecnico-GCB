import { MedicInfos } from '../medicInfos/medicInfos.entity';
import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  AutoIncrement,
  HasOne,
} from 'sequelize-typescript';

@Table({ timestamps: false })
export class MedicWork extends Model<MedicWork> {
  @AllowNull(false)
  @AutoIncrement
  @Column({ primaryKey: true, type: DataType.INTEGER })
  id: number;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  landline: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  address: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  district: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  city: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  uf: string;

  @HasOne(() => MedicInfos)
  medic: MedicInfos;
}
