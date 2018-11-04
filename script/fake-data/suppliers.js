const objectizeArr = require('objectize-arr')
const faker = require('faker')
faker.locale = 'zh_CN'

module.exports = [
  [ '红星美凯龙', 'support@chinaredstar.com' ],
  [ '居然之家', 'support@juran.com.cn' ],
  [ '欧亚达', 'support@ouyada.com' ],
  [ '百安居', 'bnq.com.cn' ]
]
  .map(([name, email]) => [name, email, faker.phone, faker.address.city()])
  .map(objectizeArr(['name', 'email', 'mobile', 'address']))
