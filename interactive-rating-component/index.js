var rate;
var state=false;


function clicked(n){
    resetColor();
    var btn=document.getElementById(n);     
    btn.style='background-color:hsl(25, 97%, 53%)';
    rate=btn.value; 
    state=true;
}

function resetColor(){
    var bt= document.getElementsByClassName('btn-secondary')
    for(i=0;i<bt.length;i++){
        bt[i].style='background-color:hsl(214, 17%, 26%)';       
    }
}


function submite(){

    if(rate==undefined){
        var valid=document.getElementById('validation').style='display:block';
    }

    else{
    var text=document.getElementById('rate-text').innerText='You selected '+rate+' out of 5'
    var rate_state=document.getElementById('rating-state').style='display:none';
    var thanks_state=document.getElementById('thanks-state').style='display:block'; }
    

}