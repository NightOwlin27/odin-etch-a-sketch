const container = document.querySelector(".container");
const promptBtn = document.querySelector(".prompt.btn");
const clearBtn = document.querySelector(".clear.btn");

const boxRows = [];

promptBtn.addEventListener('click', function () {

  let input = Number(prompt('How many boxes per side would you like?'));

  if (input <= 100) {

    container.innerHTML = '';

    for (let i = 0; i < input; i++) {

      let row = document.createElement('div');
      row.className = 'rows';
      container.appendChild(row);
      boxRows.push(row); 

    }; 

      boxRows.forEach(row => { 

        for (let i = 0; i < input; i++) {

          let box = document.createElement('div');
          box.className = 'boxes';
          row.appendChild(box);

      };
    });

      getStyles();

  } else if (input > 100) {
          alert("Unit maximum is 100");
          return;
  };
});

clearBtn.addEventListener('click', function () {

  const boxes = document.querySelectorAll(".boxes");

  boxes.forEach(box => {

    box.style.backgroundColor = '';
    box.style.border = '1px solid rgb(28, 25, 25)';
    box.style.borderRadius = '10px';
    box.style.opacity = '1';
    });

    getStyles();
    
  });

function getStyles () {

  const boxes = document.querySelectorAll(".boxes");

      boxes.forEach(box => {

        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)})`;

          box.addEventListener('mouseenter', function() {
          this.style.backgroundColor = 'white';
      });
    
          box.addEventListener('mouseleave', function() {
          this.style.backgroundColor = randomColor;
          this.style.opacity += '.1';
      }); 
    });
  };