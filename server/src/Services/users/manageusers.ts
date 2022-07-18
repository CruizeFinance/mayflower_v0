import { DydxClient } from "@dydxprotocol/v3-client";
import ConstantConfig from "../../utils/Constant.config";
import dydxPClient from "../dydxClient";
/** Class userManager  is usd to mange  the USERs activity with APIS
 * THis calss have some funciton that help the user to manullpate the activity on dydx.
 */
export default class orderManager {
  private client: DydxClient | any;
  constructor() {
    this.client = new dydxPClient();
    this.init();
  }

  private async init() {
    this.client = await this.client.getClient();
  }
  /** funciton createUser -  is user to create User on dydx
   * @param starkKeyYCoordinate -  the user starkKeyYCoordinate on dydx .
   * @param starkKey - is the user starkKey on dydx.
   * @return user
   */
  public async createUser(starkKey: string, starkKeyYCoordinate: string) {
    const user = await this.client.private.createAccount(
      starkKey, // starkKey
      starkKeyYCoordinate // starkKeyYCoordinate
    );
    return user;
  }
  /** this funciton called when the user want to register itself .*/
  public async RegisterUser() {
    const signature = await this.client.private.getRegistration();
    return signature;
  }

  /** funciton createDydxAPI  - create the API on dydx.
   * @parameters - ETHAddress  is the user wallet address.
   * @return apiKey.
   */
  public async createDydxAPI(ETHAddress: string) {
    const apiKey = await this.client!.ethPrivate.createApiKey(ETHAddress);
    return apiKey;
  }
  /**funciton recovery  -  is used to recover the user's information form dydx.
   * @prams  ETHAddress - is  the user  wallet address.
   * @return user information
   */
  public async recovery(ETHAddress: string) {
    const recovery = await this.client.ethPrivate.recovery(ETHAddress);
    return recovery;
  }
  /** funciton deleteApiKey - is used to delete the apiKey
   * @parameters - ETHAddress is the user  wallet address.
   * @parameters apiKey is the key to delete.
   * @return user.
   */
  public async deleteApiKey(ETHAddress: string, apiKey: string) {
    const user = await this.client.private.getUser(ETHAddress, apiKey);
    return user;
  }
}
