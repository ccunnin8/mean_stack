var dojo = (function(global){

  return class $Dojo {
    constructor(id_name){
      this._el = global.getElementById(id_name);
    }

    click(cb) {
      this._el.addEventListener("click",cb);
      return this;
    }

    hover(cb) {
      this._el.addEventListener("mouseover",cb);
      return this;
    }
  }

})(window.document);

var $Dojo = function(id_name){
  return new dojo(id_name);
}
