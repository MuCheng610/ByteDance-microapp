function Item(props) {
    return <li className="item" style={props.style}>{props.children}  <a href="#" onClick={props.onRemoveItem}>X </a></li>;
}

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            num: 3,
            list: [
                {
                    text: '操作系统课设',
                },
                {
                    text: '数据库课设',
                },
                {
                    text: '编译原理课设',
                }
            ]
        }
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
                that.setState({num: e.data});
                console.log(e.data);
            }
        } else {
            console.log('Your browser doesn\'t support web workers.');
        }
    }
    
    handleAdd() {
        var that = this;
        this.setState({
            list: [
                ...this.state.list, 
                {
                    text: this.ref.value
                }
            ]
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
            }
        } else {
            console.log('Your browser doesn\'t support web workers.');
        }
    }

    render() {
        return <div>
            <p>剩余任务数量：{this.state.num}</p>
            <ul className="list">
                {this.state.list.map((item, index) => {
                    return <Item style={{ background: item.color, color: this.state.textColor}} onRemoveItem={() => this.handleItemRemove(index)}>{item.text}</Item>
                })}
            </ul>
            <div>
                <input ref={(ele) => {this.ref = ele}}/>
                <button onClick={this.handleAdd.bind(this)}>add</button>
            </div>
        </div>;
    }
}

const title = <h>待做任务管理</h>
render(title, document.getElementById('root'));
render(<List textColor={'#000'}/>, document.getElementById('root'));
