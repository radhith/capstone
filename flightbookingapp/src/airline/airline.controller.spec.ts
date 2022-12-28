import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from '../flightbooking/entities/booking.entity';
import { FlightEntity } from '../flightbooking/entities/flight.entity';
import { PassengerEntity } from '../flightbooking/entities/passenger.entity';
import { AirlineController } from './airline.controller';
import { AirlineService } from './airline.service';
import { AirlineEntity } from './entities/airline.entity';

describe('AirlineController', () => {
  let controller: AirlineController;
  let service:AirlineService

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
      }),TypeOrmModule.forFeature([FlightEntity,AirlineEntity])],
      controllers: [AirlineController],
      providers:[AirlineService]

    }).compile();

    controller = module.get<AirlineController>(AirlineController);
    service=module.get<AirlineService>(AirlineService)

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it("should be able to add airline", async ()=>{
   
    const result:Promise<any> = new Promise((resolve, reject)=>{
      resolve({
        
          "name":"airlinTest2"
      
        })
    });
    jest.spyOn(service, 'addAirline').mockImplementation(() => result);

    let list:AirlineEntity = await controller.addAirline({
      "name":"airlinTest2",
      "blocked":"no"
    });
      // console.log((await result));
       console.log(list)
    expect(list).toBeTruthy()
  })
  it("should be able to update airline", async ()=>{
   
    const result:Promise<any> = new Promise((resolve, reject)=>{
      resolve({
        
          "name":"airlinTest4",
          "blocked":"yes"
          
        })
    });
    jest.spyOn(service, 'updateAirline').mockImplementation(() => result);

    let list:AirlineEntity = await controller.updateAirline({
      "name":"airlinTest4",
      "blocked":"yes",
    },1);
      // console.log((await result));
       console.log(list)
    expect(list).toBeTruthy()
  })
});
