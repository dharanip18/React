#My React

/\*\*

- Food for the Hunger
- Header
- Logo
- Nav
- Body
- Search
- Restaurant Container
-      Restaurant Card
- Footer
- copyright
- links
- Address
- \*/

// destructing on the fly
// const RestaurantCard = ({name,items}) => {

//no key(not acceptable) <<<<<<< index as key <<<<<<< unique key(best Practice)

// const heading = React.createElement(
// //React.createElement - creates js object not an element - render will convert object to element
// "h1",
// { id: "mainHeading" }, //props - attributes
// "Hello World from React!" //children
// );

/\*\* create

- <div id="parent">
-       <div id="child">
-           <h1>Im an H1 tag</h1> // two siblings will go under array
-           <h2>Im an H2 tag</h2>
-       <div>
-      <div id="child2">
-           <h1>Im an H1 tag</h1> // two siblings will go under array
-           <h2>Im an H2 tag</h2>
-       <div>
- </div>
  */

// const parent = React.createElement("div", { id: "parent" }, [
// React.createElement("div", { id: "child" }, [
// React.createElement("h1", {}, "Im an H1 tag from React"),
// React.createElement("h2", {}, "Im an H2 tag from React"),
// ]),
// React.createElement("div", { id: "child2" }, [
// React.createElement("h1", {}, "Im an H1 tag"),
// React.createElement("h2", {}, "Im an H2 tag"),
// ]),
// ]);

//The above structure looks ugly that whys jsx came into picture

//console.log("Heading", parent); //object

// JSX - is not HTML inside JS
// - Looks HTML/XML Like syntax
// const jsxHeading = (
// <h1 className="heading" tabIndex="5" id="mainHeading">
// This is from JSX
// </h1>
// );
// console.log(jsxHeading);

// React Components - 2.Functional Component - always start with CaptialLetter - function returning ReactElement / JSX is functional component

//component with return
// const Title = () => {
// return <h2>2. React Functional Component</h2>;
// };

// const title = <h2>Types of cmponent</h2>;
//component without return
//component composition - Composing two components within one another

// const number = 2;
// const Header = () => (
// <div id="container">
// <h1 className="heading">React</h1>
// {title}
// {/_ {} - run any js code _/}
// {number}
// <Title></Title>
// <Title />
// {Title()}
// </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// render ReactElement
//root.render(jsxHeading); // render - responsible for converting objects into html tags

// render Component
// root.render(<Header />);
