module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Look explicitly in tests/ and any *.test.ts or *.spec.ts
  testMatch: ['**/src/tests/**/*.(test|spec).ts'],
  transform: { '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
  // If you keep "type":"module", uncomment the next two lines:
  // extensionsToTreatAsEsm: ['.ts'],
  // globals: { 'ts-jest': { useESM: true } },
};