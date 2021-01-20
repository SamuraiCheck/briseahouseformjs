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
//function firstOther() { 
//  if (document.getElementById('first__other-select').value == "other") {
//    document.getElementById('first__other-select').style.cssText = "display: none;"
//    document.getElementById('first__other-container').style.cssText = "display: block;"
//  }
 
//  if (document.getElementById('first__other-select').value == "house") {
//    document.getElementById('first__other-select').style.cssText = "display: none;"
//    document.getElementById('house-form').style.cssText = "display: block;"
//  }
  
//  if (document.getElementById('first__other-select').value == "land-form") {
//    console.log('land')
//    document.getElementById('first__other-select').style.cssText = "display: none;"
//    document.getElementById('land-form').style.cssText = "display: block;"
//  }
  
//  else {

// }
//}

//FIRST SUBMIT CLICK
function firstSubmit() {
  document.getElementById('first__other-container').style.cssText = "display: block;"
} 
//SECOND SUBMIT CLICK
function secondSubmit() {
    if ($('#first__other').val().length !=0) {
      document.getElementById('second__other-container').style.cssText = "display: block;"
      document.getElementById('first__other').style.cssText = "display: none;"
      document.getElementById('second__form-button').style.cssText = "display: none;"
    document.getElementById('error').style.cssText = "display: none;"
   }
   
  else {
    document.getElementById('error').style.cssText = "display: block;"
  }
}

function homeMore() {
   if(
   $('#name-home').val().length != 0 && $('#phone-home').val().length != 0 && $('#email-home').val().length != 0 && $('#address-home').val().length != 0
   ) {
    document.getElementById('third__other-container').style.cssText = "display: none;"
    document.getElementById('property-type').style.cssText = "display: block;"
    document.getElementById('error').style.cssText = "display: none;"
   }
   
  else {
    document.getElementById('error').style.cssText = "display: block;"
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
    document.getElementById('error').style.cssText = "display: none;"
  }
  
  if (document.getElementById('not__need-select-second').value == "rented-lot") {
  document.getElementById('not__need-input-container').style.cssText = "display: block;"
    document.getElementById('not__need-select-second').style.cssText = "display: none;"
    document.getElementById('space__rent-input').style.cssText = "display: block;"  
    document.getElementById('home__input__form-button').style.cssText = "display: block;"
    document.getElementById('error').style.cssText = "display: none;"
  }
}

function notNeedVerification() {
  if (document.getElementById('iot__rent-input').value != 0){
    document.getElementById('property-information').style.cssText = "display: block;"
    document.getElementById('not__need-input-container').style.cssText = "display: none;"
    document.getElementById('home__input__form-button').style.cssText = "display: none;"
    document.getElementById('error').style.cssText = "display: none;"
  }
  if (document.getElementById('space__rent-input').value != 0){
    document.getElementById('property-information').style.cssText = "display: block;"
    document.getElementById('not__need-input-container').style.cssText = "display: none;"
    document.getElementById('home__input__form-button').style.cssText = "display: none;"
    document.getElementById('error').style.cssText = "display: none;"
  }
  
  if (document.getElementById('need-to-be-moved').value != 0){
    document.getElementById('property-information').style.cssText = "display: block;"
    document.getElementById('not__need-input-container').style.cssText = "display: none;"
    document.getElementById('home__input__form-button').style.cssText = "display: none;"
    document.getElementById('error').style.cssText = "display: none;"
   }
   
  else {
     document.getElementById('error').style.cssText = "display: block;"
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
      document.getElementById('error').style.cssText = "display: none;"
  }
  
  else {
      document.getElementById('home-note').style.cssText = "display: none;"
      document.getElementById('error').style.cssText = "display: block;"
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


// DIVIDER

document.getElementById('land-more').setAttribute("onclick", "landMore()");
document.getElementById('land-size').setAttribute("onchange", "landSize()");
document.getElementById('address-land').setAttribute("onchange", "addressLand()");
document.getElementById('multi-family-more').setAttribute("onclick", "multiFamilyMore()");
document.getElementById('multi__family-property-type').setAttribute("onchange", "multiFamilyPropertyType()");
document.getElementById('multi-family-other-button').setAttribute("onclick", "multyFamilyOtherVerification()");
document.getElementById('multi-family-units-button').setAttribute("onclick", "multyFamilyUnitsVerification()");
document.getElementById('multi-family-average-rent-button').setAttribute("onclick", "multyFamilyAverageRentVerification()");
document.getElementById('desired-price-button').setAttribute("onclick", "desiredPriceVerification()");
document.getElementById('mf-loan-select').setAttribute("onchange", "mfLoanSelect()");
document.getElementById('mf-loan-button').setAttribute("onclick", "mfLoanVerification()");
document.getElementById('mf-reason').setAttribute("onchange", "mfReason()");
document.getElementById('mf-hear-about').setAttribute("onchange", "mfHear()");
document.getElementById('mf-reason-submit').setAttribute("onclick", "mfReasonInput()");

function firstOther() { 
  if (document.getElementById('first__other-select').value == "other") {
    document.getElementById('first__other-select').style.cssText = "display: none;"
    document.getElementById('first__other-container').style.cssText = "display: block;"
  }
  
  if (document.getElementById('first__other-select').value == "house") {
    document.getElementById('first__other-select').style.cssText = "display: none;"
    document.getElementById('house-form').style.cssText = "display: block;"
  }
  
  if (document.getElementById('first__other-select').value == "land-form") {
    document.getElementById('first__other-select').style.cssText = "display: none;"
    document.getElementById('land-form').style.cssText = "display: block;"
  }
  
  if (document.getElementById('first__other-select').value == "multi-family-form") {
		document.getElementById('first__other-select').style.cssText = "display: none;"
    document.getElementById('multi-family-form').style.cssText = "display: block;"
  }
  
  else {

  }
}

function homeFirstDropdown() {
  if (document.getElementById('property-type').value == "singlefamily") {
    console.log("show info")
    document.getElementById('property-type').style.cssText = "display: none;"
    document.getElementById('property-information').style.cssText = "display: block;"
  }
 
  if (document.getElementById('property-type').value == "townhome") {
    document.getElementById('property-type').style.cssText = "display: none;"
    document.getElementById('property-information').style.cssText = "display: block;"
  }
  
    if (document.getElementById('property-type').value == "condo") {
    document.getElementById('property-type').style.cssText = "display: none;"
    document.getElementById('property-information').style.cssText = "display: block;"
  }
  
    if (document.getElementById('property-type').value == "manufactured-mobile") {
    document.getElementById('property-type').style.cssText = "display: none;"
    document.getElementById('not__need-select').style.cssText = "display: block;"
  }
}

function landMore() {
   if($('#name-land').val().length != 0 && $('#phone-land').val().length != 0 && $('#email-land').val().length != 0 && $('#address-land').val().length != 0) {
    document.getElementById('land__first-form').style.cssText = "display: none;"
    document.getElementById('land-size').style.cssText = "display: block;"
    document.getElementById('error').style.cssText = "display: none;"
   }
   
  else {
  	document.getElementById('error').style.cssText = "display: block;"
  }
}

function landFirstDropdown() {  
  if (document.getElementById('property-type-land').value == "other") {
    document.getElementById('property-type-land').style.cssText = "display: none;"
    document.getElementById('land-size').style.cssText = "display: block;"
	}
}

function addressLand() {
	if (document.getElementById('address-land').value == "yes") {
  	document.getElementById('address-land').style.cssText = "display: none;"
    document.getElementById('address-land-input').style.cssText = "display: block;"
  }
  
  else {
  	document.getElementById('address-land').style.cssText = "display: none;"
    document.getElementById('tax-account-number').style.cssText = "display: block;"
    document.getElementById('legal-description').style.cssText = "display: block;"
  }
}

function landSize() {  
  if (document.getElementById('land-size').value != 0) {
    document.getElementById('land-size').style.cssText = "display: none;"
    document.getElementById('land-restrictions').style.cssText = "display: block;"
    document.getElementById('land-submit').style.cssText = "display: block;"
  	document.getElementById('error').style.cssText = "display: none;"
  }
  
  else {
  	document.getElementById('error').style.cssText = "display: block;"
  }
}

function multiFamilyMore() {
   if($('#name-multi-family').val().length != 0 && $('#phone-multi-family').val().length != 0 && $('#email-multi-family').val().length != 0 && $('#address-multi-family').val().length != 0) {
    document.getElementById('multi-family-first-container').style.cssText = "display: none;"
    document.getElementById('multi__family-property-type').style.cssText = "display: block;"
    document.getElementById('error').style.cssText = "display: none;"
   }
   
   else {
   	document.getElementById('error').style.cssText = "display: block;"
   }
}

function multiFamilyPropertyType() {
	if (document.getElementById('multi__family-property-type').value == "other") {
  	document.getElementById('multi__family-property-type').style.cssText = "display: none;"
    document.getElementById('multi__family-property-input').style.cssText = "display: block;"
  }
  
  else {
  	document.getElementById('multi__family-property-type').style.cssText = "display: none;"
  	document.getElementById('multi__family-total-units').style.cssText = "display: block;" 
  }
}

function multyFamilyOtherVerification() {
	if (document.getElementById('mf-property-input').value != 0) {
    document.getElementById('multi__family-property-input').style.cssText = "display: none;"
 		document.getElementById('multi__family-total-units').style.cssText = "display: block;" 
  	document.getElementById('error').style.cssText = "display: none;"
  }
  
  else {
  	document.getElementById('error').style.cssText = "display: block;"
  }
}

function multyFamilyUnitsVerification() {
	if (document.getElementById('total-units').value != 0 && document.getElementById('total-units-occupied').value != 0) {
  	document.getElementById('multi__family-total-units').style.cssText = "display: none;"
    document.getElementById('average-rent-container').style.cssText = "display: block;"
  	document.getElementById('error').style.cssText = "display: none;"
  }
  
  else {
		document.getElementById('error').style.cssText = "display: block;"
  }
}

function multyFamilyAverageRentVerification() {
	if (document.getElementById('average-rent-input').value != 0) {
   	document.getElementById('average-rent-container').style.cssText = "display: none;"
    document.getElementById('mf-desired-price-container').style.cssText = "display: block;"
  	document.getElementById('error').style.cssText = "display: none;"
  }
  
  else {
  	document.getElementById('error').style.cssText = "display: block;"
  }
}

function desiredPriceVerification() {
  	document.getElementById('mf-desired-price-container').style.cssText = "display: none;"
    document.getElementById('mf-loan').style.cssText = "display: block;"
}

function mfLoanSelect() {
	if (document.getElementById('mf-loan-select').value == "yes") {
  	document.getElementById('mf-loan-input').style.cssText = "display: block;"
    document.getElementById('mf-loan-button').style.cssText = "display: block;"
  	document.getElementById('mf-loan-select').style.cssText = "display: none;"  
  }
  
	if (document.getElementById('mf-loan-select').value == "no") {
    document.getElementById('mf-loan').style.cssText = "display: none;" 
  	document.getElementById('mf-reason').style.cssText = "display: block;" 
  }
}

function mfLoanVerification() {
  	document.getElementById('mf-loan').style.cssText = "display: none;" 
    document.getElementById('mf-reason').style.cssText = "display: block;"   
}

function mfReason() {
	if (document.getElementById('mf-reason').value == "other") {
  	document.getElementById('mf-reason-other-input').style.cssText = "display: block;"
    document.getElementById('mf-reason-submit').style.cssText = "display: block;"
    document.getElementById('mf-reason').style.cssText = "display: none;"  
  }
  
  else {
  	document.getElementById('mf-hear-about').style.cssText = "display: block;"
    document.getElementById('mf-reason').style.cssText = "display: none;"
  }
}

function mfReasonInput() {
	document.getElementById('mf-reason-other-input').style.cssText = "display: none;"
  document.getElementById('mf-reason-submit').style.cssText = "display: none;"
  document.getElementById('mf-hear-about').style.cssText = "display: block;"
  document.getElementById('mf-submit').style.cssText = "display: block;"
}

function mfHear() {
	if (document.getElementById('mf-hear-about').value == "other") {
  	document.getElementById('mf-hear-about-input').style.cssText = "display: block;"
    document.getElementById('mf-hear-about').style.cssText = "display: none;"  
  }
  
  else {
  	
  }
}

