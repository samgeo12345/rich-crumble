function Header(){
    return(
        <div className="navdiv">
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