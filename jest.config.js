module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "@actions/(.*)": "<rootDir>/src/redux/actions/$1",
    "@api/(.*)": "<rootDir>/src/api/$1",
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@constants/(.*)": "<rootDir>/src/constants/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@reducers/(.*)": "<rootDir>/src/redux/reducers/$1",
    "@redux/(.*)": "<rootDir>/src/redux/$1",
    "@styles/(.*)": "<rootDir>/src/styles/$1",
    "@type/(.*)": "<rootDir>/src/type/$1",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

// TODO check this out