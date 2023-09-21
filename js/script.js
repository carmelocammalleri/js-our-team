const container= document.getElementsByClassName('container');


//1. array oggetti con info personale
const team = 
[
  {
    name: 'Wayne',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
  name: 'Gaspare',
  role: 'Founder & CEO',
  image: 'wayne-barnett-founder-ceo.jpg'
  }
]

//2. visualizzazione info
for(let person of team){
  console.log(person.image);
  console.log(person.name);
  console.log(person.role);
  console.log('==================')
}

//3. creare card per inserimento dati
function addCard() {
  let cards = document.createElement('div');
  cards.classList.add('card');
  container.append(cards)
}