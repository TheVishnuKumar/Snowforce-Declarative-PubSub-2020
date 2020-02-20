import { LightningElement } from 'lwc';

export default class Nick_fury extends LightningElement {

    sendMessageToAvengers(){
        let msg = this.template.querySelector('.message').value;
        // this.template.querySelector('.avengersEvent').publishToNamespace(msg);
    }
}