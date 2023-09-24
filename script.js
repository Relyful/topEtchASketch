const drawArea = document.querySelector('.drawArea');
const buttonko = document.querySelector('.buttonko');
const black = document.querySelector('.black');
const random = document.querySelector('.random');
const gray = document.querySelector('.gray');
let drawBox = document.querySelectorAll('.drawBox');
let divAmmount;
let userSize


buttonko.addEventListener('click', () => {
    userSize = prompt('What size of grid would you like?');
    (userSize > 100) ? userSize = 100 : "";
    divAmmount = userSize * userSize;
    drawGrid();
})



function drawGrid() {
    drawBox = document.querySelectorAll('.drawBox');

    drawBox.forEach(item => {
        item.remove();
    })

    
    for (let i = 0; i < divAmmount; i++) {
        const newDiv = document.createElement('div');
        let calcSize = 800/userSize;
        newDiv.style.height = `${calcSize}px`;
        newDiv.style.width = `${calcSize}px`;
        newDiv.classList.add('drawBox');   
        drawArea.appendChild(newDiv);
    }

    drawBox = document.querySelectorAll('.drawBox');
    drawBox.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = `black`;
        })
    })
}

random.addEventListener('click', () => {
    drawBox = document.querySelectorAll('.drawBox');
    drawBox.forEach(item => {
        drawBox.forEach(item => {
            item.remove();
        })})

        userSize = prompt('What size of grid would you like?');
        (userSize > 100) ? userSize = 100 : "";
        divAmmount = userSize * userSize;

        for (let i = 0; i < divAmmount; i++) {
            const newDiv = document.createElement('div');
            let calcSize = 800/userSize;
            newDiv.style.height = `${calcSize}px`;
            newDiv.style.width = `${calcSize}px`;
            newDiv.classList.add('drawBox');   
            drawArea.appendChild(newDiv);
        }
       
        drawBox = document.querySelectorAll('.drawBox');
        drawBox.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        })
    })
})

gray.addEventListener('click', () => {
    drawBox = document.querySelectorAll('.drawBox');
    drawBox.forEach(item => {
        drawBox.forEach(item => {
            item.remove();
        })})

        userSize = prompt('What size of grid would you like?');
        (userSize > 100) ? userSize = 100 : "";
        divAmmount = userSize * userSize;

        for (let i = 0; i < divAmmount; i++) {
            const newDiv = document.createElement('div');
            let calcSize = 800/userSize;
            newDiv.style.height = `${calcSize}px`;
            newDiv.style.width = `${calcSize}px`;
            newDiv.style.backgroundColor = 'black';
            newDiv.style.opacity = 0.0;
            newDiv.classList.add('drawBox');   
            drawArea.appendChild(newDiv);
        }
       
        drawBox = document.querySelectorAll('.drawBox');
        drawBox.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
        })
    })
})