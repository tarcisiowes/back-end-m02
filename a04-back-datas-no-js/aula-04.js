// new Date() //guarda um momento , momento pode se ter varias datas, ex: fuso horarios

// usando apenas Date, sera exibido apenas uma string com registro do momento mas sem nenhuma funcionalidade extra, por isso sempre use new Date

// const agora = new Date() // passando vazio se guarda o momento executado, e o tempo exibido sera o padrao pelo node, UTC

// console.log(agora)

// const date = new Date(2020, 0) // (ano, mes, hr, min, seg, mil) no minimo dois parametros, apenas numeros, meses começam no 0, e os dias começam em 1, o resto ele assume o primeiro momento da data tipo 0h 0min 0s, a hora é exibida em UTC mas é baseada no meu fuso ou seja 3horas a mais

// const finalDaCopaJapao = new Date(2002,5,30,8)

// console.log(finalDaCopaJapao)

//======================================

// Timestamp é um numero que representa um momento da historia
// O sinal de + na frente da variavel que guarda o momento retorna o valor em mil


// const finalDaCopaJapao = new Date(2002,5,30,8)

// const finalDaCopaMaisUmHora = +finalDaCopaJapao + 1000*60*60 //o tempo é contado em miliseg
// const finalMaisUmaHoraEmData = new Date(finalDaCopaMaisUmHora)

// console.log(finalDaCopaJapao, finalMaisUmaHoraEmData)

//=============================================== 1o e 2o gol da copa

// const finalDaCopaJapao = new Date(2002,5,30,8)

// const primeiroGol = +finalDaCopaJapao + 1000*60*(60+22) 
// const segundoGol = +finalDaCopaJapao + 1000*60*(60+34) 
// const primeiroGolEmData = new Date(primeiroGol)
// const segundoGolEmData = new Date(segundoGol)

// console.log(primeiroGolEmData, segundoGolEmData)

//=================================== COMPARAÇÃO DE DATAS

// sempre que for comparar duas datas use o timstamp e nao o objeto em si ex: +data1 === +data2 ?

//======================== GETTER & SETTERS

// Dia da semana começa em Dom 0

// const nascimento =new Date(1985,3,18,21)

// // hoje.setDate(hoje.getDate()- 30)

// console.log(nascimento.getMonth())
// console.log(nascimento.getDay())
// console.log(nascimento)

// ========================== NO navegador

// const agora = new Date();

// agora.toLocaleString("en-US", {year: "numeric", month:"long"});

// =================== DATE FNS

// npm install date-fns --save

// const texto = [ ]

// console.log(texto.length)

// const { format } = require('date-fns')

// const date = new Date(1985, 3, 18)

// console.log(format(date, "dd/MMM/yyyy")) //letras CAPS ou nao fazem diferença
// console.log(format(date, "dd-MM-yyyy")) // a ordem de m/d/a pode ser alternada aqui
// console.log(format(date, "dd 'de' MMM 'de' yyyy"))

//================================== ADD (somar ou subt)

// const { add } = require('date-fns')

// const date = new Date(1985, 3, 18)

// console.log(date)
// //add nao modifica a data original, pra modificar seria so com nova atribuição
// console.log(add(date, {
//     seconds: 2,
//     days: 5,
// }))


//======================= addBusinessDay / Dias uteis (depende da regiao)

// const { addBusinessDays } = require('date-fns')

// const date = new Date(1985, 3, 18)

// console.log(addBusinessDays(date, 10))

//================================ differenceIn (esq -dir)
// ~Milliseconds ~Seconds ~Minutes ~Hours


//=================================== set~ (edita alguma's unidade de tempo)

// const { set } = require('date-fns')

// const date = new Date(1985, 3, 18)

// console.log(set(date, {year: 2021, month: 3, date: 27}))
// console.log(set(date, {hours: 23}))

//==================================== isSame~ (retorna um boleano T/F)


// const { isSameDay } = require('date-fns')

// console.log(isSameDay(new Date(2021, 8, 5, 18), new Date(2021, 8, 5, 12)))

//====================================== isAfter / isBefore (compara a esq com a dir)

// const { isAfter, isBefore } = require('date-fns')

// console.log(isAfter(new Date(2021, 8, 5, 18), new Date(2021, 8, 5, 12)))
// console.log(isBefore(new Date(2021, 8, 5, 18), new Date(2021, 8, 5, 12)))

//============================ FUSOS (br -0300) js nao guarda fuso, apenas o timestamp
//sempre peça/envie a data em UTC

//=========================== startOf~ /endOf~

// const { startOfDay } = require('date-fns')

// console.log(startOfDay(new Date(2021, 8, 5, 18))) // tudo apos o dia sera 0

// const { endOfDay } = require('date-fns')

// console.log(endOfDay(new Date(2021, 8, 5, 18))) // tudo apos o dia sera o limite max

//============================= outras time zone date-fns-tz