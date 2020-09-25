import {
  Body, Controller, HttpCode, HttpStatus, Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CheckEmailRequestModel,
  CheckEmailResponseModel,
  LoginRequestModel,
  LoginResponseModel,
  SignupRequestModel,
} from '../contract';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('check-email')
  @HttpCode(HttpStatus.OK)
  async checkEmailAvailability(
    @Body() checkEmailRequest: CheckEmailRequestModel,
  ): Promise<CheckEmailResponseModel> {
    return this.authService.checkEmail(checkEmailRequest);
  }

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signupRequest: SignupRequestModel): Promise<void> {
    await this.authService.signup(signupRequest);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginRequest: LoginRequestModel): Promise<LoginResponseModel> {
    return new LoginResponseModel(await this.authService.login(loginRequest));
  }
}
