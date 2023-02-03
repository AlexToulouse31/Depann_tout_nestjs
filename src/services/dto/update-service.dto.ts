import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {

    @IsOptional()
    name: string;

    @IsOptional()
    price: string;

    @IsOptional()
    city: string;

    @IsOptional()
    start_time: Date;

    @IsOptional()
    end_time: Date;

    @IsOptional()
    reservation: boolean;
}

export default UpdateServiceDto;

