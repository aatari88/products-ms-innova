import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public code: string;

  @IsString()
  public name: string;

  @IsString()
  public name_print: string;

  @IsString()
  public description: string;

  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 4,
  })
  @Min(0)
  @Type(() => Number)
  public price: number;

  @IsString()
  public type_detraction: string;

  @IsNumber()
  @Type(() => Number)
  public percentage_detraction: number;

  @IsString()
  public status: string;

  @IsNumber()
  @Type(() => Number)
  public stock: number;

  @IsNumber()
  @Type(() => Number)
  public category_id: number;

  @IsNumber()
  @Type(() => Number)
  public unit_id: number;

  @IsString()
  public image: string;

  @IsString()
  public afectation_igv: string;

  @IsNumber()
  @Type(() => Number)
  public user_id: number;
}
