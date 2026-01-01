import { getAuth, onAuthStateChanged } from "firebase/auth";

export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        resolve(null); 
      }
    }, (error) => {
      console.error(error);
      resolve(null);
    });
  });
};