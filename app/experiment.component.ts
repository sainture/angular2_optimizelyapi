import {Component, Input} from 'angular2/core';
import {Experiment} from './client';
import {Goal} from './client';

@Component({
	selector: 'experiment-details',
	template: `
		<div *ngIf="experiment" class="experiment_container">
             <div class="primary_goal_name"><span>Primary goal <span class="goal_arrow"></span></span> <span *ngIf="experiment.primary_goal_info.length > 0">{{experiment.primary_goal_info[0].goal_name}}</span>
             </div>
			 <div class="experiment_details"> 
			 	<div class="experiment_name">
              		<span>{{experiment.description}}</span>
                </div>
                <div class="experiment_traffic">
              		<span> Traffic: <strong>{{experiment.percentage_included / 100}}% </strong></span>
            	</div>
                <div class="experiment_status" [class.status_green] = "experiment.status === 'Running'"
                [class.status_yellow] = "experiment.status === 'Paused'"><span>Status: <strong>{{experiment.status}}</strong> </span> 
                </div>            
            </div>
            <div class="experiment_results">
                		<div *ngFor="#primary_goal_info of experiment.primary_goal_info" class="result_row" [class.original]="primary_goal_info.variation_name === 'Original'" [class.winner]="primary_goal_info.variation_name !== 'Original' && primary_goal_info.statistical_significance > 90 && primary_goal_info.improvement > 0" [class.loser]="primary_goal_info.variation_name !== 'Original' && primary_goal_info.statistical_significance > 90 && primary_goal_info.improvement < 0">
                    		<div class="variation_name"> 
                                {{primary_goal_info.variation_name}}
                            </div>
                    		<div class="conversions">
                                <span class="result_box_heading">{{primary_goal_info.is_revenue ? "Revenue" : "Unique Conversions"}}</span><br>
                                <span class="result_box_sub_heading">Visitors</span><br>
                                <span class="result_box_value"><strong>{{primary_goal_info.is_revenue ? primary_goal_info.revenue : primary_goal_info.conversions}}</strong></span><br>
                                <span class="result_box_sub_value"><strong>{{primary_goal_info.visitors}}</strong></span>
                            </div>
                    		<div class="conversion_rate">
                                <span class="result_box_heading">{{primary_goal_info.is_revenue ? "Revenue Per Visitor" : "Conversion Rate"}}</span> <br>
                                <span class="result_box_value"><strong> {{ primary_goal_info.is_revenue ?  (primary_goal_info.revenue_per_visitor * 100).toFixed(2) : (primary_goal_info.conversion_rate * 100).toFixed(2)}} {{ primary_goal_info.is_revenue ? "" : "%"}} </strong></span>
                            </div>
                    		<div [class.hide]="primary_goal_info.variation_name === 'Original'" class="improvement">
                                <span class="result_box_heading">Improvement</span><br>
                                <span class="result_box_value"><strong>{{(primary_goal_info.improvement * 100).toFixed(1)}}% </strong></span>
                            </div>
                    		<div class="statistical_significance" [class.hide]="primary_goal_info.variation_name === 'Original'">
                                <span class="result_box_heading">Statistical Significance </span> <br>
                                <span class="result_box_value"> 
                                    <span *ngIf="primary_goal_info.statistical_significance < 1"> <1% </span>
                                    <span [class.hide]="primary_goal_info.statistical_significance < 1">
                                        <strong>{{primary_goal_info.statistical_significance.toFixed(0)}}% </strong>
                                    </span>
                                </span> <br>
                                <span class="result_box_sub_value" [class.hide]="primary_goal_info.statistical_significance > 90">
                                    ~{{primary_goal_info.visitors_until_statistically_significant}} visitors remaining.
                                </span>
                                <span class="result_box_sub_value" [class.hide]="primary_goal_info.statistical_significance < 1">
                                    <strong>{{primary_goal_info.status}}</strong>
                                </span>
                            </div>                   
                  		</div>               
            </div>
        </div>
	`,
	styles: [`
        .experiment_container {width: 90%; max-width: 1200px; margin: 0 auto;}
        .primary_goal_name {margin-top:20px; margin-bottom: 10px}
        .primary_goal_name > span:first-child {color:#bababa; font-weight:bold; background:#ebebeb; display: inline-block; padding: 7px 20px; position: relative; margin-right: 20px;}
        .goal_arrow { width: 0; height: 0; display: inline-block; border-top: 16px solid transparent; border-bottom: 16px solid transparent;  border-left: 18px solid #ebebeb; position: absolute; right: -18px; top: 0;}
        .experiment_details {text-align:center; display:inline-block; position:relative; width: 18%; margin-right:2%; height: 230px; border: 1px solid #e7e7e7;}
        .experiment_name {margin-top: 20px; margin-bottom: 20px; padding: 10px;}
        .experiment_traffic {color:#4f6ade; font-weight:bold; position: absolute; left: 50px; bottom: 50px;}
        .experiment_status {background-color:#ddd; position: absolute; bottom: 0; text-align: center; width:100%; font-size: 16px; line-height: 35px;}
        .status_green {background-color:#4FBAB3; color:#fff; }
        .status_yellow {background-color:#f2a92c; color:#fff;}

        .experiment_results {display:inline-block; position:relative; width: 78%; height: 230px; vertical-align:top; }
        .result_row {height:70px; margin-bottom:10px;}
        .result_row:last-child {margin-bottom:0px;}
		.result_row > div {display:inline-block; text-align:center; vertical-align:top; height: 70px; border: 1px solid #e7e7e7; box-sizing: border-box; padding:10px; margin-right:10px; width:150px;}
        .result_row .variation_name {padding-top:24px; width: 150px; }
        .result_row .conversions,  .result_row .conversion_rate, .result_row .improvement, .result_row .statistical_significance{padding-top:2px;}
        .result_row .conversions .result_box_sub_heading, .result_row .conversions .result_box_sub_value {color: #bababa}

        .result_row.original .variation_name{background-color: #ebebeb;}
        .result_box_heading {font-size:12px; vertical-align: top;}
        .result_box_sub_heading {font-size:10px;}
        .result_box_value {font-size: 22px; display: inline-block; margin-top: 6px;}
        .result_box_sub_value {font-size:10px;}
        .hide {display:none !important;}

        .result_row.winner .variation_name {color:#fff; background-color:#84d780;}
        .result_row.winner .conversions .result_box_value,
        .result_row.winner .conversion_rate .result_box_value, 
        .result_row.winner .improvement .result_box_value, 
        .result_row.winner .statistical_significance .result_box_value,
        .result_row.winner .statistical_significance .result_box_sub_value
        {color:#84d780;}
        .result_row.loser .variation_name {color:#fff; background-color:#fd5c2b;}
        .result_row.loser .conversions .result_box_value,
        .result_row.loser .conversion_rate .result_box_value, 
        .result_row.loser .improvement .result_box_value, 
        .result_row.loser .statistical_significance .result_box_value,
        .result_row.loser .statistical_significance .result_box_sub_value
        {color:#fd5c2b;}
        .conversions span.result_box_value { font-size: 20px; display: inline-block; margin-top: 2px;}

	`]

})

export class ExperimentComponent {
	@Input() 
  	experiment: Experiment;
}