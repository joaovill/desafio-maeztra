/* callback function utilizadas pelo filter e find */
const verifyEqual = (numberCheck, number) => numberCheck === number

/*Function verifyDoubled: int[] (arrayToVerify: int[]) */
function verifyDoubled (arrayToVerify) {
    const doubleds = [] // lista para alocar os números duplicados

    arrayToVerify.forEach((number)=>{
        //para cada item(número)
        if( arrayToVerify.filter(numberCheck => verifyEqual(numberCheck, number)).length > 1 && 
            doubleds.find(numberCheck => verifyEqual(numberCheck, number)) === undefined ) {
            /* 
            pegamos o item analizado e fazemos duas verificações com funções de lista,
            a primeira realiza um filtro para numeros iguais ao analizado usando do callback verifyEqual
            se a lista retornada for maior que length 1, sabemos que há mais de uma ocorrencia

            a segunda olha para o array de números dpulicados e verifica se este número já está declarado
            como um número repetido, se o resultado é indefinido, sabemos que o find não teve exito

            respeitando essas duas regras realiza um push com o número analizado do forEach
            */
            doubleds.push(number)
        }
    })

    return doubleds
}