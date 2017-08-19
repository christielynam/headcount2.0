export default class DistrictRepository {
  constructor(kinderData) {
    this.data = this.filterData(kinderData)
  }

  filterData(kinderData) {
    return kinderData.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = {location: obj.Location.toUpperCase(), data: {}};
      }
      acc[obj.Location].data[obj.TimeFrame] = Math.round(1000 * obj.Data) / 1000 || 0;
      return acc;
    }, {})
  }

  findByName(string) {
    if (string) {
      const locationKeys = Object.keys(this.data);
      const found = locationKeys.find(location => location.toUpperCase() === string.toUpperCase());
      return this.data[found];
    }
  }

  findAllMatches(string) {
    const dataKeys = Object.keys(this.data)
    const dataArray = dataKeys.map( key => this.data[key] )

    if (string) {
      return dataArray.filter( object => object.location.includes(string.toUpperCase()))
    }
    return dataArray
  }

  findAverage(string) {
    const districtDataObj = this.findByName(string).data

    const districtKeys = Object.keys(districtDataObj)

    const total = districtKeys.reduce((sum, year) => {
      sum += districtDataObj[year]
      return sum
    }, 0)

    const average = Math.round((total / districtKeys.length) * 1000) / 1000

    return average
  }

  compareDistrictAverages(firstLocale, secondLocale) {
    const result = {}
    const bigFirstLocale = firstLocale.toUpperCase()
    const bigSecondLocale = secondLocale.toUpperCase()

    result[bigFirstLocale] = this.findAverage(firstLocale)

    result[bigSecondLocale] = this.findAverage(secondLocale)

    const ratio = Math.round((result[bigFirstLocale] / result[bigSecondLocale]) * 1000) / 1000

    result.compared = ratio

    return result


  }

}
