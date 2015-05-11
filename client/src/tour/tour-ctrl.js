'use strict';

module.exports = TourCtrl;

TourCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
    '$stateParams',
];

function TourCtrl($scope, $rootScope, User,$location,$state,$stateParams) {
    $scope.viewState = {
        listings: [{
            showPercentages: false,
            day: '16',
            month: 'Apr',
            year: '2015',
            city: 'Denver',
            state: 'CO',
            countNumerator: 240,
            countDenominator: 1050,
            gross: '$300',
            change: 45,
            changePercent:'10',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '12',
            month: 'Apr',
            year: '2015',
            city: 'Provo',
            state: 'UT',
            countNumerator: 500,
            countDenominator: 500,
            gross: '$300',
            change: 56,
            changePercent:'8',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '8',
            month: 'Apr',
            year: '2015',
            city: 'New York',
            state: 'NY',
            countNumerator: 240,
            countDenominator: 1050,
            gross: '$300',
            change: 32,
            changePercent:'15',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '4',
            month: 'Apr',
            year: '2015',
            city: 'Los Angeles',
            state: 'CA',
            countNumerator: 245,
            countDenominator: 300,
            gross: '$300',
            change: 25,
            changePercent:'2',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '30',
            month: 'Mar',
            year: '2015',
            city: 'Irvine',
            state: 'CA',
            countNumerator: 240,
            countDenominator: 1050,
            gross: '$300',
            change: 20,
            changePercent:'7',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '18',
            month: 'Mar',
            year: '2015',
            city: 'Denver',
            state: 'CO',
            countNumerator: 1400,
            countDenominator: 1450,
            gross: '$300',
            change: 0,
            changePercent:'0',
            changeFinal: 'Final',
        },{
            showPercentages: false,
            day: '3',
            month: 'Mar',
            year: '2015',
            city: 'Irvine',
            state: 'CA',
            countNumerator: 1200,
            countDenominator: 1250,
            gross: '$300',
            change: 0,
            changePercent:'0',
            changeFinal: 'Final',
        },{
            showPercentages: false,
            day: '1',
            month: 'Mar',
            year: '2015',
            city: 'Los Angeles',
            state: 'CA',
            countNumerator: 800,
            countDenominator: 800,
            gross: '$300',
            change: 0,
            changePercent:'0',
            changeFinal: 'Final',
        }]

    };



    $rootScope.$broadcast('headerUpdate',{
        header: $stateParams.tour,
        back: true
    });

}
