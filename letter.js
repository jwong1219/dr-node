
var Letter = function(str) {
  if(str !== " ") {
    this.type = "letter";
    this.value = str;
    this.baseValue = str.toLowerCase();
    this.solved = false;
    this.display = "_"
    this.show = function(check) {
      if(this.baseValue === check) {
        this.solved = true;
        this.display = this.value;
      }
      else if (!this.solved) {
        this.display = "_";
      }
    }
  }
  else {
    this.type = "space";
    this.value = str;
    this.solved = true;
    this.display = " ";
  }
}

module.exports = Letter;