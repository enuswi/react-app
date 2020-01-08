import * as React from 'react';


interface PlayerProps {
    name: string,
    //winCount: number
}

class Player extends React.Component<any, PlayerProps> {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }
    
    render() {
        const winCount = localStorage.getItem(this.state.name);
        
        return (
            <div>{ this.state.name }：{ winCount }勝</div>
        )
    }
    
}

class Record extends React.Component {
    render() {
        return(
            <div>
                <h1>Record</h1>
                <div>
                    <Player name={'X'} />
                    <Player name={'O'} />
                </div>
            </div>
        )
    }
}

export default Record;