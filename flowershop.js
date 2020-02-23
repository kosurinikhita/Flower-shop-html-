var status = true;

function CheckBlankSpace()
{
   if(document.getElementById("Cardnumber").value == "")
   {
   
      card.innerHTML = "*Please enter cardNumber";
       
       //document.getElementById('CardNumber').style.borderColor="red";
       
   }
   else{
      card.innerHTML = "";
   }
   
   if(document.getElementById('Please Select').value == "")
   {
      // alert('please enter date');
       //document.getElementById('Please Select').style.borderColor="red";
       time.innerHTML = "*Please enter expire date";
       
   }
   
   //if(document.getElementById('Please Selects').value == "")
   //{
       //alert('please enter year');
       //document.getElementById('Please Selects').style.borderColor="red";
      /* card.innerHTML = "please enter cardNumber";
       return false;
   }*/
   
   if(document.getElementById('Security').value == "")
   {
       //alert('please enter your security code ');
       //document.getElementById('Security').style.borderColor="red";
       security.innerHTML = "*Please enter security code";

      
   }
   if(document.getElementById('CardHolder').value == "")
   {
      // alert('please enter your cardholder name ');
       //document.getElementById('CardHolder').style.borderColor="red";
       holderName.innerHTML = "*Please enter cardholderName";
       
   }
   if(document.getElementById('Address').value == "")
   {
       //alert('please enter your Address1 ');
       //document.getElementById('Address').style.borderColor="red";
       location1.innerHTML = "*Please enter Address1";
      
   }
   
   if(document.getElementById('Town').value == "")
   {
      // alert('please enter your Town/City ');
       //document.getElementById('Town').style.borderColor="red";
       townId.innerHTML = "*Please enter Town/City";
       
   }
  
  
   if(document.getElementById('PostalCode').value == "")
   {
       //alert('please enter your postalcode ');
       //document.getElementById('PostalCode').style.borderColor="red";
       postCode.innerHTML = "*Please enter PostalCode";
      
   }
   if(document.getElementById('EmailAddress').value == "")
   {
       //alert('please enter your postalcode ');
       //document.getElementById('PostalCode').style.borderColor="red";
       postCode.innerHTML = "*Please enter EmailAddress";
      
   }
   
   
}

function CheckCardNumber()
        {
   

         var number = document.getElementById("Cardnumber").value;
         if(number.length !=16) {
             card.innerHTML = "*Please Enter 16 digit number";
         
         } 
         else {
            card.innerHTML = "";   
         
         }
    
        }

        function CheckDate()
        {

             if(document.getElementById('Please Select').value == "")
             {
                // alert('please enter date');
                 //document.getElementById('Please Select').style.borderColor="red";
                 time.innerHTML = "*Please enter expire date";
                
             }
             else
             {
                time.innerHTML = "";
             }
       }
             //if(document.getElementById('Please Selects').value == "")
             //{
                 //alert('please enter year');
                 //document.getElementById('Please Selects').style.borderColor="red";
                /* card.innerHTML = "please enter cardNumber";
                 return false;
             }*/
             
             function CheckSecurityCode()
             {
             var number = document.getElementById("Cardnumber").value;
             if(number.length!=4)
             {
                 //alert('please enter your security code ');
                 //document.getElementById('Security').style.borderColor="red";
                 security.innerHTML = "*Please 4 digits security code";

             
             }
             else {
               security.innerHTML = "";   
            }
       
             
            }
            function CheckName()
            { var pattern = /^[a-zA-Z ]+$/;
               var name =document.getElementById('CardHolder').value
             if(!name.match(pattern))
             {
                 holderName.innerHTML = "*Please enter valid cardholderName";
                 
             }
             else{
                holderName.innerHTML = "";
             }
             
            }
           /* function CheckAddress()
            {
             if(document.getElementById('Address').value == "")
             {
                 //alert('please enter your Address1 ');
                 //document.getElementById('Address').style.borderColor="red";
                 location1.innerHTML = "* please enter Address1";
                
             }
             else{
                location1.innerHTML = "";
             }
             
            }*/
/*function CheckLocation()
{
             if(document.getElementById('Address2').value == "")
             {
                 //alert('please enter your Address2 ');
                 //document.getElementById('Address2').style.borderColor="red";
                 location2.innerHTML = "please enter Address2";
                
             }
             else{
                location2.innerHTML = "";
             }
            }
            function CheckPlace()
            {
             if(document.getElementById('Address3').value == "")
             {
                 //alert('please enter your Address3 ');
                 //document.getElementById('Address3').style.borderColor="red";
                 location3.innerHTML = "please enter Address3";
                 
             }
             else{
                location3.innerHTML = "";
             }
             
            }*/
            function CheckTown()
            {
               var name = document.getElementById('Town').value

               if(name !=  /^[a-zA-Z ]{2,30}$/)
               { // alert('please enter your Town/City ');
                 //document.getElementById('Town').style.borderColor="red";
                 townId.innerHTML = "*Please enter  Town/City";
                 
             }
             else{
                townId.innerHTML = "";
             }
             
            }
            /*function CheckRegion()
            {
               var name =document.getElementById('CardHolder').value
             if(name !=  /^[a-zA-Z ]{2,30}$/)
             {
                 //alert('please enter your Region ');
                 //document.getElementById('Region').style.borderColor="red";
                 region.innerHTML = "please enter region";
                
             
                }
                else{
                    region.innerHTML = "";
                 }
                 
            }*/
            function CheckTelephone()
            {
               var number = document.getElementById("Telephone").value;
             if(number !=10)
             {
                 //alert('please enter your number');
                 //document.getElementById('Telephones').style.borderColor="red";
                 telephone.innerHTML = "*Please enter Telephone number with 10 digits";
                
             }
             else{
                telephone.innerHTML = "";
             }
             
            }
            function CheckZipCode()
            {
               var number = document.getElementById("PostalCode").value

             if(number !=6)
             {
                 //alert('please enter your postalcode ');
                 //document.getElementById('PostalCode').style.borderColor="red";
                 postCode.innerHTML = "*Please enter valid PostalCode";
                 
             }
             else{
                postCode.innerHTML = "";
             }
             
            }
        /* function CheckCountry()
         {
            var name =document.getElementById('country select').value
            if(name !=  /^[a-zA-Z ]{2,30}$/)
            {
                 //alert('please choose your country ');
                // document.getElementById('country select').style.borderColor="red";
                country.innerHTML = "please enter  valid country";
                 
             }
             else{
                country.innerHTML = "";
             }
             
            }*/
            function CheckFax()
            {
               var number = document.getElementById("Fax").value;

             if(number !=10)
             {
                 //alert('please enter your Fax ');
                 //document.getElementById('Fax').style.borderColor="red";
                 fax.innerHTML = "*Please enter valid Fax";
                
             }
             else{
                fax.innerHTML = "";
             }
             
            }
            function CheckEmailId()
            {
               var EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

             if (EmailPattern.test("EmailAddress"))
  {
   emailId.innerHTML = "*Please enter valid EmailId";
  }
  else{
     
   emailId.innerHTML = "";
  }
    //alert("You have entered an invalid email address!")
    //document.getElementById('EmailAddress').style.borderColor="red";
   
}