import React from 'react';
import { connect } from 'react-redux'
import Note from '../Components/Note'
import NoteForm from '../Components/NoteForm'
import { getNotes } from '../Redux/Actions'


class NotesContainer extends React.Component {
    // state = { notes: [] }

    componentDidMount(){
        this.props.fetchNotes()


    //     fetch("http://localhost:3001/notes")
    //     .then(resp => resp.text())
    //     .then(notes=> console.log(notes))
    //     .then(resp => resp.json())
    //     .then(notes=> this.setState({ notes: notes }))
    }

    renderNotes = () => {
        return this.props.notes.map((note) => <Note key={note.id} note={note} />)
    }

    render() {
        // console.log(this.props)
        return(
            <>
                <NoteForm />
                <ul>
                    {this.renderNotes()}
                </ul>
            </>
        )
    }
}

//read action 
const mapStateToProps = (state) => {
    return {notes: state.notes}
}

//write action
const mapDispatchToProps = (dispatch) => {
    return { fetchNotes: () => dispatch(getNotes()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)