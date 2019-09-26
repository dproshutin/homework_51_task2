import React from 'react';

const Sidebar = (props) => {
    return (
        <div className="header">
        <div className="container clearfix">
        <a href="#" className="logo">
        <img src="img/logo.png" alt="Frebdm"/>
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

export default Sidebar;


<aside class="sidebar">
    <header class="sidebar_header">
    <a href="#" class="logo">
    <img src="img/logo.png" alt="Kappe">
    </a>
    </header>
    <div class="sidebar_toggle_menu"></div>
    <nav class="sidebar_menu">
    <ul class="sidebar_menu_list">
    <li class="sidebar_menu_item">
    <a href="#" class="sidebar_menu_link">Home</a>
    </li>
    <li class="sidebar_menu_item">
    <a href="#" class="sidebar_menu_link">Work</a>
    </li>
    <li class="sidebar_menu_item">
    <a href="#" class="sidebar_menu_link">About</a>
    </li>
    <li class="sidebar_menu_item">
    <a href="#" class="sidebar_menu_link">Blog</a>
    </li>
    <li class="sidebar_menu_item">
    <a href="#" class="sidebar_menu_link">Services</a>
    </li>
    <li class="sidebar_menu_item">
    <a href="#" class="sidebar_menu_link">Contact</a>
    </li>
    </ul>
    <div class="sidebar_wrap">
    <div class="sidebar_filters">
    <span class="filter_title">Filter</span>
    <ul class="filter_list">
    <li class="filter_item">
    <input type="checkbox" name="goods" id="all" class="filter_checkbox">
    <label for="all" class="filter_label">All Works</label>
</li>
<li class="filter_item">
    <input type="checkbox" name="goods" id="web_dev" class="filter_checkbox">
    <label for="web_dev" class="filter_label">web design</label>
</li>
<li class="filter_item">
    <input type="checkbox" name="goods" id="illus" class="filter_checkbox">
    <label for="illus" class="filter_label">illustration</label>
    </li>
    <li class="filter_item">
    <input type="checkbox" name="goods" id="photo" class="filter_checkbox">
    <label for="photo" class="filter_label">photography</label>
    </li>
    <li class="filter_item">
    <input type="checkbox" name="goods" id="wp" class="filter_checkbox">
    <label for="wp" class="filter_label">wallpapers</label>
    </li>
    <li class="filter_item">
    <input type="checkbox" name="goods" id="broch" class="filter_checkbox">
    <label for="broch" class="filter_label">brochures</label>
    </li>
    </ul>
    </div>
    <div class="sidebar_contacts">
    <a href="#" class="sidebar_contacts_icon flickr"></a>
    <a href="#" class="sidebar_contacts_icon gp"></a>
    <a href="#" class="sidebar_contacts_icon tw"></a>
    <a href="#" class="sidebar_contacts_icon pint"></a>
    <a href="#" class="sidebar_contacts_icon drb"></a>
    <a href="#" class="sidebar_contacts_icon beh"></a>
    <a href="#" class="sidebar_contacts_icon fb"></a>
    </div>

</div>
</nav>
</aside>