import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirlineEntity } from '../airline/entities/airline.entity';
import { BookingEntity } from './entities/booking.entity';
import { FlightEntity } from './entities/flight.entity';
import { PassengerEntity } from './entities/passenger.entity';
import { FlightbookingService } from './flightbooking.service';

describe('FlightbookingService', () => {
  let service: FlightbookingService;

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
      providers: [FlightbookingService],
    }).compile();

    service = module.get<FlightbookingService>(FlightbookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
