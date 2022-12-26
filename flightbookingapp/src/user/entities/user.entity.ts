import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import{IUser}from'../interfaces/user.interface';
@Entity('user')
export class UserRepository implements IUser{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    emailId:string
    @Column()
    username:string
    @Column()
    password:string

}