import {Link,useNavigate} from "react-router-dom"
import React,{useState,useEffect} from "react"
    function Header() {
        const [isScrolled, setIsScrolled] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        const navigate = useNavigate();

  const handleScroll = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/"); // ✅ Go to home page first
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // ✅ Delay to allow navigation before scrolling
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const goToHome = () => {
    if (window.location.pathname !== "/") {
      navigate("/"); // ✅ Navigate to home first if on another page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top if already on home
    }
  };
    return(
        <div className={`navdiv ${isScrolled ? "scrolled" : ""}`} id="nav">
            <div className="logodiv">
                <h2>𝓡𝓲𝓬𝓱 𝓒𝓻𝓾𝓶𝓫𝓵𝓮</h2>
            </div>
            <div className="options">
                <a onClick={goToHome}>Home</a>
                <a onClick={() => handleScroll("cakes")}>Cakes</a>
                <Link to="/about">About</Link>
                <a onClick={() => handleScroll("contact")}>Contact</a>
            </div>
            <div className="searchdiv">
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <button><i class="fas fa-search"></i></button>
                </div>
            </div>
        </div>
    );
}
export default Header