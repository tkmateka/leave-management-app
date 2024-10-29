// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_Esk73iWZlTC4jXzt from 'app/sd-services/common'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_Esk73iWZlTC4jXzt: sd_Esk73iWZlTC4jXzt.common) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
