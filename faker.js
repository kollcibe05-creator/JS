// installation npm install --save-dev @faker-js/faker

const {faker} = require("@faker-js/faker")

const genderSpecific = faker.person.fullName("female")
// console.log(genderSpecific)

const fullName = faker.person.fullName()

const firstName = faker.person.firstName()

const lastName = faker.person.lastName()
// console.log(lastName)

const names = faker.helpers.arrayElement(['female',  'male'])
// console.log(names)

const phoneNumber = faker.phone.number()
console.log(phoneNumber)

const bio = faker.person.bio()
// console.log(bio)

const userID = faker.string.uuid()
// console.log(userID)

const username = faker.internet.username()
// console.log(username)

const password = faker.internet.password()
// console.log(password)

const bird = faker.animal.bird()
// console.log(bird)

const department = faker.commerce.department()
// console.log(department)

const album = faker.music.album()
// console.log(album)

const book = faker.book.title()
// console.log(book)

//fakers contain helper methods that combine faker API using a mustache string format

console.log(
    faker.helpers.fake(
        'Hello {{person.prefix}} {{person.lastName}}, how are you feeling today'
    )
)


function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

// console.log(users)
