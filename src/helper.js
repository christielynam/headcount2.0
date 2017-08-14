export default class DistrictRepository {
  constructor(kinderData) {
    this.data = this.filterData(kinderData)
  }

  filterData(kinderData) {
    return kinderData.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = [];
      }
      acc[obj.Location].push(obj);
      return acc;
    }, {})
  }
}
