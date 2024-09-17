function updateDateTime() {
    
let now = new Date();

let minutes = String(now.getMinutes()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let seconds = String(now.getSeconds()).padStart(2, '0');

   
let day = String(now.getDate()).padStart(2, '0');
let month = String(now.getMonth() + 1).padStart(2, '0'); 
    let year = now.getFullYear();

    
    document.getElementById('hours').textContent = `${hours}`;
    document.getElementById('minutes').textContent = `${minutes}`;
    document.getElementById('seconds').textContent = `${seconds}`;
    document.getElementById('day-month').textContent = `${day}-${month}`;
    document.getElementById('month-year').textContent = `${month}-${year}`;
}


updateDateTime();


setInterval(updateDateTime, 1000);



 



 // function sayHi() {
//     console.log('hello kity');

// }

// setTimeout(sayHi, 4000);





// function secund() {

//     console.log('saloh9090');

// }


// setInterval(secund, 2000)


  