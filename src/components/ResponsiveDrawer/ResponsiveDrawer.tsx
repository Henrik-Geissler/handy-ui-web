import React,{ReactNode,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import '../../../node_modules/prismjs/themes/prism.css';
import Prism from 'prismjs';
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import { NoSsr } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface Props {
    children: ReactNode
}

export default function ResponsiveDrawer(props: Props) {
  const { children } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const components = [{name:'Components',examples:[]},{name:'Jpg', subtitle: 'Images are ugly, until they are loaded.',description:'In this demo you can see how the handy-ui JPG Component handles Image Lazy Loading. With Primitive simple svg Shape with a size of 800Kb (!) are used as placeholders. This allows the Page to be ready and interactable in a minimal time while providing meaningful content. And When the Images comes in the Users Viewport handy-ui loads the actual image source and unblurs the Image with a nice animation when loading is done. For a better understanding, try to throttle your network connection with the DevTools.',examples:[{title:'first', description:'nothing',snippet:`<Jpg src='example'/>`,demo:'Jpg'}]}]
    const [openComponent, setOpenComponent] = React.useState(0);
    const component = components[openComponent]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(()=>{Prism.highlightAll()},[openComponent])

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {components.map(({name}, index) => (
          <ListItem button key={name} onClick={() => {handleDrawerToggle();setOpenComponent(index)}}>
            <ListItemText primary={name}/>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
        <link href="css/prism-coldark-cold.css" rel="stylesheet" />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {'handy-ui > '} {component.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
      </nav>
      <main className={classes.content} style={{marginTop:'100px',marginLeft:'20px'}}>
        <div className={classes.toolbar} />
          <Typography variant="h4" noWrap>
            {component.name}
          </Typography>
          <Typography variant="h6">
            {component.subtitle}
          </Typography>
          <Typography variant="body1">
            {component.description}
          </Typography>
          {component.examples.map((item,index)=>{return (<pre
          style={{
            padding: '20px 30px',
            background: '#f9f9fb',
            boxShadow: 'inset 0 0 10px #e3e7ea, inset 0 0 2px #e3e7ea, 0 1px 0 0 #fff',
            margin: '0 0 40px',
            borderRadius: '5px',
            textShadow:' 0 1px 0 #fff!important',
            border: '1px solid #e6e9ec'
          }}><code className="language-tsx">{item.snippet.trim()}</code>
        </pre>)})}
        {children}
      </main>´
    </div>
  );
}