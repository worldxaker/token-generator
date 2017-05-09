import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    size: number = 32;

    result: string
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    get() {
        if (this.size > 1 && this.size <= 100000) {
            this.result = "loading"
            this.http.get('/api/token/' + this.size).subscribe(x => {
                this.result = x.json();
            });
        } else {
            if (this.size < 1) {
                this.result = "Размер токена должен быть положительным"
            } else {
                this.result = "Размер токена должен быть меньше 100000"
            }
        }
    }

}

interface Token {
    data: string
}
