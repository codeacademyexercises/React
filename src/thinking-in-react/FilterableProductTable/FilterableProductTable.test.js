import React from 'react';
import { shallow } from 'enzyme';
import FilterableProductTable from './FilterableProductTable.js';
import renderer from 'react-test-renderer';

describe('FilterableProductTable should ',()=>{
    it('render',()=>{
        const tree = renderer.create(<FilterableProductTable search="" inStock={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});