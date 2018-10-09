import React from 'react';

const PrioritiesListItem = (props) => (
    <div>
        <input type='number'
            value={props.rank + 1}
            onChange={ (e) => 
                {
                    props.onRankChange(e.target.value - 1)
                }
            }
        />
        <input type='text'
            value={props.text}
            onChange={(e) => props.onTextChange({ text: e.target.value })}
        />
        <button onClick={() => {
                props.onRemove();
            }
        }>X</button>
    </div>
)

export default PrioritiesListItem;