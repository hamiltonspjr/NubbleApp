import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.CsTPNQms6KrPuR3hiocsu4gkNSnl9md92qREHrPrG5v3jm3lEVF3mUcbx7q4',
  },
});
