const Navbar = () => {
  return (
    <div className="nav">
      <button
        id="menu-btn"
        onClick={() => {
          const sideMenu = document.querySelector("aside");
          sideMenu.style.display = "block";
        }}
      >
        <span className="material-icons-sharp"> menu </span>
      </button>
      <div
        className="dark-mode"
        onClick={() => {
          document.body.classList.toggle("dark-mode-variables");
        }}
      >
        <span className="material-icons-sharp active">light_mode</span>
        <span className="material-icons-sharp">dark_mode</span>
      </div>
    </div>
  );
};

export default Navbar;
