import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IBooking } from "../interface/booking.interface";
import { IPassenger } from "../interface/passenger.interface";
import { FlightEntity } from "./flight.entity";
import { PassengerEntity } from "./passenger.entity";
@Entity('booking')
export class BookingEntity implements IBooking{
    @PrimaryGeneratedColumn()
    pnr?: number;
    @Column()
    flight_id: number;

    @Column()
    booked_by: string;

    @Column()
    emailId: string;
    
    @Column()
    number_of_seats: string;

   

    @Column()
    selected_meal: string;

    @Column({nullable:true})
    selected_seat_number: string;
    @Column({default:'Active'})
    status: string;
    @ManyToMany(type=>PassengerEntity, passenger => passenger.id,{
        cascade:true
    })
    @JoinTable()
    passengers:PassengerEntity[];

}