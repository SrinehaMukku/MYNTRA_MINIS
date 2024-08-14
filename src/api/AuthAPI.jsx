import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// , GoogleAuthProvider, signInWithPopup
import { auth } from "../firebaseConfig";

export const LoginAPI = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const RegisterAPI = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

// export const GoogleAPI = async () => {
//   try {
//     const googleAuth = new GoogleAuthProvider();
//     const response = await signInWithPopup(auth, googleAuth);
//     return response;
//   } catch (err) {
//     return err;
//   }
// };
