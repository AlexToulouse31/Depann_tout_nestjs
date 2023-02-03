import { IsString, IsNotEmpty, IsEmail, IsOptional, IsPostalCode } from "class-validator"

export class CreateUserDto
{

    @IsString()
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsEmail()
    mail: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    adress_line1: string

    @IsString()
    @IsOptional()
    adress_line2: string

    @IsString()
    @IsOptional()
    adress_line3: string

    @IsString()
    @IsPostalCode('FR')
    zipCode: string

    @IsString()
    @IsNotEmpty()
    city: string
}

export default CreateUserDto
