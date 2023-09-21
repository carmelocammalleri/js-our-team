const container= document.getElementById('container-card');

//1. array oggetti con info personale
const team = 
[
  {
    name: 'Wayne Bernett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'wayne-barnett-founder-ceo.jpg'
  }
]

//2. visualizzazione info
for(let person of team){
 /* console.log(person.image);
  console.log(person.name);
  console.log(person.role);
  console.log('==================')*/
  container.innerHTML += 
  `<div><span>${person.image}</span> <br>
  <span>${person.name}</span> <br> 
  <span>${person.role}</span></div>`
}

//3. creare card per inserimento dati
function addCard() {
  
    const cards = document.createElement('div');
    container.classList.add('d-flex', 'flex-wrap')
    cards.classList.add('card', 'd-flex',  'col-4');
    container.append(cards);
}