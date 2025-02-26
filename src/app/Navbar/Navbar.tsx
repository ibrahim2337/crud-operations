import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="">
      <header className="bg-slate-500 px-20 py-5">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">MyApp</div>
          <Button className="uppercase bg-slate-400">login</Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
