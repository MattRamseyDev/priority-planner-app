import React from 'react';

const PrioritiesListItem = (props) => (
    <div>
        {/* <span>{props.rank + 1}</span> */}
        <input type='number'
            value={props.rank + 1}
            onChange={ (e) => 
                {
                    if ((e.target.value -1 ) > props.rank){
                        props.onRankChange(props.rank - 1)
                    } else {
                        props.onRankChange(props.rank + 1)
                    }
                }
            }
        />
        <input type='text'
            value={props.text}
            // onChange={props.onChange((e) => e.target.value)}
            onChange={(e) => props.onTextChange({ text: e.target.value })}
        />
        <button onClick={() => {
                props.onRemove();
            }
        }>X</button>
    </div>
)

export default PrioritiesListItem;