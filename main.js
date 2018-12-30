const contain = document.querySelector('#container');
const resetting = document.querySelector('#refresh');
const w = 480;
const h = 960;




// function that builds a grid in the "container"
let grid;

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

// document.getElementById('refresh').addEventListener('click', reset());
resetting.addEventListener('click', () =>{
    console.log('its working');
    reset();
})
function reset(){
    let children = document.querySelector('body');
    children.removeChild(children.childNodes[0]);
    // let gridSize = prompt("please input the of grids", "16");
    // if(gridSize> 16){
    //     alert('Error! More than valid Number, grid should be lesser than or equal to 16');
    // }else{
    //     createGrid(gridSize);
    // }
   
    }
  
