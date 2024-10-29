// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { UserIdleService } from 'angular-user-idle'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
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
      bh = this.idle(bh);
      //appendnew_next_sd_XN8AU08cYPkAHCIb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XN8AU08cYPkAHCIb');
    }
  }

  stopTimer(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_MZU5VBvoSLD35LZ0(bh);
      //appendnew_next_stopTimer
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTWq0Mi3z7CxcjQo');
    }
  }

  stopWatching(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rDnxXezty1vFhUmX(bh);
      //appendnew_next_stopWatching
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dw9eELb5Xr6p2D0u');
    }
  }

  startWatching(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_sgTFQUkl41IsS5sk(bh);
      //appendnew_next_startWatching
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_62UxD7tmTW3267ed');
    }
  }

  restart(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qLAS9bQCmJ7ZmQ5G(bh);
      //appendnew_next_restart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_73h0bJSipfWOLp0f');
    }
  }

  logout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_H8kE6bpr0VDeT7WI(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TiS6LnEellcSIEDr');
    }
  }
  //appendnew_flow_homeComponent_start

  idle(bh) {
    try {
      this.page.userIdle = this.__page_injector__.get(UserIdleService);
      bh = this.idleService(bh);
      //appendnew_next_idle
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EGYfw7zie2pBZ6nA');
    }
  }

  idleService(bh) {
    try {
      const page = this.page; //Start watching for user inactivity.
      page.userIdle.startWatching();

      // Start watching when user idle is starting.
      page.userIdle.onTimerStart().subscribe((count) => {
        page.showStopTimer = true;
        console.log(count);
      });

      // Start watch when time is up.
      page.userIdle.onTimeout().subscribe(() => {
        this.stopTimer();
        this.stopWatching();
        this.logout();
      });
      bh = this.sd_sGrHPbixs7FpiDhj(bh);
      //appendnew_next_idleService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mtEOUghESKVcVNa8');
    }
  }

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
        headers: [],
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

  sd_MZU5VBvoSLD35LZ0(bh) {
    try {
      const page = this.page;
      console.log('Time is up!');
      page.userIdle.stopTimer();
      //appendnew_next_sd_MZU5VBvoSLD35LZ0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MZU5VBvoSLD35LZ0');
    }
  }

  sd_rDnxXezty1vFhUmX(bh) {
    try {
      const page = this.page;
      page.userIdle.stopWatching();
      //appendnew_next_sd_rDnxXezty1vFhUmX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rDnxXezty1vFhUmX');
    }
  }

  sd_sgTFQUkl41IsS5sk(bh) {
    try {
      const page = this.page;
      page.userIdle.startWatching();
      //appendnew_next_sd_sgTFQUkl41IsS5sk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sgTFQUkl41IsS5sk');
    }
  }

  sd_qLAS9bQCmJ7ZmQ5G(bh) {
    try {
      const page = this.page;
      page.userIdle.resetTimer();
      //appendnew_next_sd_qLAS9bQCmJ7ZmQ5G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qLAS9bQCmJ7ZmQ5G');
    }
  }

  async sd_H8kE6bpr0VDeT7WI(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.logout();

      bh = this.sd_SzGKqCSukpvwtYUN(bh);
      //appendnew_next_sd_H8kE6bpr0VDeT7WI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H8kE6bpr0VDeT7WI');
    }
  }

  sd_SzGKqCSukpvwtYUN(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Session Timeout', 'Ok', {
        duration: 5000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_SzGKqCSukpvwtYUN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SzGKqCSukpvwtYUN');
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
