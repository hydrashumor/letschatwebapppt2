var firebaseConfig = {
      apiKey: "AIzaSyBjdt3HhRyypfE7KWFkmBftrdkQD0htMCI",
      authDomain: "kwitter-708cd.firebaseapp.com",
      databaseURL: "https://kwitter-708cd-default-rtdb.firebaseio.com",
      projectId: "kwitter-708cd",
      storageBucket: "kwitter-708cd.appspot.com",
      messagingSenderId: "218356705674",
      appId: "1:218356705674:web:e93434511deba762930073"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
