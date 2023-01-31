import React from "react"
import "./css/App.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {started: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({started: 1})
    }

    render() {
        return (
            <div>
                <div className="topBar"></div>
                <div>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#2F2824', width: '50%', height: 25 }}>
                        <path d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 
                        120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 
                        120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z" />
                    </svg>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#2F2824', width: '50%', height: 25 }}>
                        <path d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 
                        120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 
                        120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z" />
                    </svg>
                </div>

                <div className="title" started={this.state.started}>
                    <span style={{ transform: 'scale(1, 1.35)' }}>H</span>
                    <span style={{ transform: 'scale(1, 1.15)' }}>A</span>
                    <span>N</span>
                    <span>G</span>
                    <span>M</span>
                    <span style={{ transform: 'scale(1, 1.15)' }}>A</span>
                    <span style={{ transform: 'scale(1, 1.35)' }}>N</span>
                </div>
                <div className="subtitle" started={this.state.started}>Tthe_classic_game_of_wordplayS</div>


                <div className="svg">
                    <svg version="1.0" viewBox="0 0 300 169" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0,169) scale(0.1,-0.1)" fill="#000" stroke="none" >
                            <path d="M830 1280 c0 -5 8 -10 19 -10 13 0 20 -10 25 -31 10 -52 6 -103 -9 -123 -11 -14 -12 -23 -4 
                            -33 8 -9 13 -118 15 -338 l3 -325 -75 0 c-43 0 -74 -4 -74 -10 0 -10 276 -12 1120 -9 217 1 430 1 473 0 
                            49 -2 77 1 77 8 0 10 -51 16 -107 14 -23 -2 -40 28 -28 47 3 5 2 10 -4 10 -5 0 -12 -6 -14 -12 -3 -8 -6 
                            -6 -6 5 -1 9 -6 17 -12 17 -7 0 -8 -7 -4 -18 20 -47 18 -52 -14 -52 -27 0 -32 4 -38 32 -5 27 -7 29 -14 
                            13 -7 -17 -8 -18 -8 -2 -1 9 -5 17 -11 17 -12 0 -12 -2 0 -34 l10 -26 -183 -1 c-289 -2 -1062 2 -1065 6 
                            -2 2 -5 156 -7 342 l-3 340 76 82 76 83 175 -7 c97 -4 213 -6 259 -5 l82 1 0 -36 c0 -28 -5 -37 -24 -45 
                            -56 -21 -73 -94 -33 -134 13 -13 28 -25 34 -27 6 -2 13 -13 16 -24 5 -17 -4 -25 -58 -49 -62 -28 -82 -46 
                            -50 -46 9 0 38 11 64 25 l49 24 -4 -81 -3 -82 -51 -51 c-46 -46 -62 -75 -42 -75 4 0 30 25 59 57 l51 58 55 
                            -58 c36 -39 57 -55 62 -47 5 7 -14 33 -46 66 l-53 54 -1 75 c0 46 4 75 11 75 5 0 25 -11 44 -25 35 -25 60 
                            -32 60 -16 0 12 -89 71 -107 71 -7 0 -13 11 -13 25 0 18 7 26 25 31 32 8 45 32 45 83 0 41 -28 81 -57 81 
                            -8 0 -13 13 -13 35 l0 35 114 0 c63 0 117 4 120 8 3 5 -151 12 -341 15 -487 10 -643 9 -643 -3z m130 -65 
                            c-30 -30 -57 -55 -60 -55 -3 0 -3 25 -2 55 l4 55 56 0 56 0 -54 -55z m638 -77 c31 -31 -12 -104 -45 -76 
                            -26 22 -10 88 22 88 6 0 16 -5 23 -12z" />
                        </g>
                    </svg>
                </div>

                <div className="startWrap">
                    <div className="startButton" onClick={this.handleClick} started={this.state.started}>Click to Begin</div>
                </div>
            </div>
        )
    }
}

export default App