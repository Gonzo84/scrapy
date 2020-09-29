import { Inject, Injectable } from '@nestjs/common';
import { CreateMobileDeDto } from './dto/create-mobile-de.dto';
import { UpdateMobileDeDto } from './dto/update-mobile-de.dto';
import { PuppeteerService } from '../services/puppeteer.service';

@Injectable()
export class MobileDeService {
  constructor(
    @Inject('PuppeteerService')
    private readonly puppeteerService: PuppeteerService,
  ) {
  }

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

  async scrap(): Promise<string> {
    const browser = await this.puppeteerService.getPuppetereBrowser();

    // const page = await browser.newPage();
    // logic for data scraping
    await browser.close();
    console.log('success');
    return 'scraping started';
  }
}
