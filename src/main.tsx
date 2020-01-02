import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Hoge extends React.Component {
    render() {
        return (
            <div>hogehoge</div>
        );
    }
}

ReactDOM.render(
    <Hoge/>,
    document.getElementById('root')
);