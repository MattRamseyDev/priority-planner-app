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
            })} 
        }>Done</button>
        {props.filter.list === 'week' && !props.lists.includes('day') &&  
            <button onClick={(e) => {
                props.onChangeList({ lists: [...props.lists, 'day'] })
                console.log(props.filter)
            }}
            >Add To Daily List</button>
        }
    </div>
)

export default connect()(TodoListItem);