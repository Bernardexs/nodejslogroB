const express=require('express')
const router=express.Router()

const conexion=require('./database/db')

router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/create',(req,res)=>{
    conexion.query('SELECT * FROM empleados',(err,resultados)=>{
        if(err)
        throw err
    else
    res.render('create',{resultados:resultados})

    })
})
const crud=require('./controllers/crud')
router.post('/store',crud.save)

  

/*router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM usuario',(err,resultados)=>{
        if(err)
        throw err
    else
    res.render('index',{resultados:resultados})

    })

})

const crud=require('./controllers/crud')
router.post('/store',crud.save)

router.get('/create',(req,res)=>{
    res.render('create')

})

router.get('/edit/:id',(req,res)=>{
    const id =req.params.id
    conexion.query('SELECT * FROM usuario WHERE id=?',[id],(err,resultados)=>{
        if(err)
        throw err
    else{
    res.render('edit',{usuario:resultados[0]})
    }
    })
})
router.post('/update',crud.update)

router.get('/eliminar/:id',(req,res)=>{
    const id=req.params.id
    conexion.query('DELETE FROM usuario WHERE id=?',[id],(err,resultados)=>{
        if(err)
        throw err
    else
    res.redirect('/')
    })

})*/
module.exports=router