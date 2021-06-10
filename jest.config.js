module.exports = {
    // preset: "jest-puppeteer",
    // globals: {
    //   URL: "http://localhost:8080"
    // },
    // transform: {
    //   "^.+\\.ts?$": "ts-jest",
    //   ".*\\.(vue)$": "vue-jest",
    //   "^.+\\.(js|ts|jsx)?$": "babel-jest",
    // },
    // transformIgnorePatterns: [
    //   //"node_modules/",
    //   "node_modules/(?!variables/.*)"
    // ],
    // moduleFileExtensions: ["ts", "js", "vue", "json"],
    // collectCoverageFrom: ["components/**/*.vue", "blocks/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.ts", "store/**/*.ts"],
    // testMatch: [
    //   "**/tests/**/*.test.js"
    // ],
    // verbose: true


    "jest": {
      preset: "bable-jest",
      testEnvironment: "node",
      transform: {
        "^.+\\.ts?$": "ts-jest",
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.(js|ts|jsx)?$": "babel-jest",
      },
      transformIgnorePatterns: ["<rootDir>/node_modules/"],
    }

    // "jest": {
    //   "preset": "ts-jest",
    //   "testEnvironment": "node",
    //   "transform": {
    //     "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
    //   },
    //   "transformIgnorePatterns": [
    //     "node_modules/(?!variables/.*)"
    //   ]
    // },
}