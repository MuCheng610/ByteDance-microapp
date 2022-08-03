const jsx = createElement("ul", {
    className: "list"
}, createElement("li", {
    className: "item",
    style: {
      background: 'blue',
      color: 'pink'
    },
    onClick: () => alert('这是第一行')
}, "aaa"), createElement("li", {
    className: "item",
    style: {
      color: 'green'
    }
}, "bbbb"), createElement("li", {
    className: "item"
}, "cccc"));

render(jsx, document.getElementById('root'));
