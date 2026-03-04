import logo from "../../assets/react.svg";
import "./Ali.css";
export const Ali = () => {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="" width="40px" />
          <span className="Header">ReactFacts</span>
        </nav>
      </header>

      <main>
        <h1 className="title">Fun Facts About React </h1>

        <ul>
          <li>was first released in 2013</li>
          <li>was originally created by Jordan Walke</li>
          <li>has well over 100k stars on GitHub</li>
          <li>is maintained by Facebook</li>
        </ul>
      </main>
    </>
  );
};
