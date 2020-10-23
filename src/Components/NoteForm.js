import React from 'react';
import { connect } from 'react-redux'

class NoteForm extends React.Component {
    state = { 
        content: ""
    }

    changeHandler = (e) => {
        this.setState({ content: e.target.value })
    }


    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render(){
        console.log("Form props", this.props)
        return(
            <form onSubmit={this.submitHandler}>
                <input type = "text-area" value={this.state.content} onChange={this.changeHandler} />
                <input type="submit" value="add note" />
            </form>
        )
    }

}


//note form does not need to read state, but it needs to access the array inside state.  the job of the form is to write to that array.

//write to the state
const mapDispatchToProps = (dispatch) => {
    //dispatch: to take in an action and then call our reducer and pass that action into reducer.
    return {submitHandler: (noteObj) => dispatch({ type: "add note", payload: noteObj }) }
}


//connect allows components to connect to redux store.  it is a nested higher order component
//takes in set of arguments before the component we are wrapping it with - first should be mapToState, second should be mapDispatchToProps
//this specific form doesnt need to read state, so the first argument is null


export default connect(null, mapDispatchToProps)(NoteForm)