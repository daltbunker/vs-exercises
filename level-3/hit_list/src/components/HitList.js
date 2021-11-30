import React, { Component } from 'react'
import axios from "axios"
import HitComponent from './HitComponent'

class HitList extends Component {

    constructor() {
        super()
        this.state = {
            hitArr: []
        }
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(resp => this.setState({hitArr: [...resp.data]}))
    }


    render() {
        const hitComponents = this.state.hitArr.map(obj => {
            return (
                <HitComponent image={obj.image} name={obj.name}/>
            )
        })
        return (
            <div className='HitList'>
                {hitComponents}
            </div>
        )
    }
}

export default HitList

