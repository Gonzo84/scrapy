import {
  BadRequestException, ConflictException, Injectable, Logger, NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { SignupRequestModel } from '../contract';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
  }

  public async getUserEntityById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  public async getUserEntityByEmail(email: string): Promise<UserEntity> {
    const normalizedEmail = email.toLowerCase();
    return this.userRepository.findOne({ where: { email: normalizedEmail } });
  }

  public async createUser(
    signupRequest: SignupRequestModel,
    passwordHash: string,
  ): Promise<UserEntity> {
    const newUser = new UserEntity();
    newUser.email = signupRequest.email.toLowerCase();
    newUser.passwordHash = passwordHash;
    newUser.firstName = signupRequest.firstName;
    newUser.lastName = signupRequest.lastName;
    try {
      await this.userRepository.save(newUser);
      return newUser;
    } catch (err) {
      Logger.error(JSON.stringify(err));
      throw new ConflictException();
    }
  }

  public async updateUser(userEntity: UserEntity): Promise<void> {
    await UserService.validateUser(userEntity);
    try {
      await this.userRepository.update(userEntity.id, userEntity);
    } catch (err) {
      Logger.warn(JSON.stringify(err));
      throw new BadRequestException();
    }
  }

  private static async validateUser(userEntity: UserEntity): Promise<void> {
    const errors = await validate(userEntity, {
      validationError: { target: false },
    });
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }
}
