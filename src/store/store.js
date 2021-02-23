import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {TopSalesReducer} from '../reducers/TopSalesReducer';
import {CatalogReducer} from '../reducers/CatalogReducer';
import {ProductReducer} from '../reducers/ProductReducer';
import {CartReducer} from '../reducers/CartReducer';


const reducers = combineReducers({
  topSales: TopSalesReducer,
  catalog: CatalogReducer,
  product: ProductReducer,
  cart: CartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
 
 export default store;