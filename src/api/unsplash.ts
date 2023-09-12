import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 8HskzO7SApE08a_KX8OHULaJmjFwuEXAyydjS_TD1HQ'
  }
});