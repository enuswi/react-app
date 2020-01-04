import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';

class Hoge extends React.Component {
    render() {
        return (
            <div>
                <div className="hoge">hoge</div>
                <div className="fuga">fuga</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Hoge/>,
    document.getElementById('root')
);