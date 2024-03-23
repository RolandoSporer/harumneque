export class ethConnectedPapersController {

    constructor( ethConfigService, ethConnectedPapersConfig ) {
        this.ethConfigService = ethConfigService;
        this.config = ethConnectedPapersConfig;
    }

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.url = null;

            if (!this.parentCtrl.result || !this.parentCtrl.result.pnx) {
                console.error("***ETH*** ethConnectedPapersController.$onInit: result or result.pnx not available");
                return;
            }

            // check DOI
            if (!this.parentCtrl.result.pnx.addata || !this.parentCtrl.result.pnx.addata.doi || this.parentCtrl.result.pnx.addata.doi.length == 0) {
                return;
            }

            // url for connected papers
            this.url = 'https://connectedpapers.com/api/redirect/doi/' + this.parentCtrl.result.pnx.addata.doi[0] + '?utm_source=primo';
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConnectedPapersController\n\n");
            console.error(e.message);
        }
    }
}

ethConnectedPapersController.$inject = ['ethConfigService', 'ethConnectedPapersConfig' ];
