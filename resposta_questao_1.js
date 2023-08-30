/* 
Function verifyNumber: boolean (currentValue:int, numberList[string], index:int, ascOrDsc:boolean)

verifica ultimo item da lista ou pede resultado da operação entre o item atual e o próximo para a função 
e valida a regra carrega os atributos por parametro, currentValue, numberList, index, e ascOrDesc.
*/
const verifyNumber = (currentValue, numberList, index, ascOrDsc) => {
	return (index+1 === numberList.length) ? true : isValidAscDesc(currentValue, numberList, index, ascOrDsc)
}

/* 
Function isValidAscDesc: boolean (number:int, numberList[string], index:int, ascOrDsc:boolean)

realiza a ação de checagem o ternário divide a checagem em caso de asc ou dsc,
 o return do booleano é repassado pra every function.

*/
const isValidAscDesc = (number, numberList, index, ascOrDesc) => {
	const nextNumberList = parseInt(numberList[index+1])

	return (ascOrDesc) ? (number <= nextNumberList && nextNumberList <= number+1) : (number >= nextNumberList && nextNumberList >= number-1)
}

/* 
Function checkOrder: string (number: int)

function que recebe um inteiro e realiza todo o processo de checagem
*/
function checkOrder(number){
	const numberList = number.toString().split("") 
	/* Maneira que me parece mais fácil de pegarmos um inteiro e transformarmos os 
	digitos em uma lista em javascript é através do método toString, onde em texto eu os separos 
	como digito através do método de string split, armazeno a lista numa constante
	para após realizarmos verificações */
	
	let ascOrDsc; 
	/*  Vou deixar, uma variável declarada nula, onde eu vou definir ASC como true,
	e DSC como false, ela inicia nula para verificarmos se a lista será ascendente ou descendente,
	e só será definida após a primeira diferença, lembrando que aceitamos inicios com digitos iguais
	ex: "8887776655" 
	esta servirá de escape também pois ela quem define se a lista seguirá regra maior igual(>=) ou menor igual(<=) */

	
	let count = 0; 

	while( numberList[count] === numberList[count+1]){
		count++
	}

	(numberList[count] >= numberList[count+1]) ? ascOrDsc = false : ascOrDsc = true ;

	/* 
	este counter inicial não seria necessário para a função de array 
	every abaixo mas ele é um loop condicional para achar a primeira
	variação nos numeros e definirmos se vai se tratar de uma order ASC ou DSC

	a criação deste se deu devido a necessidade em ver numeros repetidos no começo,
	e quanto a necessidade de a ordenação não poder se inverter o que tranca a ideia 
	de apenas fazer maior igual +1 e menor igual -1. */

	
	const isOrdered = numberList.every( (currentValue, index) =>verifyNumber(parseInt(currentValue), numberList, index, ascOrDsc))
	/* 
	ele é a constante final do resultado, 
	a lista é verificada através da função verifyNumber, 
	que eu criei como filtro para verificar o último número que não poderá checar proximo item na lista
	assim minha função every mantém o retorno truthy para validação, retornando sempre true para ultimo item,
	e realizando checagem para qualquer antecessor. */


	if(isOrdered)
		return "é ordenada e " + ((ascOrDsc) ? 'ASC' : 'DSC')
	else{
		return "não é ordenada"
	}
}
