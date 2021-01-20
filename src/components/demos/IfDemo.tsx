import React from 'react'
import {If} from 'handy-ui'
import { Badge } from '@material-ui/core'

const IfDemo = (): JSX.Element => {
   const days = ['Mo','Tu','We','Th','Fr','Sa','Su']
    return (
    <>
      {days.map((item)=>{
        <>
          {item}
          <If is={item[0]==='S'}>
            <Badge>free</Badge>
          </If>
          <Badge>Pause at 1</Badge>
        </>
      })}
    </>
    );
}

export default IfDemo;
