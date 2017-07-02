import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action';

let AddTodo = ({ dispatch }: any) => {
  let input: HTMLInputElement;

  return (
    <div>
        <form 
            onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
            return;
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }}
        >
            <input 
                ref={node => {
                input = node as any;
                }} 
            />
            <button type="submit">
            Add Todo
            </button>
        </form>
        </div>
  );
};

AddTodo = connect()(AddTodo) as any;

export default AddTodo;