const drawArea = document.querySelector('.drawArea');
const buttonko = document.querySelector('.buttonko');
let divAmmount;
let userSize


buttonko.addEventListener('click', () => {
    userSize = prompt('What size of grid would you like?');
    (userSize > 100) ? userSize = 100 : "";
    divAmmount = userSize * userSize;
    drawGrid();
})



function drawGrid() {
    let drawBox = document.querySelectorAll('.drawBox');

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
            e.target.style.backgroundColor = 'black';
        })
    })
}