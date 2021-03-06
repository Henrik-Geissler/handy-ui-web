import React from 'react'
import {If, ErrorBoundary,UnlockAudio,BodyWrapper,Error,Style,LazyImages,Jpg} from 'handy-ui'
import {SnackbarProvider} from 'notistack'
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer'

const App = () => {
    const title = 'Jpg'
  const exampleImages = ['54-1600x900','61-1600x900','96-1600x900','103-1600x900','108-1600x900','116-1600x900','129-1600x900','137-1600x900','159-1600x900','167-1600x900','193-1600x900','209-1600x900','229-1600x900','255-1600x900','300-1600x900','309-1600x900','344-1600x900','372-1600x900','403-1600x900','416-1600x900','434-1600x900','435-1600x900','472-1600x900','490-1600x900','538-1600x900','569-1600x900','590-1600x900','591-1600x900','629-1600x900','655-1600x900','660-1600x900','698-1600x900','718-1600x900','755-1600x900','796-1600x900','797-1600x900','822-1600x900','898-1600x900','945-1600x900','948-1600x900','958-1600x900','989-1600x900','1016-1600x900','1022-1600x900','1036-1600x900','1075-1600x900',]
    return (
        <SnackbarProvider>
            <ErrorBoundary>
                <LazyImages />
                <If is={true}>
                    <UnlockAudio />
                </If>
                <BodyWrapper scrollable={ true}>
                    <If>
                        <Error />
                    </If>
                    <ResponsiveDrawer>
                        <div style={{height:`${1.1*100*exampleImages.length*9/16/2}vw`,width:'50%',margin:'auto',justifyContent:'space-between',alignItems:'center',display:'flex',flexDirection:'column',position:'relative'}}>
                            {exampleImages.map((image)=>{
                            return(<Jpg src={image}/>)
                            })}
                        </div>
                    </ResponsiveDrawer>
                </BodyWrapper>
                <Style src='css/lazy'/>
                <Style src='css/prism-coldark-cold'/>
            </ErrorBoundary>
        </SnackbarProvider>
    )
}
export default App