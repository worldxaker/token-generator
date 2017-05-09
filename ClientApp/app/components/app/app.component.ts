import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    size: any = 32;

    result: string
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    get() {
        this.result = "loading"
        this.http.get('/api/token/' + this.size).subscribe(x => {
            this.result = x.json();
        });
    }

}

interface Token {
    data: string
}
