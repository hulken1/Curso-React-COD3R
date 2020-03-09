import axios from 'axios'

const URL = 'http://localhost:3005/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return(dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
    }
}

export const deleteTodo = todo => {
    return  dispatch => {
       const request =  axios.delete(`${URL}/${todo._id}`)
       .then(resp => dispatch({ type: 'TODO_DELETE', todo: request.data}))
       .then(resp => dispatch(search()))

    }
}

export const TOOGLE_IS_DONE = 'TOOGLE_IS_DONE'
export const toogleIsDone = todo => {
    return async dispatch => {
        const request = await axios.put(`${URL}/${todo._id}`, {...todo, done: !todo.done})
        dispatch({type: TOOGLE_IS_DONE, todo: request.data})
        dispatch(search())
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR'}, search()]
}