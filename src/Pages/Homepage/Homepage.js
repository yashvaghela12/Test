import React, { useEffect } from "react";
import "../Homepage/homepage.scss";
import Cards from "../../Components/Cards/Cards";
import axios from "axios";

const Homepage = () => {
  const headers = {
    "Access-Control-Allow-Origin": "true",
  };
  axios
    .post(
      "https://pre-prod-api.baeprotein.com/api/v1/filtered-products",
      {
        per_page: 16,
      },
      { headers }
    )
    .then((res) => {
      console.log("ressss", res.data.data);
    });
  return (
    <React.Fragment>
      <Cards />
    </React.Fragment>
  );
};

export default Homepage;
