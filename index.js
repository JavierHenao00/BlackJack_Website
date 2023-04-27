let cards = []
let sum =0
let message=""
let estaVivo=false
let obtuvoBlackJack=false
let messageEl=document.getElementById("message-el")
let cardEl=document.getElementById("Card-el")
let totalEl=document.getElementById("total-el")


function RandomCard(){
let randomcard=Math.floor(Math.random()*13)+1

if(randomcard>10){

return 10

}else if(randomcard===1){
return 11
}
else{
    return randomcard
}

}


function startGame(){
let card1=RandomCard()
let card2=RandomCard()



cards=[card1,card2]

sum=card1+card2

rendergame()


}

function rendergame(){
   
    for(let i =0; i<cards.length;i++){
    cardEl.textContent="Total: "+cards
    }
    totalEl.textContent="Total: "+sum

    if(sum<21){
        message = "Quieres una nueva carta?"
        estaVivo = true
        obtuvoBlackJack=false

    }
    else if(sum===21){
        message = "Felicitaciones!! Obtuviste BlackJack!!!"
        estaVivo=false
        obtuvoBlackJack=true
    }
    else{
        message = "Has perdido, intentalo de nuevo"
        estaVivo=false
        obtuvoBlackJack=false
    }

    messageEl.textContent=message
}

function newcard(){
    
    let card3= RandomCard()
    if(estaVivo==true && obtuvoBlackJack==false){
     cards.push(card3)
     sum+=card3
    
    }
    rendergame()
   
}


