import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {

    id: number;
    name: string;
    price: string;
    city: string;
    //start_time: date;
    //end_time: date;
    reservation: boolean;

}

export default UpdateServiceDto;

