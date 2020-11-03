function BookNow (guestName, guestEmail, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/8cc78b5b6542ce0e5366f57fb2560013/booking/bookings';
    let body = {
      booking: {
       name:guestName,
       email:guestEmail,
       pax:guestPax,
       remarks : guestRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
       "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
       alert(json.booking.name + " successfully added!");
       
    });
   }
  document.getElementById("bookNow").addEventListener("click",function() {
   let guestName = document.getElementById("guestName").value;
   let guestEmail = document.getElementById("guestEmail").value;
   let guestPax = document.getElementById("guestPax").value;
   BookNow(guestName, guestEmail, guestPax);
  });  


  document.getElementById("bookNow").addEventListener("click",function(){
        let name = document.getElementById("guestName").value;
        let name = document.getElementById("guestEmail").value;
        let name = document.getElementById("guestPax").value;
        let name = document.getElementById("guestRemarks".value;

        BookNow(name,email,remarks)
  })


  ``