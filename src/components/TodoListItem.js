import React from 'react';
import { connect } from 'react-redux';

const TodoListItem = (props) => (
    <div>
        <input type='text' 
            value={props.description} 
            // onChange={props.onChange((e) => e.target.value)}
            onChange={(e) => props.onChange({description: e.target.value})}
        />
        <button onClick={(e) => {props.onComplete();}}
        >Done</button>
        {!props.lists.includes('day') &&  
            <button onClick={(e) => {
                e.preventDefault();
                props.onChangeList({ lists: [...props.lists, 'day'] })
            }}
            >Do Today</button>
        }
            <button onClick={(e) => {
              e.preventDefault();
                const newLists = props.lists.filter(item => item != props.filter.list)
                props.onChangeList({lists: [...newLists]})
            }}

            >Remove</button>
        {/* {props.goal.id && <span>Goal: {props.goal.description}</span>} */}
        
    </div>
)

export default connect()(TodoListItem);