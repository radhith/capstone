import { PassengerEntity } from "../entities/passenger.entity"
import { IPassenger } from "./passenger.interface"

export interface IBooking {
    pnr?:number,
    flight_id:number,
    booked_by:string,
    emailId:string,
    number_of_seats:string,
    passengers:any,
    selected_meal:string,
    selected_seat_number:string
    status?:string

}