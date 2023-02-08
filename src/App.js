import React from "react"
import "./css/App.css"
import hangman from "./images/hangman.png"
import guy from "./images/guy.png"
import head from "./images/head.png"
import larm from "./images/larm.png"
import rarm from "./images/rarm.png"
import lleg from "./images/lleg.png"
import rleg from "./images/rleg.png"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            started: 0,
            word: "",
            letters: ['fill'],
            strikes: 0,
            usedLetters: [],
            won: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.getWord = this.getWord.bind(this)
        this.trim = this.trim.bind(this)
        this.calcLetters = this.calcLetters.bind(this)
        this.checkLetter = this.checkLetter.bind(this)
    }

    getWord() {
        fetch('https://random-word-api.herokuapp.com/word')
            .then((response) => response.text())
            .then((text) => this.setState({ word: text }))
    }

    trim(word) {
        let trimmed = word.substring(2, word.length - 2)
        this.setState({ word: trimmed })
    }

    componentDidMount() {
        this.getWord()
    }

    handleClick() {
        this.setState({ started: 1 })
        this.trim(this.state.word)
        setTimeout(() => {
            let letters = this.state.word.split("")
            this.setState({ letters: letters })
        }, 10)
    }

    calcLetters() {
        let letters = this.state.word.split("")
        let letterSpans = letters.map((letter, index) => {
            if (this.state.letters.includes(letter.toLowerCase())) {
                return <span key={index} className='letter' started={this.state.started}
                    style={{ animationDelay: ((index * 0.125) + 2.6) + 's', color: '#F5EFE8' }}>{letter}
                </span>
            } else {
                return <span key={index} className='letter' started={this.state.started}
                    style={{ animationDelay: ((index * 0.125) + 2.6) + 's', color: '#000' }}>{letter}
                </span>
            }
        })

        return <div>{letterSpans}</div>
    }

    checkLetter(letter, e) {
        let chars = this.state.letters
        if (this.state.usedLetters.includes(letter.toUpperCase()) != true) {
            if (chars.includes(letter.toLowerCase())) {
                chars = chars.filter(char => char != letter.toLowerCase())
                this.setState({ letters: chars })
                this.calcLetters()
            } else {
                let strike = this.state.strikes
                strike++
                this.setState({ strikes: strike })
            }
            this.setState({ usedLetters: [...this.state.usedLetters, letter] })

            e.target.style.opacity = '50%'
            e.target.style.transform = 'none'
            e.target.style.cursor = 'revert'
            // add style for incorrect choice

            if(this.state.letters.length === 0) {
                this.setState({won : 1})
            }
        }
    }

    render() {
        const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65))

        return (
            <div>
                <div className="topBar" won={this.state.won}></div>
                <div className="topContainer" won={this.state.won}>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#2F2824', width: '50%', height: 25, opacity: '98%' }}>
                        <path d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 
                        120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 
                        120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z" />
                    </svg>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#2F2824', width: '50%', height: 25, opacity: '98%' }}>
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

                <div className='imgContainer' started={this.state.started}>
                    <img src={hangman} />
                    <img src={guy} started={this.state.started} className='guy' />

                    {this.state.strikes >= 1 &&
                        <img src={head} className='head' />
                    }
                    {this.state.strikes >= 2 &&
                        <img src={larm} className='larm' />
                    }
                    {this.state.strikes >= 3 &&
                        <img src={rarm} className='rarm' />
                    }
                    {this.state.strikes >= 4 &&
                        <img src={lleg} className='lleg' />
                    }
                    {this.state.strikes >= 5 &&
                        <img src={rleg} className='rleg' />
                    }
                </div>

                <div className="startWrap">
                    <div className="startButton" onClick={this.handleClick} started={this.state.started}>Click to Begin</div>
                </div>

                {this.state.started === 1 &&
                    <div className="letterBox" >
                        {this.calcLetters()}
                    </div>
                }

                {this.state.started === 1 &&
                    <ul className='keyBox'>
                        {alphabet.map(letter => (
                            <li key={letter} className='key' onClick={(e) => this.checkLetter(letter, e)}>{letter}</li>
                        ))}
                    </ul>
                }

                {/* end screen */}
                {this.state.letters.length === 0 && this.state.started === 1 &&
                    <div className="win">You Win!</div>
                }
            </div>
        )
    }
}

export default App