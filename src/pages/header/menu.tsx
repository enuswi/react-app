import * as React from 'react';
import { Link } from 'react-router-dom';

interface MenuState {
    isOpen: boolean
}

class Menu extends React.Component<any, MenuState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleMenu () {
        const styleTo = this.state.isOpen ? 'display: none;' : 'display: block;';
        let navElem = document.getElementById('js-menu-nav');
        navElem.setAttribute('style', styleTo);

        let buttonElem = document.getElementById('js-menu');
        this.state.isOpen ? buttonElem.classList.remove('opend') : buttonElem.classList.add('opend');

        this.setState({
            isOpen: this.state.isOpen ? false: true
        });
    }

    handleClick () {
        this.toggleMenu();
    }

    render () {
        return (
            <div className="header__menu" id="js-menu"
                onClick={() => this.handleClick()}
            >
                <nav id="js-menu-nav" className="header__menu--nav">
                    <Link to="/game">Game</Link>
                    <Link to="/record">Record</Link>
                </nav>
            </div>
        )
    }
}

export default Menu;