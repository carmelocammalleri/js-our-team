const container= document.getElementById('container-card');

//1. array oggetti con info personale
const team = 
[
  {
    name: 'Wayne Bernett',
    role: 'Founder & CEO',
    image: '<img src="./img/wayne-barnett-founder-ceo.jpg" alt="wayne">'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: '<img src="./img/angela-caroll-chief-editor.jpg" alt="carrol">'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: '<img src="./img/walter-gordon-office-manager.jpg" alt="walter">'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: '<img src="./img/angela-lopez-social-media-manager.jpg" alt="angela">'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: '<img src="./img/scott-estrada-developer.jpg" alt="scott">'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: '<img src="./img/barbara-ramos-graphic-designer.jpg" alt="barbara">'
  }
]

//2. visualizzazione info
for(let person of team){
 /* console.log(person.image);
  console.log(person.name);
  console.log(person.role);
  console.log('==================')*/
  addCard(person)
}

//3. creare card per inserimento dati
function addCard(info) {
  
    const cards = document.createElement('div');
    container.classList.add('d-flex', 'flex-wrap')
    cards.classList.add('card', 'd-flex',  'col-4', 'text-center');

    //4. stampa
    cards.innerHTML = 
    `<span>${info.image}</span> <br>
    <span class="fw-bold fs-5">${info.name}</span> <br> 
    <span class="fs-6">${info.role}</span>`

    container.append(cards);
}