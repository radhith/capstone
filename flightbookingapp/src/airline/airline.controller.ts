import { Body, Controller, Post,Put } from '@nestjs/common';
import { IAirline } from './interface/airline.interface';
import { AirlineService } from './airline.service';
@Controller('airline')
export class AirlineController {
    constructor(private airlineService:AirlineService){}
    @Post()
   async addAirline(@Body() airline:IAirline){
        try{
            
           let savedAirline=this.airlineService.addAirline(airline)
            return savedAirline;
        }catch(e){
            throw new Error('Airline not saved')
        }
    }
    @Put()
    async updateAirline(@Body() airline:IAirline){
         try{
             
            let updateAirline=this.airlineService.updateAirline(airline)
             return updateAirline;
         }catch(e){
             throw new Error('Airline not updated')
         }
     }


}
