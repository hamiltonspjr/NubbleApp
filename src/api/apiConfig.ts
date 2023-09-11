import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Nw.MDYSwSlUvkAwuuVxlUACBTUF5P3t-o4wXUzUF5daJrsL6xo60LM6HyxZwQb2',
  },
});
