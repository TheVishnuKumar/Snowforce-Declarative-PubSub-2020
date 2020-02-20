import { LightningElement,track } from 'lwc';

export default class Iron_man extends LightningElement {
    @track messageFromSuperman = '';
    @track messageFromCaptainAmerica = '';
    @track messageFromNickFury = '';

    //Demo 1 - Iron Man <-> SuperMan
    sendMessageToSuperman(){
        let msg = this.template.querySelector('.message').value;
        // this.template.querySelector('.supermanEvent').publish(msg);
    }

    handleMessageFromSuperman(event){
        // this.messageFromSuperman = event.detail.payload;
    }

    //Demo 2 - Iron Man <-> Captain America
    sendMessageToCaptainAmerica(){
        let msg = this.template.querySelector('.message').value;
        // this.template.querySelector('.captainAmericaEvent').publish(msg);
    }

    handleMessageFromCaptainAmerica(event){
        // this.messageFromCaptainAmerica = event.detail.payload;
    }

    //Demo 3 - Iron Man <- Nick Fury
    handleMessageFromNickFury(event){
        // this.messageFromNickFury = event.detail.payload;
    }

    //Demo 4 - Iron Man -> Star Lord
    sendMessageToStarLord(){
        let msg = this.template.querySelector('.message').value;
        // this.template.querySelector('.starLordEvent').publish(msg);
    }
}