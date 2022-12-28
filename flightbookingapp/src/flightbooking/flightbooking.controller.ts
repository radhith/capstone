import { Controller,Body,Post,Req,Get, Param, Put ,Response, ParseIntPipe} from '@nestjs/common';
import { IFlight } from './interface/flight.interface';
import { FlightbookingService } from './flightbooking.service';
import { IBooking } from './interface/booking.interface';
import { HttpStatus } from '@nestjs/common/enums';
import { FlightDto } from './dto/flight.dto';
import { SearchDto } from './dto/searchDto';
import { BookingDto } from './dto/booking.dto';
@Controller('flightbooking')
export class FlightbookingController {
    constructor(private flightbookingService:FlightbookingService){

    }
    @Post('flight')
    async addFlight(@Body() flight:FlightDto){
        console.log(JSON.stringify(flight))
        try{
            return this.flightbookingService.addFlight(flight)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Get('search')
    async searchFlight(@Body() search:SearchDto){
        console.log(JSON.stringify(search))
        try{
            return this.flightbookingService.searchFlight(search)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Post('booking')
    async bookFlight(@Body() booking:BookingDto){
        console.log(JSON.stringify(booking))
        try{
            return this.flightbookingService.bookFlight(booking)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Get('history/:emailId')
    async bookingHistory(@Param('emailId') emailId:string){
        console.log(emailId)
        
        try{
            return this.flightbookingService.bookingHistory(emailId)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Get('ticket/:pnr')
    async ticketDetails(@Param('pnr') pnr:number){
        console.log(pnr)
        
        try{
            return this.flightbookingService.ticketDetails(pnr)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    
    @Put('cancel/:pnr')
    async cancelTicket(@Param('pnr') pnr:number,@Response()res?:any){
        console.log(pnr)
        
        try{
           await this.flightbookingService.cancelTicket(pnr);
          res.status(HttpStatus.NO_CONTENT).send()
        }catch(e){
            throw new Error('flight not saved')
        }
    }


}
