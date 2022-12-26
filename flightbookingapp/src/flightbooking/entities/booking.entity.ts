import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IBooking } from "../interface/booking.interface";
import { IPassenger } from "../interface/passenger.interface";
import { PassengerEntity } from "./passenger.entity";
@Entity('booking')
export class BookingEntity implements IBooking{
    @PrimaryGeneratedColumn("uuid")
    pnr?: string;
    @Column()
    flight_id: string;

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


    @Column("simple-json")
    @ManyToOne(type=>PassengerEntity, passenger => passenger.bookings,{
        nullable: true,
        cascade: true,
      })
    passengers:PassengerEntity;

}