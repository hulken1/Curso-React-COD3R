import React from 'react'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'
import { faTrashAlt, faCheck, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { bindActionCreators } from 'redux'
import { toogleIsDone, deleteTodo } from './TodoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton
                        variant='success'
                        icon={faCheck}
                        onClick={() => props.toogleIsDone(todo)}
                        hide={todo.done}
                        >
                    </IconButton>
                    <IconButton
                        variant='warning'
                        icon={faUndoAlt}
                        onClick={() => props.toogleIsDone(todo)}
                        hide={!todo.done}
                        >
                    </IconButton>
                    <IconButton
                        variant='danger'
                        icon={faTrashAlt}
                        onClick={() => props.deleteTodo(todo)}
                        hide={!todo.done}
                        >
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th className='tableActions'>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ toogleIsDone, deleteTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)