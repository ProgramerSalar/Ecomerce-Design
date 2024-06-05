

const Footer = () => {
  return (
    <div className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download out App</h3>
                <p>Download App for Android and IOS mobile phone</p>
                <div className="app-logo">
                    <img src="src\assets\RedStore_Img\images\play-store.png" alt="img" />
                    <img src="src\assets\RedStore_Img\images\app-store.png" alt="img" />
                </div>
            </div>
            <div className="footer-col-2">
                <img src="src\assets\RedStore_Img\images\logo-white.png" alt="add-img" />
                <p>Our Purpose Is To Sustainably Make Our Planet</p>
            </div>
            <div className="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Linked In</li>
                </ul>
            </div>
        </div>
        <hr />   {/*   horizontal line  */}
        <p className="copyright">Copyright 2020 - Easy Tutorials</p>
    </div>
 </div>
  )
}

export default Footer