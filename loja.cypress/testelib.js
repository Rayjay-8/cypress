import faker from 'faker-br'
import Leite from 'leite'

const leite = new Leite()

// const cliente = {
//   nome: "Teste_"+faker.name.findName(),
//   // cnpj: '24.142.630/0001-69',
//   cnpj: faker.br.cnpj(),
//   cep: "87053060",
//   numero: 123,
//   tel: faker.phone.phoneNumberFormat(),
//   telzap: faker.phone.phoneNumberFormat(),
//   email: faker.internet.email()
// }


// console.log(cliente)

console.log(leite.empresa.cnpj({ formatado: false }))
