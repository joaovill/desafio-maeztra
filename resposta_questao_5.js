/* 
considerando como a questão requisita os amigos lado a lado, trata-se de uma análise combinatória
a qual não necessita quaisquer regra de ordenação, entende-se que:

5 amigos resultam (5!, 5 fatorial)

onde 5! = 5 * 4 * 3 * 2 * 1

*/
function fatorial(number){

    if(number === 0 || number === 1){
        return 1
    }

    let count = 2
    let result = 1

    while(number>=count){
        result = result * count
        count++
    }

    return result
}
