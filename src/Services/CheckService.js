import BaseService from './BaseService';

export default class CheckService extends BaseService {

    GetChecks() {
        return super.Get('/checks');
    }

    GetById(idCheck){
        return super.GetResource('/checks', idCheck);
    }

    AddCheck(check){
        return super.Post('/checks', check);
    }

    GetFilterChecks(keyParam, valuesParam){
        debugger
        return super.GetFilter('/checks/search', keyParam, valuesParam);

    }
}