export default {
  queryParams: {
    provider: 'adLimitation=ONLY_FSBO_ADS',
    country: 'cn=DE',
    damage: 'damageUnrepaired=ALSO_DAMAGE_UNREPAIRED',
    fuel: 'fuels=DIESEL',
    search: 'isSearchRequest=true',
    manufacturer: 'makeModelVariant1.makeId=',
    model: 'makeModelVariant1.modelId=',
    maxFirstRegistrationDate: 'maxFirstRegistrationDate=', //year-month-day for example 2018-12-31
    minCubicCapacity: 'minCubicCapacity=', //this values needs to be mapped
    minFirstRegistrationDate: 'minFirstRegistrationDate=', //year-month-day for example 2018-12-31
    minPower: 'minPowerAsArray=110&minPowerAsArray=KW', //this values needs to be mapped
    pageNumber: 'pageNumber=2',
    endQuery: 'scopeId=C&sfmr=false',
  },
  manufacturers: [{
    manufacturer: 'Audi',
    manufacturerId: '1900',
    models: [{
      model: 'A4',
      modelId: '9',
      displacement: '2967',
      power: '150',
      year_from: '2011',
      year_to: '2015',
    }, {
      model: 'A4 Allroad',
      modelId: '33',
      displacement: '2967',
      power: '150',
      year_from: '2011',
      year_to: '2015',
    }, {
      model: 'A4 QUATTRO',
      modelId: '16',
      displacement: '2967',
      power: '150',
      year_from: '2011',
      year_to: '2015',
    }],
  }],
};
