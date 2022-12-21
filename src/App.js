import './App.css';
import Heading from './COMPONENTS/Heading';
import Note from './COMPONENTS/Note';
import Footer from './COMPONENTS/Footer';
// import {notes} from './Notes.js';
import CreateArea from './COMPONENTS/CreateArea';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([])

  // function createNote(note, index){
  //   return(
  //     <div>
  //       <Note title={note.title} content={note.content} key={index}/>
  //     </div>
  //   )
  // }

  function addNote(note){
    console.log(note)
    setNotes(prevNote =>{
      return [...prevNote, note]
    })
  }

  function deleteNote(id){
    console.log("delete note")

    setNotes(prevNote =>{
      return prevNote.filter((noteItem, index) =>{
        return index !== id
      })
    })

  }
 
  return (
    <div className="App">
      <Heading></Heading>
      <CreateArea onAdd={addNote}></CreateArea>

      {notes.map((noteItem, index) =>{
        return(
        <Note title={noteItem.title} content={noteItem.content} key={index} id={index} onDelete={deleteNote}></Note>
        )
      })}

      {<Footer></Footer>}
    </div>
  );
}

export default App;
