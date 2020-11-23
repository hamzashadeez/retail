import {auth} from '../../Config/firebase'

var user = auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('Email sent.')
}).catch(function(error) {
  // An error happened.
  console.log('An error happened.')
});