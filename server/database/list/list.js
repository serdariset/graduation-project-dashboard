const express = require('express');
const router = express.Router()
const client = require('../database')

router.get('/list',

    async (req,res)=>{
        try{
            console.log('geldi')
            client.query('SELECT * FROM list',(err,result)=>{
                res.status(200).json(result.rows)
            })
        }catch(e){
            console.log(e)
        }
    }
)

module.exports = router