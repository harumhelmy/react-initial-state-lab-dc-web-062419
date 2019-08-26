import React from 'react'

export default class Bomb extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    generateBombTimer = () => {
        if (this.state.secondsLeft === 0) {
            return <p>Boom!</p>
        } else {
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }

    render(){
        return this.generateBombTimer()
    }
}