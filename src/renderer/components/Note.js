import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Text = styled.p`
    word-break: break-all;
`;


const Footer = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    margin: 10px;
    cursor:pointer;

`;

const Container = styled.div`
    background-color: #fef68a;
    position:relative;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 1rem;
    min-height: 170px;
    flex-direction: column;
    justify-content: space-between;
`;


const Note = ({ text, id, removeNote }) => {
    return (<Container>
        <Text data-test="text">{text}</Text>
        <Footer>
            <MdDeleteForever onClick={() => removeNote({ id: id, text: text })} size="1.3em" />
        </Footer>
    </Container>);
}

Note.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    removeNote: PropTypes.func,
};

export default Note;