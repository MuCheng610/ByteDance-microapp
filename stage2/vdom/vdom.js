const vdom = {
    type: 'ul',
    props: {
        className: 'list'
    },
    children: [
        {
            type: 'li',
            props: {
                className: 'item',
                style: {
                    background: 'black',
                    color: '#ccc'
                },
                onClick: function() {
                    alert('这是第一行');
                }
            },
            children: [
                '111111'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item', 
                style: {
                    color: 'red'
                }
            },
            children: [
                '222222'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item',
            },
            children: [
                '333'
            ]
        }
    ]
}

render(vdom, document.getElementById('root'));
