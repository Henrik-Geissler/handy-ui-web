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
      description:
        'In this demo you can see how the handy-ui JPG Component handles Image Lazy Loading. With Primitive simple svg Shape with a size of 800Kb (!) are used as placeholders. This allows the Page to be ready and interactable in a minimal time while providing meaningful content. And When the Images comes in the Users Viewport handy-ui loads the actual image source and unblurs the Image with a nice animation when loading is done. For a better understanding, try to throttle your network connection with the DevTools.',
        demo:'Jpg',
      examples: [
        {
          description: 'A single Jpg.',
          snippet: `<Jpg src='files/img/tree'/>`,
          title: 'Simple Image',
        },
        {
          description: 'A long list of huge Images.',
          snippet: `<Jpg src='files/img/tree'/>`,
          title: 'Images',
        },
      ],
      name: 'Jpg',
      subtitle: 'Images are ugly, until they are loaded.',
    },
  ]
  
  export default Components
  