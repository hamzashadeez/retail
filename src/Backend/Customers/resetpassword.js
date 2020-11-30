import {auth} from '../../Config/firebase'

const resetPassword = (emailAddress)=>{

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  console.log("email sent successfully")
}).catch(function(error) {
  console.log(error.message)
});
}

export { resetPassword }