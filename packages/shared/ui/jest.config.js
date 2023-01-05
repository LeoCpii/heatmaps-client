module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
        "^@mocks(.*)$": "<rootDir>/__mocks__$1",
        "^@services(.*)$": "<rootDir>/src/shared/services$1",
        "^@components(.*)$": "<rootDir>/src/components$1"
    },
    setupFilesAfterEnv: ['./setup-jest.js'],
    collectCoverageFrom: [`src/**/*.tsx`, `!src/**/*.stories.*`],
    modulePathIgnorePatterns: [
        '.*__mocks__.*'
    ]
};
