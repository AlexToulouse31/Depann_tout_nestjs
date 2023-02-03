import { IsAlpha, IsBooleanString, IsDateString, IsPositive } from "class-validator";

export class CreateServiceDto {
    @IsAlpha()
    name: string;

    @IsPositive()
    price: string;

    @IsAlpha()
    city: string;

    @IsDateString()
    start_time: Date;

    @IsDateString()
    end_time: Date;

    @IsBooleanString()
    reservation: boolean;

}

export default CreateServiceDto;