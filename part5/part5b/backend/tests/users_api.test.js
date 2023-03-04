const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const superTest=require('supertest')
const app=require('../index')
const userDatabase=require('../model/userDatabase')
const api=superTest(app)
const initalUser=[{
    username:"buladu",
    name:"Adekid",
    passwordHash:"Muller"
},{
    username:"adenike",
    name:"Adebayo",
    passwordHash:"Milk"
}
]
beforeEach(async () => {
    await userDatabase.deleteMany({})
    let noteObject = new userDatabase(initalUser[0])
    await noteObject.save()
    noteObject = new userDatabase(initalUser[1])
    await noteObject.save()
  },100000)
  
  test('creation succeeds with a fresh username', async () => {
    //const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await api.get('/users')
    expect(usersAtEnd.body).toHaveLength(initalUser.length + 1)

    const usernames = usersAtEnd.body.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

/*
test('Doing a save',async()=>{
    const saltRounds=10
    const passwordHash = await bcrypt.hash("inputpassword", saltRounds)
    const datas={
        username:"aseoluwa",
        name:"Ase",
        passwordHash:"passwordHash"
    }
    
    await api
    .post('/users')
    .send(datas)
    .expect(500)
    .expect('Content-Type', /application\/json/)
    
    const response=await api.get('/users')
    expect(response.body).toHaveLength(initalUser.length+1)
})
*/
test ('geting users', async()=>{
    await api
    .get('/users')
    .expect(200)
    
})
afterAll(() => {
    mongoose.connection.close()
  })