import React, { Component } from 'react'
import { Form, FormControl, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { faPlus, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../template/IconButton'

import { changeDescription, search, add, clear } from './TodoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandlerTodo = this.keyHandlerTodo.bind(this)
    }

    UNSAFE_componentWillMount() {
        this.props.search()
    }

    keyHandlerTodo = (e) => {
        const { add, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <Form className='todoForm'>
                <Row>
                    <Col xs={12} sm={9} md={10}>
                        <FormControl
                            id='description'
                            placeholder='Adicione uma tarefa'
                            onChange={this.props.changeDescription}
                            onKeyPress={this.keyHandlerTodo}
                            value={this.props.description}
                        ></FormControl>
                    </Col>
                    <Col xs={12} sm={3} md={2}>
                        <IconButton
                            variant='primary'
                            icon={faPlus}
                            onClick={() => add(description)}
                        >
                        </IconButton>
                        <IconButton
                            variant='info'
                            icon={faSearch}
                            onClick={search()}
                        >
                        </IconButton>
                        <IconButton
                            variant='light'
                            icon={faWindowClose}
                            onClick={this.props.clear}
                        >
                        </IconButton>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ add, clear, search, changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)