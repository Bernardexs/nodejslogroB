const mysql=require('mysql')

const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodefinallogrob'
})
conexion.connect((err)=>{
    if(err){
    console.log('el error es:'+err)
    return
    }else
    console.log('conexion a la base de datos exitosa')
})
module.exports=conexion