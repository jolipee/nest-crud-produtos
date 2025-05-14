import { IsDateString, IsEmail, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateProdutoDto {

    @IsString({ message: 'Necessário que seja String' })
 desc: string;
 
@IsNumber()

 @Min(0)
 @Max(10)
 preco: number;

 @IsEmail({}, { message: 'E-mail inválido' })
 emailEmpresa: string;

 @IsDateString({},{ message: 'Data inválida' })
 dataValidade: Date;
}
