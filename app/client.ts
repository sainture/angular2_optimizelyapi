export interface Goal {
	variation_name: string;
	variation_id: string; 
	baseline_id: string;
	goal_name: string;
	goal_id: string;
	visitors: string;
	improvement: number;
	is_revenue: boolean;
	begin_time: string;
	end_time: string;
	statistical_significance: number;
	conversions: number; 
	status: string;
	conversion_rate: number;
	difference: number;
	difference_confidence_interval_min: number;
	difference_confidence_interval_max: number;
	visitors_until_statistically_significant: number;
}

export interface Experiment {
	display_goal_order_lst: string[];
	id: string;
	audience_ids: string[];
	shareable_results_link: string;
	conditional_code: string;
	custom_js: string;
	primary_goal_id: string; 
	details: string; 
	project_id: string;
	variation_ids: string[];
	status: string;
	url_conditions: UrlCondition[];
	description: string;
	last_modified: string;
	is_multivariate: boolean;
	activation_mode: string;
	custom_css: string;
	auto_allocated: boolean;
	created: string;
	percentage_included: number;
	experiment_type: string;
	edit_url: string;
	primary_goal_info: Goal;
}

export interface Client {
	name: string;
	token: string;
	project_id: string;
	ux_consultant: string;
	sol_eng: string;
	qa_manager: string;
	designer: string;
	account_manager: string;
}