import React from 'react'
    import userEvent from '@testing-library/user-event'
    import '@testing-library/jest-dom'
    import {render,screen} from '@testing-library/react'
    import Blog from '../components/blogs'
    import BlogInput from '../components/blogInput'
    
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
    
    /*5.14: Blog list tests, step2
    Make a test, which checks that the blog's URL and number of likes are shown when the button controlling the shown details has been clicked.
    */
    describe('<Togglable />', () => {
        let container
        //defined a mock function
        const showBlogContent = jest.fn()
        const blogs={
            url:"www.moneymachine.com",
            likes:"1"
        }
        beforeEach(() => {
          container = render(
            <Blog>
                <button className='showBlogContentButton' showBlogContent={showBlogContent}>Show</button>
              <div className="content" >
                togglable content
                url={blogs.url}
                vote={blogs.likes}
              </div>
            </Blog>
          ).container
        })
        test('after clicking the button, children are displayed', async () => {
          const user = userEvent.setup()
          const button = screen.getByText('show')
          //button is clicked
          await user.click(button)
        //used to queery selector to get the the field
          const div = container.querySelector('.content')
          //expects the display to not be none
          expect(div).not.toHaveStyle('display: none')
        })
    
        test ('after cliking the button the content should have length of 5',async ()=>{
            const user = userEvent.setup()
            const button = screen.getByText('show')
            await user.click(button)
            //qurrey the like button
            const div = container.querySelector('.likes')
            //expects it to definded
            expect(div).toBeDefined()
        })
      })