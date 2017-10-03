import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dropTile} from './action';

class Grid extends Component {
    constructor(){
        super()
    }
    handleClick(){
        console.log(`it clicked ${this.props.x}`)
        this.props.sendTileDrop(this.props.x);
    }
    render(){
        const board = this.props.board
        const x = this.props.x
        const y = this.props.y

        let classes = 'cell'

        if(board[x][y] !== undefined ){
            if(board[x][y] === 'red'){
                classes += ' p2'
            } else {
                classes += ' p1'
            }
        }

        return(
            <div className={classes} onClick={()=> this.handleClick()} >
                
            </div>
        )
    }
}

const state2Props = state => {
    return{
        board: state.board
}
}

const dispatch2Grid = dispatch => {
    return{
        sendTileDrop: col => dispatch(dropTile(col))
        }
    }

export default connect(state2Props, dispatch2Grid)(Grid);
