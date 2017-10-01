angular.module('MessagesCtrl', function(className, messages, $firebaseArray){
  var messagesCtrl = this;
  messagesCtrl.messages = messages;
  messagesCtrl.className = className;
  messagesCtrl.message = '';

  messagesCtrl.sendMessage = function(){
    if(messagesCtrl.message.length > 0){
      messagesCtrl.messages.$add({
        body: messagesCtrl.message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }).then(function(){
        messagesCtrl.message = '';
      });
    }
  };
});
