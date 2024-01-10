// const mongoose = require("mongoose")
    
//     const schema = mongoose.Schema({
//         title: String,
//         content: String,
//     })
    
//     module.exports = mongoose.model("Post", schema)
router.post("/posts", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })
    await post.save()
    res.send(post)
    router.post("/posts", async (req, res) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
        })
        await post.save()
        res.send(post)
    })
})