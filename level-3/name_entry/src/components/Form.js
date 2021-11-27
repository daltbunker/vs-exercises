import React from 'react'
import OrderedList from './OrderedList'
import Button from './Button'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    onSubmit(event) {
        event.preventDefault()
        if (!this.state.name) {
            alert("Name Entry Required!")
            return
        }
        this.setState(prevState => {
            return (
                {
                    name: "",
                    names: [...prevState.names, prevState.name]
                }
            )
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Enter Name:
                    <input style={{ margin: 15 }} type="text" name="name" value={this.state.name} onChange={this.handleChange}/> 
                </label>
                <Button text="ADD" bkgColor="green"/>
                <OrderedList list={this.state.names} />
            </form>
        )
    }
    
}

export default Form
