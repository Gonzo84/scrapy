import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import {
  CheckEmailRequestModel,
  CheckEmailResponseModel,
  LoginRequestModel,
  SignupRequestModel,
} from '../contract';
import { UserService } from '../user/user.service';
import { IJwtPayload } from '../contract';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  async signup(signupRequest: SignupRequestModel): Promise<void> {
    const hash = await argon2.hash(signupRequest.password);
    const user = await this.userService.createUser(
      signupRequest,
      hash,
    );
  }

  async validateUser(payload: IJwtPayload): Promise<UserEntity> {
    const userEntity = await this.userService.getUserEntityById(payload.id);
    if (
      userEntity !== undefined
      && userEntity.email === payload.email
    ) {
      return userEntity;
    }
    throw new UnauthorizedException();
  }

  async login(loginRequest: LoginRequestModel): Promise<string> {
    const userEntity = await this.userService.getUserEntityByEmail(
      loginRequest.email,
    );
    if (
      userEntity === null || userEntity === undefined
      || !argon2.verify(userEntity.passwordHash, loginRequest.password)
    ) {
      throw new UnauthorizedException();
    }

    const payload: IJwtPayload = {
      id: userEntity.id,
      email: userEntity.email
    };

    return this.jwtService.signAsync(payload);
  }

  async checkEmail(
    checkEmailRequest: CheckEmailRequestModel,
  ): Promise<CheckEmailResponseModel> {
    const userEntity = await this.userService.getUserEntityByEmail(
      checkEmailRequest.email,
    );
    return new CheckEmailResponseModel(userEntity === null || userEntity === undefined);
  }
}
