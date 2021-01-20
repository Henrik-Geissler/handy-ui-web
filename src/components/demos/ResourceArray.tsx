import React from 'react'
import {Resource} from 'handy-ui'

const ResourceArray = (): JSX.Element => {
    return (<Resource src='https://jsonplaceholder.typicode.com/users'
    render={data => 
        <ol>
            {data.map(eachUser => 
                <li>
                    {eachUser.name}
                    <b> {eachUser.company.name} </b>
                    <a href={eachUser.website}>{eachUser.website}</a>
                </li>
            )}
        </ol>
    }
    />);
}

export default ResourceArray;
