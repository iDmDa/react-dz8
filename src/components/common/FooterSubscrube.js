const FooterSubscrube = () => {
    return (
        <section id="subscrube">
            <div className="separator"></div>
            <div>
                <img id="sub-img" src="/img/subscribe.png" alt="subscribe" />
            </div>
            <div id="subscribe-slogan">
                <div className="sub-photo">
                    <img src="/img/sub-photo.png" alt="photo" />
                </div>
                <div className="sub-info">
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                    <p>Bin Burhan<br /><span>Dhaka, Bd</span></p>
                    <div className="sub-list">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div id="email-block">
                <p>Subscribe</p>
                <p>FOR OUR NEWLETTER AND PROMOTION</p>
                <div>
                    <form>
                        <input type="email" name="email" id="subscrube-email" required placeholder="Enter Your Email" />
                        <button>Subscribe</button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default FooterSubscrube;