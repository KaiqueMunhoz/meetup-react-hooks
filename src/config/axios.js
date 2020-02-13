import axios from 'axios';

import settings from './settings';

export default axios.create({
  headers: {
    Accept: 'application/json',
  },
  baseURL: settings.API_URL,
});
