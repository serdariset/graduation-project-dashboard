const express = require('express');
const router = express.Router()
const client = require('../database')

router.post('/list',

    async (req,res)=>{
        try{
            client.query('SELECT * FROM list',(err,result)=>{
                res.status(200).send(result.rows)
            })
        }catch(e){
            console.log(e)
        }
    }
)

module.exports = router