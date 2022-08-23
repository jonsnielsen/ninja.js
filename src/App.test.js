import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App locale="da" />);
});

// it('renders 5 rows', () => {
//   const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

//   expect(wrapper.find('tr').length).toBe(5);
// });

// it('filters rows based on input', () => {
//   const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

//   wrapper.find('input').simulate('change', { target: { value: 'k' } });

//   expect(wrapper.find('tr').length).toBe(2);
// });
