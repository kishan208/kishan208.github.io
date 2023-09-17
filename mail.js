
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBj44QNvpO2zwCZphPaxgjl1UazVBOpYtE",
    authDomain: "portfolio-796d1.firebaseapp.com",
    databaseURL: "https://portfolio-796d1-default-rtdb.firebaseio.com",
    projectId: "portfolio-796d1",
    storageBucket: "portfolio-796d1.appspot.com",
    messagingSenderId: "95443341468",
    appId: "1:95443341468:web:137b95425e08a09bae1d59",
    measurementId: "G-1QLNGC60EV"
  };

firebase.initializeApp(firebaseConfig);

 var contactFormDB = firebase.database().ref('contactForm');
 document.getElementById('contactForm').addEventListener('submit', submitForm);

 function submitForm(e){
    e.preventDefault();

    var username = getElementVal('contactName');
    var email = getElementVal('contactEmail');
    var subject = getElementVal('contactSubject');
    var message = getElementVal('contactMessage');

    console.log(username, email, subject, message);
    saveMessages(username, email, subject, message);

    document.querySelector(".message-success").style.display = 'block';
 };
 const saveMessages = (username, email, subject, message) => {

    var newContactForm = contactFormDB.push();
    newContactForm.set({
        username: username,
        email: email, 
        subject: subject,
        message: message,
    })
 }

 const getElementVal = (id) => {
    return document.getElementById(id).value }

 