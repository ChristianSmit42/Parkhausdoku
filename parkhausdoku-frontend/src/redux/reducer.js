import {combineReducers} from 'redux'
import auth from "./auth/auth-reducer";
import {persistReducer} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import admissionReducer from "./admissions/admission-reducer";
import buildingReducer from "./buildings/building-reducer";


const persisAuthConfig = {
    key: 'auth',
    storage: AsyncStorage,
}

export default combineReducers({
    auth: persistReducer(persisAuthConfig, auth),
    admissions: admissionReducer,
    buildings: buildingReducer
})