function Item(props) {
  return createElement("li", {
    className: "item",
    style: props.style
  }, props.children, "  ", createElement("a", {
    href: "#",
    onClick: props.onRemoveItem
  }, "X "));
}

class List extends Component {
  constructor(props) {
    super();
    this.state = {
      num: 3,
      list: [{
        text: '操作系统课设'
      }, {
        text: '数据库课设'
      }, {
        text: '编译原理课设'
      }]
    };
  }

  handleItemRemove(index) {
    var that = this;
    this.setState({
      list: this.state.list.filter((item, i) => i !== index)
    });

    if (window.Worker) {
      console.log('Your browser support web workers.');
      const myWorker = new Worker("./dist/worker.js");
      myWorker.postMessage([0, this.state.num]);
      console.log('Message posted to worker');

      myWorker.onmessage = function (e) {
        that.setState({
          num: e.data
        });
        console.log(e.data);
      };
    } else {
      console.log('Your browser doesn\'t support web workers.');
    }
  }

  handleAdd() {
    var that = this;
    this.setState({
      list: [...this.state.list, {
        text: this.ref.value
      }]
    });

    if (window.Worker) {
      console.log('Your browser support web workers.');
      const myWorker = new Worker("./dist/worker.js");
      myWorker.postMessage([1, this.state.num]);
      console.log('Message posted to worker');

      myWorker.onmessage = function (e) {
        that.setState({
          num: e.data
        });
        console.log(e.data);
      };
    } else {
      console.log('Your browser doesn\'t support web workers.');
    }
  }

  render() {
    return createElement("div", null, createElement("p", null, "\u5269\u4F59\u4EFB\u52A1\u6570\u91CF\uFF1A", this.state.num), createElement("ul", {
      className: "list"
    }, this.state.list.map((item, index) => {
      return createElement(Item, {
        style: {
          background: item.color,
          color: this.state.textColor
        },
        onRemoveItem: () => this.handleItemRemove(index)
      }, item.text);
    })), createElement("div", null, createElement("input", {
      ref: ele => {
        this.ref = ele;
      }
    }), createElement("button", {
      onClick: this.handleAdd.bind(this)
    }, "add")));
  }

}

const title = createElement("h", null, "\u5F85\u505A\u4EFB\u52A1\u7BA1\u7406");
render(title, document.getElementById('root'));
render(createElement(List, {
  textColor: '#000'
}), document.getElementById('root'));