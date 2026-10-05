import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/request";
import Navbar from "../Navbar/Navbar";
function RowList() {
  return (
    <>
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} />
      <Row
        title={"Animation Movies"}
        fetchUrl={requests.fetchAnimationMovies}
      />
      <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
    </>
  );
}

export default RowList;
