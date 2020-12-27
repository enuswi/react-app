import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from './header/menu';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">
                    <Link to="/">REACT APP</Link>
                </div>
                <Menu></Menu>
            </div>
        )
    }
}

export default Header;