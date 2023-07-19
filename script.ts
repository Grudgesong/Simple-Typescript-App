//AI was used to fix most of the funtions in Typescript as i was having alot of issues while trying to link HTML and Typescript.
//All the fuctions were written and fixed with the help of AI.
//HTML was done by myself and little bit of help by tutor.
interface iBook {
    id: string;
    name: string;
    author: string;
    edition: string;
}

let records:Array<iBook> = new Array();
//Adding functionality to Add onclick
function add(){
let id = (<HTMLInputElement> document.getElementById('add-id')).value;
let name = (<HTMLInputElement> document.getElementById('add-name')).value;
let author = (<HTMLInputElement> document.getElementById('add-author')).value;
let edition = (<HTMLInputElement> document.getElementById('add-edition')).value;

 // Create a new book object
 let newBook: iBook = {
    id: id,
    name: name,
    author: author,
    edition: edition
};

// Add the new book to the records array
records.push(newBook);
console.log("New Book Added")
populateTable();
}

function update(){
    let id = (<HTMLInputElement> document.getElementById('update-id')).value;
    let name = (<HTMLInputElement> document.getElementById('update-name')).value;
    let author = (<HTMLInputElement> document.getElementById('update-author')).value;
    let edition = (<HTMLInputElement> document.getElementById('update-edition')).value;
// Find the book in the records
    let bookUpdate = records.find(ibook => ibook.id === id);
// If the book is found then update
    if (bookUpdate) {
        bookUpdate.name = name;
        bookUpdate.author = author;
        bookUpdate.edition = edition;
    }
    console.log("Book Updated")
    populateTable();
}

function search() {
    // Retrieve the search query
    let searchQuery = (<HTMLInputElement>document.getElementById('search-book')).value.toLowerCase();
  
    // Filter the records array based on the search query
    let searchResults = records.filter(ibook =>
      ibook.name.toLowerCase().includes(searchQuery) ||
      ibook.author.toLowerCase().includes(searchQuery)
    );
console.log("Searching...")
    // Call the populateTable function with the search results
    populateTable2(searchResults);
  
    // Display an error message if no matching records are found
    if (searchResults.length === 0) {
      let tableBody = document.getElementById('tbl2') as HTMLTableSectionElement;
      tableBody.innerHTML = '<tr><td colspan="4">No matching records found.</td></tr>';
    }
}

  function del() {
    // Retrieve the name of the record to delete
    let nameToDelete = (<HTMLInputElement>document.getElementById('delete-book')).value;

    // Find the index of the record with the matching name
    let index = records.findIndex(book => book.name === nameToDelete);

    // If the record is found, remove it from the records array
    if (index !== -1) {
        records.splice(index, 1);
        console.log("Book Deleted");
    }

    // Call the populateTable function to update the table
    populateTable();
}
  

function populateTable(){
    //Create a table
    let tbl= (<HTMLTableElement> document.getElementById('tbl1'))
    //Clear the existing table rows
    tbl.innerHTML = '';
    //Loop through the records array and populate the table
    for (let i =0; i<records.length;i++){
        let book = records[i];
    //Create row of table
    let row = <HTMLTableRowElement> tbl.insertRow(i);
    let cell1 = <HTMLTableCellElement> row.insertCell(0);
    let cell2 = <HTMLTableCellElement> row.insertCell(1);  
    let cell3 = <HTMLTableCellElement> row.insertCell(2);
    let cell4 = <HTMLTableCellElement> row.insertCell(3);
    //Add text to the cells
    cell1.innerHTML= String(book.id);
    cell2.innerHTML= book.name;
    cell3.innerHTML= book.author;
    cell4.innerHTML= String(book.edition);
    }
}

function populateTable2(){
    //Create a table
    let tbl2= (<HTMLTableElement> document.getElementById('tbl2'))
    //Clear the existing table rows
    tbl2.innerHTML = '';
    //Loop through the records array and populate the table
    for (let i =0; i<records.length;i++){
        let book = records[i];
    //Create row of table
    let row = <HTMLTableRowElement> tbl2.insertRow(i);
    let cell1 = <HTMLTableCellElement> row.insertCell(0);
    let cell2 = <HTMLTableCellElement> row.insertCell(1);  
    let cell3 = <HTMLTableCellElement> row.insertCell(2);
    let cell4 = <HTMLTableCellElement> row.insertCell(3);
    //Add text to the cells
    cell1.innerHTML= String(book.id);
    cell2.innerHTML= book.name;
    cell3.innerHTML= book.author;
    cell4.innerHTML= String(book.edition);
    }
}