let cardTitles = document.querySelectorAll('.card-title')
let cardText = document.querySelectorAll('.text-card')
let cardArrows = document.querySelectorAll('.arrow-card')
let faqOpenCards = document.querySelectorAll('.faq-open')

console.log(cardTitles)
console.log(cardText)
console.log(cardArrows)

let selectedIndex = -1

for (let index = 0; index < faqOpenCards.length; index++) {
  const title = cardTitles[index]
  const arrow = cardArrows[index];
  const faqCard = faqOpenCards[index];
  const text = cardText[index]
  faqCard.addEventListener('click', function(){
    title.classList.toggle('font-bold')
    arrow.classList.toggle('rotate-180')
    text.classList.toggle('hidden')
    if ( arrow.classList.contains('rotate-180')){
      console.log('primerif')
      if(selectedIndex >= 0 && selectedIndex !== index){
        cardTitles[selectedIndex].classList.toggle('font-bold')
        cardText[selectedIndex].classList.toggle('hidden')
        cardArrows[selectedIndex].classList.toggle('rotate-180')
        console.log('segif')
    }
      selectedIndex = index
    }
    else{
      selectedIndex = -1
    }  })
 
  
}