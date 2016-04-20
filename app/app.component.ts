import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Client} from './client';
import {Experiment} from './client';
import {Goal} from './client';
import {ClientServiceRemote} from './client.service.remote'; 
import {ClientStaticInfo} from './client.static.info';
import {ExperimentComponent} from './experiment.component';
import {ExperimentMock} from './mock-clients';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <div id="date_heading">
        <div> 
          <h5>Today's Date</h5>
          <h2> {{date | date:'dd-MMM'}}</h2>
        </div>
    </div>
    <div id="client_heading">
        <div id="client_title"><strong> THE CLIENT </strong></div>
        <div id="client_name">
            <div> {{staticClientInfo[current_index].name}}</div>
        </div>
    </div>
  <div id="team">
      <div id="team_container">
          <div> 
              <div id="ux_person" class="team_member">
              	<img src="{{staticClientInfo[current_index].ux_consultant.avatar}}"> <br>
                {{staticClientInfo[current_index].ux_consultant.name}} 
                <br>
                <span>UX Consultant</span>
              </div>
              <div id="sl_person" class="team_member"> 
              	<img src="{{staticClientInfo[current_index].sol_eng.avatar}}"> <br>
                {{staticClientInfo[current_index].sol_eng.name}} 
                <br>
                <span>Solutions Engineer</span>
              </div>
              <div id="de_person" class="team_member"> 
              	<img src="{{staticClientInfo[current_index].designer.avatar}}"> <br>
                {{staticClientInfo[current_index].designer.name}} 
                <br>
                <span>Designer</span>
              </div>
              <div id="qa_person" class="team_member">
              <img src="{{staticClientInfo[current_index].qa_manager.avatar}}"> <br>
                {{staticClientInfo[current_index].qa_manager.name}}
                <br>
                <span>QA Manager</span>
              </div> 
              <div id="act_person" class="team_member"> 
              <img src="{{staticClientInfo[current_index].account_manager.avatar}}"> <br>
                {{staticClientInfo[current_index].account_manager.name}} 
                <br>
                <span>Accounts Manager</span>
              </div>
          </div>
    </div>
  </div>
  </header>
  <div id="experiment_container">
      <div *ngFor="#experiment of experiments_remote" class="experiment_if_container">
          <experiment-details [experiment]="experiment">
           
          </experiment-details>
      </div>
  </div>  
  `,
  styles: [`
  header { box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26); width: 100%; height: 100px;}
  #date_heading, #client_heading, #team {box-sizing: border-box;}
  #date_heading {background-color:#4f6ade; width:20%; height: 100px; position: absolute; color:#fff; }
  #date_heading h2, #date_heading h5 {margin: 2px } 
  #date_heading > div {position: absolute; left:50%; top:50%; transform: translate(-50%, -50%); margin-right: -50%;}
  #team_container > div {position: absolute; right:10px; background: #FBFBFB; padding: 5px 10px;}
  #client_heading {width:30%; left:20%; position: absolute; vertical-align: top; padding: 18px 30px;}       
  #client_title, #team_title {height:20px; font-size:12px; width:100%; padding:5px; box-sizing: border-box;}
  #team_title {text-align: center; }
  #client_name {width:100%; color:#4c4c4c; font-size:40px; }
  #team {width:50%; position: absolute; vertical-align: top; right:0;}
  #team_container {width:100%; height:78px; position:relative; margin-top: 5px; }
  .team_member {display:inline-block; width:100px; text-align:center }
  .team_member > span {font-size: 10px; }
  .team_member > img {width:40px;}
  #experiment_container {box-sizing: border-box;}
  .experiment_if_container {width: 100%; padding: 5px 0 25px 0; border-bottom: 1px solid #ddd;} 
  .experiment_if_container:nth-child(2n) {background: #FBFBFB;}
  `],
  providers: [HTTP_PROVIDERS, ClientServiceRemote],
  directives: [ExperimentComponent]
})
export class AppComponent implements OnInit {

  errorMessage: string;
  staticClientInfo = ClientStaticInfo;
  experiments_remote: Experiment[];
  constructor(private _clientServiceRemote: ClientServiceRemote) { }
  current_index = 0;
  date = new Date();

  getMyClientsRemote(indexC) {
    this._clientServiceRemote.getClientsRemote(indexC).subscribe(
     experiments => this.experiments_remote = experiments,
     error =>  this.errorMessage = <any>error);
  }

  getMyClientsMock(indexC) {
    this.experiments_remote = ExperimentMock[indexC];
    this.staticClientInfo = [{name: "ABC", token: "1234", project_id: "12345", 
	ux_consultant: {name:"AAA", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"},
	sol_eng: {name: "BBB", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"},
	qa_manager: {name:"CCC", avatar:"//cdn.optimizely.com/img/130654005/b852e20017c14c1895cc16151fbfb7bf.png"},
	designer: {name:"DDD", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"},
	account_manager: {name:"EEE", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"}
	},
	{name: "DEF", token: "1234", project_id: "12345", 
	ux_consultant: {name:"AAA", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"},
	sol_eng: {name: "BBB", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"},
	qa_manager: {name:"CCC", avatar:"//cdn.optimizely.com/img/130654005/b852e20017c14c1895cc16151fbfb7bf.png"},
	designer: {name:"DDD", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"},
	account_manager: {name:"EEE", avatar:"//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png"}
	}
	];
  }

  ngOnInit() {
    //this.getMyClientsRemote(this.current_index);
    //setInterval(() => { this.current_index++; if(this.current_index >= this.staticClientInfo.length) {this.current_index=0;} this.getMyClientsRemote(this.current_index); }, 1000 * 60 * 5);  
    this.getMyClientsMock(this.current_index);
    setInterval(() => { this.current_index++; if(this.current_index >= this.staticClientInfo.length) {this.current_index=0;} this.getMyClientsMock(this.current_index); }, 1000 * 10); 
    }

  }