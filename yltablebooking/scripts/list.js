window.addEventListener("load", function () {
  GetBookings();
});

function GetBookings() {
  let url = 'https://api.sheety.co/8cc78b5b6542ce0e5366f57fb2560013/booking/bookings';
  fetch(url)
      .then((response) => response.json())
      .then(json => {
          // Do something with the data
          // console.log(json.bookings);
          var bookings = document.getElementById("booking-list");
          var bookingIds = [];

          for (var i = 0; i < json.bookings.length; i++) {
              var gName = json.bookings[i].name;
              var gEmail = json.bookings[i].email;
              var gPax = json.bookings[i].pax;
            var gDate = json.bookings[i].date;
              var gId = json.bookings[i].id;
              var gRemarks = json.bookings[i].remarks;
              var buttonId = "delete" + gId;

              let row = bookings.insertRow(bookings.rows.length);
              row.insertCell(0).innerHTML = gId;
              row.insertCell(1).innerHTML = gName;
              row.insertCell(2).innerHTML = gEmail;
              row.insertCell(3).innerHTML = gPax;
    
row.insertCell(4).innerHTML = gDate; //date
                          

              
          }

          
             

      });
}

