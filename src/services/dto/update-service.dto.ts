import { PartialType } from '@nestjs/mapped-types';
import { IsAlpha, IsBooleanString, IsDateString, IsPositive } from 'class-validator';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {

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

export default UpdateServiceDto;

