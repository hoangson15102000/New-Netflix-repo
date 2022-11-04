import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row RowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row RowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row RowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row RowID="4" title="TopRated" fetchURL={requests.requestTopRated} />
      <Row RowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
