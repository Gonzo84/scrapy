import { Injectable } from '@nestjs/common';
import { CreateMobileDeDto } from './dto/create-mobile-de.dto';
import { UpdateMobileDeDto } from './dto/update-mobile-de.dto';

@Injectable()
export class MobileDeService {
  create(createMobileDeDto: CreateMobileDeDto) {
    return 'This action adds a new mobileDe';
  }

  findAll() {
    return `This action returns all mobileDe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mobileDe`;
  }

  update(id: number, updateMobileDeDto: UpdateMobileDeDto) {
    return `This action updates a #${id} mobileDe`;
  }

  remove(id: number) {
    return `This action removes a #${id} mobileDe`;
  }
}
