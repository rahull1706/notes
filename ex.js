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
