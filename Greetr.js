(function (global, $){
  
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language); //Prevent from using new keyword everytime
  }

  let supportedLangs = ['en','cn'];

  let greetings = {
    en: 'Hello',
    cn: '嗨'
  };

  let formalGreetings = {
    en: 'Greetings',
    cn: '您好'
  };

  let logMessages = {
    en: 'Logged In',
    cn: '登陆'
  }

  //This is where all functions sit
  Greetr.prototype = {
    fullName: () => `${this.firstName} ${this.lastName}`,

    validate: () => {
      if(!~supportedLangs.indexOf(this.language)){
        throw "Invalid languages!";
      }
    },

    greeting: () => `${greetings[this.language]} ${this.firstName}!`,

    formalGreeting: () => `${formalGreetings[this.language]}, ${this.fullName()}`,

    greet: formal => {
      let msg = '';

      if(formal) {
        msg = this.formalGreeting();
      }else{
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);
      }

      // 'this' refer to the calling object at execution time
      // Making method chainable
      return this;
    },

    log: () => {
      if(console){
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);

        return this;
      }
    },

    setLang: lang => {
      this.language = lang;

      this.validate(); //Making sure language is supported

      return this;
    }
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
