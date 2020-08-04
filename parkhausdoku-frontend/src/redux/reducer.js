import {combineReducers} from 'redux'
import auth from "./auth/auth-reducer";
import {persistReducer} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import buildingReducer from "./buildings/building-reducer";
import levelReducer from "./levels/level-reducer";


const persisAuthConfig = {
    key: 'auth',
    storage: AsyncStorage,
}

export default combineReducers({
    auth: persistReducer(persisAuthConfig, auth),
    buildings: buildingReducer,
    levels: levelReducer
})