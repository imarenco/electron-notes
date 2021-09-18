import React from 'react';

export const defaultSourceContext = {
    notes: [],
};

export const actions = {
    addNote: 'add_note',
    removeNote: 'remove_note'
}

const store = React.createContext(defaultSourceContext);
const { Provider } = store;


function NavigationReducer(state, action) {
    switch (action.type) {
        case actions.addNote: {
            return { notes: state.notes.concat(action.payload) };
        }
        case actions.removeNote:
            return { notes: state.notes.filter((note) => note.id !== action.payload.id) };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function NotesProvider({ children }) {
    const [state, dispatch] = React.useReducer(NavigationReducer, defaultSourceContext);

    const value = { state, dispatch };

    return <Provider value={value}>{children}</Provider>
}
export { NotesProvider, store }