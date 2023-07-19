var records = new Array();
//Adding functionality to Add onclick
function add() {
    var id = document.getElementById('add-id').value;
    var name = document.getElementById('add-name').value;
    var author = document.getElementById('add-author').value;
    var edition = document.getElementById('add-edition').value;
    // Create a new book object
    var newBook = {
        id: id,
        name: name,
        author: author,
        edition: edition
    };
    // Add the new book to the records array
    records.push(newBook);
    console.log("New Book Added");
    populateTable();
}
function update() {
    var id = document.getElementById('update-id').value;
    var name = document.getElementById('update-name').value;
    var author = document.getElementById('update-author').value;
    var edition = document.getElementById('update-edition').value;
    // Find the book in the records
    var bookUpdate = records.find(function (ibook) { return ibook.id === id; });
    // If the book is found then update
    if (bookUpdate) {
        bookUpdate.name = name;
        bookUpdate.author = author;
        bookUpdate.edition = edition;
    }
    console.log("Book Updated");
    populateTable();
}
function search() {
    // Retrieve the search query
    var searchQuery = document.getElementById('search-book').value.toLowerCase();
    // Filter the records array based on the search query
    var searchResults = records.filter(function (ibook) {
        return ibook.name.toLowerCase().includes(searchQuery) ||
            ibook.author.toLowerCase().includes(searchQuery);
    });
    console.log("Searching...");
    // Call the populateTable function with the search results
    populateTable2(searchResults);
    // Display an error message if no matching records are found
    if (searchResults.length === 0) {
        var tableBody = document.getElementById('tbl2');
        tableBody.innerHTML = '<tr><td colspan="4">No matching records found.</td></tr>';
    }
}
function del() {
    // Retrieve the name of the record to delete
    var nameToDelete = document.getElementById('delete-book').value;
    // Find the index of the record with the matching name
    var index = records.findIndex(function (book) { return book.name === nameToDelete; });
    // If the record is found, remove it from the records array
    if (index !== -1) {
        records.splice(index, 1);
        console.log("Book Deleted");
    }
    // Call the populateTable function to update the table
    populateTable();
}
function populateTable() {
    //Create a table
    var tbl = document.getElementById('tbl1');
    //Clear the existing table rows
    tbl.innerHTML = '';
    //Loop through the records array and populate the table
    for (var i = 0; i < records.length; i++) {
        var book = records[i];
        //Create row of table
        var row = tbl.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        //Add text to the cells
        cell1.innerHTML = String(book.id);
        cell2.innerHTML = book.name;
        cell3.innerHTML = book.author;
        cell4.innerHTML = String(book.edition);
    }
}
function populateTable2() {
    //Create a table
    var tbl2 = document.getElementById('tbl2');
    //Clear the existing table rows
    tbl2.innerHTML = '';
    //Loop through the records array and populate the table
    for (var i = 0; i < records.length; i++) {
        var book = records[i];
        //Create row of table
        var row = tbl2.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        //Add text to the cells
        cell1.innerHTML = String(book.id);
        cell2.innerHTML = book.name;
        cell3.innerHTML = book.author;
        cell4.innerHTML = String(book.edition);
    }
}
