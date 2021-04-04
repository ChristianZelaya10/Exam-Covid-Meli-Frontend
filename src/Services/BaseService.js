const axios = require('axios');

//const USER_API_BASE_URL = 'http://localhost:8080'
axios.defaults.baseURL = 'http://localhost:8080/covid'

export default class BaseService {

    Get(endpoint, params) {
        if (params) {
            return axios.get(endpoint, { params: params });
        }

        return axios.get(endpoint);
    }

    GetResource(endpoint, resourceId) {
        return axios.get(endpoint + '/' + resourceId);
    }

    Post(endpoint, item) {
        return axios.post(endpoint, item);
    }

    Put(endpoint, item) {
        return axios.put(endpoint, item);
    }

    Delete(endpoint, resourceId) {
        return axios.delete(endpoint + '/' + resourceId);
    }
}