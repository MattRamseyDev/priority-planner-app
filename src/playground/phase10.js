class Phase10App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerList: [
                {
                    name: 'Matt',
                    score: 0,
                    phase: 0
                },
                {
                    name: 'Joey',
                    score: 69,
                    phase: 11
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Scoreboard players={this.state.playerList}/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>Phase 10 Scoreboard</h1>
        </div>
    )
}

const Scoreboard = (props) => {
    return (
        <div>
            {
                props.players.map((player) => <Player key={Math.random()} player={player} />)
            }
        </div>
    )
}

class CalculatorForm extends React.Component {
    constructor(props){
        super(props);
        this.calculateScore = this.calculateScore.bind(this);
        this.state = {
            
        }
    }

    calculateScore(e) {
        e.preventDefault();
        console.log('score');
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor='<10'>How many cards less than 10?</label>
                        <input type='number' id='<10' value='0' />
                    </div>
                    <div>
                        <label htmlFor='>10'>How many cards greater than 10?</label>
                        <input type='number' id='>10' value='0' />
                    </div>
                    <div>
                        <label htmlFor='skips'>How many skips?</label>
                        <input type='number' id='skips' value='0' />
                    </div>
                    <div>
                        <label htmlFor='wildcards'>How many wildcards?</label>
                        <input type='number' id='wildcards' value='0' />
                    </div>
                    {/* <div>
                    <label htmlFor='phase'>Did they complete their phase?</label>
                    <input type='radio' id='no-phase' name='phase' value='yes'>Yes</input>
                    <input type='radio' id='yes-phase' name='phase' value='no'>No</input>
                </div> */}
                    <button id='calculate' onClick={this.calculateScore}>Calculate</button>
                </form>
            </div>
        )
    }
}



const Player = (props) => {
    return (
        <div>
            <h3>Name: {props.player.name}</h3>
            <p>Score: {props.player.score}</p>
            <p>Phase: {props.player.phase}</p>
            <CalculatorForm />
        </div>
    )
}

ReactDOM.render(<Phase10App/>, document.getElementById('app'));