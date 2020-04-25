// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  IOTAgentJSON: "http://localhost:4041/iot",
  IOTAgentProvison : "http://localhost:7896/iot",
  ContextBroker: "http://localhost:1026",
  cygus: "http://localhost:5080",
  sthComet: "http://localhost:8666",
  sawtoothREST: "http://localhost:8008",
  sawtoothExplorer: "http://localhost:4100",
  tpClient: "http://localhost:3000",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
