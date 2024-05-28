let numbers = [40, 100, 1];
let points = new Array(40, 100, 1);

console.log(numbers);
console.log(points);

let good = [40];
let bad = new Array(40);

console.log(good);
console.log(bad);

let dogs = ["golden retriever", "labrador", "staffie", "bulldog", "rottweiler", "toi-pomme"];

console.log(dogs); //whole array
console.log(dogs.length); //array length
console.log(dogs[4]); //specific item in array
console.log(dogs[dogs.length-1]); //last item in array
console.log(Array.isArray(dogs)); //is Array?
console.log(dogs.toString());
console.log(dogs.join(", "));


dogs.pop();
console.log(dogs);

dogs.push("poodle");
console.log(dogs);

let dog = dogs.pop();
console.log(dog);
console.log(dogs);

let newDogs = dogs.slice(1, 4);
console.log("New dogs: " + newDogs);
console.log(dogs);

dogs.splice(1, 2, "german shepeard", "doberman", "mastiff");
console.log(dogs);

// Mars

function decreaseMars(){
    if(document.getElementById('ticketsMars').value != 0){
        document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) -1;
    } else {
        document.getElementById('ticketsMars').value = 0;
    }
}


function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
}

let totalMarsCost = 0;
let totalSaturnCost = 0;
let finalCost = 0;

// Saturn


function decreaseSaturn(){
    if(document.getElementById('ticketsSaturn').value != 0){
        document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) -1;
    } else {
        document.getElementById('ticketsSaturn').value = 0;
    }
}

function increaseSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}


function total(){
    totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 50;
    totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 70;
    finalCost = totalMarsCost + totalSaturnCost;
    document.getElementById('total').innerHTML = "R " + finalCost + ",00";
}






