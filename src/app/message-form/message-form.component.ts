import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms'
import { Message } from '../message'
import { MessageService } from '../message.service'

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {
    messages: Message[]
    newMessageForm: FormGroup

    constructor(
        private messageService: MessageService,
        private formBuilder: FormBuilder
    ) {
        this.newMessageForm = this.formBuilder.group(new Message())
    }

    ngOnInit(): void {
        this.messages = this.messageService.getMessages()
    }

    onSubmit(messageData: Message, formDirective: FormGroupDirective): void {
        this.messageService.sendMessage(messageData)
        this.messages.push(messageData)
        formDirective.resetForm()
        this.newMessageForm.reset()

        console.warn('Your message has been sent', messageData)
    }
}
