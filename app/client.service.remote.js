System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './client.static.info', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, client_static_info_1;
    var ClientServiceRemote;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (client_static_info_1_1) {
                client_static_info_1 = client_static_info_1_1;
            },
            function (_1) {}],
        execute: function() {
            ClientServiceRemote = (function () {
                function ClientServiceRemote(http) {
                    this.http = http;
                    this._rootUrl = 'https://www.optimizelyapis.com/experiment/v1';
                    this.serviceStaticClientInfo = client_static_info_1.ClientStaticInfo;
                }
                ClientServiceRemote.prototype.getClientsRemote = function (indexC) {
                    var _this = this;
                    var authHeader = new http_1.Headers();
                    authHeader.append('Token', this.serviceStaticClientInfo[indexC].token);
                    return this.http.get(this._rootUrl + "/projects/" + this.serviceStaticClientInfo[indexC].project_id + "/experiments", { headers: authHeader })
                        .map(function (res) {
                        // sort experiments (running, paused, not started, archived) and then based on last_modified
                        return res.json().sort(function (a, b) {
                            if (a.status !== b.status) {
                                if (a.status > b.status)
                                    return -1;
                                if (a.status < b.status)
                                    return 1;
                            }
                            if (a.last_modified < b.last_modified)
                                return 1;
                            if (a.last_modified > b.last_modified)
                                return -1;
                            return 0;
                        }).slice(0, 3);
                    })
                        .flatMap(function (res) {
                        return _this.http.get(_this._rootUrl + "/experiments/" + res[0].id + "/stats", { headers: authHeader })
                            .map(function (pg_data) {
                            res[0].primary_goal_info = pg_data.json().filter(function (el) {
                                return el.goal_id == res[0].primary_goal_id;
                            }).sort(function (a, b) {
                                if (a.variation_name < b.variation_name)
                                    return -1;
                                if (a.variation_name > b.variation_name)
                                    return 1;
                                return 0;
                            });
                            return res;
                        });
                    })
                        .flatMap(function (res) {
                        return _this.http.get(_this._rootUrl + "/experiments/" + res[1].id + "/stats", { headers: authHeader })
                            .map(function (pg_data) {
                            res[1].primary_goal_info = pg_data.json().filter(function (el) {
                                return el.goal_id == res[1].primary_goal_id;
                            }).sort(function (a, b) {
                                if (a.variation_name < b.variation_name)
                                    return -1;
                                if (a.variation_name > b.variation_name)
                                    return 1;
                                return 0;
                            });
                            return res;
                        });
                    })
                        .flatMap(function (res) {
                        return _this.http.get(_this._rootUrl + "/experiments/" + res[2].id + "/stats", { headers: authHeader })
                            .map(function (pg_data) {
                            res[2].primary_goal_info = pg_data.json().filter(function (el) {
                                return el.goal_id == res[2].primary_goal_id;
                            }).sort(function (a, b) {
                                if (a.variation_name < b.variation_name)
                                    return -1;
                                if (a.variation_name > b.variation_name)
                                    return 1;
                                return 0;
                            });
                            return res;
                        });
                    })
                        .do(function (data) { return console.log(data); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                ClientServiceRemote.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ClientServiceRemote = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClientServiceRemote);
                return ClientServiceRemote;
            })();
            exports_1("ClientServiceRemote", ClientServiceRemote);
        }
    }
});
//# sourceMappingURL=client.service.remote.js.map