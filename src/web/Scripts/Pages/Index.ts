import './index.css'
import 'jquery'
import { IWeatherForecast, WeatherClient } from '../Services/weather/weather';


export class IndexRenderer {
    weatherClient: WeatherClient;
    constructor() {
        this.weatherClient = new WeatherClient();
    }

    formatDate = (date: Date): string => {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }

    onReady = async () => {
        let hello = 'The current weather from Api';
        $("div.text-center").append(`<h1 id='msg'>${hello}</h1>`);
        let weatherMeasures = await this.weatherClient.get();
        for (var i = 0; i < weatherMeasures.length; i++) {
            $("div.text-center").append(`<span>${this.formatDate(weatherMeasures[i].date)} - ${weatherMeasures[i].temperatureC}&deg;C - ${weatherMeasures[i].summary}</span><br/>`);
        }
    }
}

let index = new IndexRenderer();
$().ready(index.onReady);
