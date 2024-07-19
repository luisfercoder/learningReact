import { configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter-slice';
import authSlice from './auth-slice';



const store = configureStore({
  reducer: {counter:counterSlice.reducer, auth:authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
// *** Using just redux ***
// const countReducer = (state = initialState, action) =>{
//    if(action.type ==='increment'){
//       return {
//         counter : state.counter + 1,
//         showCounter: state.showCounter
//       };
//    }

//    if(action.type ==='increase'){
//     return {
//       counter : state.counter + action.amount,
//       showCounter: state.showCounter

//     }
//  }

//    if(action.type ==='decrement'){
//       return {
//           counter : state.counter - 1,
//           showCounter: state.showCounter

//       }
//    }
//    if(action.type ==='toggle'){
//     return{
//       showCounter: !state.showCounter,
//       counter: state.counter

//     }
//    }
//    return state;

// };

// const store = createStore(countReducer);

// export default store;



