
/* 

anosTrabalhado = [anoInicial, anoFim]

Function mostPeopleWork: [{year, many}] (anosTrabalhado[]) 

Pelo que pensei e o esforço que fiz para solucionar ao problema queria ter usado menos funções de loop,
mas visto que eu recebo uma matriz e os dados das pessoas ano de inicio e término são distintos, decidi por
iterar essa matriz e coletar o menor valor para minimo, e o maior valor para o ano final.

Realizo um filtro dentro do range de anos trabalhados e 
verifico através do filtro quantos trabalhadores estavam ativos no ano
armazenando ano e quantidade em objeto a ser retornado após.

*/

function mostPeopleWork(arrayPersonYears){
  let minYear, maxYear;
	const yearsPeople = []
	/* variaveis para os anos, e lista para retorno criadas */

	arrayPersonYears.forEach(element => {
		if(minYear === undefined){
			minYear = element[0]
			maxYear = element[1]
		}else{
			if(minYear > element[0]){
				console.log(element[0])
				minYear = element[0]
			}
			if(maxYear < element[1]){
				maxYear = element[1]
			}
		}
	});
	/* acima a iteração para pegar os anos*/

	while(minYear <= maxYear){
		const howMany = arrayPersonYears.filter( item => {
			return (item[0] <= minYear && item[1] >= minYear)
		}).length

		let objAppendArray = {
			[minYear]: howMany
		}

		yearsPeople.push(objAppendArray)
		
		minYear++
	}
	/* 
	checo ano a ano o range de trabalhadores que 
	correspondem a data e guardo em uma lista de objetos com 
	{ [propiedadeAno]: pessoas}
	*/

	return yearsPeople
}