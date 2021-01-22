import React, { useState } from 'react'
import {VhProvider} from 'handy-ui'
import { Fade, Button } from '@material-ui/core';

const VhFullscreen = (): JSX.Element => {
  const [show, setShow] = useState(false)
  return <>
          <Button onClick={() => setShow(!show)}>
              {show?'Hide':'Show'}
          </Button>
      <VhProvider/>
      <Fade in={show}>
        <div style={{
          position:'fixed',
          top: 0,
          zIndex: 9999,
          right:0,
          display:'flex'
        }}>
        <div style={{
          backgroundColor:'tomato',
          padding:'5px',
          height:'100vh',
          marginRight:'30px',
          border:'dotted black 4px'
        }}>100vh no<br/>VhProvider</div>
        <div style={{
          backgroundColor:'darkseagreen',
          padding:'5px',
          height:'calc(var(--vh, 1vh) * 100)',
          border:'dotted black 4px'
        }}>100vh using<br/>VhProvider</div>
        </div>
      </Fade>
      </>
    
}

export default VhFullscreen;
