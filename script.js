const BOARD_SIZE = 576;
const styleSheets = document.styleSheets;
const board = document.getElementById('board');
const gridLabel = document.getElementById('grid-value');
const gridSlider = document.getElementById('grid-size');

let size = 16;
createBoard(size);

// create etch-a-sketch board
function createBoard(size)
{
    // update box class to proper height and width
    let newSize = `${BOARD_SIZE / size}` + "px";
    for (const sheet of styleSheets)
    {
        for (const rule of sheet.cssRules)
        {
            if (rule.selectorText === '.box')
            {
                rule.style.height = `${newSize}`;
                rule.style.width = `${newSize}`;
            }
        }
    }    

    // populate board with boxes
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

    // add mouseover even listeners
    let allBoxElements = document.querySelectorAll('.box');
    addMouseOver(allBoxElements);
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
function addMouseOver(allBoxElements)
{
    allBoxElements.forEach((box) => {
        box.addEventListener("mouseover", (box) => {
            box.target.style.backgroundColor = 'green';
        });
    });
}

// update grid label
function updateGridLabel()
{
    gridLabel.innerHTML = `${gridSlider.value} X ${gridSlider.value}`;
}

// update board etch-a-sketch board
function updateGridSize()
{
    board.innerHTML = ``;
    createBoard(parseInt(gridSlider.value));
}
