import {
  FETCH_TOP_SALES_REQUEST,
  FETCH_TOP_SALES_SUCCESS,
  FETCH_TOP_SALES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  CHANGE_ACTIVE_CATEGORY,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_MORE_ITEMS_REQUEST,
  FETCH_MORE_ITEMS_SUCCESS,
  FETCH_MORE_ITEMS_FAILURE,
  FETCH_SEARCH_ITEMS_REQUEST,
  FETCH_SEARCH_ITEMS_SUCCESS,
  FETCH_SEARCH_ITEMS_FAILURE,
  SET_SEARCH,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  CHANGE_SIZE_ITEM,
  CHANGE_COUNT_ITEM,
  SET_LOCAL_CART_ITEMS,
  SET_CART_ITEMS,
  REMOVE_CART_IETMS,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE
} from './actionsTypes';

export function fetchTopSalesRequest() {
  return {type: FETCH_TOP_SALES_REQUEST}
}

export function fetchTopSalesSuccess(items) {
  return {type: FETCH_TOP_SALES_SUCCESS, payload: {items}}
}

export function fetchTopSalesFailure(error) {
  return {type: FETCH_TOP_SALES_FAILURE, payload: {error}}
}

export const getTopSales = () => async(dispatch) => {
  try {
    dispatch(fetchTopSalesRequest());
    const respone = await fetch('http://localhost:7070/api/top-sales');
    const items = await respone.json();
    dispatch(fetchTopSalesSuccess(items))
  } catch (error) {
    dispatch(fetchTopSalesFailure(error))
  } 
}


export function fetchCategoriesRequest() {
  return {type: FETCH_CATEGORIES_REQUEST}
}

export function fetchCategoriesSuccess(categories) {
  return {type: FETCH_CATEGORIES_SUCCESS, payload: {categories}}
}

export function fetchCategoriesFailure(error) {
  return {type: FETCH_CATEGORIES_FAILURE, payload: {error}}
}

export const getCategories = () => async(dispatch) => {
  try {
    dispatch(fetchCategoriesRequest());
    const respone = await fetch('http://localhost:7070/api/categories');
    const categories = await respone.json();
    dispatch(fetchCategoriesSuccess(categories))
  } catch (error) {
    dispatch(fetchCategoriesFailure(error))
  } 
}

export function fetchItemsRequest() {
  return {type: FETCH_ITEMS_REQUEST}
}

export function fetchItemsSuccess(items) {
  return {type: FETCH_ITEMS_SUCCESS, payload: {items}}
}

export function fetchItemsFailure(error) {
  return {type: FETCH_ITEMS_FAILURE, payload: {error}}
}

export const getItems = (categore = 1, search) => async(dispatch) => {
  try {
    dispatch(fetchItemsRequest());
    let fetchWay;
    if (categore !== 1) {
      fetchWay = `http://localhost:7070/api/items?categoryId=${categore}`;
    } else {
      fetchWay = `http://localhost:7070/api/items?`;
    }

    if (search) {
      fetchWay += `&q=${search}`;
    }
    const responce = await fetch(fetchWay)
    const items = await responce.json();
    dispatch(fetchItemsSuccess(items))
  } catch (error) {
    dispatch(fetchItemsFailure(error))
  } 
}

export function fetchMoreItemsRequest() {
  return {type: FETCH_MORE_ITEMS_REQUEST}
}

export function fetchMoreItemsSuccess(items) {
  return {type: FETCH_MORE_ITEMS_SUCCESS, payload: {items}}
}

export function fetchMoreItemsFailure(error) {
  return {type: FETCH_MORE_ITEMS_FAILURE, payload: {error}}
}

export const getMoreItems = (categore = 1, offset, search) => async(dispatch) => {
  try {
    dispatch(fetchMoreItemsRequest());

    let fetchWay;
    if (categore !== 1) {
      fetchWay = `http://localhost:7070/api/items?categoryId=${categore}&offset=${offset}`;
    } else {
      fetchWay = `http://localhost:7070/api/items?offset=${offset}`;
    }

    if (search) {
      fetchWay += `&q=${search}`;
    }
    const responce = await fetch(fetchWay);
    const items = await responce.json();
    dispatch(fetchMoreItemsSuccess(items))
  } catch (error) {
    dispatch(fetchMoreItemsFailure(error))
  } 
}


export function fetchSearchItemsRequest() {
  return {type: FETCH_SEARCH_ITEMS_REQUEST}
}

export function fetchSearchItemsSuccess(items) {
  return {type: FETCH_SEARCH_ITEMS_SUCCESS, payload: {items}}
}

export function fetchSearchItemsFailure(error) {
  return {type: FETCH_SEARCH_ITEMS_FAILURE, payload: {error}}
}

export const getSearchItems = (categore = 1, search) => async(dispatch) => {
  try {
    dispatch(fetchSearchItemsRequest());
    let responce;
    if (categore !== 1) {
      responce = await fetch(`http://localhost:7070/api/items?categoryId=${categore}&q=${search}`);
    } else {
      responce = await fetch(`http://localhost:7070/api/items?q=${search}`);
    } 
    const items = await responce.json();
    
    dispatch(fetchSearchItemsSuccess(items))
  } catch (error) {
    dispatch(fetchSearchItemsFailure(error))
  } 
}

export function setSearch(search) {
  return {type: SET_SEARCH, payload: {search}}
}

export function changeActiveCategory(id) {
  return {type: CHANGE_ACTIVE_CATEGORY, payload: {id}}
}


export function fetchItemRequest() {
  return {type: FETCH_ITEM_REQUEST}
}

export function fetchItemSuccess(item) {
  return {type: FETCH_ITEM_SUCCESS, payload: {item}}
}

export function fetchItemFailure(error) {
  return {type: FETCH_ITEM_FAILURE, payload: {error}}
}

export const getItem = (id) => async(dispatch) => {
  try {
    dispatch(fetchItemRequest());
    const responce = await fetch(`http://localhost:7070/api/items/${id}`);
    const item = await responce.json();
    dispatch(fetchItemSuccess(item))
  } catch (error) {
    dispatch(fetchItemFailure(error))
  }  
}

export function changeSizeItem(size) {
  return {type: CHANGE_SIZE_ITEM, payload: {size}}
}

export function changeCountItem(count) {
  return {type: CHANGE_COUNT_ITEM, payload: {count}}
}

export function setLocalCartItems(items) {
  return {type: SET_LOCAL_CART_ITEMS, payload: {items}}
}

export function setCartItems(items) {
  return {type: SET_CART_ITEMS, payload: {items}}
}

export function removeCartItems(items) {
  return {type: REMOVE_CART_IETMS, payload: {items}}
}

export function fetchOrderRequest() {
  return {type: FETCH_ORDER_REQUEST}
}

export function fetchOrderSuccess(code) {
  return {type: FETCH_ORDER_SUCCESS, payload: {code}}
}

export function fetchOrderFailure(error) {
  return {type: FETCH_ORDER_FAILURE, payload: {error}}
}

export const sendOrder = (order) => async(dispatch) => {
  try {
    dispatch(fetchOrderRequest());
    const responce = await fetch(`http://localhost:7070/api/order`, {
      method: "POST",
      body: JSON.stringify({
        ...order
      })
    });
    const item = await responce.json();
    if (item.code === 204) {
      dispatch(fetchOrderSuccess())

    }
  } catch (error) {
    debugger

    dispatch(fetchOrderFailure('error'))
  }  
}