import { LightningElement,track } from 'lwc';

export default class Captain_america extends LightningElement {
    @track messageFromNickFury = '';
    @track messageFromIronMan = '';

    //Demo 2 - Captain America <-> Iron Man
    sendMessageToIronMan(){
        let msg = this.template.querySelector('.message').value;
        this.template.querySelector('.ironManEvent').publish(msg);
    }

    handleMessageFromIronMan(event){
        this.messageFromIronMan = event.detail.payload;
    }

    //Demo 3 - Captain America <- Nick Fury
    handleMessageFromNickFury(event){
        this.messageFromNickFury = event.detail.payload;
    }    
}