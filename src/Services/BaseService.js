const axios = require('axios');

axios.defaults.baseURL = 'http://18.218.75.220:8080/covid'
//axios.defaults.baseURL = 'http://localhost:8080/covid'

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

    GetFilter(endpoint, keyParam, valueParam) {
        return axios.get(endpoint, { params: { key: keyParam, values: valueParam } })

    };
}