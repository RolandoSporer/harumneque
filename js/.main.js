import 'primo-explore-eth-connectedpapers';

var app = angular.module('viewCustom', ['ethConnectedPapersModule']);

app.component('prmSearchResultAvailabilityLineAfter',  {
        bindings: {parentCtrl: '<'},
        template: `<eth-connected-papers-component after-ctrl="$ctrl"></eth-connected-papers-component>`
    })

