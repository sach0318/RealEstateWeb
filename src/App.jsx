import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonal from "./components/Testimonal";
 
const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Testimonal />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
