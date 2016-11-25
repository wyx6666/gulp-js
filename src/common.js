Object.prototype.fn=function(name,func){
    this.prototype[name]=func;
    return this;
};