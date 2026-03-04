import "./Header.css";
import Earth from "./images/globe.png";

export default function Header() {
  return  (
    <>
     <header>
      <img src={Earth} alt="Earth" />
      <h1>my travel journal.</h1>
     </header>
    </>
  );
}
