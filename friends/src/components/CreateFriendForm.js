import React from 'react';
import { connect } from 'react-redux';
import { addingFriend } from '../actions';

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: null,
        }
    }

    inputHandler = event => {
        this.setState({[ event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addingFriend(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' placeholder='Enter Name Here' value={this.state.name} onChange={this.inputHandler} />
                <input type='text' name='email' placeholder='Enter Email Here' value={this.state.email} onChange={this.inputHandler} />
                <input type='number' name='age' placeholder='Enter Age Here' value={this.state.age} onChange={this.inputHandler} />
                <button type='sumbit'> Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { addingFriend: addingFriend })(AddFriend);