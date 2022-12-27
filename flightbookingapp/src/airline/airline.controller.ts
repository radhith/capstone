import { Body, Controller, Post,Put, UseFilters ,Param} from '@nestjs/common';
import { IAirline } from './interface/airline.interface';
import { AirlineService } from './airline.service';
import { AirlineDto } from './dto/airline.dto';
import { HttpExceptionFilter } from '../common/http-exception/http-exception.filter';
@Controller('airline')
export class AirlineController {
    constructor(private airlineService:AirlineService){}
    @Post('add')
   async addAirline(@Body() airline:AirlineDto){
        try{
            
           let savedAirline=this.airlineService.addAirline(airline)
            return savedAirline;
        }catch(e){
            
        }
    }
    @Put('update/:id')
    async updateAirline(@Body() airline:AirlineDto,@Param('id')id:number){
         try{
             
            let updateAirline=this.airlineService.updateAirline(airline,id)
             return updateAirline;
         }catch(e){
             throw new Error('Airline not updated')
         }
     }


}
