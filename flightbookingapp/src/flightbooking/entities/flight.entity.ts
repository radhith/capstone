import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { AirlineEntity } from "../../airline/entities/airline.entity";
import { IFlight } from "../interface/flight.interface";
import { BookingEntity } from "./booking.entity";
@Entity('flight')
export class FlightEntity implements IFlight{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    flight_number:string

    @Column()
    from_place:string

    @Column()
    to_place:string

    @Column()
    start_time:string

    @Column()
    end_time:string

    @Column()
    total_number_of_business_class_seats:string


    @Column()
    total_number_of_nonbusiness_class_seats:string

    @Column()
    ticket_cost:string
    
    @Column()
    total_number_of_seats:string

    @Column()
    meal:string
   
    @ManyToOne(type=>AirlineEntity,airline=>airline.id,{
        nullable: true,
        cascade: true,
    })
    airline_id:AirlineEntity

}