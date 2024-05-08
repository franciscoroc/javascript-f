let nome= prompt("digite seu nome") //pop-up para digitar

Console.log(nome) //não funciona em terminal, apenas em browser

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/web05/i)
|| navigator.userAgent.match(/iPhone IPad iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
} else{
    console.log("PC")
}
