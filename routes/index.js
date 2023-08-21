const express = require('express')
const router = express.Router()


// All Authors route
router.get('/',(req,res) => {
    res.render('index')

})
// new author route
router.get("/new",(req, res)=>{
    
})

module.exports = router