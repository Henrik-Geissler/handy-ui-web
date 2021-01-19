import React from 'react'
import {Jpg, LazyImages} from 'handy-ui'

const JpgSimple = (): JSX.Element => {
    return (<div style={{width:'25%'}}>
        <LazyImages/>
        <Jpg src={'54-1600x900'}/>
      </div>
    );
}

export default JpgSimple;
