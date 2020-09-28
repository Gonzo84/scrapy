// import * as csv from 'csvtojson';

const csv = require('csvtojson');
import { writeFile } from 'fs';
import * as path from 'path';

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'test.json'
// );


class Transform {
  public async run() {

    csv()
      .fromFile('./data/cars.csv')
      .then((jsonObj) => {
        let carArr = JSON.parse(JSON.stringify(jsonObj));
        let i = 0;
        let cars = [];
        while (i < carArr.length) {
          for (const [key, value] of Object.entries(carArr[i])) {
            const keys: string[] = key.split(';');
            // @ts-ignore
            const values: string[] = value.split(';');
            let index = 0;
            let car = {};
            while (index < keys.length) {
              let tempKey = keys[index];
              let tempValue = values[index];
              car[tempKey] = tempValue;
              index++;
            }
            cars.push(car);
          }
          i++;
        }
        // writeFile(p, JSON.stringify(cars), err => {
        //   console.log(err);
        // });
      });
  }

}

const transform = new Transform();

export { transform };
