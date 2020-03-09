import React from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from '../todo/TodoForm'
import TodoList from '../todo/TodoList'

export default props => (
    <div className='container'>
        <PageHeader name='Tarefas' small=' Cadastro'></PageHeader>
        <TodoForm/>
        <TodoList/>
    </div>
)

