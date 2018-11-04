const objectizeArr = require('objectize-arr')

module.exports = [
  ['北京市', '010'],
  ['上海市', '021'],
  ['广州市', '020'],
  ['深圳市', '0755'],
  ['杭州市', '0571'],
  ['合肥市', '0551'],
  ['苏州市', '0512'],
  ['南京市', '025']
].map(objectizeArr(['name', 'citycode']))
