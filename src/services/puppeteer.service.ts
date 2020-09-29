import {
  Injectable,
} from '@nestjs/common';

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');

puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

@Injectable()
export class PuppeteerService {
  public async getPuppetereBrowser() {
    console.log('process.env.CHROMIUM_PATH ', process.env.CHROMIUM_PATH);
    return await puppeteer.launch({
      executablePath: process.env.CHROMIUM_PATH,
      args: ['--no-sandbox'], // This was important. Can't remember why
    });
  }
}
