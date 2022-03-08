let addBtn = document.getElementById("add-btn");
let addTitle=document.getElementById("Title");
let addTxt=document.getElementById("Description");


addBtn.addEventListener("click", (e) => {
    if(addTitle.value=="" || addTxt.value == "")
    {
        return alert("");
    }

    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value="";
    addTxt.value="";

    showNotes();
})

//function to show notes on the page
function showNotes()
{
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div id="note">
            <p class ="note-counter">Note ${index + 1}</p>
            <h3 class ="Title">${element.title}</h3>
            <p class ="Description">${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)"
            class ="note-btn-delete">Delete Note</button>
            <button id="${index}" onclick="editNote(this.id)"
            class ="note-btn-edit">Edit Note</button>
            </div>
            `;
    });

    let noteElm = document.getElementById("notes");
    if(notesObj.length !=0)
    {
        noteElm.innerHTML = html;
    } else {
       
    }


}

//function to delete note
function deleteNote(index)
{
    let confirmDel = confirm("");
    if(confirmDel==true)
    {
        let notes = localStorage.getItem("notes");
        if(notes==null)
        {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}

//function to edit note
function editNote(index)
{
    let notes = localStorage.getItem("notes");
    if(addTitle.value !=="" || addTxt.value !=="")
    {
        return alert("");
    }
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.findIndex((element, index) =>{
        addTitle.value = element.title;
        addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
showNotes();
