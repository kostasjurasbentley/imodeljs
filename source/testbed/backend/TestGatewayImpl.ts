/*---------------------------------------------------------------------------------------------
|  $Copyright: (c) 2018 Bentley Systems, Incorporated. All rights reserved. $
 *--------------------------------------------------------------------------------------------*/
import { TestGateway, TestOp1Params } from "../common/TestGateway";
import { Gateway } from "@build/imodeljs-core/lib/common/Gateway";

export class TestGatewayImpl extends TestGateway {
  public static register() {
    Gateway.registerImplementation(TestGateway, TestGatewayImpl);
  }

  public async op1(params: TestOp1Params): Promise<number> {
    return params.sum();
  }
}
