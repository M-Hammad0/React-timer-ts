import React from 'react'
import '@testing-library/jest-dom'
import Control from './Controls'
import { render, cleanup } from '@testing-library/react';
import setTimeInSeconds from '../Main/Main'

afterEach(cleanup)

it('render control component',() => {
      const {asFragment} = render(<Control time={setTimeInSeconds}/>)
      expect(asFragment).toMatchSnapshot();
})

it('render control buttons', () => {
      const {getByTestId} = render(<Control time={setTimeInSeconds} />)
      expect(getByTestId('btn-play')).toHaveTextContent('Play')
      expect(getByTestId('btn-stop')).toHaveTextContent('Stop')
      expect(getByTestId('btn-reset')).toHaveTextContent('Reset')
})
