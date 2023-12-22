import { LOGO_IMG } from "../utils/constants";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img className="logo" src={LOGO_IMG} />
        <p>© 2023 Food for Hunger</p>
      </div>
    </footer>
  );
};

export default Footer;
