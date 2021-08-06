// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    testKey: "pk_test_51HlQt5AOYmkBFRPiobK1xcueD7vOxqorJIPLnNXmQs8rY3Vydcg5szMTfh9XmbI6KrIZeQ5P5q3wt0Op6D96yDQ7009arhI3sB"
  },
  firebaseConfig : {
    apiKey: "AIzaSyC0OeakqaXKDEDwjbbnuiyLEegUyuymh84",
    authDomain: "carpooling-7d926.firebaseapp.com",
    databaseURL: "https://carpooling-7d926.firebaseio.com",
    projectId: "carpooling-7d926",
    storageBucket: "carpooling-7d926.appspot.com",
    messagingSenderId: "699374800232",
    appId: "1:699374800232:web:d9f690c8f645d2ef651add",
    measurementId: "G-RWJ00M9R0Y"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
