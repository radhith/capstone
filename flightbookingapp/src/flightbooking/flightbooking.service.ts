import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    async searchFlight(search:IFlight):Promise<FlightEntity[]>{
        return await this.flightRepository.find(
            {where:{
                from_place:search.from_place,to_place:search.to_place
            }  
          })
        }

        async bookFlight(booking:IBooking):Promise<BookingEntity>{
            return await this.bookingRepository.save(booking)
        }
}
