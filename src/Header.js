import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container clearfix">
                <a href="#" className="logo">
                    <img src="uploads/img/logo.png" alt="Frebdm"/>
                </a>
            <nav className="header_menu">
                <ul className="clearfix">
                    <li className="header_menu_item">
                        <a href="#">Home</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="#">Portfolios</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="#">Blog</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="#">Contact</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="#">Shop</a>
                    </li>
                </ul>
            </nav>
            <a href="#" className="login"></a>
            </div>
        </div>
);
};

export default Header;