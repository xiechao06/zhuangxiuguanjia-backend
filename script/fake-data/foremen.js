const objectizeArr = require('objectize-arr')
const faker = require('faker')

faker.locale = 'zh_CN'

module.exports = [
  ['yaopeng@wellliving.biz', 'yaopeng', faker.name.lastName(), faker.name.firstName(), '15655555955', 'active'],
  ['guopeng@wellliving.biz', 'guopeng', faker.name.lastName(), faker.name.firstName(), '14844447444', 'inactive'],
  ['lihu@wellliving.biz', 'lihu', faker.name.lastName(), faker.name.firstName(), '13933333633', 'inactive']
].map(objectizeArr(['email', 'password', 'first_name', 'last_name', 'mobile', 'status']))
