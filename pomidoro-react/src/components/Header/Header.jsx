import logo from "./logo.png";
import UiButton from "../uikit/UiButton";

const Header = () => {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <div className="flex mx-auto max-w-2xl w-full">
        <img src={logo} alt="Logo" />
        <UiButton className="w-44 ml-auto" variant="primary" size="lg">
          Настройки
        </UiButton>
      </div>
    </header>
  );
};

export default Header;
