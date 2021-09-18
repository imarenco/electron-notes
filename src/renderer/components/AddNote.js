import React, { useContext, useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { store, actions } from '../context/NotesContext';
import { generateId } from '../util/utils';

const NewNote = styled.div`
	background-color: #67d7cc;
	margin-bottom: 10px;
	border-radius: 10px;
	padding: 1rem;
	min-height: 170px;
	flex-direction: column;
	justify-content: space-between;
`;

const NoteFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ErrorState = styled.p`
	color: #cc3300;
	height: 18px;
	padding: 0px;
	
`;

const SaveButton = styled.button`
	background-color: #e1e1e1;
	border: none;
	margin-left: 10px;
	border-radius: 15px;
	padding: 5px 10px 5px 10px;
	&:hover {
		background-color: #ededed;
		cursor: pointer;
	}
`;

const NoteInput = styled.textarea`
	border: none;
	resize: none;
	min-width: 100%;
	background-color: #67d7cc;
	&:focus {
		outline: none;
	}
`;

function isEmpty(str) {
	return (!str || str.length === 0);
}

const AddNote = () => {
	const { dispatch } = useContext(store);
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = useCallback((event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	}, []);

	const isEmptyNote = useMemo(() => isEmpty(noteText), [noteText]);

	const handleSaveClick = useCallback(() => {
		if (noteText.trim().length > 0) {
			dispatch({ type: actions.addNote, payload: { id: generateId(), text: noteText } });
			setNoteText('');
		}
	}, [noteText]);

	const handleSaveFileClick = useCallback(() => {
		if (noteText.trim().length > 0) {
			window.appContext.saveFile(noteText);
			setNoteText('');
		}
	}, [noteText]);

	return (
		<NewNote>
			<NoteInput
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></NoteInput>
			<ErrorState>{isEmptyNote ? 'Note must be filled out' : ''}</ErrorState>
			<NoteFooter>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<div>
					<SaveButton onClick={handleSaveClick}>
						Save
					</SaveButton>
					<SaveButton onClick={handleSaveFileClick}>
						Save Filesystem
					</SaveButton>
				</div>
			</NoteFooter>
		</NewNote>
	);
};


export default AddNote;