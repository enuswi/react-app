import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';

class Hoge extends React.Component {
    render() {
        return (
            <div>hoge</div>
        );
    }
}

ReactDOM.render(
    <Hoge/>,
    document.getElementById('root')
);