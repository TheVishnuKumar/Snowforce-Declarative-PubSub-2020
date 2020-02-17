import { LightningElement, track } from 'lwc';

export default class Star_lord extends LightningElement {
    @track messageFromIronMan = '';
    @track messageFromNickFury = '';

    handleMessageFromIronMan(event){
        this.messageFromIronMan = event.detail.payload;
    }

    handleMessageFromNickFury(event){
        this.messageFromNickFury = event.detail.payload;
    }
}