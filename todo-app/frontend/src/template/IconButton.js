import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import If from './If'

export default props => (
    <If teste={!props.hide}>
            <Button 
                variant={props.variant}
                onClick={props.onClick}
            >
                <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
            </Button>
            </If>
)