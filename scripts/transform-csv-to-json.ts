const csv = require('csvtojson');
const fs = require('fs');

class Transform {
  public async run() {
    csv()
      .fromFile('./data/cars.csv')
      .then((jsonObj) => {
        const carArr = JSON.parse(JSON.stringify(jsonObj));
        const cars = [];
        carArr.forEach((car) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const [key, value] of Object.entries(car)) {
            cars.push(Transform.createCarObj(key, value));
          }
        });
        fs.access('./car-data', (error) => {
          if (error) {
            console.log('Directory does not exist.');
            fs.mkdir('car-data', { mode: '777' }, (err) => {
              if (err) {
                console.log('err ', err);
              }
              console.log('dir car-data created');
            });
          }
          fs.writeFile('car-data/cars.json', JSON.stringify(cars), (err) => {
            if (err) {
              console.log('err ', err);
            }
          });
        });
      });
  }

  private static createCarObj(keysString, valuesString) {
    const carObj = {};
    const keys: string[] = keysString.split(';');
    const values: string[] = valuesString.split(';');
    keys.forEach((key, index) => {
      carObj[key] = values[index];
    });
    return carObj;
  }
}

const transform = new Transform();

export { transform };
