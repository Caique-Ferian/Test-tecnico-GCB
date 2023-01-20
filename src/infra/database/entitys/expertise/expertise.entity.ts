import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

@Table({ timestamps: false })
export class Expertise extends Model<Expertise> {
  @AllowNull(false)
  @Column(DataType.STRING)
  expertise: string;
}
