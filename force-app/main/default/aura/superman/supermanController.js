({
    handleEvent : function(component, event, helper) {
        // component.set( "v.message", event.getParam('payload') );
    },

    sendMessageToIronMan : function(component, event, helper) {
        let msg = component.find("message").get("v.value");

        // component.find("superManToIronManEvent").publish(msg);
    }
})
