import 'jquery'


export class WeatherClient {
    private readonly apiUrl = '/weatherforecast'

    get = (): JQueryPromise<IWeatherForecast[]> => {
        return $.ajax({
            url: this.apiUrl,
            type: 'GET'
        }).then(function (response) {
            console.log("getRecord response: " + JSON.stringify(response));
            for (var i in response) {
                response[i]['date'] = new Date(response[i]['date']);
            }
            return <IWeatherForecast[]>response;
        });
    }
}

export interface IWeatherForecast {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary(): string
}

