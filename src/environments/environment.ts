// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
  // Initialize Firebase
    apiKey: "AIzaSyD1vMHcAnUT53ukzwXAcMKkHOzA2NIL4J0",
    authDomain: "todolist-app-7f049.firebaseapp.com",
    databaseURL: "https://todolist-app-7f049.firebaseio.com",
    projectId: "todolist-app-7f049",
    storageBucket: "todolist-app-7f049.appspot.com",
    messagingSenderId: "1041948690169"
  //firebase.initializeApp(config);
//</script>
  }
};
