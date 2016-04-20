import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Client} from './client';
import {Experiment} from './client';
import {Goal} from './client';
import {Observable} from 'rxjs/Observable';
import {ClientStaticInfo} from './client.static.info';
import 'rxjs/Rx';

@Injectable()
export class ClientServiceRemote {
	
	constructor (private http: Http) {}

	private _rootUrl = 'https://www.optimizelyapis.com/experiment/v1';
	serviceStaticClientInfo = ClientStaticInfo;
	experiments_service: Experiment[];

	getClientsRemote (indexC) {
		var authHeader = new Headers();
		authHeader.append('Token', this.serviceStaticClientInfo[indexC].token);

		return this.http.get(this._rootUrl + "/projects/"+ this.serviceStaticClientInfo[indexC].project_id + "/experiments", {headers: authHeader})
		.map(res => 
		{
			// sort experiments (running, paused, not started, archived) and then based on last_modified
			return res.json().sort(function(a,b) { 
				if(a.status !== b.status)
				{
   					if(a.status > b.status) return -1;
   					if(a.status < b.status) return 1;
				}
					if(a.last_modified < b.last_modified) return 1;
					if(a.last_modified > b.last_modified) return -1;
					return 0;
				}).slice(0,3);
		})
		.flatMap(res => 
			this.http.get(this._rootUrl + "/experiments/"+ res[0].id + "/stats", {headers: authHeader})
				.map(pg_data => 
				 {
				 	res[0].primary_goal_info = pg_data.json().filter(function (el) {
  						return el.goal_id == res[0].primary_goal_id;
						}).sort(function(a,b) {
							if(a.variation_name < b.variation_name) return -1;
							if(a.variation_name > b.variation_name) return 1;
							return 0;
						});
					return res;
				})
		)
		.flatMap(res => 
			this.http.get(this._rootUrl + "/experiments/"+ res[1].id + "/stats", {headers: authHeader})
				.map(pg_data => 
				 {
				 	res[1].primary_goal_info = pg_data.json().filter(function (el) {
  						return el.goal_id == res[1].primary_goal_id;
						}).sort(function(a,b) {
							if(a.variation_name < b.variation_name) return -1;
							if(a.variation_name > b.variation_name) return 1;
							return 0;
						});
					return res;
				})
		)
		.flatMap(res => 
			this.http.get(this._rootUrl + "/experiments/"+ res[2].id + "/stats", {headers: authHeader})
				.map(pg_data => 
				 {
				 	res[2].primary_goal_info = pg_data.json().filter(function (el) {
  						return el.goal_id == res[2].primary_goal_id;
						}).sort(function(a,b) {
							if(a.variation_name < b.variation_name) return -1;
							if(a.variation_name > b.variation_name) return 1;
							return 0;
						});
					return res;
				})
		)
		.do(data => console.log(data)) // eyeball results in the console
		.catch(this.handleError);

	}
	private handleError (error: Response) {
    	// in a real world app, we may send the error to some remote logging infrastructure
    	// instead of just logging it to the console
    	console.error(error);
    	return Observable.throw(error.json().error || 'Server error');
  	}
}