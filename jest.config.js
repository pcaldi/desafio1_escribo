export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest', // se você estiver usando Babel
  },

  moduleFileExtensions: ['js', 'json', 'node'],
};
