const card = document.querySelectorAll('.card')
let attempts = document.getElementById('attempts')


parseInt(attempts,10)



function flip(){
    let count = 0;
    let clicked = []
    for(i = 0; i<card.length; i++){
        card[i].onclick = function(){
            if(count<2){
                this.style.visibility ='hidden'
                if(count<2){
                clicked.push(this)
                }
            }
            
            count++
            
            if(count == 2){
                if(clicked[0].className == clicked[1].className){
                    alert("Well Done !")
                    attempts.innerHTML =0;
                }
                else{
                    alert("Giovana Boca Suja!")
                    
                    attempts.innerHTML++

                }
                
                clicked[0].style.visibility ='visible';
                
                clicked[1].style.visibility ='visible';
                
                count = 0;
                clicked = [];
               
                
            }
        }
    }
}
flip();