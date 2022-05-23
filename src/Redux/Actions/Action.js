import axios from "axios";
import { ActionTypes } from "../Constants/Constants";

export const fetchData = (data) => {
  return {
    type: ActionTypes.FETCH_DATA,
    payload: data,
  };
};

export const fetchApiData = () => {
  let payload = {
    flavor_ids: [],
    category_ids: [6],
    sub_category_ids: [6, 21, 20, 22, 23],
    sort_order: 4,
    page: 1,
    per_page: 16,
    ex_out_stock: 1,
  };
  const headers = {
    "Access-Control-Allow-Origin": "true",
  };
  return (dispatch) => {
    axios
      .post(
        "https://pre-prod-api.baeprotein.com/api/v1/filtered-products",
        {
          per_page: 16,
        },
        { headers }
      )
      .then((res) => {
        
        dispatch(fetchData(res.data.data));
      });
  };
};
