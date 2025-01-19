import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-900 flex justify-between min-h-12 items-center p-6 ">
      <Link to="/" className="text-white font-bold">
        Blog
      </Link>
      <Link to="/contact" className="text-white font-bold">
        お問い合わせ
      </Link>
    </nav>
  );
};

export default Header;
