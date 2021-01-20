import React, { useState } from 'react'
import {Resource} from 'handy-ui'
import { Button, CircularProgress } from '@material-ui/core';

const ResourceSwitch = (): JSX.Element => {
    const [user, setUser] = useState(1)
    return <>
            <Button onClick={()=>setUser(1+user%10)}>
                Next User
            </Button>
            <Resource
                src={`http://jsonplaceholder.typicode.com/users/${user}`}
                render={data => data.name}
                loadingIndicator={<CircularProgress />}
            />
        </>
    
}

export default ResourceSwitch;
