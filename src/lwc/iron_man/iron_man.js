/* eslint-disable no-unused-vars */
import { LightningElement,track } from 'lwc';

export default class Iron_man extends LightningElement {
    @track messageFromSuperman = '';
    @track messageFromCaptainAmerica = '';
    @track messageFromNickFury = '';

    //Demo 1 - Iron Man <-> SuperMan
    sendMessageToSuperman(){
        let msg = this.template.querySelector('.message').value;
        //Fire Event
    }

    handleMessageFromSuperman(event){
        
    }

    //Demo 2 - Iron Man <-> Captain America
    sendMessageToCaptainAmerica(){
        let msg = this.template.querySelector('.message').value;
        //Fire Event
    }

    handleMessageFromCaptainAmerica(event){
        
    }

    //Demo 3 - Iron Man <- Nick Fury
    handleMessageFromNickFury(event){
        
    }

    //Demo 4 - Iron Man -> Star Lord
    sendMessageToStarLord(){
        let msg = this.template.querySelector('.message').value;
        //Fire Event
    }
}