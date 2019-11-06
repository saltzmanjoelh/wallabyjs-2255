// react-scripts/scripts/test.js builds these args
// '{"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["/Users/joelsaltzman/Projects/vanderveer1/vanderveer-react/client/node_modules/react-app-polyfill/jsdom.js"],"setupFilesAfterEnv":[],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jest-environment-jsdom-fourteen","transform":{"^.+\\\\.(js|jsx|ts|tsx)$":"/Users/joelsaltzman/Projects/vanderveer1/vanderveer-react/client/node_modules/react-scripts/config/jest/babelTransform.js","^.+\\\\.css$":"/Users/joelsaltzman/Projects/vanderveer1/vanderveer-react/client/node_modules/react-scripts/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|ts|tsx|css|json)$)":"/Users/joelsaltzman/Projects/vanderveer1/vanderveer-react/client/node_modules/react-scripts/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"],"rootDir":"/Users/joelsaltzman/Projects/vanderveer1/vanderveer-react/client"}'
//we can also call `npx jest --showConfig` get this json out
//There was some transforming to do though.

module.exports = {
  displayName: "client",
  "automock": false,
  "browser": false,
  "cache": true,
  "clearMocks": false,
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ],
  "dependencyExtractor": null,
  "errorOnDeprecated": false,
  "filter": null,
  "forceCoverageMatch": [],
  "globalSetup": null,
  "globalTeardown": null,
  "globals": {},
  "haste": {
    "computeSha1": false,
    "providesModuleNodeModules": [],
    "throwOnModuleCollision": false
  },
  "moduleDirectories": [
    "node_modules"
  ],
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "moduleNameMapper": {
    "^react-native$": "^.+\\.module\\.(css|sass|scss)$",
    "react-native-web": "identity-obj-proxy"
  },
  "modulePathIgnorePatterns": [],
  "modulePaths": [],
  "name": "b4094e0478692d8142567d149dd7e5d1",
  "prettierPath": "prettier",
  "resetMocks": false,
  "resetModules": false,
  "resolver": null,
  "restoreMocks": false,
  "runner": "jest-runner",
  "setupFiles": [
    "<rootDir>/node_modules/react-app-polyfill/jsdom.js"
  ],
  "setupFilesAfterEnv": [],
  "skipFilter": false,
  "snapshotSerializers": [],
  "testEnvironment": "<rootDir>/node_modules/jest-environment-jsdom/build/index.js",
  "testEnvironmentOptions": {},
  "testLocationInResults": false,
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "testRegex": [],
  "testRunner": "<rootDir>/node_modules/jest-jasmine2/build/index.js",
  "testURL": "http://localhost",
  "timers": "real",
  "transform": {

    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/react-scripts/config/jest/babelTransform.js",
    "^.+\\.css$": "<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js"

  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "watchPathIgnorePatterns": []
};