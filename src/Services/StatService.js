import BaseService from './BaseService';

export default class StatService extends BaseService {

    GetStats() {
        return super.Get('/stats');
    }
}