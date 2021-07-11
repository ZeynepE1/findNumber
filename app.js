const randSayi =Math.floor(Math.random()*100); 
console.log(randSayi);

const sonuc = document.querySelector("#sonuc");
const btn = document.getElementById("check");
const spa= document.getElementById("span");
let a=0;


    btn.onclick = ()=>{
        const enterNum=parseInt(document.getElementById("num").value) ;
        console.log(enterNum); 
        
        if(enterNum>randSayi){
            sonuc.textContent="bilemediiinn!!! biraz aşağı!";
            a+=1
        
        

        }else if(enterNum<randSayi){
            sonuc.textContent="bilemediiinn!!! biraz yukarı!";
            a+=1;
        }else if(enterNum==randSayi){
            a+=1;
            return (sonuc.textContent="kazandınız!") &&
            (spa.textContent =`${a}. denemede buldunuz.`);
            
            
        
        
        }    
          

    }

   
