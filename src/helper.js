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


}
