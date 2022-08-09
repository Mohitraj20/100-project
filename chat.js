// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAmm2L0EYCXjEDZ4dQZERwtDB-aXGPGD9Y",
    authDomain: "project-c8a8a.firebaseapp.com",
    databaseURL: "https://project-c8a8a-default-rtdb.firebaseio.com",
    projectId: "project-c8a8a",
    storageBucket: "project-c8a8a.appspot.com",
    messagingSenderId: "688416573111",
    appId: "1:688416573111:web:4f4a54d93e02bc05512f32",
    measurementId: "G-XN0JYWPJHQ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);  


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



