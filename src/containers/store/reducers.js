import LOGIN from '../Login/Login.reducer';
import LOADER from '../Loader/Loader.reducer';
import MAIN from '../Main/Main.reducer'

const autoReducer = (arr) => {
    let red = {};
    for (let item in arr) {
        for (let i in arr[item]) {
            red[i] = function (state = arr[item][i][1], action) {
                if (action.type ===  arr[item][i][0]) {
                    return action.payload;
                }
                return state;
            }
        }
    }

    return red;
}
let reducers = autoReducer({ MAIN, LOGIN, LOADER })
export default reducers;

