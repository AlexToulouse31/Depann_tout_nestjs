import { IsBooleanString, IsDateString, IsNotEmpty } from "class-validator";

export class CreateServiceDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    city: string;

    @IsDateString()
    start_time: Date;

    @IsDateString()
    end_time: Date;

    @IsBooleanString()
    reservation: boolean;
}

export default CreateServiceDto;