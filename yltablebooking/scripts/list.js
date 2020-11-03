
window.addEventListener("load",function(){
        GetBooking();list js
});

function GetBookings() {
    let url = 
    'https://api.sheety.co/8cc78b5b6542ce0e5366f57fb2560013/booking/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
     //Do something with the data
     console.log(json.bookings);
     var bookings = document.getElementById("bookings-list");
     var bookingIds = [];
      bookings.innerHTML = "";
     for(var i = 0; i < json.bookings.length; i++) {
      var name = json.bookings[i].name;
      var email = json.bookings[i].email;
      var pax = json.bookings[i].pax;
      var id = json.bookings[i].id;
      var buttonId = "delete" + id;
    
    let row = bookings.insertRow(bookings.rows.length);
    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = email;
    row.insertCell(3).innerHTML = pax;
    row.insertCell(4).innerHTML = "";;
    row.insertCell(5).innerHTML = "<button id='" + buttonId + "'class= 'btn btn-danger'>Delete</button><br/>";

      bookings.innerHTML += id + "- " + name + ", " + email + ", pax:" + pax + "<br/>"; 
      bookings.innerHTML += "<button id='" + buttonId + "'>Delete</button><br/>";
      
       bookingIds.push(buttonId);
     }
      for (let j = 0; j < bookingIds.length; j++) {
        let el = document.getElementById(bookingIds[j]);
        console.log("outside :" + j);
        el.addEventListener ("click", function() {
          let theId = bookingIds[j].replace("delete","");
          DeleteBooking(theId);
        });
     }
    });
    }

    function DeleteBooking (id) {

      if(confirm("Are you sure you want to delete?")){
       
        let url = 'https://api.sheety.co/8cc78b5b6542ce0e5366f57fb2560013/booking/bookings' + id;
        fetch(url, {
          method: 'DELETE',
        })
        .then((response) => {
          location.reload();
          
        });
      }else{
        alert("delete cancelled")
;      }

  