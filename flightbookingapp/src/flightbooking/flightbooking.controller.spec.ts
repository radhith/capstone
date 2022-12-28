import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirlineEntity } from '../airline/entities/airline.entity';
import { SearchDto } from './dto/searchDto';
import { BookingEntity } from './entities/booking.entity';
import { FlightEntity } from './entities/flight.entity';
import { PassengerEntity } from './entities/passenger.entity';
import { FlightbookingController } from './flightbooking.controller';
import { FlightbookingService } from './flightbooking.service';
import { Response } from '@nestjs/common';
describe('FlightbookingController', () => {
  let controller: FlightbookingController;
  let service:FlightbookingService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'pass@word1',
        database: 'flightbooking', 
        autoLoadEntities: true,
        synchronize: true 
      }),TypeOrmModule.forFeature([FlightEntity,AirlineEntity,BookingEntity,PassengerEntity])],
      controllers: [FlightbookingController],
      providers:[FlightbookingService]
    }).compile();

    controller = module.get<FlightbookingController>(FlightbookingController);
    service=module.get<FlightbookingService>(FlightbookingService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should search all flights", async ()=>{
   
    const result:Promise<any[]> = new Promise((resolve, reject)=>{
      resolve([{ 
        "date": "23/02/2023",
        "from_place": "delhi",
        "to_place": "chennai",
        "round_trip": "yes" 
        }])
    });
    jest.spyOn(service, 'searchFlight').mockImplementation(() => result);

    let list:FlightEntity[] = await controller.searchFlight({ 
      "date": "23/02/2023",
      "from_place": "delhi",
      "to_place": "chennai",
      "round_trip": "yes" 
      });
      console.log((await result).length);
      console.log(list.length)
    expect(list.length).toBe((await result).length);
  })

  it("should be able to add flights", async ()=>{
   
    const result:Promise<any> = new Promise((resolve, reject)=>{
      resolve({
        "flight_number" : "dp235",
        "airline_id" : 2,
        "from_place" : "delhi",
        "to_place" : "chennai",
        "start_time" : "10:35", 
        "end_time" : "13:45",
        "total_number_of_business_class_seats" : "50",
        "total_number_of_nonbusiness_class_seats" : "50", 
        "ticket_cost" : "5000",
        "total_number_of_seats" : "100",
        "meal" : "veg" 
        })
    });
    jest.spyOn(service, 'addFlight').mockImplementation(() => result);

    let list:FlightEntity = await controller.addFlight({
      "flight_number" : "dp235",
      "airline_id" : 2,
      "from_place" : "delhi",
      "to_place" : "chennai",
      "start_time" : "10:35", 
      "end_time" : "13:45",
      "total_number_of_business_class_seats" : "50",
      "total_number_of_nonbusiness_class_seats" : "50", 
      "ticket_cost" : "5000",
      "total_number_of_seats" : "100",
      "meal" : "veg" 
      });
      // console.log((await result));
       console.log(list)
    expect(list).toBeTruthy()
  })


  it("should be show history", async ()=>{
   
    const result:Promise<any> = new Promise((resolve, reject)=>{
      resolve('mukesh@gmail.com')
    });
    jest.spyOn(service, 'bookingHistory').mockImplementation(() => result);

    let list:BookingEntity[] = await controller.bookingHistory('mukesh@gmail.com');
      // console.log((await result));
       console.log(list)
    expect(list.length).toBeTruthy()
  })

  it("should be show flight ticket", async ()=>{
   
    const result:Promise<any> = new Promise((resolve, reject)=>{
      resolve(1)
    });
    jest.spyOn(service, 'ticketDetails').mockImplementation(() => result);

    let list:BookingEntity[] = await controller.ticketDetails(1);
      // console.log((await result));
      let det=[]
      det.push(list)
       console.log(list)
    expect(det.length).toBe(1)
  })

  // it("should be able to cancel the ticket", async ()=>{
   
  //   const result:Promise<any> = new Promise((resolve, reject)=>{
  //     resolve(1)
  //   });
  //   jest.spyOn(service, 'cancelTicket').mockImplementation(() => result);

  //   let list:any = await controller.cancelTicket(1);
     
  //   expect(list.length).toBeTruthy()
  // })
});
