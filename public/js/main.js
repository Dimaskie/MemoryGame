const card = document.querySelectorAll('.card')
console.log(card)
for(i = 0; i<card.length; i++){
    card[i].onclick = function(){
        console.log(this)
        this.style.visibility ='hidden'
    }
}