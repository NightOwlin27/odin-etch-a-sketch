const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const promptBtn = document.querySelector(".prompt.btn");

const rows = `<div class='row'></div>
                <div class='boxes'></div>`;

// const boxRows = [
//         `
//         <div class="row one">
//           <div class="square 1"></div>
//           <div class="square 2"></div>
//           <div class="square 3"></div>
//           <div class="square 4"></div>
//         </div>`,
//         `
//         <div class="row two">
//           <div class="square 5"></div>
//           <div class="square 6"></div>
//           <div class="square 7"></div>
//           <div class="square 8"></div>
//         </div>`,
//         `
//         <div class="row three">
//           <div class="square 9"></div>
//           <div class="square 10"></div>
//           <div class="square 11"></div>
//           <div class="square 12"></div>
//         </div>`,
//         `
//         <div class="row four">
//           <div class="square 13"></div>
//           <div class="square 14"></div>
//           <div class="square 15"></div>
//           <div class="square 16"></div>
//         </div>`

// ];

const boxRows = [];


// btn.addEventListener ('click', function event () {

//         for (let i=0; i < boxRows.length; i++) {
//                 container.innerHTML += boxRows[i];
//         }

//         const squares = document.querySelectorAll(".square");

//         squares.forEach(square => {

//             square.addEventListener('mouseenter', function() {
//             this.style.backgroundColor = 'green'
//         });
    
//             square.addEventListener('mouseleave', function() {
//             this.style.backgroundColor = 'blue'
//         }); 

//      });
// });
// Might have to separate the mouse in/out event listeners into their own function later.
promptBtn.addEventListener('click', function () {
        let input = Number(prompt('How many boxes per side would you like?'));
        

        if (input < 100) {
          for (let i = 0; i < input; i++) {
              boxRows.push(rows);
          }
          boxRows.forEach(row => {
            container.innerHTML += row;
          });
          
        } else if (input > 100) {
                alert("Unit maximum is 100")
                return;
        }
})
// .for each
// .length vs .value
