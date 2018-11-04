#!/usr/bin/env node
const objectizeArr = require('objectize-arr')
const exec = require('../util/exec')
const faker = require('faker')
const fs = require('fs-extra')

faker.locale = 'zh_CN'

exec('./script/initialize.sh')

let customers = require('./fake-data/customers')
for (let customer of customers) {
  exec('./script/add-customer.js', customer)
}

let foremen = require('./fake-data/foremen')
for (let foreman of foremen) {
  exec('./script/add-foreman.js', foreman)
}

const honors = [['首选'], ['热门']].map(objectizeArr(['name']))
for (let honor of honors) {
  exec('./script/add-company-honor.js', honor)
}

let cities = require('./fake-data/cities')
for (let city of cities) {
  exec('./script/add-city.js', city)
}

let skuCategories = [
  ['橱柜'], ['镜柜'], ['桌椅组合'], ['沙发'], ['桌子'], ['地板'], ['灯具'], ['床'], ['水龙头']
].map(objectizeArr(['name']))
for (let cate of skuCategories) {
  exec('./script/add-sku-category.js', cate)
}

let skus = require('./fake-data/skus')
for (let sku of skus) {
  exec('./script/add-sku.js', sku)
}

const suppliers = require('./fake-data/suppliers')
for (let supplier of suppliers) {
  exec('./script/add-supplier.js', supplier)
}

const brands = require('./fake-data/brands')

for (let brand of brands) {
  exec('./script/add-brand.js', brand)
}

let companies = require('./fake-data/companies')

let accounts = []
for (let company of companies) {
  exec('./script/add-company.js', company)
  exec('./script/initialize-company.js', {
    email: 'admin@' + company.name + '.com',
    password: company.name
  }, [company.name])
  let _accounts = [
    [`dispatcher@${company.email}`, 'dispatcher', 'dispatcher', company.name, faker.name.lastName(), faker.name.firstName(), faker.internet.userName()],
    [`salesperson@${company.email}`, 'salesperson', 'salesperson', company.name, faker.name.lastName(), faker.name.firstName(), faker.internet.userName()],
    [`designer@${company.email}`, 'designer', 'designer', company.name, faker.name.lastName(), faker.name.firstName(), faker.internet.userName()],
    [`accountant@${company.email}`, 'accountant', 'accountant', company.name, faker.name.lastName(), faker.name.firstName(), faker.internet.userName()]
  ].map(objectizeArr(['email', 'role', 'password', 'company', 'first_name', 'last_name', 'nickname']))
  accounts = accounts.concat(_accounts)
  for (let account of _accounts) {
    exec('./script/add-account.js', account)
  }
  exec('./script/fake-appointments.js', { company: company.name })
  exec('./script/fake-materials.js', { company: company.name })
  exec('./script/fake-orders.js', { company: company.name })
}

fs.writeFileSync('fake-data.log', JSON.stringify({
  customers, foremen, companies, accounts, skus, brands, suppliers, cities
}, null, 4), { encoding: 'utf-8' })
