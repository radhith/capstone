import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AirlineEntity } from './entities/airline.entity';
import { IAirline } from './interface/airline.interface';

@Injectable()
export class AirlineService {
    constructor(@InjectRepository(AirlineEntity) private airlineRepository:Repository<AirlineEntity>){

    }
    async addAirline(airline:IAirline):Promise<AirlineEntity>{
        return await this.airlineRepository.save(airline)
    }

    async updateAirline(airline:IAirline,id):Promise<any>{
        return  this.airlineRepository.update(id,{name:airline.name,blocked:airline.blocked})
    }
}
