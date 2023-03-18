import React from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import Blog from '../components/blogs'

//created a test method
test('render blog title',()=>{
    //specified the  content
    const blogs={
        title:"How to make money",
        author:"Ade"
    }
    //render the component
    render(<Blog title={blogs.title} author={blogs.author}/>)
    const title = screen.getByText('How to make money')
    //check if the response is correct
    expect(title).toBeDefined()
    const author = screen.getByText('How to make money')
    expect(author).toBeDefined()
})