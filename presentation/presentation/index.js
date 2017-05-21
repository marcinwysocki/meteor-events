// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Code
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// import code
const meteorInstall = require("raw-loader!../code/meteorInstall.example");


const images = {
  react: require("../assets/reactjsicon.png"),
  meteor: require("../assets/meteor.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  stars: require("../assets/bg-header-star.jpg"),
  iWasTold: require("../assets/iwastold.jpg"),
  nick: require("../assets/nick.png")
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "white",
  tertiary: "#de4f4f",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={images.stars}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Instant applications with
          </Heading>
          <div style={{display: "flex", alignItems: "center"}} >
            <Image src={images.meteor}/> 
                <Heading size={3} textColor="secondary" >&</Heading>
            <Image src={images.react}/> 
          </div>

        </Slide>

        {/*
            What is Meteor?
        */}

        <Slide 
            transition={[]} 
            transitionDuration={500} 
            bgColor="secondary" 
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps>What is Meteor?</Heading>
          <List>
            <ListItem margin="10px auto">full-stack JavaScript</ListItem>
            <ListItem margin="10px auto">reactive - real time data</ListItem>
            <ListItem margin="10px auto">same API on client and server</ListItem>
            <ListItem margin="10px auto">plug-and-play</ListItem>
          </List>
        </Slide>

        {/*
            Great, how do I start?
        */}

        <Slide 
            transition={["fade"]} 
            transitionDuration={500} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps>Great, how do I start?</Heading>
          <CodePane
            textSize="16px"
            lang="bash"
            source={require("raw-loader!../code/meteorInstall.example")}
            margin="20px auto"
          />

          <Text >...and that's it!</Text>
        </Slide>

        {/*
            What's inside
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps>Batteries included</Heading>
          <List>
            <ListItem margin="10px auto">database - MongoDB</ListItem>
            <ListItem margin="10px auto">reactive infrastructure</ListItem>
            <ListItem margin="10px auto">build system</ListItem>
            <ListItem margin="10px auto">authentication</ListItem>
            <ListItem margin="10px auto">view layer - Blaze</ListItem>
          </List>
        </Slide>

        {/*
            What's inside
        */}

        <Slide 
            transition={["fade"]} 
            transitionDuration={500} 
            bgColor="secondary"
        >
            <Image src={images.iWasTold}/> 
        </Slide>

        {/*
            Collection
        */}

        <CodeSlide
            transition={[]}
            lang="js"
            textSize="20px"
            code={require("raw-loader!../code/todos.example")}
            ranges={[
              { loc: [0, 5], title: 'Creating a Collection...' },
        ]}/>

        {/*
            Task component
        */}

        <CodeSlide
            transition={[]}
            lang="jsx"
            textSize="20px"
            code={require("raw-loader!../code/taskComponent.example")}
            ranges={[
              { loc: [0, 8], title: '...and then some components' },
              { loc: [8, 29]},
              { loc: [12, 13]},
              { loc: [16, 22]},
              { loc: [18, 21]},
              { loc: [23, 26]},
        ]}/>

        {/*
            Whaaa
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={1} textColor="tertiary" caps padding>Whaaaa?</Heading>
            <Image src={images.nick}/> 
        </Slide>

        {/*
            Core concepts
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Core Meteor concepts</Heading>
          <List>
            <ListItem margin="10px auto">Minimongo</ListItem>
            <ListItem margin="10px auto">DDP</ListItem>
            <ListItem margin="10px auto">publications and subscriptions</ListItem>
            <ListItem margin="10px auto">methods</ListItem>
          </List>
        </Slide>

        {/*
            Minimongo
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Minimongo</Heading>
            <BlockQuote>
            <Quote textSize="40px">An in-memory, all JS, implementation of the MongoDB API</Quote>
            <Cite>Meteor's docs</Cite>
          </BlockQuote>
        </Slide>

        {/*
             Distributed Data Protocol (DDP)
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Distributed Data Protocol (DDP)</Heading>
            <List>
                <ListItem margin="10px auto">created for and used by Meteor</ListItem>
                <ListItem margin="10px auto">publish–subscribe pattern</ListItem>
                <ListItem margin="10px auto">synchronizes client and server data</ListItem>
            </List>
        </Slide>

        {/*
            Publication
        */}

        <CodeSlide
            transition={[]}
            lang="js"
            textSize="20px"
            code={require("raw-loader!../code/publications.example")}
            ranges={[
              { loc: [0, 5]},
              { loc: [6, 13]},
              { loc: [12, 13]},
        ]}/>


        {/*
            Subscription
        */}

        <CodeSlide
            transition={[]}
            lang="js"
            textSize="20px"
            code={require("raw-loader!../code/subscriptions.example")}
            ranges={[
              { loc: [0, 18], title: 'Connecting it with React using react-komposer'},
              { loc: [2, 3]},
              { loc: [7, 16]},
              { loc: [8, 9]},
              { loc: [10, 15]},
              { loc: [17, 18]},
        ]}/>

        {/*
            Methods
        */}

        <CodeSlide
            transition={[]}
            lang="js"
            textSize="20px"
            code={require("raw-loader!../code/methods.example")}
            ranges={[
              { loc: [0, 31] },
              { loc: [2, 3]},
              { loc: [4, 5]},
              { loc: [6, 7]},
              { loc: [7, 15]},
              { loc: [32, 52]},
              { loc: [39, 50]},
              { loc: [41, 47]},
              { loc: [48, 49]},
        ]}/>

        {/*
             Tracker
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Optimistic UI</Heading>
            <Text margin="50px auto 0 auto" textAlign="left" lineHeight="1.5em">
               Showing user-generated changes in the UI without waiting for the server thanks
               to Minimongo and simulated methods. 
            </Text>
        </Slide>

        {/*
             Tracker
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Compose with what?</Heading>
            <Text margin="50px auto 0 auto" textAlign="left" lineHeight="1.5em">
                Tracker - Meteor's dependency tracking system. Reruns computations
                on changes to reactive data sources:
            </Text>
            <List>
                <ListItem margin="10px auto">DB queries</ListItem>
                <ListItem margin="10px auto"><Code>Session</Code></ListItem>
                <ListItem margin="10px auto"><Code>ReactiveVars</Code></ListItem>
            </List>
        </Slide>


        {/*
             Accounts
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Accounts</Heading>
            <Text margin="50px auto 0 auto" textAlign="left" lineHeight="1.5em">
                Meteor has a built-in accounts system, including:
            </Text>
            <List>
                <ListItem textSize="1em" margin="10px auto">
                    <Code textSize="1em">userId</Code> field in DDP
                </ListItem>
                <ListItem textSize="1em" margin="10px auto">password based authentication</ListItem>
                <ListItem textSize="1em" margin="10px auto">integration with Facebook, Google etc.</ListItem>
                <ListItem textSize="1em" margin="10px auto">
                    <Code textSize="1em">accounts-ui</Code> with drop-in components
                </ListItem>
            </List>
        </Slide>

        {/*
            Register
        */}

        <CodeSlide
            transition={[]}
            lang="jsx"
            textSize="20px"
            code={require("raw-loader!../code/register.example")}
            ranges={[
              { loc: [0, 40], title: 'Registration' },
              { loc: [4, 5]},
              { loc: [18, 38]},
              { loc: [25, 33]},
              { loc: [8, 17]}
        ]}/>
 
        {/*
            Login
        */}

        <CodeSlide
            transition={[]}
            lang="jsx"
            textSize="20px"
            code={require("raw-loader!../code/login.example")}
            ranges={[
              { loc: [0, 46], title: 'Login' },
              { loc: [18, 44]},
              { loc: [25, 30]},
              { loc: [31, 39]},
              { loc: [8, 17]}
        ]}/>


        {/*
             Mobile
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Mobile</Heading>
            <List>
                <ListItem margin="10px auto">
                   Integration with Cordova
                </ListItem>
                <ListItem margin="10px auto">hot code push</ListItem>
                <ListItem margin="10px auto">native apps, via DDP</ListItem>
            </List>
        </Slide>

        {/*
             Deployment
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="secondary"
            textColor="primary"
        >
          <Heading size={6} textColor="tertiary" caps padding>Deployment</Heading>
            <List>
                <ListItem margin="10px auto">
                   Galaxy - Meteor's cloud service
                </ListItem>
                <ListItem margin="10px auto">Heroku</ListItem>
                <ListItem margin="10px auto">own server with 
                    <Code>meteor-up</Code>
                </ListItem>
                <ListItem margin="10px auto">native apps, via DDP</ListItem>
            </List>
        </Slide>

        {/*
            Questions
        */}

        <Slide 
            transition={["fade"]} 
            bgColor="primary"
            textColor="secondary"
        >
          <Heading size={1} textColor="tertiary" caps padding>Questions?</Heading>

        </Slide>
      </Deck>
    );
  }
}
