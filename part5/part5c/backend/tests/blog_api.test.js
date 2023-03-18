const mongoose=require('mongoose')
const superTest=require('supertest')
const app=require('../index')
const blogDatabase = require('../model/blogDatabase')
const api=superTest(app)
const initialBlogs = [
    {
      author: 'Adekids',
      url:"www.waptrick.com",
      title:"GAMES",
      date: new Date(),
      important: false,
    },
    {
      author: 'Browser can execute only Javascript',
      url:"www.wapdam.com",
      title:"Games",
      date: new Date(),
      important: true,
    },
  ]
  
  beforeEach(async () => {
    await blogDatabase.deleteMany({})
    let noteObject = new blogDatabase(initialBlogs[0])
    await noteObject.save()
    noteObject = new blogDatabase(initialBlogs[1])
    await noteObject.save()
  },100000)

test('blogs are returned as json', async () => {
    await api
    .get('/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  
  test('testing api post method', async ()=>{
    const newBlog={
      author: 'Adewale',
      url:"www.google.com",
      title:"FOOD",
      date: new Date(),
      important: true,
    }
    await api
    .post('/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)
    const response =await api.get('/blogs')
    expect(response.body).toHaveLength(initialBlogs.length+1)
  })
  
  test('if author and title are missing return 400', async()=>{
    const newBlog={
      author:"Ase"
    }
    await api
    .post('/blogs')
    .send(newBlog)
    .expect(400)
    //.expect('Content-Type', /application\/json/)

    const response=await api.get('/blogs')
    expect(response.body).toHaveLength(initialBlogs.length)
  })
  /*
  test('Deleting a single note',async () => {
    const blog = await api.get('/blogs')
    console.log(blog.body[0].id);
    const deleteBlog= blog.body[0].id
  
    await api
    .delete(`/blogs/${deleteBlog}`)
    .expect(204)
    const response= await api.get('/blogs')
    console.log(response.body.length)
    expect(response.body).toHaveLength(initialBlogs.length-1)
    expect(response.body).not.toContain(blog[0])
  })
*/
  test("Editing a note",async ()=>{
    const update={
        author: 'Adewale',
        url:"www.google.com",
        title:"FOOD",
        date: new Date(),
        important: true,
    }
    const data=await api.get('/blogs')
    const id=data.body[0].id
    await
    api
    .put(`/blogs/${id}`)
    .send(update)
    .expect(200)
    const response=await api.get('/blogs')
    const author=response.body.map(r=>r.author)
    expect(author).toContain('Adewale')
  })
  
  /*
/*
  test('there are three notes', async () => {
    const response = await api.get('/blogs')
    expect(response.body).toHaveLength(2)
  })
  
  test('the first note is about HTTP methods', async () => {
    const response = await api.get('/blogs')
    expect(response.body[0].author).toBe('Adekids')
  })
  test('all notes are returned', async () => {
    const response = await api.get('/blogs')
  
    expect(response.body).toHaveLength(initialBlogs.length)
  })
  test('a specific note is within the returned notes', async () => {
    const response = await api.get('/blogs')
  
    const contents = response.body.map(r => r.author)
    expect(contents).toContain(
      'Browser can execute only Javascript'
    )
  })
  /*
  test('a valid note can be added', async () => {
    const newNote = {
        author: 'Adekiders',
        url:"www.waptrick.com",
        title:"GAMES",
        date: new Date(),
        important: false,
    }
  
    await api
      .post('/blogs')
      .send(newNote)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    const response = await api.get('/blogs')
  
    const contents = response.body.map(r => r.author)
  
    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(contents).toContain(
      'Adekiders'
    )
  })
*/
  afterAll(() => {
    mongoose.connection.close()
  })