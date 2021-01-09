import * as React from 'react';
import Header from '../components/header';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;