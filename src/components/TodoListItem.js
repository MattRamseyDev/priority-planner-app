import React from 'react';
import { connect } from 'react-redux';

const TodoListItem = (props) => (
    <div>
        <input type='text' 
            value={props.description} 
            // onChange={props.onChange((e) => e.target.value)}
            onChange={(e) => props.onChange({description: e.target.value})}
        />
        <button onClick={(e) => {
            //keeping the component reusable
            props.onRemove({
                id: props.id
            });
        } 
        }>
            Done
        </button>
    </div>
)

export default connect()(TodoListItem);