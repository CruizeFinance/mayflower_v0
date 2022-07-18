import { DydxClient } from "@dydxprotocol/v3-client";
import ConstantConfig from "../utils/Constant.config";
import Web3 from "web3";
/**
 * 
 *  This class dydxPClient is responsible for initlizing the DydxClient instance
 *  It has a function  init() that is responsible for returning a  instance of the DydxClient.
 */
export default class dydxPClient {
  private client: DydxClient | undefined;
  constructor() {
    this.init();
  }

  /**
   * This function is responsible for creating a new instance of the DydxClient and initilizing client data member
   */

  private async init(): Promise<void> {
    const web3: any = this.initweb3();
    this.client = new DydxClient(ConstantConfig.HTTP_HOST, {
      web3,
      apiTimeout: 3000,
      starkPrivateKey: ConstantConfig.STRAKPRIVATEKEY,
      apiKeyCredentials: {
        key: ConstantConfig.API_KEY,
        passphrase: ConstantConfig.PASSPHRASE,
        secret: ConstantConfig.SECRET,
      },
      networkId: 3,
    });
  }

  /** This function  responsible for  initilizing web3 
   * @return web3 instance.
   * .*/

  private async initweb3(): Promise<Web3> {
    const web3: Web3 | undefined = new Web3(
      new Web3.providers.HttpProvider(
        ConstantConfig.WEB3_PROIVDER_URL + ConstantConfig.INFURA_KEY
      )
    );
    web3.eth.accounts.wallet.add(ConstantConfig.ETHEREUM_PRIVATE_KEY);
    return web3;
  }



  /** @return dydxClient. */
  public getClient(): DydxClient | undefined {
    return this.client;
  }

}
