import { combineReducers } from 'redux'
import pesquisar from './pesquisar'
import quadrinhos from './quadrinhos'

const allReducers = combineReducers({
    quadrinhos,
    pesquisar
})

export default allReducers