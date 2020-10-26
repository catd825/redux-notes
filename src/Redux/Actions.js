export const addNote = (noteObj) => ({ type: "add note", payload: noteObj })


export const getNotes = () => {
    console.log("first dispatch invoked")
    return function (dispatch) {
        console.log("nested dispatch invoked")

    fetch("http://localhost:3001/notes")
        .then(response => response.json())
        // .then(console.log)
        .then(data => dispatch({type: "add_notes_from_fetch", payload: data }))
        //send this data to our reducer to be added to state
    }
}