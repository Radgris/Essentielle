let $ = require('jquery')
let fs = require('fs')
let filename = 'contacts'

$('#aceptar').on('click', () => {
    let nombre = $('#nombre').val()
    let cantidad = $('#cantidad').val()
    let precio = $('#precio"').val()

    fs.appendFile('contacts', nombre + ',' + cantidad + ',' + precio + '\n')
    addEntry(nombre, cantidad, precio)
 }) 

 function addEntry(nombre, cantidad, precio) {
    if((nombre && cantidad) && precio) {
     
       let updateString = '<tr><td>'+ nombre + '</td><td>'+ cantidad +'</td><td>' 
          + precio +'</td></tr>'
       $('#contact-table').append(updateString)
    }
 }
 
 function loadAndDisplayContacts() {  
   
   //Check if file exists
   if(fs.existsSync(filename)) {
      let data = fs.readFileSync(filename, 'utf8').split('\n')
      
      data.forEach((contact, index) => {
         let [ nombre, cantidad, precio ] = contact.split(',')
         addEntry(nombre, cantidad, precio)
      })
   
   } else {
      console.log("File Doesn\'t Exist. Creating new file.")
      fs.writeFile(filename, '', (err) => {
         if(err)
            console.log(err)
      })
   }
}

loadAndDisplayContacts()
/*
let $ = require('jquery')
let fs = require('fs')
let filename = 'contacts'
let sno = 0

$('#add-to-list').on('click', () => {
   let name = $('#Name').val()
   let email = $('#Email').val()

   fs.appendFile('contacts', name + ',' + email + '\n')

   addEntry(name, email)
})

function addEntry(name, email) {
   if(name && email) {
      sno++
      let updateString = '<tr><td>'+ sno + '</td><td>'+ name +'</td><td>' 
         + email +'</td></tr>'
      $('#contact-table').append(updateString)
   }
}


