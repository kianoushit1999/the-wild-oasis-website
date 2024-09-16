import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex items-center justify-between font-semibold mx-5 my-4">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
