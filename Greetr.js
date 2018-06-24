(function (global, $){
  
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language); //Prevent from using new keyword everytime
  }

  //This is where all functions sit
  Greetr.prototype = {

  };

  Greetr.init = function(fName = '', lName = '', lang = 'en'){
    
    var self = this; //Just to be safe from losing context
    self.firstName = fName;
    self.lastName = lName;
    self.language = lang;

  }

  Greetr.init.prototype = Greetr.prototype;//All functions declared in Greetr sits @ Greetr.prototype
  global.G$ = global.Greetr = Greetr; // Making alias

}(window, jQuery));
