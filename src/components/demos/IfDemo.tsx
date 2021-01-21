import React from 'react'
import {If} from 'handy-ui'
import { Badge } from '@material-ui/core'

const IfDemo = (): JSX.Element => {
   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return (
      <>
        {days.map((item)=>
          <>
            {item}
            {': '}
            <If is={item==='Saturday'||item==='Sunday'}>
              <Badge>free</Badge>
            </If>
            <br/>
          </>
        )}
      </>
    );
}

export default IfDemo;
