

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src="src\assets\RedStore_Img\images\logo.png" alt="logo" width="125px" />
                </div>
                <nav>
                    <ul>  {/*  underlist tag */}
                        <li><a href="">Home</a></li>  {/*  list tag */}
                        <li><a href="">Product</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Account</a></li>
                    </ul>
                </nav>
                <img src="src\assets\RedStore_Img\images\cart.png" alt="cart-image" width="30px" height="30px"/>
            </div>
        </div>

    )
}

export default Navbar