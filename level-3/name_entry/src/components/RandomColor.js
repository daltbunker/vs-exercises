import React, { Component } from 'react'

class RandomColor extends Component {

    constructor() {
        super()
        this.state = {
            loading: false,
            color: ""
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    loading: false,
                    color: '#' + data.colors[0].hex
                })
            })
    }


    render() {
        return (
            <div style={{backgroundColor: this.state.color}}>
                {this.state.loading ? "loading..." : "RANDOM COLOR"}
            </div>
        )
    }
}

export default RandomColor