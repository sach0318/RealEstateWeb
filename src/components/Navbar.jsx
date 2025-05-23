import {assets} from "../assets/assets"
const Navbar = () => {
    
    
  return (
    <div className="absolute border-2 top-0 left-0 w-full z-10 ">
      <div>
        <img src={assets.logo} alt="img" />
      </div>
    </div>
  );
}

export default Navbar