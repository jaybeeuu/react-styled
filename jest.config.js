module.exports = {
  "verbose": false,
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}"
  ],
  "testMatch": [
    "<rootDir>/(src|spec)/**/?(*.)([Ss]pec|[Tt]est).{js,jsx}"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
  ],
  "moduleFileExtensions": [
    "js",
    "json",
    "jsx"
  ]
};