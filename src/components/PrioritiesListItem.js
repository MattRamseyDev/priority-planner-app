import React from 'react';

const PrioritiesListItem = (props) => (
    <div>
        <input type='text'
            value={props.text}
            // onChange={props.onChange((e) => e.target.value)}
            onChange={(e) => props.onChange({ text: e.target.value })}
        />
    </div>
)

export default PrioritiesListItem;