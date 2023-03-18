import React from 'react'
import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import Blog from '../components/blogs'

test('render blog title',()=>{
    const blogs={
        title:"How to make money",
        author:"Ade"
    }
    render(<Blog title={blogs.title} author={blogs.author}/>)
    const title = screen.getByText('How to make money')
    expect(title).toBeDefined()
    const author = screen.getByText('How to make money')
    expect(author).toBeDefined()
})