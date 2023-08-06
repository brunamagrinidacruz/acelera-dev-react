const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

const render = () => {
//Fazendo com a API DOM Nativa do Browser
  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
      <input />
      <p>${new Date()}</p>
    </div>
  `;

//Fazendo com React e sua Virtual DOM
  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React ",
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    reactContainer
  );
}
setInterval(render, 1000);

/*
 We now have two nodes, one being controlled with the DOM Web API directly,
 and another being controlled with the React API (which in turn uses the DOM Web API). 
 The only major difference between the ways we are building these two nodes in the
 browser is that in the JS version we used a string to represent the content, 
 while in the React version we used pure JavaScript
 calls and represented the content with an object instead of a string.
 When we refresh the browser now, the timestamp string should be
 ticking every second in both versions. 
 We are now updating our User Interface in the DOM.
 This is the moment when React will potentially blow your mind. 
 If you try to type something in the text box of the JS version, 
 you won’t be able to. This is very much expected because we’re basically 
 throwing away the whole DOM node on every tick and regenerating it. 
 However, if you try to type something in the text box that’s rendered with React, 
 you can certainly do so!
 Although the whole React rendering code is within our ticking timer, 
 React is changing only the timestamp paragraph and not the whole DOM node. 
 This is why the text input box was not regenerated and we were able to type in it.
 React has a smart diffing algorithm that it uses to only regenerate 
 in its DOM node what actually needs to be regenerated while it 
 keeps everything else as is. This diffing process is possible
  because of React’s virtual DOM and the fact that we have a representation 
  of our User Interface in memory (because we wrote in JavaScript).
  Using the virtual DOM, React keeps the last DOM version in memory and when it 
  has a new DOM version to take to the browser, that new DOM version will 
  also be in memory, so React can compute the difference between the 
  new and the old versions (in our case, the difference is the timestamp paragraph).
  React will then instruct the browser to update only the 
  computed diff and not the whole DOM node. No matter how many times 
  we regenerate our interface, React will take to the browser only 
  the new “partial” updates.
*/