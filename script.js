const board = document.getElementById('board');

let size = 16;
createBoard(size);

// create etch-a-sketch board
function createBoard (size)
{
    for (let i = 1; i != size + 1; i++)
    {
        board.innerHTML += `<div id="row-${i}" class="row-container"></div>`
        let row = document.getElementById(`row-${i}`);
    
        for (let k = 1; k != size + 1; k++)
        {
            row.innerHTML += `<div class="box" id="col-${k}"></div>`;
            let boxElement = document.getElementById(`row-${i}`);
            addBorder(boxElement, i, k, size);
        }
    }

    let allBoxElements = document.querySelectorAll('.box');
    addMouseHover(allBoxElements);
}

// add border to board boxes if necessary
function addBorder(boxElement, i, k, size)
{
    if (i === 1)
        boxElement.classList.add("top-border");

    if (i === size)
        boxElement.classList.add("bottom-border");

    if (k === 1)        
        boxElement.classList.add("right-border");

    if (k === size)
        boxElement.classList.add("left-border");
}

// add event listeners to each box
function addMouseHover(allBoxElements)
{
    allBoxElements.forEach((box) => {
        box.addEventListener("mouseover", (box) => {
            box.target.style.backgroundColor = 'green';
        });
    });
}
