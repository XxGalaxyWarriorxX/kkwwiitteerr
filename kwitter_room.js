var firebaseConfig = {
      apiKey: "AIzaSyDLGBqbG5f8qnxtmZKOU9jBBKkOtti4FPo",
      authDomain: "kwitter-5da6b.firebaseapp.com",
      databaseURL: "https://kwitter-5da6b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5da6b",
      storageBucket: "kwitter-5da6b.appspot.com",
      messagingSenderId: "937771487584",
      appId: "1:937771487584:web:5c281702925c8f4b348e05"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);v
     username=localStorage.getItem("user_name")
     document.getElementById("user_name").innerHTML="welcome" + username
    function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html"; 

    firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
    })
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) 
{ console.log(name); 
localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; }
 function logout() { localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("index.html"); }