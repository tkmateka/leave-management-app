// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_XN8AU08cYPkAHCIb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XN8AU08cYPkAHCIb(bh) {
    try {
      bh = this.sd_sGrHPbixs7FpiDhj(bh);
      //appendnew_next_sd_XN8AU08cYPkAHCIb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XN8AU08cYPkAHCIb');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_sGrHPbixs7FpiDhj(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.prepareRoleReqObj(bh);
      //appendnew_next_sd_sGrHPbixs7FpiDhj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sGrHPbixs7FpiDhj');
    }
  }

  prepareRoleReqObj(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'users';
      bh = this.sd_6HU8hlAlYczxcqXq(bh);
      //appendnew_next_prepareRoleReqObj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dI9q9C9KOcRZkaIV');
    }
  }

  async sd_6HU8hlAlYczxcqXq(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: undefined,
        params: {},
        body: undefined,
      };
      this.page.users = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_6HU8hlAlYczxcqXq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6HU8hlAlYczxcqXq');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_homeComponent_Catch
}
