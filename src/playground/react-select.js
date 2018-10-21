import React from 'react';
import Select from 'react-select';

const options = [
  {value: 'red', label: 'Red'},
  {value: 'blue', label: 'Blue'},
  {value: 'green', label: 'Green'},
];

const SelectComponent = () => (
  <div>
    <Select 
      placeholder='select options'
      isSearchable={true}
      options={options} 
      defaultValue={options[0]}
      onChange={(e) => console.log(e.value)}
    />
  </div>
);

export default SelectComponent;