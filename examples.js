// Stack example
var stack = {
  pop: function(){
    var last_index = this.sarr.length-1;
    var val = this.sarr[last_index];
    var new_arr = [];
    for(var c=0; c < last_index; c++){
      new_arr[c] = this.sarr[c]
    }
    this.sarr = new_arr;
    return val;
  },
  push: function(val){
    this.sarr[this.sarr.length] = val;
    return this.sarr.length
  },
  sarr: []
};

// Stack with splice
var stack = {
  pop: function(){
    var val = this.sarr.splice(this.sarr.length-1, 1);
    return val[0];
  },
  push: function(val){
    this.sarr.splice(this.sarr.length, 0, val);
    return this.sarr.length;
  },
  sarr: []
};

// queue with splice
var queue = {
  dequeue: function(){
    var out = this.qarr.splice(0, 1);
    return out[0];
  },
  enqueue: function(val){
    this.qarr.splice(this.qarr.length, 0, val);
    return this.qarr.length;
  },
  qarr: []
};

// queue without splice
var queue = {
  dequeue: function(){
    var val = this.qarr[0];
    var new_arr = [];
    for(var c=1; c < this.qarr.length; c++){
      new_arr[c-1] = this.qarr[c];
    }
    this.qarr = new_arr;
    return val;
  },
  enqueue: function(val){
    this.qarr[this.qarr.length] = val;
    return this.qarr.length;
  },
  qarr: []
};