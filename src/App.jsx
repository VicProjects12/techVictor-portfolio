import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Stack from "./components/Stack/stack";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;
