import { IsNotEmpty ,IsOptional} from "class-validator";

export class AirlineDto{
    @IsNotEmpty()
    name:string
    @IsOptional()
    @IsNotEmpty()
    blocked:string
}