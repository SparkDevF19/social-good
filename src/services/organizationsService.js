import axios from 'axios';

export default {
  getOrganizations: () => {
    return axios.get('/api/organizations');
  }
}