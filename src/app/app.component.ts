import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  schedule = 'Angular';
  getNextTrain(fromStation: string, toStation: string) {
    console.log(fromStation + toStation);
    let nextTrainAt = "2:15";//query to get this
    let inNextMins = this.calculateInNextMins(nextTrainAt);
    this.schedule = this.formatScheduleMessage(nextTrainAt, inNextMins);
  }

  private calculateInNextMins(nextTrainAt:string){
    let inNextMins ="8";// calculate this with current time
    return inNextMins;
  }

  private formatScheduleMessage(nextTrainAt: string, inNextMins: string) {
    return "at " + nextTrainAt + " which is in next " + inNextMins + " min(s)";
  }
}
