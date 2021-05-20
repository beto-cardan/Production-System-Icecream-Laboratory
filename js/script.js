function calcular(){
    let numb1=document.getElementById('txtn1')
    let numb2=document.getElementById('txtn2')
    let res=document.getElementById('res');
    let n1=Number(numb1.value);
    let n2=Number(numb2.value);
    let pdt= n1/n2

    if(n1==0 || n2==0){
        window.alert('Attenzione! Inserire i dati mancanti');
        innerHTML.value==''
          
    }
    if(pdt<15){

        res.innerHTML=`<div class'text'> <p class='text'><strong>La tua produttivita' è molto bassa! solanto ${pdt.toFixed(3)} kg/ora.<br> Attenzione, Rivedere manuale !</strong>&#x1F611 &#x1F4E2</p></div>`
        
    }else{
         
        res.innerHTML = `<div class='text'> <p><strong>Hai lavorato ${n2} ore e prodotto ${n1} kg di gelato. </p> <p>La tua produttivita' è: ${pdt.toFixed(3)} kg/ora!</p> <p>Ottimo Lavoro!</strong>&#x1F60D &#x1F44F</p> </div>`

    }

        
        res.style.color=('black');
        res.style.fontSize= '12pt'
        res.style.fontFamily=('arial');
}

function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let container = document.querySelector('.container');
    let icon = document.querySelector('.icon-bar');
    toggle.classList.toggle('active');
    container.classList.toggle('active');
    icon.classList.toggle('active');

}
