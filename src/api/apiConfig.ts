import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.tDA4OXH1LOtlsBQn5g5ir0rAgEArwdZNEhRDsY1cEwbxfS985piwNq5TbOyy',
  },
});
