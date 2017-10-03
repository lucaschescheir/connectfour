import { createStore } from 'redux';

const initial = {
current: 'red',
board: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
],
};

function reducer(state, action){
if(action.type === 'DROP_TILE'){
    console.log('adf')
    const tile = state.current;
    const col = state.board[action.payload].concat(tile)

    const board = state.board.slice()
    board[action.payload] = col;
    return {
        current: state.current === 'red' ? 'black' : 'red',
        board: board,
    }
}
return state;
}

export default createStore(reducer, initial);
