import React from 'react';
import SearchBar from './SearchBar.js';
import Renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Checking ',()=>{
    it('Snapshot test will work',()=>{
        const tree = Renderer.create(<SearchBar/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});