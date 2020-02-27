import React from 'react'
import IconButton from '../template/IconButton'
import { faTrashAlt, faCheck, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
export default props => {

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
                        onClick={() => props.handleMarkAsDone(todo)}
                        hide={todo.done}
                        >
                    </IconButton>
                    <IconButton
                        variant='warning'
                        icon={faUndoAlt}
                        onClick={() => props.handleMarkAsPending(todo)}
                        hide={!todo.done}
                        >
                    </IconButton>
                    <IconButton
                        variant='danger'
                        icon={faTrashAlt}
                        onClick={() => props.handleRemove(todo)}
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