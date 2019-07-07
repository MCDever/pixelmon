let system = client.registerSystem(0, 0);

var lastData;
var lastDataKeyboard;
var propertyEdited;

system.initialize = function () {
    this.listenForEvent("minecraft:client_entered_world", (eventData) => this.onJoin(eventData)); 
}

system.onJoin = function(eventData){
    this.broadcastEvent("minecraft:load_ui", {data: {path: "menu.html", options: {}}})
}
