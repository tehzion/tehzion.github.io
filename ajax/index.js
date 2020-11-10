function getRandomUser(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.response);
        var elFirstName = document.getElementById("firstName");
        var elLastName = document.getElementById ("lastName");
        var eljsonResult = document.getElementById("jsonResult");
        var eluserImage = document.getElementById ("userImage");
        var elphone = document.getElementById ("phone");
        var elmail = document.getElementById ("email");
        var eladdress = document.getElementById ("address");
  
        
        elFirstName.innerHTML = data.results[0].name.first;
        elLastName.innerHTML = data.results[0].name.last;
        eljsonResult.innerHTML = this.response;
        eluserImage.src = data.results[0].picture.large;
        eluserImage.title = data.results[0].name.first + "" + data.results[0].name.last;
        elphone.innerHTML = data.results[0].phone;
        elmail.innerHTML = data.results[0].email;
        eladdress.innerHTML = data.results[0].location.street.number + "," + data.results[0].location.street.name + "," + data.results[0].location.city + "," + data.results[0].location.state + "," + data.results[0].location.country;
        }
    }
    
   xhttp.open("GET", "https://randomuser.me/api/", true);
   xhttp.send();
  }
  var elGetRandomUser = document.getElementById("getRandomBtn");
  elGetRandomUser.addEventListener("click", function() {
   getRandomUser();
  });