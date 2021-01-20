import React from 'react'
import {Resource} from 'handy-ui'

const ResourceArray = (): JSX.Element => {
    return (
        <ol><Resource src='https://jsonplaceholder.typicode.com/users'
    render={data => 
            data.map(eachUser => 
                <li>
                    {eachUser.name}
                    {' @ '}
                    {eachUser.company.name}
                </li>
            )
    }
    />
    </ol>);
}

export default ResourceArray;
