System.register(['angular2/core', 'angular2/http', './client.service.remote', './client.static.info', './experiment.component', './mock-clients'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, client_service_remote_1, client_static_info_1, experiment_component_1, mock_clients_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (client_service_remote_1_1) {
                client_service_remote_1 = client_service_remote_1_1;
            },
            function (client_static_info_1_1) {
                client_static_info_1 = client_static_info_1_1;
            },
            function (experiment_component_1_1) {
                experiment_component_1 = experiment_component_1_1;
            },
            function (mock_clients_1_1) {
                mock_clients_1 = mock_clients_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_clientServiceRemote) {
                    this._clientServiceRemote = _clientServiceRemote;
                    this.staticClientInfo = client_static_info_1.ClientStaticInfo;
                    this.current_index = 0;
                    this.date = new Date();
                }
                AppComponent.prototype.getMyClientsRemote = function (indexC) {
                    var _this = this;
                    this._clientServiceRemote.getClientsRemote(indexC).subscribe(function (experiments) { return _this.experiments_remote = experiments; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.getMyClientsMock = function (indexC) {
                    this.experiments_remote = mock_clients_1.ExperimentMock[indexC];
                    this.staticClientInfo = [{ name: "ABC", token: "1234", project_id: "12345",
                            ux_consultant: { name: "AAA", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" },
                            sol_eng: { name: "BBB", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" },
                            qa_manager: { name: "CCC", avatar: "//cdn.optimizely.com/img/130654005/b852e20017c14c1895cc16151fbfb7bf.png" },
                            designer: { name: "DDD", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" },
                            account_manager: { name: "EEE", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" }
                        },
                        { name: "DEF", token: "1234", project_id: "12345",
                            ux_consultant: { name: "AAA", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" },
                            sol_eng: { name: "BBB", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" },
                            qa_manager: { name: "CCC", avatar: "//cdn.optimizely.com/img/130654005/b852e20017c14c1895cc16151fbfb7bf.png" },
                            designer: { name: "DDD", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" },
                            account_manager: { name: "EEE", avatar: "//cdn.optimizely.com/img/130654005/b6ae1d883be044a7a3f388b324f06104.png" }
                        }
                    ];
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //this.getMyClientsRemote(this.current_index);
                    //setInterval(() => { this.current_index++; if(this.current_index >= this.staticClientInfo.length) {this.current_index=0;} this.getMyClientsRemote(this.current_index); }, 1000 * 60 * 5);  
                    this.getMyClientsMock(this.current_index);
                    setInterval(function () { _this.current_index++; if (_this.current_index >= _this.staticClientInfo.length) {
                        _this.current_index = 0;
                    } _this.getMyClientsMock(_this.current_index); }, 1000 * 10);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <header>\n    <div id=\"date_heading\">\n        <div> \n          <h5>Today's Date</h5>\n          <h2> {{date | date:'dd-MMM'}}</h2>\n        </div>\n    </div>\n    <div id=\"client_heading\">\n        <div id=\"client_title\"><strong> THE CLIENT </strong></div>\n        <div id=\"client_name\">\n            <div> {{staticClientInfo[current_index].name}}</div>\n        </div>\n    </div>\n  <div id=\"team\">\n      <div id=\"team_container\">\n          <div> \n              <div id=\"ux_person\" class=\"team_member\">\n              \t<img src=\"{{staticClientInfo[current_index].ux_consultant.avatar}}\"> <br>\n                {{staticClientInfo[current_index].ux_consultant.name}} \n                <br>\n                <span>UX Consultant</span>\n              </div>\n              <div id=\"sl_person\" class=\"team_member\"> \n              \t<img src=\"{{staticClientInfo[current_index].sol_eng.avatar}}\"> <br>\n                {{staticClientInfo[current_index].sol_eng.name}} \n                <br>\n                <span>Solutions Engineer</span>\n              </div>\n              <div id=\"de_person\" class=\"team_member\"> \n              \t<img src=\"{{staticClientInfo[current_index].designer.avatar}}\"> <br>\n                {{staticClientInfo[current_index].designer.name}} \n                <br>\n                <span>Designer</span>\n              </div>\n              <div id=\"qa_person\" class=\"team_member\">\n              <img src=\"{{staticClientInfo[current_index].qa_manager.avatar}}\"> <br>\n                {{staticClientInfo[current_index].qa_manager.name}}\n                <br>\n                <span>QA Manager</span>\n              </div> \n              <div id=\"act_person\" class=\"team_member\"> \n              <img src=\"{{staticClientInfo[current_index].account_manager.avatar}}\"> <br>\n                {{staticClientInfo[current_index].account_manager.name}} \n                <br>\n                <span>Accounts Manager</span>\n              </div>\n          </div>\n    </div>\n  </div>\n  </header>\n  <div id=\"experiment_container\">\n      <div *ngFor=\"#experiment of experiments_remote\" class=\"experiment_if_container\">\n          <experiment-details [experiment]=\"experiment\">\n           \n          </experiment-details>\n      </div>\n  </div>  \n  ",
                        styles: ["\n  header { box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26); width: 100%; height: 100px;}\n  #date_heading, #client_heading, #team {box-sizing: border-box;}\n  #date_heading {background-color:#4f6ade; width:20%; height: 100px; position: absolute; color:#fff; }\n  #date_heading h2, #date_heading h5 {margin: 2px } \n  #date_heading > div {position: absolute; left:50%; top:50%; transform: translate(-50%, -50%); margin-right: -50%;}\n  #team_container > div {position: absolute; right:10px; background: #FBFBFB; padding: 5px 10px;}\n  #client_heading {width:30%; left:20%; position: absolute; vertical-align: top; padding: 18px 30px;}       \n  #client_title, #team_title {height:20px; font-size:12px; width:100%; padding:5px; box-sizing: border-box;}\n  #team_title {text-align: center; }\n  #client_name {width:100%; color:#4c4c4c; font-size:40px; }\n  #team {width:50%; position: absolute; vertical-align: top; right:0;}\n  #team_container {width:100%; height:78px; position:relative; margin-top: 5px; }\n  .team_member {display:inline-block; width:100px; text-align:center }\n  .team_member > span {font-size: 10px; }\n  .team_member > img {width:40px;}\n  #experiment_container {box-sizing: border-box;}\n  .experiment_if_container {width: 100%; padding: 5px 0 25px 0; border-bottom: 1px solid #ddd;} \n  .experiment_if_container:nth-child(2n) {background: #FBFBFB;}\n  "],
                        providers: [http_1.HTTP_PROVIDERS, client_service_remote_1.ClientServiceRemote],
                        directives: [experiment_component_1.ExperimentComponent]
                    }), 
                    __metadata('design:paramtypes', [client_service_remote_1.ClientServiceRemote])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map