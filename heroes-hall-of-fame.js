const spanCounter = document.querySelector('.counter');
const inputName = document.querySelector('.inputName');
const inputPowerCount = document.querySelector('.inputPowerCount');
const addButton = document.querySelector('.add');
let heroName,powerCount;
const heroes = [];

class Hero{   
    #powerCount = 0;
    constructor(name,powerCount){
        this.name = name;
        this.#powerCount = powerCount;
    }

    getCurrentPowerCount(){
        return this.#powerCount;
    }

    train(){
        this.#powerCount++;
    }
}

const onInputChange = (val, option) => {
    switch (option) {
        case 'name':
            heroName = val;
        break;

        case 'powerCount':
            powerCount = val;
        break;
      }
}

addButton.addEventListener('click', onHeroAdd);

const gethero = (name, powerCount) => {
    let hero = new Hero(name, powerCount);
    return hero;
}


function onHeroAdd(){
     let hero = gethero(heroName, powerCount);
    heroes.push(hero);
    spanCounter.innerHTML = `${heroes.length}`; 
    print_hall_of_fame(); 
}


const print_hall_of_fame = () => {
    const divList = document.querySelector('.list');
    divList.innerHTML = '';

    heroes.forEach((hero,index) => {
        const div = document.createElement('div');
        div.classList.add('hero');
        const spanHero = document.createElement('p');
        const buttonPowerUp = document.createElement('button');
        buttonPowerUp.classList.add('powerUp');
        const buttonDelete = document.createElement('button');
        spanHero.innerHTML = `Name: ${hero.name} , PowerCount: ${hero.getCurrentPowerCount()}`;
        buttonPowerUp.innerHTML = `Power Up Hero`;
        buttonDelete.innerHTML = `Delete Hero`;
        div.appendChild(spanHero);
        div.appendChild(buttonPowerUp);
        div.appendChild(buttonDelete);
        divList.appendChild(div);

        buttonPowerUp.addEventListener('click', function(){
            hero.train();
            print_hall_of_fame();
        })
        buttonDelete.addEventListener('click', function(){
            heroes.splice(index,1);
            spanCounter.innerHTML = `${heroes.length}`; 
            print_hall_of_fame();
        })
    })


}







