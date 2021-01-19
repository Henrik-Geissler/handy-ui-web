import React from 'react'
import AudioAutoplay from '../demos/AudioAutoplay';
import AudioCustom from '../demos/AudioCustom';
import AudioSimple from '../demos/AudioSimple';
import ComponentsList from '../demos/ComponentsList';
import JpgDemo from '../demos/JpgDemo';
import JpgSimple from '../demos/JpgSimple';
type DemoProps = {
    demo:string
    setOpenComponent:CallableFunction
}
const Demo = ({demo,setOpenComponent}: DemoProps): JSX.Element => {
    switch (demo) {
        
        case 'Components: Getting started':
            return (
                <ComponentsList setOpenComponent={setOpenComponent}/>
                );
        case 'Audio: Autoplay Music':
            return (
                <AudioAutoplay />
              );
        case 'Audio: Simple Player':
            return (
                <AudioSimple />
            );
        case 'Audio: Custom Audio Controle':
            return (
                <AudioCustom />
                );
        case 'Jpg: Simple Image':
            return (
                <JpgSimple />
                );
        case 'Jpg: Images':
            return (
                <JpgDemo />
                );
        default:
            return (
              <>
              Work in progress! This example will be added soon.
              </>
            );
    }
}

export default Demo;
