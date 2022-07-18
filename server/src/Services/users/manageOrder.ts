import { DydxClient } from "@dydxprotocol/v3-client";
import ConstantConfig from "../../utils/Constant.config";
import dydxPClient from "../dydxClient";
/**
 * This class is used  to mange The order's on dydx .
 * this class have   createOrder and closeOrder  methods with the help of them you can create and close order on dydx.
 */
export default class orderManager {
  private client: DydxClient | any;
  constructor() {
    this.client = new dydxPClient();
    this.init();
  }
  /** this function is responsible for initlizing the dydxClient */
  private async init() {
  this.client =  this.client.getClient();
  }
  /** function is responsible for creating Order on dydx.
   * @param orderParams are order parameters that will be used to create order on dydx.
   * @return order status.
   */
  
  public async createOrders(orderParams: any) {
    const order = await this.client.private.createOrder(
      {
        market: "ETH-USD",
        side: "SELL",
        type: "LIMIT",
        timeInForce: "GTT",
        postOnly: false,
        size: "10",
        price: "1800",
        limitFee: "0.015",
        expiration: "2022-08-16T13:51:23.995Z",
      },
      ConstantConfig.POSITION_ID // required for creating the order signature
    );
    return order;
  }
  /** function is responsible for deleting the order on dydx.
   * @param orderId orderId to be deleted.
   * @return order status.
   */
  public async cancleOrder(orderID: string) {
    const order = await this.client.private.cancelOrder(orderID);
    return order;
  }
}
