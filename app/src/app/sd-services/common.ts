// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class common {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_common

  async logout(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_iTaOWX7PC23F1fZc(bh);
      //appendnew_next_logout
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YYqz9WroRFo4SgGa');
    }
  }
  //appendnew_flow_common_start

  async sd_iTaOWX7PC23F1fZc(bh) {
    try {
      sessionStorage.removeItem('accessToken');
      bh = await this.sd_Po1jTBdzP8xspsKW(bh);
      //appendnew_next_sd_iTaOWX7PC23F1fZc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iTaOWX7PC23F1fZc');
    }
  }

  async sd_Po1jTBdzP8xspsKW(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      //appendnew_next_sd_Po1jTBdzP8xspsKW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Po1jTBdzP8xspsKW');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_common_Catch
}
