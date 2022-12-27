import {IsNotEmpty,IsOptional,IsInt,IsString}from 'class-validator'
export class BookingDto{
    @IsNotEmpty()
    @IsInt()
    flight_id: number;
    @IsNotEmpty()
    @IsString()
    booked_by:string
    @IsNotEmpty()
    @IsString()
    emailId:string;
    @IsNotEmpty()
    @IsString()
    number_of_seats:number;
    passengers:any
    @IsNotEmpty()
    @IsString()
    selected_meal:string
    selected_seat_number:string
}
