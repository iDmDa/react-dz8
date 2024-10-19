const FooterContacts = () => {

    const sections = [
        {
            title: 'COMPANY',
            cssClass: "company",
            items: ['Home', 'Shop', 'About', 'How It Works', 'Contact'],
        },
        {
            title: 'INFORMATION',
            cssClass: "information",
            items: ['Terms & Conditions', 'Privacy Policy', 'How to Buy', 'How to Sell', 'Promotion'],
        },
        {
            title: 'SHOP CATEGORY',
            cssClass: "shop-category",
            items: ['Men', 'Women', 'Child', 'Apparel', 'Browse All'],
        },
    ];

    const Section = ({ title, cssClass, items }) => (
        <div className={cssClass}>
            <ul className="list">
                <h3>{title}</h3>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );

    const FooterInfo = () => (
        <>
            {sections.map((section, index) => (
                <Section key={index} title={section.title} cssClass={section.cssClass} items={section.items} />
            ))}
        </>
    );

    return (
        <section id="info">
            <div className="brand">
                <div className="logo">
                    <img src="/img/logo.png" alt="" />
                    <p>BRAN<span>D</span></p>
                </div>

                <p>
                    Objectively transition extensive data rather than cross functional
                    solutions. Monotonectally syndicate multidisciplinary materials
                    before go forward benefits. Intrinsicly syndicate an expanded
                    array of processes and cross-unit partnerships.
                    <br />
                    <br />
                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies.
                    Dynamically optimize.
                </p>
            </div>

            <FooterInfo />

        </section>
    );
}

export default FooterContacts;