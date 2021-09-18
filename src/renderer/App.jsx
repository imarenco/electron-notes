import React, { useEffect } from 'react';
import Notes from './components/Notes';
import { NotesProvider } from './context/NotesContext';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  min-height: 100vh;
`;

const App = () => {
  return (<NotesProvider>
    <AppContainer>
      <Notes />
    </AppContainer>
  </NotesProvider>
  )
};

export default App;