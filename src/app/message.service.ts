import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Message } from './message'

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    constructor(private http: HttpClient) {}

    getMessages = () => {
        return []
    }

    sendMessage = (message: Message) => {
        this.http
            .put(
                'https://wdezjc3jx0.execute-api.us-east-1.amazonaws.com/dev/v1/helloworld',
                message,
                {
                    responseType: 'json',
                }
            )
            .toPromise()
            .then((val) => console.log(val))
            .catch((err) => console.error(err))
    }
}
