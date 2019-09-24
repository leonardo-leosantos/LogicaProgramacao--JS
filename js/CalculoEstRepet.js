function ValidarSenha(){
    var num = 0

    while(num !=2002){

       num = document.getElementById("validaSenha").value

       if (num === 2002){
           console.log("Acesso Permitido")

       }
    
       else{
           console.log("Senha Invalida")
       }
    }
}