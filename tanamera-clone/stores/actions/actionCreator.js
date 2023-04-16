const base_url = "http://localhost:3000";

export function fetchProducts() {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/products`);
      response = await response.json();
      console.log("masuk jalan bebas!");
      dispatch({
        type: "fetch/products",
        payload: response,
      });
        
    } catch (err) {
      dispatch(productsFetchReject(err));
    }
  };
}

export function detail(params) {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/products/${params}`);
      response = await response.json();
      dispatch({
        type: "fetch/detail",
        payload: response,
      });
    } catch (err) {
      dispatch(detailProductFetchReject(err));
    }
  };
}
