const card = document.querySelectorAll('.card')

function flip(){
    let count = 0;
    let clicked = []
    for(i = 0; i<card.length; i++){
        card[i].onclick = function(){
            if(count<2){
                this.style.visibility ='hidden'
                console.log(clicked)
                if(count<2){
                clicked.push(this)
                }
                console.log(clicked)
            }
            
            count++
            
            if(count == 2){

                if(clicked[0].className == clicked[1].className){
                    alert("Well Done !")
                }
                else{
                    alert("Wrong!")
                }
            }
        }
    }
}
flip();