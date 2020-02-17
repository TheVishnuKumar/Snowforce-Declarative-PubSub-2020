/* eslint-disable no-unused-vars */
import { LightningElement,track } from 'lwc';

export default class Captain_america extends LightningElement {
    @track messageFromNickFury = '';
    @track messageFromIronMan = '';

    //Demo 2 - Captain America <-> Iron Man
    sendMessageToIronMan(){
        let msg = this.template.querySelector('.message').value;
        //Fire Event
    }

    handleMessageFromIronMan(event){

    }

    //Demo 3 - Captain America <- Nick Fury
    handleMessageFromNickFury(event){

    }    
}