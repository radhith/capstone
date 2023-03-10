import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AirlineEntity } from '../airline/entities/airline.entity';
import { Repository } from 'typeorm';
import { BookingDto } from './dto/booking.dto';
import { SearchDto } from './dto/searchDto';
import { BookingEntity } from './entities/booking.entity';
import { FlightEntity } from './entities/flight.entity';
import { IBooking } from './interface/booking.interface';
import { IFlight } from './interface/flight.interface';

@Injectable()
export class FlightbookingService {
    constructor(
        @InjectRepository(FlightEntity)
        private flightRepository:Repository<FlightEntity>,
        @InjectRepository(BookingEntity)
        private bookingRepository:Repository<BookingEntity>
        ){

    }

    async addFlight(flight:IFlight):Promise<FlightEntity>{
        return await this.flightRepository.save(flight)
    }

    async searchFlight(search:SearchDto):Promise<FlightEntity[]>{

        return await
         this.flightRepository.createQueryBuilder("flight").leftJoinAndSelect(AirlineEntity,'airline','flight.airlineIdId=airline.id')
        .where('flight.from_place=:from_place',{from_place:search.from_place})
        .andWhere('flight.to_place=:to_place',{to_place:search.to_place})
        .andWhere('airline.blocked=:blocked',{blocked:'no'}).getMany()
        // return await this.flightRepository.find(
        //     {where:{
        //         from_place:search.from_place,to_place:search.to_place
        //     }  
        //   })
        }

        async bookFlight(booking:any):Promise<BookingEntity>{
            return await this.bookingRepository.save(booking)
        }

        
    
            async bookingHistory(emailId:string):Promise<BookingEntity[]>{
                return await this.bookingRepository.find(
                    {where:{emailId:emailId},
                    relations:{
                        passengers:true
                    }
                })
            }
            async ticketDetails(pnr:number):Promise<BookingEntity[]>{
                return await this.bookingRepository.find(
                    {where:{pnr:pnr},
                    relations:{
                        passengers:true
                    }
                })
            }
            async cancelTicket(pnr:number):Promise<any>{
                return await this.bookingRepository.update(pnr,{status:'Inactive'})
            }
}
