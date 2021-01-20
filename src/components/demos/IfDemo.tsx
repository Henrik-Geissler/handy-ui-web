import React from 'react'
import {If} from 'handy-ui'
import { Badge } from '@material-ui/core'

const IfDemo = (): JSX.Element => {
   const days = ['Mo','Tu','We','Th','Fr','Sa','Su']
    return (
    <>
      {days.map((item)=>
        <>
          {item}
          {': '}
          <Badge>gym</Badge>
          <If is={item[0]!=='S'}>
            <Badge>work</Badge>
          </If>
        </>
      )}
    </>
    );
}

export default IfDemo;
