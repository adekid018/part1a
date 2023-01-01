const dummy=(blog)=>{
return 1
}
const totalLikes=(blogs)=>{
    const total=blogs.reduce((arr,cur)=>{
        const ans=arr+cur.likes
        return ans
    }
    ,0)
    return total
}
const favouriteBlog=(blogs)=>{
    const highestBlog=Math.max(...blogs.map(value=>value.likes))
    return highestBlog
}
module.exports={dummy,totalLikes,favouriteBlog}