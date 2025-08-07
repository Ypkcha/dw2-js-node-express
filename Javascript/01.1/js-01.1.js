//Variaveis podem ser declaradas de 3 formas:
/* VAR, LET e CONST
VAR: No geral evite o seu uso, pode não ser muito seguro.
LET: Utilize quando for necessário reatribuir o valor da variável.
CONST: Não é possível reatribuir o valor da variável uma vez que já tenha sido atribuido um valor. Utilize quando não precisar reatribuir o valor da variável.
*/
//let cidade = "Registro"
//let cidade = "Jacupiranga" //não pode, erro
//const idade //não pode, falta atribuição
//const idade = 19
//idade = 20 // não pode, não vai mudar uma constante

//Tipos de Funções

//Função Simples (de escrever na página)
const message = "<h2>Ola! Bem-Vindo! Essa é sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}
//Invocando(😱) a função
showMessage();

//Função com Parâmetros
const user = "Yuri P";
function userMessage(user) {
    // Essa função recebe um parâmetro(entre parênteses)
    document.write(`<h3>O que deseja fazer hoje, ${user} ?</h3>`);
    /*${} -> Template Strings / Literal Strings (Use crase pra funcionar)
    É usado para inserir variáveis dentro de STRINGS (aspas)
    */
}
userMessage(user); // Argumento