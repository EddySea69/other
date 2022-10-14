(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            document.getElementById("main-form").style="display:none";            
            document.getElementById("complete-state").style = "display:block";                   
          }          
                
          event.preventDefault()
          form.classList.add('was-validated')  
          
          
  
          
        }, false)
      })
  })()

  


  var inputNome = document.querySelector("#cardholder");
  inputNome.addEventListener("keypress", function(e) {  
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }   

});



  function changeName(){    
    document.getElementById("card-name").innerText = "" + inputNome.value;
  }

  function changeDate(){

    document.getElementById("card-date").innerText = "" + document.getElementById("validationCustomDateMM").value + "/" + document.getElementById("validationCustomDateYY").value ;
  }


  function changeNumber(){

    var inputNumber = document.getElementById("cardnumber");
    var stringNumber = inputNumber.value;
    toString(stringNumber)
    

    if(inputNumber.value == ""  || stringNumber.length < 16 ){
      document.getElementById("card-number").innerText = "0000 0000 0000 0000";
    }

    else{
      
      var cardNumber = stringNumber.substring(0,4) + " " + stringNumber.substring(4,8) + " " +stringNumber.substring(8,12) + " " + stringNumber.substring(12,16)
      console.log(cardNumber)
      document.getElementById("card-number").innerText = "" + cardNumber;
    }
   

  }



  var inputNumber = document.getElementById("cardnumber");
  var stringNumber = inputNumber.value;   
  inputNumber.addEventListener("keypress", function(e) { 
    stringNumber = inputNumber.value     
    if(stringNumber.length>15)
    e.preventDefault();
  });



  var inputCVC = document.querySelector("#cvc");
  var cvc = document.getElementById("CVC");
  inputCVC.addEventListener("focusout", function(e) {    
    cvc.innerText = inputCVC.value;
});

  inputCVC.addEventListener("keypress", function(e) {    
     var valCVC = inputCVC.value;
     if(valCVC.length>2)
     e.preventDefault();
  });




  var inputMM = document.querySelector("#validationCustomDateMM");    
    inputMM.addEventListener("focusout", function(e) {    
      if(inputMM.value<=9)
      inputMM.value = "0"+inputMM.value;
  });

    inputMM.addEventListener("keypress", function(e) { 
      var valMM = inputMM.value;   
      if(valMM.length>1)
      e.preventDefault();
  });

    var inputYY = document.querySelector("#validationCustomDateYY");    
    inputYY.addEventListener("keypress", function(e) { 
      var valYY = inputYY.value;   
      if(valYY.length>1)
      e.preventDefault();
  });





  

   