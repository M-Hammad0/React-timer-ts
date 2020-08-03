import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup} from '@testing-library/react';
import Main from './Main';

afterEach(cleanup)

it('render Main component', () => {
      const {asFragment} = render(<Main />);
      expect(asFragment).toMatchSnapshot();
})

it('render correct time',  () => {
      const {getAllByText} =   render(<Main />);
      expect(getAllByText('00')).toHaveLength(3)
})
