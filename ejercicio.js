
const sumar=(num1,num2)=>{
   
    let resultado = num1 + num2
    
    console.log(resultado)
}



const restar=(num1,num2)=>{
   
    let resultado = num1 - num2
    
    console.log(resultado)
}



const multiplicar=(num1,num2)=>{
   
    let resultado = num1 * num2
    
    console.log(resultado)
}



const dividir=(num1,num2)=>{
   
    let resultado = num1 / num2
    
    console.log(resultado)
}


/* exports.sumar=sumar
 exports.restar=restar
 exports.multiplicar=multiplicar
 exports.dividir=dividir*/

 const operaciones={}
 operaciones.sumar=sumar
 operaciones.restar=restar
 operaciones.multiplicar=multiplicar
 operaciones.dividir=dividir

 module.exports=operaciones