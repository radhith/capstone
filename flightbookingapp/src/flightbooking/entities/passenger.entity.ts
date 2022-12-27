import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BookingEntity } from "./booking.entity";
import{IBooking}from"../interface/booking.interface";
import { IPassenger } from "../interface/passenger.interface";
@Entity('passenger')
export class PassengerEntity implements IPassenger{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string;

    @Column()
    gender:string;

    @Column()
    age:number;

   

    @ManyToMany(type=>BookingEntity,booking =>booking.passengers)
    bookings:BookingEntity[]

    
}