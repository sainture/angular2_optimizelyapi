System.register([], function(exports_1) {
    var ExperimentMock;
    return {
        setters:[],
        execute: function() {
            exports_1("ExperimentMock", ExperimentMock = [[
                    {
                        description: "Test: CTA Change",
                        percentage_included: 10000,
                        status: "Running",
                        primary_goal_info: [
                            {
                                conversion_rate: 0.04,
                                conversions: 412,
                                goal_name: "CTA Clicks",
                                improvement: 0,
                                statistical_significance: 0,
                                status: "baseline",
                                variation_name: "Original",
                                visitors: 8255,
                                visitors_until_statistically_significant: 100000
                            },
                            {
                                conversion_rate: 0.07317073170731707,
                                conversions: 667,
                                goal_name: "CTA Clicks",
                                improvement: 0.8292682926829267,
                                statistical_significance: 95,
                                status: "winner",
                                variation_name: "Variation #1",
                                visitors: 8264,
                                visitors_until_statistically_significant: 206 }
                        ]
                    },
                    {
                        description: "Test: Change Title",
                        percentage_included: 10000,
                        status: "Running",
                        primary_goal_info: [
                            {
                                conversion_rate: 0.075,
                                conversions: 3350,
                                goal_name: "Clicks on Title",
                                improvement: 0,
                                statistical_significance: 0,
                                status: "baseline",
                                variation_name: "Original",
                                visitors: 5345,
                                visitors_until_statistically_significant: 0
                            },
                            {
                                conversion_rate: 0.035,
                                conversions: 1347,
                                goal_name: "Clicks on Title",
                                improvement: -0.3556,
                                statistical_significance: 93,
                                status: "loser",
                                variation_name: "Variation #1",
                                visitors: 5255,
                                visitors_until_statistically_significant: 0 }
                        ]
                    },
                    {
                        description: "Added Left Navigation",
                        percentage_included: 10000,
                        status: "Paused",
                        primary_goal_info: [
                            {
                                conversion_rate: 0.04,
                                conversions: 356,
                                goal_name: "Navigation Clicks",
                                improvement: 0,
                                statistical_significance: 0,
                                status: "baseline",
                                variation_name: "Original",
                                visitors: 1578,
                                visitors_until_statistically_significant: 100000
                            },
                            {
                                conversion_rate: 0.07317073170731707,
                                conversions: 363,
                                goal_name: "Navigation Clicks",
                                improvement: 0.01545,
                                statistical_significance: 0,
                                status: "inconclusive",
                                variation_name: "Variation #1",
                                visitors: 1575,
                                visitors_until_statistically_significant: 10000 }
                        ]
                    }
                ],
                [
                    {
                        description: "Test: Added Header",
                        percentage_included: 10000,
                        status: "Running",
                        primary_goal_info: [
                            {
                                conversion_rate: 0.04,
                                conversions: 412,
                                goal_name: "Header Clicks",
                                improvement: 0,
                                statistical_significance: 0,
                                status: "baseline",
                                variation_name: "Original",
                                visitors: 825,
                                visitors_until_statistically_significant: 0
                            },
                            {
                                conversion_rate: 0.2556,
                                conversions: 267,
                                goal_name: "Header Clicks",
                                improvement: -0.435,
                                statistical_significance: 95,
                                status: "loser",
                                variation_name: "Variation #1",
                                visitors: 826,
                                visitors_until_statistically_significant: 0 }
                        ]
                    },
                    {
                        description: "Test: Change Footer",
                        percentage_included: 10000,
                        status: "Running",
                        primary_goal_info: [
                            {
                                conversion_rate: 0.075,
                                conversions: 3350,
                                goal_name: "Footer clicks",
                                improvement: 0,
                                statistical_significance: 0,
                                status: "baseline",
                                variation_name: "Original",
                                visitors: 5345,
                                visitors_until_statistically_significant: 0
                            },
                            {
                                conversion_rate: 0.035,
                                conversions: 1347,
                                goal_name: "Footer Clicks",
                                improvement: -0.3556,
                                statistical_significance: 93,
                                status: "loser",
                                variation_name: "Variation #1",
                                visitors: 5255,
                                visitors_until_statistically_significant: 0 }
                        ]
                    },
                    {
                        description: "Change background color",
                        percentage_included: 10000,
                        status: "Running",
                        primary_goal_info: [
                            {
                                conversion_rate: 0.04,
                                conversions: 356,
                                goal_name: "Clicks Background",
                                improvement: 0,
                                statistical_significance: 0,
                                status: "baseline",
                                variation_name: "Original",
                                visitors: 1578,
                                visitors_until_statistically_significant: 100000
                            },
                            {
                                conversion_rate: 0.5345,
                                conversions: 463,
                                goal_name: "Clicks Background",
                                improvement: 0.0545,
                                statistical_significance: 95,
                                status: "winner",
                                variation_name: "Variation #1",
                                visitors: 1575,
                                visitors_until_statistically_significant: 10000 }
                        ]
                    }
                ]]);
        }
    }
});
//# sourceMappingURL=mock-clients.js.map