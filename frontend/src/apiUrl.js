process.env.API_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://acebook-air:10000'
    : 'http://localhost:8080';

module.exports = apiUrl;
