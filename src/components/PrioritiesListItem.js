import React from 'react';

const PrioritiesListItem = (props) => (
    <div>
        <input type='text'
            value={props.text}
            // onChange={props.onChange((e) => e.target.value)}
            onChange={(e) => props.onChange({ text: e.target.value })}
        />
        <button onClick={() => {
                props.onRemove();
            }
        }>X</button>
    </div>
)

export default PrioritiesListItem;