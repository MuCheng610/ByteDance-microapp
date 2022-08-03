const arg1 = document.querySelector('#arg1');
const arg2 = document.querySelector('#arg2');
const result = document.querySelector('.result');


if (window.Worker) {
    console.log('Your browser support web workers.');
    const myWorker = new Worker("worker.js");

    arg1.onchange = function () {
        myWorker.postMessage([arg1.value, arg2.value]);
        console.log('Message posted to worker');
    }

    arg2.onchange = function () {
        myWorker.postMessage([arg1.value, arg2.value]);
        console.log('Message posted to worker');
    }

    myWorker.onmessage = function (e) {
        result.textContent = e.data;
    }
    
} else {
    console.log('Your browser doesn\'t support web workers.');
}