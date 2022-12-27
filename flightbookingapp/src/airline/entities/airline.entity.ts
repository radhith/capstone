import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IAirline } from "../interface/airline.interface";
import { FlightEntity } from "../../flightbooking/entities/flight.entity";
@Entity('airline')
export class AirlineEntity implements IAirline {
    @PrimaryGeneratedColumn()
    id:number
    @Column({unique:true})
    name: string;
    @Column({default:"no"})
    blocked?: string;

    @OneToMany(type=>FlightEntity,flight=>flight.airline_id)
    flights:FlightEntity[]
}


