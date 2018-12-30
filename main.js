const contain = document.querySelector('#container');
const resetting = document.querySelector('#refresh');
const w = 480;
const h = 960;




// function that builds a grid in the "container"
let grid;
let contain2;

createGrid(16)

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
           grid = document.createElement('div');
           grid.classList.add('grid');
           contain.appendChild(grid);
           grid.style.width = w/x + 'px';
           grid.style.height = w/x + 'px';
           
    };
   
   };
}



document.querySelector('.grid').addEventListener('mouseover', change());

function change(){
    let move = contain ;
    
        move.addEventListener('mouseover', (e) =>{
            e.target.style.background = 'blue';
        })
}

resetting.addEventListener('click', () =>{
    console.log('its working');
    reset();
})
function reset(){
    window.location.reload();
    
   
    }
