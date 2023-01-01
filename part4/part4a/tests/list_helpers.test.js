const listHelpers=require('../utils/list_helpers')
test('Excersise 1',()=>{
    const blogs=[]
    const result=listHelpers(blogs)
    expect(result).toBe(1)
})