onmessage = function(e) {
    console.log('Worker: Message received from main script');
    if(e.data[0] == 0){
      var res = e.data[1];
      if(res > 0)
        res = res - 1;
      console.log('Worker: Posting message back to main script');
      postMessage(res);
    }
    else if(e.data[0] == 1){
      var res = e.data[1];
      res = res + 1;
      console.log('Worker: Posting message back to main script');
      postMessage(res);
    }
    else{
      console.log('no signal');
    }
  }