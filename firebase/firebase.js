import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      console.log(firebaseConfig);

      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    return await newUser.user.updateProfile({
      displayName: name,
    });
  }

  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();

export default firebase;
