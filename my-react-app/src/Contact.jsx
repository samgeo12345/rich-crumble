function Contact(){
    return(
        <div className="contactdiv" id="contact">
            <h1>𝑪𝒐𝒏𝒕𝒂𝒄𝒕</h1>
            <p>Get in touch with us for orders, inquiries, or special requests! Reach out via phone, email, or our contact form, and we’ll be happy to assist you. We’re here to make your cake experience delightful and seamless! </p>
            <div className="emaildiv">
                <input type="email" placeholder="Email" />
                <button><i className="fas fa-paper-plane"></i></button>
            </div>
            <br />
            <div className="ownerdiv">
                <p><i className="fas fa-shop"></i> <span>Shop</span><br></br>Rich Crumble</p>
                <p><i className="fas fa-phone"></i> <span>Phone</span><br></br>+91 9344134175</p>
                <p><i className="fas fa-envelope"></i> <span>Email</span><br></br>richcrumble1025@gmail.com</p>
                <p><i className="fas fa-address-card"></i> <span>Address</span><br></br>Vellicodu street</p>
            </div>
        </div>
    );
}
export default Contact