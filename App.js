const heading = React.createElement(
  //React.createElement - creates js object not an element - render will convert object to element
  "h1",
  { id: "mainHeading" }, //props - attributes
  "Hello World from React!" //children
);

/** create
 * <div id="parent">
 *       <div id="child">
 *           <h1>Im an H1 tag</h1> // two siblings will go under array
 *           <h2>Im an H2 tag</h2>
 *       <div>
 *      <div id="child2">
 *           <h1>Im an H1 tag</h1> // two siblings will go under array
 *           <h2>Im an H2 tag</h2>
 *       <div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im an H1 tag"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im an H1 tag"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ]),
]);

//The above structure looks ugly that whys jsx came into picture

console.log("Heading", parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render - responsible for converting objects into html tags
