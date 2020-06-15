module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  "reporters": [
    "default",
    "jest-html-reporters"
  ],
  testURL: "http://localhost/",
  "collectCoverage": true,
  "collectCoverageFrom": ["src/**/*.{js,vue}", "!**/node_modules/**", "!src/stories/**"],
  "coverageThreshold": {
    "global": {
      "branches": 70,
      "functions": 80,
      "lines": 85,
      "statements": 85
    }
  }
};
