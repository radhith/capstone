import { Controller,Body,Post,Req,Get } from '@nestjs/common';
import { IFlight } from './interface/flight.interface';
import { FlightbookingService } from './flightbooking.service';
import { IBooking } from './interface/booking.interface';
@Controller('flightbooking')
export class FlightbookingController {
    constructor(private flightbookingService:FlightbookingService){

    }
    @Post()
    async addFlight(@Body() flight:IFlight){
        console.log(JSON.stringify(flight))
        try{
            return this.flightbookingService.addFlight(flight)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Get()
    async searchFlight(@Body() search:IFlight){
        console.log(JSON.stringify(search))
        try{
            return this.flightbookingService.searchFlight(search)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Post('booking')
    async bookFlight(@Body() booking:IBooking){
        console.log(JSON.stringify(booking))
        try{
            return this.flightbookingService.bookFlight(booking)
        }catch(e){
            throw new Error('flight not saved')
        }
    }
}
