const button = document.querySelectorAll('.but');
const slides = document.querySelectorAll('.a');
const wraper = document.querySelector('.wraper');

let position = 0;
let count = wraper.children.length;

button.forEach(item => {
  item.addEventListener('click', (event)=>{
    
    if(event.target.textContent === 'next'){
     let dir = true;
      moveLastChild (dir);
    }else{
      let dir = false;
      moveLastChild (dir);
    }
  })
})

function moveLastChild (dir) {
  
if(dir)  {
   const newElem = wraper.children[0];
   wraper.append(newElem);
}else{

  const newElem = wraper.children[count-1];
   wraper.prepend(newElem);
}
 
  
}


