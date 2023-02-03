import { IsNumber } from "class-validator";

export class CreateReservationDto {

    @IsNumber()
    numero: number;
}

export default CreateReservationDto;
