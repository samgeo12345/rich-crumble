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
    return(
        <div className={`navdiv ${isScrolled ? "scrolled" : ""}`} id="nav">
            <div className="logodiv">
                <h2>𝓡𝓲𝓬𝓱 𝓒𝓻𝓾𝓶𝓫𝓵𝓮</h2>
            </div>
            <div className="options">
                <a href="">Home</a>
                <a href="">Cakes</a>
                <a href="">About</a>
                <a href="">Contact</a>
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