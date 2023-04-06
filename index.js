const cardNameInput = document.querySelector("#name-input");
    cvcInput = document.querySelector("#cvc-input");
    cardNumberInput = document.getElementById("number-input");
    expInput = document.getElementById("exp-input");
    expInput1 = document.getElementById("exp-input1");
    confirmbtn = document.querySelector(".confirm");
    continuebtn = document.querySelector("#continue-btn");
    form = document.querySelector('.form')
    done = document.querySelector('.done')
    cardNumber = document.querySelector('.cardnumber')
    cardName = document.querySelector('.cardname')
    cvc = document.querySelector('.cvc-down')
    expdate = document.querySelector('.expdate')
    expdate1 = document.querySelector('.expdate1')
    errori = document.querySelectorAll('.error')
let errors = {
    empty: "Can't be blank",
    numberonly:"Wrong format, numbers only",
    date:"Wrong date",
    name:"Wrong name format",
    addnumbers:"Minimum 16 digits"
};    
let ok=[0,0,0,0];
let nameRegex = /^[a-zA-Z\s]+$/;
let numRegex = /^[0-9]+(\s[0-9]+)*$/;

cardNumberInput.addEventListener("input", formatCardNumber);
function formatCardNumber() {

  let cardNumber = cardNumberInput.value.replace(/\s/g, "");
  cardNumber = cardNumber.replace(/(.{4})/g, "$1 ");
  cardNumberInput.value = cardNumber;
}

function validareNume(){
    if(!cardNameInput.value){
        errori[0].innerHTML = errors.empty;
        errori[0].classList.remove('hidden');
        cardNameInput.style.border="1px solid red";
        ok[0]=0;
        return false;
    }else{errori[0].classList.add('hidden');cardNameInput.classList.remove('red'); ok[0]=1; cardNameInput.style.border="1px solid green";}
    
    if(nameRegex.test(cardNameInput.value)){
        ok[0]=1;
        cardNameInput.classList.remove('red');
        cardNameInput.style.border="1px solid green";
    }else{
        ok[0]=0;
        errori[0].innerHTML = errors.name;
        errori[0].classList.remove('hidden');
        cardNameInput.classList.add('red');
        cardNameInput.style.border="1px solid red";
        
        
    }
}

function validareNumar(){
    if(!cardNumberInput.value){
        errori[1].innerHTML = errors.empty;
        errori[1].classList.remove('hidden');
        cardNumberInput.style.border="1px solid red";
        ok[1]=0;
        return false;
    }else{errori[1].classList.add('hidden');  ok[1]=1; cardNumberInput.style.border="1px solid green";}

    if(numRegex.test(cardNumberInput.value.replace(/\s/g, ''))){
        ok[1]=1;
    }else{
        ok[1]=0;
        errori[1].innerHTML = errors.numberonly;
        errori[1].classList.remove('hidden');
        cardNumberInput.style.border="1px solid red";
    }
    if(cardNumberInput.value.length<19){
        ok[1]=0;
        errori[1].innerHTML = errors.addnumbers;
        errori[1].classList.remove('hidden');
        cardNumberInput.style.border="1px solid red";
    }else{ok[1]=1;}

    
}

function validareData(){
    if(!expInput.value){
        errori[2].innerHTML = errors.empty;
        errori[2].classList.remove('hidden');
        ok[2]=0;
        return false;
    }else{errori[2].classList.add('hidden'); ok[2]=1;}
    if(expInput.value>12){
        errori[2].innerHTML = errors.date;
        errori[2].classList.remove('hidden');
        ok[2]=0;
        return false;
    }else{errori[2].classList.add('hidden'); ok[2]=1; }
    if(expInput1.value>2999){
        errori[2].innerHTML = errors.date;
        errori[2].classList.remove('hidden');
        ok[2]=0;
        return false;
    }else{errori[2].classList.add('hidden'); ok[2]=1; }
    if(!expInput1.value){
        errori[2].innerHTML = errors.empty;
        errori[2].classList.remove('hidden');
        ok[2]=0;
        return false;
    }else{errori[2].classList.add('hidden'); ok[2]=1;}
    
    if(numRegex.test(expInput1.value)){
        
        errori[2].classList.add('hidden'); ok[2]=1;
    }else{
        ok[2]=0;
        errori[2].innerHTML=errors.numberonly;
        errori[2].classList.remove('hidden');
    }
    if(numRegex.test(expInput.value)){
        
        errori[2].classList.add('hidden'); ok[2]=1;
    }else{
        ok[2]=0;
        errori[2].innerHTML=errors.numberonly;
        errori[2].classList.remove('hidden');
    }



}

function validareCvc(){
    if(!cvcInput.value){
        errori[3].innerHTML = errors.empty;
        errori[3].classList.remove('hidden');
        ok[3]=0;
        return false;
    }else{errori[3].classList.add('hidden'); ok[3]=1 ;}

    if(numRegex.test(cvcInput.value)){
        ok[3]=1;
        errori[3].classList.add('hidden');
    }else{
        ok[3]=0;
        errori[3].innerHTML = errors.numberonly;
        errori[3].classList.remove('hidden');
    }
}


//FA VALIDARE CU FUNCTII DATEN PLM
confirmbtn.onclick = ()=>{

    validareNume();
    validareNumar();
    validareData();
    validareCvc();
    
    if(ok[0]==1 && ok[1]==1 && ok[2]==1 && ok[3]==1){
        form.classList.add('hidden');
        done.classList.remove('hidden');
        cardNumber.innerHTML = cardNumberInput.value;
        cardName.innerHTML = cardNameInput.value;
        cvc.innerHTML = cvcInput.value;
        expdate.innerHTML = expInput1.value;
        expdate1.innerHTML = expInput.value;
    }else{}

}
    
    
    
    
    
    

continuebtn.onclick = ()=>{
    form.classList.remove('hidden');
    done.classList.add('hidden');
    location.reload();
}

