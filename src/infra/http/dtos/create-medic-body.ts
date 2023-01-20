import {
  IsNotEmpty,
  Length,
  IsNumberString,
  ArrayMinSize,
} from 'class-validator';

export class CreateMedicBody {
  @IsNotEmpty()
  @Length(5, 120)
  name: string;
  @IsNotEmpty()
  @Length(7, 7)
  @IsNumberString()
  crm: number;
  @IsNotEmpty()
  @IsNumberString()
  cep: number;
  @IsNotEmpty()
  @IsNumberString()
  landline: number;
  @IsNotEmpty()
  @IsNumberString()
  cellphone: number;
  @IsNotEmpty()
  @ArrayMinSize(2)
  expertise: string[];
}
