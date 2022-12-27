import { IsNotEmpty,IsAlphanumeric} from "class-validator"

export class LoginDto{
    @IsNotEmpty()
    @IsAlphanumeric()
    username:string;
    @IsNotEmpty()
    password:string
}