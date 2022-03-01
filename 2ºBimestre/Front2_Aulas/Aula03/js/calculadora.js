let calculadora = function(num1, num2, operacao){
    switch (operacao) {
        case '+':
            return num1 + num2;
            
        case '-':
            return num1 - num2;
            
        case '*':
            return num1 * num2;
            
        case '/':
            if(num2 == 0){
                return "Não se pode dividir por 0!"
            } else{
                return num1 / num2; 
            };                 
            

        default:
            return("Erro!");
            
    }
}
//Exportando a função calculadora
module.exports=calculadora;

