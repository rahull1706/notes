// let x =[1,23,43,100,10,20,21]
// // console.log(a)
// let marr = x.map((i) =>{
//     // console.log(i)

//   return i *i
// }) 
// console.log("marr==>",marr)

// let farr = x.filter((i)=>{
//     return i % 10 == 0
// })
// console.log("farr==>",farr)

// let rarr = x.reduce((i,j)=>{
//     return i * j
// })
// console.log("rarr=>",rarr)
// let arr = [1,2,3,4,56,31]
// let a
// do {
//  a  = prompt("enter")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)
// }while(a!=0)
// console.log(arr)



// const prompt = require("prompt-sync")();
// console.log(1)
// let x  = Math.floor(Math.random()*100)
// let chance = 0
// let guess
// let a = 1
// do{
//      guess = prompt("enter your number : ")
//      console.log(guess)
//      guess = Number.parseInt(guess)
//      console.log(typeof(guess))
//     if (guess == x){
//         console.log("GameOver...!")
//         console.log("your score is " ,100 - chance)
//         a = 0
//     }
//     else if(guess > x){
//         console.log("greater number try lesser")
//     }
//     else{
//         console.log("lesser number try greater")
//     }
//     chance = chance + 1
// }
// while(a)
// console.log(x)
// let random = Math.floor(Math.random()*100);
// console.log("Random Number Generated : " + random);


// console.log(document.body)
// function setBgGreen() {
//     document.body.style.backgroundColor = 'green';
// }
// function setBgRed() {
//     document.body.style.backgroundColor = 'Red';
// }
// function setBgBlue() {
//     document.body.style.backgroundColor = 'Blue';
// }
// function setBgYellow() {
//     document.body.style.backgroundColor = 'Yellow';
// }
// function defaultBgColor() {
//         document.body.style.backgroundColor = 'white';
// }
// var a = document.getElementById("first")
// console.log(a)
// a.getAttributeNames()
// console.log(a)





console.log("incuded")
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    console.log(notesObj);


    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = ""
    notesObj.forEach(function (element, index) {
        html += `
                      <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${element}</p>
                            <button id = "${index}" onclick = "deletenote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                     </div>
                 `

    });
    let notesElm = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesElm.innerHTML = html
    }
    else{
        notesElm.innerHTML = `<h6> nothing to show ,"please add your notes here"</h6>`
    }
}

function deletenote(index){

    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()
}
search = document.getElementById("searchtxt")

search.addEventListener("input",function(){
    console.log("input")
    let inputval = search.value.toLowerCase()
    let noteCards = document.getElementsByClassName("noteCard")
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText
        if (cardtxt.includes(inputval)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
    })
})