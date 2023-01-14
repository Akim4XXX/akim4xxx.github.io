
function showTable1() {
    let table1 = document.getElementById('table1');

    if (table1.style.display === 'none' ) {
        table1.style.display = 'block';
        table2.style.display = 'none';
    } 
} 
function showTable2() {
    let table1 = document.getElementById('table1');
    let table2 = document.getElementById('table2');

    if (table2.style.display === 'none' ) {
        table1.style.display = 'none';
        table2.style.display = 'block';
    } 
} 

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function getRandomInt(){
    document.getElementById('ButtonRand').innerHTML="Число от 1 до 40 - " + randomInt(1, 40);
}