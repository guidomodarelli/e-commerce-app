import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocumentReference = await createUserDocumentFromAuth(user);
  console.log(userDocumentReference);
};

function SignIn() {
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
}

export default SignIn;
