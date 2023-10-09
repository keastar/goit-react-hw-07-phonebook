import { configureStore } from '@reduxjs/toolkit';
// import { createReducer } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// const myReducer = createReducer();
const enhancer = devToolsEnhancer();

// function myMiddleware1(store) {
//   return function (next) {
//     return function (action) {
//       console.log('myMiddleware1', action);
//       next(action);
//     };
//   };
// }
export const store = configureStore(
  {
    reducer: {
      contacts: contactsReducer,
      filters: filtersReducer,
    },
    // middleware(getDefaultMiddleware) {
    //   const defaultMd = getDefaultMiddleware();
    //   console.log(defaultMd);
    //   return [...defaultMd, myMiddleware1];
    // },
  },
  enhancer
);
