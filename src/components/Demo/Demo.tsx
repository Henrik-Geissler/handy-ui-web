import React from 'react'
import AudioAutoplay from '../demos/AudioAutoplay';
import AudioCustom from '../demos/AudioCustom';
import AudioSimple from '../demos/AudioSimple';
import ComponentsList from '../demos/ComponentsList';
import JpgDemo from '../demos/JpgDemo';
import JpgSimple from '../demos/JpgSimple';
import CodeSimple from '../demos/CodeSimple';
import CodeSimple2 from '../demos/CodeSimple2';
import ResourceSimple from '../demos/ResourceSimple';
import ResourceArray from '../demos/ResourceArray';
import ResourceLoading from '../demos/ResourceLoading';
import ResourceSwitch from '../demos/ResourceSwitch';
import IfDemo from '../demos/IfDemo';
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
        case 'Code: Automate syntax highlighting':
            return (
                <CodeSimple />
                );
        case 'Code: Print your components':
            return (
                <CodeSimple2 />
                );
        case 'If: Render conditionally':
            return (
                <IfDemo />
                );
        case 'Jpg: Simple Image':
            return (
                <JpgSimple />
                );
        case 'Jpg: Images':
            return (
                <JpgDemo />
                );
        case 'Resource: Get data':
            return (
                <ResourceSimple />
                );
        case 'Resource: Data handling':
            return (
                <ResourceArray />
                );
        case 'Resource: Loading indicator':
            return (
                <ResourceLoading />
                );
        case 'Resource: Reload':
            return (
                <ResourceSwitch />
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
