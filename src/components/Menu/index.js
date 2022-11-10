import "./Menu.scss";

const Menu = ({ logo, logoUrl, discoverTxt, discoverUrl }) => {
    return (
        <div className="menu">
            {logo && (
                <div className="menu__logo">
                    <a href={logoUrl}>{logo}</a>
                </div>
            )}
            <div className="menu__discover">
                <a href={discoverUrl}>{discoverTxt}</a>
            </div>
        </div>
    );
};

export default Menu;
