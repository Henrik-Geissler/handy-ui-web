/**
 * Copyright (c) 2021, Henrik Geißler.
 */
const Components = [
    {
      description:'',
      examples: [
        {
          description: 'Click on any Component to see Details, Examples and API',
          snippet: `yarn add handy-ui`,
          title: 'Getting started',
        },],
      name: 'Components',
      subtitle: 'explore them handy-ui components.',
    },
    {
      description: 'Fetching a Resource is sometimes a very specific scenario with a lot of context. Sometimes you just want to fetch a resource.',
      //demo:'Resource',
      examples: [
        {
          description: 'Get a resource from an API and display it when its loaded. This example fetches the jsonplaceholder API from typicode. In the render attribute we define to return the data\'s name.',
          snippet: `<Resource
    src='myapi.com/users/1'
    render={data => data.name}
/>`,
          title: 'Get data',
        },
        {
          description: 'Using the jsonplaceholder API from typicode again we this time render all the results',
          snippet: `<Resource
    src='myapi.com/users'
    render={data =>
        <ol>
            {data.map(eachUser =>
                <li>
                    {eachUser.name}
                    <b> {eachUser.company.name} </b>
                    <a href={eachUser.website}>{eachUser.website}</a>
                </li>
            )}
        </ol>
    }
/>`,
          title: 'Render a list of data',
        },
        {
            description: 'Optionally you can define a loading indicator.',
            snippet: `<Resource
    src='myapi.com/slowEndpoint'
    loadingIndicator={<CircularProgress />}
    render={data =>
        "I\'m done! Restart to see the loading indicator"
    }
/>`,
            title: 'Loading indicator',
          },
          {
              description: 'If you want to dynamically change the resource or just refetch, update the src.',
              snippet: `
const [user, setUser] = useState(1)
return (
    <>
        <Button
            onClick={() => setUser(1+user%10)}
        >
            Next User
        </Button>
        <Resource
            src={\`myapi.com/users/\${user}\`}
            render={data => data.name}
        />
    </>
)`,
              title: 'Reload',
            },
      ],
      name: 'Resource',
      subtitle: '90% of the Frontend Developers job in a single component.',
    },
    {
      description: '',
      problem:'Most modern browsers don\'t allow websites to autoplay audio files. That seems to be a missed opportunity.',
      solution:'The Audio Component allows you to autoplay audio files.',
      examples: [
        {
          description: 'You can play some background music.',
          snippet: `<Audio src='files/audio/exampleMusic' play/>
{'Nothing to see, just listen 🎶'}`,
          title: 'Autoplay Music',
        },
        {
          description: 'Provide a simple Audio Player.',
          snippet: `<Audio src='files/audio/exampleMusic'/>`,
          title: 'Simple Player',
        },
        {
          description: 'Control the Audio from anywhere in your App.',
          snippet: `<Audio src='files/audio/exampleMusic'/>`,
          title: 'Custom Audio Control',
        },
      ],
      name: 'Audio',
      subtitle: 'The web is strangely silent.',
    },
    {
      description: 'Coloring code snippets is fun with this Component.',
      examples: [
        {
          description: 'Highlight code in any language.',
          snippet: `const myCode = \`
@main-color: red;
.foo {
    /** red background **/
    background: @main-color;
}\`

<Code lang='css'>
    {myCode}
</Code>`,
          title: 'Automate syntax highlighting',
        },
        {
          description: 'Any children of Code will not be rendered or mounted. Instead the code of the component gets formatted and syntax highlighted.',
          snippet: `<Code lang='tsx'>
    <Text id="CodeSample">Hello World!</Text>
</Code>`,
          title: 'Print your components',
        },
      ],
      name: 'Code',
      subtitle: 'Open your source.',
    },
    {
      description: 'There are a lot of ways to keep your compnents easy to read. The If Component can help you add a condition without the need of restructuring.',
        examples: [
        {
          description: 'A single Jpg.',
          snippet: `<Jpg src='files/img/tree'/>`,
          title: 'Render conditionally',
        },
      ],
      name: 'If',
      subtitle: 'No more and no less.',
    },
    {
      description:
        'In this demo you can see how the handy-ui JPG Component handles Image Lazy Loading. With Primitive simple svg Shape with a size of 800Kb (!) are used as placeholders. This allows the Page to be ready and interactable in a minimal time while providing meaningful content. And When the Images comes in the Users Viewport handy-ui loads the actual image source and unblurs the Image with a nice animation when loading is done. For a better understanding, try to throttle your network connection with the DevTools.',
        demo:'Jpg',
      examples: [
        {
          description: 'A single Jpg.',
          snippet: `<Jpg src='files/img/sky'/>`,
          title: 'Simple Image',
        },
        {
          description: 'A long list of huge Images.',
          snippet: `[
    'sky',
    'city',
    //...
].map(() => 
    <Jpg src='files/img/tree'/>
)`,
          title: 'Images',
        },
      ],
      name: 'Jpg',
      subtitle: 'Images are ugly, until they are loaded.',
    },
  ]
  
  export default Components
  