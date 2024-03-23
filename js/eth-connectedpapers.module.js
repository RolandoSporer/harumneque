/**
* @ngdoc module
* @name ethConnectedPapersModule
*
* @description
*
* Customization for the availability line:<br>
* - get paper informations and link to connected papers
*
*
* <b>AngularJS Dependencies</b><br>
* Service {@link ETH.ethConnectedPapersConfig}<br>
* Service /js/services {@link ETH.ethConfigService}<br>
*
*
* <b>CSS/Image Dependencies</b><br>
* CSS eth-connectedpapers.css
*
*
*/
import {ethConfigService} from './services/eth-config.service';
import {ethConnectedPapersConfig} from './eth-connectedpapers.config';
import {ethConnectedPapersController} from './eth-connectedpapers.controller';
import {ethConnectedPapersHtml} from './eth-connectedpapers.html';

export const ethConnectedPapersModule = angular
    .module('ethConnectedPapersModule', [])
        .factory('ethConfigService', ethConfigService)
        .factory('ethConnectedPapersConfig', ethConnectedPapersConfig)
        .controller('ethConnectedPapersController', ethConnectedPapersController)
        .component('ethConnectedPapersComponent', {
            bindings: {afterCtrl: '<'},
            controller: 'ethConnectedPapersController',
            template: ethConnectedPapersHtml
        })
