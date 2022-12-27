import { IsNotEmpty,IsString,IsOptional,IsInt } from "class-validator";

export class FlightDto{
    id?:number;
    @IsNotEmpty()
    @IsString()
    flight_number:string;
    @IsString()
    @IsNotEmpty()
    from_place:string;
    @IsString()
    @IsNotEmpty()
    to_place:string;
    @IsString()  
    @IsNotEmpty()
    start_time:string;
    @IsNotEmpty()
    @IsString()
    end_time:string;
    @IsNotEmpty()
    @IsString()
    total_number_of_business_class_seats:string;
    @IsNotEmpty()
    @IsString()
    total_number_of_nonbusiness_class_seats:string;
    @IsNotEmpty()
    @IsString()
    ticket_cost:string;
    @IsNotEmpty()
    @IsString()
    total_number_of_seats:string;
    @IsNotEmpty()
    @IsString()
    meal:string;
    airline_id:any;

} 