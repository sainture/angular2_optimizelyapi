System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ExperimentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExperimentComponent = (function () {
                function ExperimentComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExperimentComponent.prototype, "experiment", void 0);
                ExperimentComponent = __decorate([
                    core_1.Component({
                        selector: 'experiment-details',
                        template: "\n\t\t<div *ngIf=\"experiment\" class=\"experiment_container\">\n             <div class=\"primary_goal_name\"><span>Primary goal <span class=\"goal_arrow\"></span></span> <span *ngIf=\"experiment.primary_goal_info.length > 0\">{{experiment.primary_goal_info[0].goal_name}}</span>\n             </div>\n\t\t\t <div class=\"experiment_details\"> \n\t\t\t \t<div class=\"experiment_name\">\n              \t\t<span>{{experiment.description}}</span>\n                </div>\n                <div class=\"experiment_traffic\">\n              \t\t<span> Traffic: <strong>{{experiment.percentage_included / 100}}% </strong></span>\n            \t</div>\n                <div class=\"experiment_status\" [class.status_green] = \"experiment.status === 'Running'\"\n                [class.status_yellow] = \"experiment.status === 'Paused'\"><span>Status: <strong>{{experiment.status}}</strong> </span> \n                </div>            \n            </div>\n            <div class=\"experiment_results\">\n                \t\t<div *ngFor=\"#primary_goal_info of experiment.primary_goal_info\" class=\"result_row\" [class.original]=\"primary_goal_info.variation_name === 'Original'\" [class.winner]=\"primary_goal_info.variation_name !== 'Original' && primary_goal_info.statistical_significance > 90 && primary_goal_info.improvement > 0\" [class.loser]=\"primary_goal_info.variation_name !== 'Original' && primary_goal_info.statistical_significance > 90 && primary_goal_info.improvement < 0\">\n                    \t\t<div class=\"variation_name\"> \n                                {{primary_goal_info.variation_name}}\n                            </div>\n                    \t\t<div class=\"conversions\">\n                                <span class=\"result_box_heading\">{{primary_goal_info.is_revenue ? \"Revenue\" : \"Unique Conversions\"}}</span><br>\n                                <span class=\"result_box_sub_heading\">Visitors</span><br>\n                                <span class=\"result_box_value\"><strong>{{primary_goal_info.is_revenue ? primary_goal_info.revenue : primary_goal_info.conversions}}</strong></span><br>\n                                <span class=\"result_box_sub_value\"><strong>{{primary_goal_info.visitors}}</strong></span>\n                            </div>\n                    \t\t<div class=\"conversion_rate\">\n                                <span class=\"result_box_heading\">{{primary_goal_info.is_revenue ? \"Revenue Per Visitor\" : \"Conversion Rate\"}}</span> <br>\n                                <span class=\"result_box_value\"><strong> {{ primary_goal_info.is_revenue ?  (primary_goal_info.revenue_per_visitor * 100).toFixed(2) : (primary_goal_info.conversion_rate * 100).toFixed(2)}} {{ primary_goal_info.is_revenue ? \"\" : \"%\"}} </strong></span>\n                            </div>\n                    \t\t<div [class.hide]=\"primary_goal_info.variation_name === 'Original'\" class=\"improvement\">\n                                <span class=\"result_box_heading\">Improvement</span><br>\n                                <span class=\"result_box_value\"><strong>{{(primary_goal_info.improvement * 100).toFixed(1)}}% </strong></span>\n                            </div>\n                    \t\t<div class=\"statistical_significance\" [class.hide]=\"primary_goal_info.variation_name === 'Original'\">\n                                <span class=\"result_box_heading\">Statistical Significance </span> <br>\n                                <span class=\"result_box_value\"> \n                                    <span *ngIf=\"primary_goal_info.statistical_significance < 1\"> <1% </span>\n                                    <span [class.hide]=\"primary_goal_info.statistical_significance < 1\">\n                                        <strong>{{primary_goal_info.statistical_significance.toFixed(0)}}% </strong>\n                                    </span>\n                                </span> <br>\n                                <span class=\"result_box_sub_value\" [class.hide]=\"primary_goal_info.statistical_significance > 90\">\n                                    ~{{primary_goal_info.visitors_until_statistically_significant}} visitors remaining.\n                                </span>\n                                <span class=\"result_box_sub_value\" [class.hide]=\"primary_goal_info.statistical_significance < 1\">\n                                    <strong>{{primary_goal_info.status}}</strong>\n                                </span>\n                            </div>                   \n                  \t\t</div>               \n            </div>\n        </div>\n\t",
                        styles: ["\n        .experiment_container {width: 90%; max-width: 1200px; margin: 0 auto;}\n        .primary_goal_name {margin-top:20px; margin-bottom: 10px}\n        .primary_goal_name > span:first-child {color:#bababa; font-weight:bold; background:#ebebeb; display: inline-block; padding: 7px 20px; position: relative; margin-right: 20px;}\n        .goal_arrow { width: 0; height: 0; display: inline-block; border-top: 16px solid transparent; border-bottom: 16px solid transparent;  border-left: 18px solid #ebebeb; position: absolute; right: -18px; top: 0;}\n        .experiment_details {text-align:center; display:inline-block; position:relative; width: 18%; margin-right:2%; height: 230px; border: 1px solid #e7e7e7;}\n        .experiment_name {margin-top: 20px; margin-bottom: 20px; padding: 10px;}\n        .experiment_traffic {color:#4f6ade; font-weight:bold; position: absolute; left: 50px; bottom: 50px;}\n        .experiment_status {background-color:#ddd; position: absolute; bottom: 0; text-align: center; width:100%; font-size: 16px; line-height: 35px;}\n        .status_green {background-color:#4FBAB3; color:#fff; }\n        .status_yellow {background-color:#f2a92c; color:#fff;}\n\n        .experiment_results {display:inline-block; position:relative; width: 78%; height: 230px; vertical-align:top; }\n        .result_row {height:70px; margin-bottom:10px;}\n        .result_row:last-child {margin-bottom:0px;}\n\t\t.result_row > div {display:inline-block; text-align:center; vertical-align:top; height: 70px; border: 1px solid #e7e7e7; box-sizing: border-box; padding:10px; margin-right:10px; width:150px;}\n        .result_row .variation_name {padding-top:24px; width: 150px; }\n        .result_row .conversions,  .result_row .conversion_rate, .result_row .improvement, .result_row .statistical_significance{padding-top:2px;}\n        .result_row .conversions .result_box_sub_heading, .result_row .conversions .result_box_sub_value {color: #bababa}\n\n        .result_row.original .variation_name{background-color: #ebebeb;}\n        .result_box_heading {font-size:12px; vertical-align: top;}\n        .result_box_sub_heading {font-size:10px;}\n        .result_box_value {font-size: 22px; display: inline-block; margin-top: 6px;}\n        .result_box_sub_value {font-size:10px;}\n        .hide {display:none !important;}\n\n        .result_row.winner .variation_name {color:#fff; background-color:#84d780;}\n        .result_row.winner .conversions .result_box_value,\n        .result_row.winner .conversion_rate .result_box_value, \n        .result_row.winner .improvement .result_box_value, \n        .result_row.winner .statistical_significance .result_box_value,\n        .result_row.winner .statistical_significance .result_box_sub_value\n        {color:#84d780;}\n        .result_row.loser .variation_name {color:#fff; background-color:#fd5c2b;}\n        .result_row.loser .conversions .result_box_value,\n        .result_row.loser .conversion_rate .result_box_value, \n        .result_row.loser .improvement .result_box_value, \n        .result_row.loser .statistical_significance .result_box_value,\n        .result_row.loser .statistical_significance .result_box_sub_value\n        {color:#fd5c2b;}\n        .conversions span.result_box_value { font-size: 20px; display: inline-block; margin-top: 2px;}\n\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExperimentComponent);
                return ExperimentComponent;
            })();
            exports_1("ExperimentComponent", ExperimentComponent);
        }
    }
});
//# sourceMappingURL=experiment.component.js.map