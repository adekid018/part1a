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
module.exports={dummy,totalLikes}