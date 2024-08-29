 const getSeatId=document.getElementsByClassName('cart-btn');


for(const seatId of getSeatId ){
   seatId.addEventListener('click', function(event){
    
const seatName=event.target.innerText;
const seatCount=document.getElementById('seat-count')
if(seatCount.innerText >= 4){
  alert ( 'you can not add more than 4')
  return ;
}
const seatid2=document.createElement('div')
seatid2.classList.add("flex", "justify-between");

const addElement=document.getElementById('selected-id')
// here is the create elment where we will add some h1 tag 
const category=document.createElement('h1')
const priceValue=document.createElement('h1')
// here we will add 

category.innerText='economy ';
priceValue.innerText='550'
 const perSeatPrice=parseInt(priceValue.innerText)
 
 console.log('hi this is pappu', perSeatPrice)

const seatIds=document.createElement('h1');

seatIds.innerText=seatName;
seatid2.appendChild(seatIds),
seatid2.appendChild(category),
seatid2.appendChild(priceValue)
addElement.prepend(seatid2)
console.log(seatCount.innerText)
seatCount.innerText=parseInt(seatCount.innerText)+1

const cartCount= document.getElementById('cart-count')
console.log(seatCount.innerText)
cartCount.innerText=parseInt(cartCount.innerText)-1
// seatName.classList.add('bg-[#1DD100]')

const seat = event.target 
console.log('we will add background color',seat)
seat.classList.remove('bg-[#F7F8F8]')
seat.classList.add('bg-[#1DD100]')

updatedCost(perSeatPrice)

    } )

}

function updatedCost(value){
  
  const tricketPriceTotal=getConvertedValue('total-prices')
  console.log('this should be ', tricketPriceTotal)
  const costPrice= tricketPriceTotal+value
  
  setConvertedValue('total-prices',costPrice)
  setConvertedValue('grand-total',costPrice )

  }
  
function setConvertedValue(id, value ){
const setValue=document.getElementById(id)
 setValue.innerText=value

}

function getConvertedValue(id){
const price=document.getElementById(id).innerText
const convertedPrice=parseInt(price)
return convertedPrice

}

document.getElementById('next-button').addEventListener('click', function(event){
  event.preventDefault()
  const inputBox =document.getElementById('number-box')
  if( inputBox.value === '') {
    alert ('would you please help us to share your contact number ');
    return ;
  }
  else {
hiddenMainPage()
     confirmationSectionShow();

    }
  
  console.log('broous')
})



function hiddenMainPage() {
  const hiddenPage = document.getElementById("full-page");
  console.log(' is it working',hiddenPage )
  hiddenPage.classList.add("hidden");
}


function confirmationSectionShow(){
  const showConfirmationPage=document.getElementById("show-button")
  showConfirmationPage.classList.remove('hidden')
}