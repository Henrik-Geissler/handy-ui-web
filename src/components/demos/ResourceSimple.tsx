import React from 'react'
import {Resource} from 'handy-ui'

const ResourceSimple = (): JSX.Element => {
    return (<Resource src='https://jsonplaceholder.typicode.com/users/1' render={data=>data.name}/>);
}

export default ResourceSimple;
