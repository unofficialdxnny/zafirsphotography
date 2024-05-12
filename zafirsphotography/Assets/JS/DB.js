  // Initialize Firebase with your project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAnAN9Qrd-r8mhcgC6Z8PM-9-dJDfP6HT4",
    authDomain: "direct-bonsai-422714-f8.firebaseapp.com",
    projectId: "direct-bonsai-422714-f8",
    storageBucket: "direct-bonsai-422714-f8.appspot.com",
    messagingSenderId: "218486960281",
    appId: "1:218486960281:web:f4a22b586872983b310808"
  };

  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firestore database service
  const db = firebase.firestore();

  // Function to handle form submission
  function subscribeToNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Add email to Firestore
    db.collection('subscribers').add({
      email: email
    })
    .then(() => {
      alert('Subscription successful!');
      document.getElementById('email').value = ''; // Clear input field
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
  }