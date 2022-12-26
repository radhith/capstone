import { Injectable } from "@nestjs/common";
import { Strategy,ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
      console.log('s')
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secret:`${process.env.JWT_KEY}` ,
          secretOrKey:  `${process.env.JWT_KEY}` ,
          secretOrPrivateKey: `${process.env.JWT_KEY}` 
        })
    }

    async validate(payload:any){
      console.log("in payload: "+JSON.stringify(payload));
      return payload
    }
}