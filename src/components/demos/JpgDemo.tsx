import React from 'react'
import {Jpg} from 'handy-ui'

const JpgDemo = (): JSX.Element => {
    const exampleImages = ['54-1600x900','61-1600x900','96-1600x900','103-1600x900','108-1600x900','116-1600x900','129-1600x900','137-1600x900','159-1600x900','167-1600x900','193-1600x900','209-1600x900','229-1600x900','255-1600x900','300-1600x900','309-1600x900','344-1600x900','372-1600x900','403-1600x900','416-1600x900','434-1600x900','435-1600x900','472-1600x900','490-1600x900','538-1600x900','569-1600x900','590-1600x900','591-1600x900','629-1600x900','655-1600x900','660-1600x900','698-1600x900','718-1600x900','755-1600x900','796-1600x900','797-1600x900','822-1600x900','898-1600x900','945-1600x900','948-1600x900','958-1600x900','989-1600x900','1016-1600x900','1022-1600x900','1036-1600x900','1075-1600x900',]
    return (
      <>
        <div>Images are ugly, until they are loaded. In this demo you can see how the handy-ui JPG Component handles Image Lazy Loading. With Primitive simple svg Shape with a size of 800Kb (!) are used as placeholders. This allows the Page to be ready and interactable in a minimal time while providing meaningful content. And When the Images comes in the Users Viewport handy-ui loads the actual image source and unblurs the Image with a nice animation when loading is done. For a better understanding, try to throttle your network connection with the DevTools.</div>
                      <div style={{maxWidth:'400px',width:'100%',margin:'auto',justifyContent:'space-between',alignItems:'center',display:'flex',flexDirection:'column',position:'relative'}}>
                        {exampleImages.map((image)=>{
                        return(<Jpg src={image}/>)
                        })}
        </div>
      </>
    );
}

export default JpgDemo;
