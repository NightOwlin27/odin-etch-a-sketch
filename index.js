const container = document.querySelector(".container");
const promptBtn = document.querySelector(".prompt.btn");
const clearBtn = document.querySelector(".clear.btn");

const boxRows = [];


clearBtn.addEventListener('click', function () {

  const squares = document.querySelectorAll(".boxes");

  squares.forEach(square => {

    square.style.backgroundColor = '';

    });
  });

function getStyles () {

  const squares = document.querySelectorAll(".boxes");

      squares.forEach(square => {

          square.addEventListener('mouseenter', function() {
          this.style.backgroundColor = 'green'
      });
    
          square.addEventListener('mouseleave', function() {
          this.style.backgroundColor = 'blue'
      }); 
// Review diff between mouse leave/enter vs in/out
    });
  };

// Might have to separate the mouse in/out event listeners into their own function later.

promptBtn.addEventListener('click', function () {

  let input = Number(prompt('How many boxes per side would you like?'));

  if (input <= 100) {

    container.innerHTML = '';

    for (let i = 0; i < input; i++) {

      let row = document.createElement('div');
      row.className = 'rows';
      container.appendChild(row);
      boxRows.push(row); 

    } 

      boxRows.forEach(row => { 

        for (let i = 0; i < input; i++) {

          let box = document.createElement('div');
          box.className = 'boxes';
          row.appendChild(box);

      }

    });

      getStyles();

  } else if (input > 100) {
          alert("Unit maximum is 100");
          return;
  }
});