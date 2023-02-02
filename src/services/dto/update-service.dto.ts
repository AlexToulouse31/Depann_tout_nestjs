import { PartialType } from "@nestjs/mapped-types";
import { CreateServiceDto } from "./create-service.dto";

export class UpdateService extends PartialType(CreateServiceDto){}