const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const promptBtn = document.querySelector(".btn");


const boxRows = [
        `
        <div class="row one">
          <div class="square 1"></div>
          <div class="square 2"></div>
          <div class="square 3"></div>
          <div class="square 4"></div>
        </div>`,
        `
        <div class="row two">
          <div class="square 5"></div>
          <div class="square 6"></div>
          <div class="square 7"></div>
          <div class="square 8"></div>
        </div>`,
        `
        <div class="row three">
          <div class="square 9"></div>
          <div class="square 10"></div>
          <div class="square 11"></div>
          <div class="square 12"></div>
        </div>`,
        `
        <div class="row four">
          <div class="square 13"></div>
          <div class="square 14"></div>
          <div class="square 15"></div>
          <div class="square 16"></div>
        </div>`

];


btn.addEventListener ('click', function event () {

        for (let i=0; i < boxRows.length; i++) {
                container.innerHTML += boxRows[i];
        }

        const squares = document.querySelectorAll(".square");

        squares.forEach(square => {

            square.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'green'
        });
    
            square.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'blue'
        });

     });
});

promptBtn.addEventListener('click', function () {
        let input = Number(prompt('How many boxes per side would you like?'));
        input = 0;

        // if (input.value > 100) {

        // } else if (input.value < 100) {
        //         alert("Unit maximum is 64")
        // }
})
// 
