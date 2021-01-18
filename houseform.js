// ADD TRIGGERS
document.getElementById('first__other-select').setAttribute("onchange", "firstOther()");
document.getElementById('first__form-button').setAttribute("onclick", "firstSubmit()");
document.getElementById('second__form-button').setAttribute("onclick", "secondSubmit()");
document.getElementById('home-more').setAttribute("onclick", "homeMore()");
document.getElementById('property-type').setAttribute("onchange", "homeFirstDropdown()");
document.getElementById('not__need-select').setAttribute("onchange", "homeSecondDropdown()");
document.getElementById('not__need-select-second').setAttribute("onchange", "notNeedSelect()");
document.getElementById('home__input__form-button').setAttribute("onclick", "notNeedVerification()");
document.getElementById('serial__number').setAttribute("onchange", "serialNumberVerification()");
document.getElementById('serial__number-verification').setAttribute("onclick", "serialNumberInputVerification()");
document.getElementById('home-loan').setAttribute("onchange", "homeLoanInputVerification()");
document.getElementById('reason__for-selling').setAttribute("onchange", "homeReason()");
document.getElementById('how__did-you-hear').setAttribute("onchange", "howDidYou()");
document.getElementById('repairs__issues').setAttribute("onchange", "homeRepairs()");
document.getElementById('hoa__select').setAttribute("onchange", "hoaShow()");

//FIRST SELECT VERIFICATE
function firstOther() { 
  if (document.getElementById('first__other-select').value == "other") {
    document.getElementById('first__other-select').style.cssText = "display: none;"
    document.getElementById('first__other-container').style.cssText = "display: block;"
  }
  
  if (document.getElementById('first__other-select').value == "house") {
    document.getElementById('first__other-select').style.cssText = "display: none;"
    document.getElementById('house-form').style.cssText = "display: block;"
  }  
  
  else {

  }
}

//FIRST SUBMIT CLICK
function firstSubmit() {
  document.getElementById('first__other-container').style.cssText = "display: block;"
} 
//SECOND SUBMIT CLICK
function secondSubmit() {
    if ($('#first__other').val().length !=0) {
      document.getElementById('second__other-container').style.cssText = "display: block";
      document.getElementById('first__other').style.cssText = "display: none";
      document.getElementById('second__form-button').style.cssText = "display: none";
  }
  else {}
}

function homeMore() {
   if(
   $('#name-home').val().length != 0 && $('#phone-home').val().length != 0 && $('#email-home').val().length != 0 && $('#address-home').val().length != 0
   ) {
    document.getElementById('third__other-container').style.cssText = "display: none";
    document.getElementById('property-type').style.cssText = "display: block";
   } 
  else {}
}

function homeFirstDropdown() {  
  if (document.getElementById('property-type').value == "single-family-home") {
    document.getElementById('property-type').style.cssText = "display: block;"
    document.getElementById('property-information').style.cssText = "display: none;"
  }
  
  if (document.getElementById('property-type').value == "townhome") {
    document.getElementById('property-type').style.cssText = "display: block;"
    document.getElementById('property-information').style.cssText = "display: none;"
  }
  
    if (document.getElementById('property-type').value == "condo") {
    document.getElementById('property-type').style.cssText = "display: block;"
    document.getElementById('property-information').style.cssText = "display: none;"
  }
  
    if (document.getElementById('property-type').value == "manufactured-mobile") {
    document.getElementById('property-type').style.cssText = "display: none;"
    document.getElementById('not__need-select').style.cssText = "display: block;"
  }
}

function homeSecondDropdown() { 
  if (document.getElementById('not__need-select').value == "manufactured-mobile-with-land") {
    document.getElementById('not__need-select').style.cssText = "display: none;"
    document.getElementById('property-information').style.cssText = "display: block;"
  }
  
  if (document.getElementById('not__need-select').value == "does-not-need-to-be-moved") {
    document.getElementById('not__need-select').style.cssText = "display: none;"
    document.getElementById('not__need-select-second').style.cssText = "display: block;"
  }
  
  if (document.getElementById('not__need-select').value == "needs-to-be-moved") {
      document.getElementById('not__need-select').style.cssText = "display: none;"
      document.getElementById('need-to-be-moved').style.cssText = "display: block;"
      document.getElementById('not__need-input-container').style.cssText = "display: block;"
      document.getElementById('home__input__form-button').style.cssText = "display: block;"
  }
  
    if (document.getElementById('not__need-select').value == "label-serial-number") {
        document.getElementById('not__need-select').style.cssText = "display: none;"
        document.getElementById('not__need-input-container').style.cssText = "display: block;"
        document.getElementById('serial__number-container').style.cssText = "display: block;"  
        }
}

function notNeedSelect() {
  if (document.getElementById('not__need-select-second').value == "home-mobile-park") {
    document.getElementById('not__need-select-second').style.cssText = "display: none;"
    document.getElementById('iot__rent-input').style.cssText = "display: block;" 
    document.getElementById('not__need-input-container').style.cssText = "display: block;"
    document.getElementById('home__input__form-button').style.cssText = "display: block;"
  }
  
  if (document.getElementById('not__need-select-second').value == "rented-lot") {
  document.getElementById('not__need-input-container').style.cssText = "display: block;"
    document.getElementById('not__need-select-second').style.cssText = "display: none;"
    document.getElementById('space__rent-input').style.cssText = "display: block;"  
    document.getElementById('home__input__form-button').style.cssText = "display: block;"
  }
  
  else {
  
  }
}

function notNeedVerification() {
  if (document.getElementById('iot__rent-input').value != 0){
    document.getElementById('property-information').style.cssText = "display: block;"
    document.getElementById('not__need-input-container').style.cssText = "display: none;"
    document.getElementById('home__input__form-button').style.cssText = "display: none;"
  }
  if (document.getElementById('space__rent-input').value != 0){
    document.getElementById('property-information').style.cssText = "display: block;"
    document.getElementById('not__need-input-container').style.cssText = "display: none;"
    document.getElementById('home__input__form-button').style.cssText = "display: none;"
  }
  
  if (document.getElementById('need-to-be-moved').value != 0){
    document.getElementById('property-information').style.cssText = "display: block;"
    document.getElementById('not__need-input-container').style.cssText = "display: none;"
    document.getElementById('home__input__form-button').style.cssText = "display: none;"
  }
  
  else {
  
  }
}

function serialNumberVerification() {
  if (document.getElementById('serial__number').value == "yes") {
    document.getElementById('serial__number-input').style.cssText = "display: block;"
    document.getElementById('serial__number-verification').style.cssText = "display: block;"
    document.getElementById('serial__number').style.cssText = "display: none;"
    document.getElementById('home-note').style.cssText = "display: none;"
}
  
  else {
      document.getElementById('property-information').style.cssText = "display: block;"
      document.getElementById('serial__number').style.cssText = "display: none;"
      document.getElementById('home-note').style.cssText = "display: none;"
  }
} 

function serialNumberInputVerification() {
  if (document.getElementById('serial__number-input').value != 0) {
      document.getElementById('serial__number-container').style.cssText = "display: none;"
      document.getElementById('property-information').style.cssText = "display: block;"
      document.getElementById('home-note').style.cssText = "display: none;"
  }
  
  else {
      document.getElementById('home-note').style.cssText = "display: none;"
  }
}

function homeLoanInputVerification() {
  if (document.getElementById('home-loan').value == "yes") {
      document.getElementById('home-loan-input').style.cssText = "display: block;"
      document.getElementById('home-loan').style.cssText = "display: none;"
  }
  
  else {
  
  }
}

function homeReason() {
  if(document.getElementById('reason__for-selling').value == "other") {
    document.getElementById('reason__for-selling-other').style.cssText = "display: block;"
    document.getElementById('reason__for-selling').style.cssText = "display: none;" 
  }
  
  else {
  
  }
}

function homeRepairs() {
  if (document.getElementById('repairs__issues').value == "yes") {
    document.getElementById('repairs__issues-input').style.cssText = "display: block;"
    document.getElementById('repairs__issues').style.cssText = "display: none;" 
  }
  
  else {
  
  }
}

function hoaShow() {
  if (document.getElementById('hoa__select').value == "yes") {
    document.getElementById('hoa__name').style.cssText = "display: block;"
    document.getElementById('hoa__dues').style.cssText = "display: block;"
    document.getElementById('hoa__frequency').style.cssText = "display: block;"
    document.getElementById('hoa__select').style.cssText = "display: none;" 
  }
  
  else {
  
  }
}

function howDidYou() {
  if (document.getElementById('how__did-you-hear').value == "referral") {
    document.getElementById('home__referral-input').style.cssText = "display: block;"
    document.getElementById('how__did-you-hear').style.cssText = "display: none;" 
  }
  if (document.getElementById('how__did-you-hear').value == "other") {
    document.getElementById('how__did-other-input').style.cssText = "display: block;"
    document.getElementById('how__did-you-hear').style.cssText = "display: none;"   
  }
}
