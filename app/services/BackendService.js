// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

// import * as Kinvey from "kinvey-nativescript-sdk";

// Kinvey.init({
//     appKey: "kid_SyY8LYO8M",
//     appSecret: "09282985d7c540f7b076a9c7fd884c77"
// });
import GlobalStore from './GlobalStore';

export default class BackendService {
  isLoggedIn() {
    return GlobalStore.isLogin;
    // return !!Kinvey.User.getActiveUser();
  }

  login(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        GlobalStore.isLogin = true;
        resolve();
      }, 100);
    });
    // return Kinvey.User.login(user.email, user.password);
  }

  logout() {
    return new Promise((resolve, reject) => {
      GlobalStore.isLogin = false;
      resolve();
    });
    // return Kinvey.User.logout();
  }

  register(user) {
    return new Promise((resolve, reject) => {
      GlobalStore.isLogin = true;
      resolve();
    });
    // return Kinvey.User.signup({ username: user.email, password: user.password });
  }
}