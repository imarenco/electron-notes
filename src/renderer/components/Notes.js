import React, { useEffect, useContext, useCallback } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import styled from '@emotion/styled';
import { store, actions } from '../context/NotesContext';

const List = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;


const Notes = () => {
  const { dispatch, state } = useContext(store);

  const removeNote = useCallback((note) => dispatch({ type: actions.removeNote, payload: note }), []);

  const notes = state?.notes;
  return (<List>
    {notes.map(note => <Note key={note.id} removeNote={removeNote} {...note} />)}
    <AddNote />
  </List>);
}


export default Notes;