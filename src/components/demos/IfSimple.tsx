import React from 'react'
import {If, Text} from 'handy-ui'
import { Badge } from '@material-ui/core'

const IfSimple = (): JSX.Element => {
    //const a = 
    return (
    <>
        <If is={false}>
          <Text></Text>
        </If>
    </>
    );
}

export default IfSimple;
