
import React from 'react';
import renderer from 'react-test-renderer';
import Note from '../src/renderer/components/Note';

test('Compare Note snapshot and check properties', () => {
    const text = 'test';
    const component = renderer.create(
        <Note text={text} />,
    );

    let tree = component.toJSON();
    const comapreText = component.root.findByProps({ 'data-test': "text" }).props.children;
    expect(tree).toMatchSnapshot();
    expect(text).toEqual(comapreText);
});
