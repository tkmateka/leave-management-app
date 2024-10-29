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
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_QthdTwO0DYnWILFk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_QthdTwO0DYnWILFk(bh) {
    try {
      bh = this.forms(bh);
      //appendnew_next_sd_QthdTwO0DYnWILFk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QthdTwO0DYnWILFk');
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
      bh = this.sd_OWcwnnhZ2aUF9Ci1(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bnUSQWJCNUaBYNwM');
    }
  }
  //appendnew_flow_loginComponent_start

  forms(bh) {
    try {
      bh = this.reactiveForms(bh);
      //appendnew_next_forms
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cDMq4VgBQZwrChWP');
    }
  }

  reactiveForms(bh) {
    try {
      const page = this.page;
      page.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      });
      bh = this.sd_TUytytDc43MEHLs1(bh);
      //appendnew_next_reactiveForms
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LkJI7WtS4QSuu5eZ');
    }
  }

  sd_TUytytDc43MEHLs1(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      //appendnew_next_sd_TUytytDc43MEHLs1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TUytytDc43MEHLs1');
    }
  }

  sd_OWcwnnhZ2aUF9Ci1(bh) {
    try {
      const page = this.page;
      bh.body = page.loginForm.value;

      bh.url = page.ssdUrl + 'login';
      bh = this.sd_vuGKePZVg0XlzaA0(bh);
      //appendnew_next_sd_OWcwnnhZ2aUF9Ci1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OWcwnnhZ2aUF9Ci1');
    }
  }

  async sd_vuGKePZVg0XlzaA0(bh) {
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
      bh = this.sd_JhbM18JVKK9DPAtT(bh);
      //appendnew_next_sd_vuGKePZVg0XlzaA0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vuGKePZVg0XlzaA0');
    }
  }

  sd_JhbM18JVKK9DPAtT(bh) {
    try {
      const page = this.page;
      page.loginForm.reset();
      bh = this.storeTokenLocally(bh);
      //appendnew_next_sd_JhbM18JVKK9DPAtT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JhbM18JVKK9DPAtT');
    }
  }

  storeTokenLocally(bh) {
    try {
      sessionStorage.setItem('accessToken', JSON.stringify(bh.result));
      bh = this.sd_QhQNNullU4mlUbCP(bh);
      //appendnew_next_storeTokenLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mZkcCeS5NCN3iCjX');
    }
  }

  async sd_QhQNNullU4mlUbCP(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_QhQNNullU4mlUbCP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QhQNNullU4mlUbCP');
    }
  }

  sd_L5mNlpQvnpOkjMiE(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.error);
      //appendnew_next_sd_L5mNlpQvnpOkjMiE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L5mNlpQvnpOkjMiE');
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
      this.sd_uZw5EfUYALoopVQx(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_uZw5EfUYALoopVQx(bh) {
    const catchConnectedNodes = ['sd_L5mNlpQvnpOkjMiE'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_L5mNlpQvnpOkjMiE(bh);
    //appendnew_next_sd_uZw5EfUYALoopVQx
    return true;
  }
  //appendnew_flow_loginComponent_Catch
}
