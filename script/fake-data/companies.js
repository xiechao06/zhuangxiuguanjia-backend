const faker = require('faker')
const objectizeArr = require('objectize-arr')

faker.locale = 'zh_CN'

module.exports = [
  [
    'foo',
    faker.phone,
    '120.296754,30.380232',
    'https://via.placeholder.com/350?text=foo',
    'https://via.placeholder.com/350x150?text=foo',
    'default',
    [faker.address.city(), faker.address.streetAddress()].join(' '),
    faker.internet.url(),
    faker.random.words(20)
  ],
  [
    'bar',
    faker.phone,
    '120.266542,30.183964',
    'https://via.placeholder.com/350?text=bar',
    'https://via.placeholder.com/350x150?text=bar',
    'default',
    [faker.address.city(), faker.address.streetAddress()].join(' '),
    faker.internet.url(),
    faker.random.words(20)
  ],
  [
    'baz',
    faker.phone,
    '120.035142,30.296081',
    'https://via.placeholder.com/350?text=baz',
    'https://via.placeholder.com/350x150?text=baz',
    'default',
    [faker.address.city(), faker.address.streetAddress()].join(' '),
    faker.internet.url(),
    faker.random.words(20)
  ]
].map(it => it.concat(it[0] + '.com'))
  .map(objectizeArr([
    'name', 'phone', 'lnglat', 'logo', 'profileImage', 'policy',
    'address', 'website', 'description', 'email'
  ]))
