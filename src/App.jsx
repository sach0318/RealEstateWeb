import About from "./components/About";
import Contact from "./components/Contact";
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
    </div>
  );
};

export default App;
