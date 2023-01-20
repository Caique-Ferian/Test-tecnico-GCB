import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  IsUUID,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { MedicWork } from '../medicWork/medicWork.entity';

@Table({ timestamps: false })
export class MedicInfos extends Model<MedicInfos> {
  @AllowNull(false)
  @IsUUID('all')
  @Column({ primaryKey: true, type: DataType.STRING })
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  crm: number;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  cellphone: number;

  @ForeignKey(() => MedicWork)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'work_info',
  })
  workInfo: number;
  @BelongsTo(() => MedicWork)
  work: MedicWork;

  @AllowNull(false)
  @Column(DataType.STRING)
  expertise: string;
  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  active: boolean;
}
