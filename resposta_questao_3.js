/*
Como as outras questões levando em consideração que não recebo dados maliciosos, 
ou seja a string represente um valor válido conforme regra da tarefa,
realizo a quebra das strings e um forEach para armazenar a pilha.

Quando for um dos caracteres que abre, eu apenas dou push na minha pilha,
em caso de caracter para fechar eu verifico em minha pilha se de acordo com o caracter que fecha, o ultimo elemento
representa o respectivo que abre e só assim então eu removo ele da pilha por um pop, forçando que eu feche todos os casos.

Em caso de fechar errado estragará a pilha e saberemos do erro pois não realizará o pop,
em caso de sobrar caracteres abertos no fim da pilha pois o último foi aberto(exemplo), também haverá resquicios na pilha.

o retorno é booleano, false se sobrar pilha, true se a pilha estiver limpa.

Function checkBrackets: boolean (stringCheck: string)
*/
function checkBrackets(stringCheck){
    const bracketList = stringCheck.split("")
    const openedStack = []

    bracketList.forEach(element => {
        if(element === '[' || element === '{' || element === '('){
            openedStack.push(element)
        }else{
            if(element === ']' && openedStack[openedStack.length-1] === '[') { openedStack.pop() }
            else if(element === '}' && openedStack[openedStack.length-1] === '{') { openedStack.pop() }
            else if(element === ')' && openedStack[openedStack.length-1] === '(') { openedStack.pop() }
        }
    });

    return (openedStack.length) ? false : true
}