import {observable} from 'mobx'
class HomeStore {
    @observable num = 123
}

export default new HomeStore()