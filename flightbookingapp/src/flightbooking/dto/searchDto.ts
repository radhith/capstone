
import {IsString,IsNotEmpty}from 'class-validator'
export class SearchDto{
    @IsNotEmpty()
    @IsString()
    date:string;
    @IsNotEmpty()
    @IsString()
    from_place:string
    @IsNotEmpty()
    @IsString()
    to_place:string
    @IsNotEmpty()
    @IsString()
    round_trip:string
}