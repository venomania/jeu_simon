
var objet;

var oReq = new XMLHttpRequest();
oReq.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(oReq.responseText);
    // var people = response.people;
    var output = '';
    for(var i = 0;i < response.length ;i++){
      console.log(response[i].useur);
      output += '<tr><td>'+response[i].useur+'</td>'+'<td>'+response[i].score+'</td>'+'<td>'+response[i].temps+'</td>'+'<td>'+response[i].date+'</td></tr>';
    }
    console.log(output);
    document.getElementById('people').innerHTML = output;
  }
};
oReq.open("get", "https://127.0.0.1:8000/joueur/", true);
oReq.send();
