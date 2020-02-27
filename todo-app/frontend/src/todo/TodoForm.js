import React from 'react'
import { Form, FormControl, Row, Col } from 'react-bootstrap'
import { faPlus, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../template/IconButton'

export default props => {
    const keyHandlerTodo = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } 
    }
    return (
        <Form className='todoForm'>
            <Row>
                <Col xs={12} sm={9} md={10}>
                    <FormControl
                        id='description'
                        placeholder='Adicione uma tarefa'
                        onChange={props.handleChange}
                        onKeyPress={keyHandlerTodo}
                        value={props.description}
                    ></FormControl>
                </Col>
                <Col xs={12} sm={3} md={2}>
                    <IconButton
                        variant='primary'
                        icon={faPlus}
                        onClick={props.handleAdd}
                    >
                    </IconButton>
                    <IconButton
                        variant='info'
                        icon={faSearch}
                        onClick={props.handleSearch}
                    >
                    </IconButton>
                    <IconButton
                        variant='light'
                        icon={faWindowClose}
                        onClick={props.handleClear}
                    >
                    </IconButton>
                </Col>
            </Row>
        </Form>
    )
}