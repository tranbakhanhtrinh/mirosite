import "./Menu.scss";

const Menu = ({ logo, logoUrl, discoverTxt, discoverUrl, isLast }) => {
    return (
        <div className="menu">
            {logo && (
                <div className={`menu__logo ${isLast ? "border-white" : ""}`}>
                    <a href={logoUrl} className={`${isLast ? "txt-white" : ""}`}>
                        {logo}
                    </a>
                </div>
            )}
            <div className={`menu__discover ${isLast ? "border-white" : ""}`}>
                <a href={discoverUrl} className={`${isLast ? "txt-white" : ""}`}>
                    {discoverTxt}
                </a>
            </div>
        </div>
    );
};

export default Menu;
