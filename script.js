const board = document.querySelector('#board');

//initial size;
reset(8);


document.querySelector("#reset").addEventListener('click', ()=> {
    let size = prompt("Enter size");

    if(size >100) {
        size = 100;
    }

    if (size < 4) {
        size = 4;
    }

    reset(size);
});

function reset(size) {
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let pixels = board.querySelectorAll('div');
    pixels.forEach(pixel => board.removeChild(pixel));



    for(let i=0; i<size*size; i++) {
        let div = document.createElement('div');
        div.classList.add('pixel');
        div.setAttribute('data-alpha', '0');
        
        div.addEventListener('mouseover', event => {
            let alpha = Number(event.target.getAttribute('data-alpha'));
            if(alpha < 1) {
                alpha += 0.1;
                event.target.setAttribute('data-alpha', alpha);
            }
            event.target.style.backgroundColor = `rgb(0,0,0,${alpha})`;
        });

        board.appendChild(div);
    }
}

