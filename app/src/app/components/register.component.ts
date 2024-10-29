// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_Y9D62LOSpOTBZekA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Y9D62LOSpOTBZekA(bh) {
    try {
      bh = this.forms(bh);
      //appendnew_next_sd_Y9D62LOSpOTBZekA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y9D62LOSpOTBZekA');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rFD1kaAyYOwVKRDE(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ej3e5gr9lHESjfS6');
    }
  }
  //appendnew_flow_registerComponent_start

  forms(bh) {
    try {
      bh = this.reactiveForms(bh);
      //appendnew_next_forms
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aAU48EVL1YMjjzsa');
    }
  }

  reactiveForms(bh) {
    try {
      const page = this.page;
      page.registerForm = new FormGroup({
        first_name: new FormControl('', Validators.required),
        last_name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        role_id: new FormControl(null, Validators.required),
        password: new FormControl('', Validators.required),
      });
      bh = this.sd_HW3vQ8rzTq1n4IhZ(bh);
      //appendnew_next_reactiveForms
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nDY0ULmigD7XdlaW');
    }
  }

  sd_HW3vQ8rzTq1n4IhZ(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.prepareRoleReqObj(bh);
      //appendnew_next_sd_HW3vQ8rzTq1n4IhZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HW3vQ8rzTq1n4IhZ');
    }
  }

  prepareRoleReqObj(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'roles';
      bh = this.sd_gaZvgwVLJbV6cNzK(bh);
      //appendnew_next_prepareRoleReqObj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zbVeHiOObvuctpYB');
    }
  }

  async sd_gaZvgwVLJbV6cNzK(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.roles = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_gaZvgwVLJbV6cNzK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gaZvgwVLJbV6cNzK');
    }
  }

  sd_rFD1kaAyYOwVKRDE(bh) {
    try {
      const page = this.page;
      bh.body = page.registerForm.value;

      bh.url = page.ssdUrl + 'register';
      bh = this.sd_0T6Aoe0Vd27FcmEM(bh);
      //appendnew_next_sd_rFD1kaAyYOwVKRDE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rFD1kaAyYOwVKRDE');
    }
  }

  async sd_0T6Aoe0Vd27FcmEM(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_rLKbxKbK3BNDjlJY(bh);
      //appendnew_next_sd_0T6Aoe0Vd27FcmEM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0T6Aoe0Vd27FcmEM');
    }
  }

  sd_rLKbxKbK3BNDjlJY(bh) {
    try {
      const page = this.page;
      page.registerForm.reset();
      bh = this.sd_pTXEtXx0HANisrjX(bh);
      //appendnew_next_sd_rLKbxKbK3BNDjlJY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rLKbxKbK3BNDjlJY');
    }
  }

  async sd_pTXEtXx0HANisrjX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_pTXEtXx0HANisrjX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pTXEtXx0HANisrjX');
    }
  }

  sd_PlMatZemvWKHqCS4(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.error);
      //appendnew_next_sd_PlMatZemvWKHqCS4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PlMatZemvWKHqCS4');
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
    if (
      false ||
      this.sd_jHogFMWKtperJA2m(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_jHogFMWKtperJA2m(bh) {
    const catchConnectedNodes = ['sd_PlMatZemvWKHqCS4'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_PlMatZemvWKHqCS4(bh);
    //appendnew_next_sd_jHogFMWKtperJA2m
    return true;
  }
  //appendnew_flow_registerComponent_Catch
}
