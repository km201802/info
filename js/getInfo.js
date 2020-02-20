function Info(){
  this.hash = location.hash;
  this.host = location.host;
  this.hostname = location.hostname;
  this.href = location.href;
  this.origin = location.origin;
  this.pathname = location.pathname;
  this.port = location.port;
  this.protocol = location.protocol;
  this.search = this.search;
  
}
var info = new Info();

function table(){
  
}

console.log(info.host)


