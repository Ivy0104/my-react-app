import {observable, action} from 'mobx'
class GameStore {
    @observable name = 'ivy'

    @action.bound
    updateName() {
        const names = ['ivy', 'ysa', 'susan', 'evon']
        const rdIdx = Math.floor(Math.random() * names.length)
        this.name = names[rdIdx]
    }
}

export default new GameStore()