const objectizeArr = require('objectize-arr')
const faker = require('faker')

faker.locale = 'zh_CN'

let customers = [
  [
    'kirk@enterprise.com',
    'kirk',
    '18888888888',
    faker.name.lastName(),
    faker.name.firstName(),
    faker.internet.userName(),
    'Mr',
    'https://cdn.vuetifyjs.com/images/lists/1.jpg'
  ],
  [
    'chekov@enterprise.com',
    'chekov',
    '17777777777',
    faker.name.lastName(),
    faker.name.firstName(),
    faker.internet.userName(),
    'Mr',
    'https://cdn.vuetifyjs.com/images/lists/1.jpg'
  ],
  [
    'spock@customer.com',
    'spock',
    '16666666666',
    faker.name.lastName(),
    faker.name.firstName(),
    faker.internet.userName(),
    'Mr',
    'https://cdn.vuetifyjs.com/images/lists/1.jpg'
  ]
].map(objectizeArr(['email', 'password', 'mobile', 'first_name', 'last_name', 'nickname', 'title', 'avatar']))

module.exports = customers
