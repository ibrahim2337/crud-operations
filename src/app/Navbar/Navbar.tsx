import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <header className="bg-blue-600 px-20 py-5">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">
            MyApp
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-gray-300">
              Product
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Add Product
            </a>
          </nav>

          <Link to="/login">
            <Button className="uppercase">login</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
