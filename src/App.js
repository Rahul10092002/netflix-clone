import Banner from "./components/banner/Banner";
import Row from "./components/rows/Row";
import request from "./request";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Banner/>

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Footer/>
    </div>
  );
}

export default App;
