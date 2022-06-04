import './App.css';
import React from "react";
import Row from './Row';
 import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>Hey Alan lets build Netflix front end today</h1>
     <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}></Row>
     <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}></Row>
     
    </div>
  );
}

export default App;
