import { readTokenFromLocalStorage } from "../store/tokens";
import * as Client from "./api";
import { Configuration } from "./configuration";

export interface IApiRepository {
  apiV1ClientGroupGet(active?: boolean, options?: any): Promise<Client.ClientGroupDetailDto[]>;
}

export class ApiRepository implements IApiRepository {

  public apiV1ClientGroupPost(groupDto?: Client.ClientGroupCreateDto, options?: any): Promise<Client.ClientGroupDto> {
    return new Client.ClientGroupApi(undefined, window.location.origin, undefined)
    .apiV1ClientGroupPost(groupDto, this.getToken());
  }

  public apiV1ClientGroupGet(active?: boolean, options?: any): Promise<Client.ClientGroupDetailDto[]> {
    return new Client.ClientGroupApi(undefined, window.location.origin, undefined)
    .apiV1ClientGroupGet(active, this.getToken());
  }

  public apiV1ClaimsPost(clientId: number, claimsFile: any, claimName?: string, options?: any): Promise<Client.ClaimSummaryDto> {
    return new Client.ClaimsApi(undefined, window.location.origin, undefined)
    .apiV1ClaimsPost(clientId, claimsFile, claimName, this.getToken());
  }

  public apiV1ClaimsGet(clientId: number, options?: any): Promise<Client.ClaimSummaryDto[]> {
    return new Client.ClaimsApi(undefined, window.location.origin, undefined)
    .apiV1ClaimsGet(clientId, this.getToken());
  }

  public apiV1ClientGroupByIdGet(id: number, options?: any): Promise<Client.ClientGroupDetailDto> {
    return new Client.ClientGroupApi(undefined, window.location.origin, undefined)
    .apiV1ClientGroupByIdGet(id, this.getToken());
  }

  public apiV1AccountsReceivableClientGroupGet(id: number, options?: any): Promise<Client.AccountsReceivableSummaryDto> {
    return new Client.AccountsReceivableApi(undefined, window.location.origin, undefined)
    .apiV1AccountsReceivableClientGroupGet(id, this.getToken());
  }
  public apiV1AccountsReceivableClientGet(id: number, options?: any): Promise<Client.AccountsReceivableSummaryDto> {
    return new Client.AccountsReceivableApi(undefined, window.location.origin, undefined)
    .apiV1AccountsReceivableClientGet(id, this.getToken());
  }

  public apiV1SalesSummaryClientGroupGet(id: number, options?: any): Promise<Client.SalesSummaryDto> {
    return new Client.SalesSummaryApi(undefined, window.location.origin, undefined)
    .apiV1SalesSummaryClientGroupGet(id, this.getToken());
  }

  public apiV1SalesSummaryClientGet(id: number, options?: any): Promise<Client.SalesSummaryDto> {
    return new Client.SalesSummaryApi(undefined, window.location.origin, undefined)
    .apiV1SalesSummaryClientGet(id, this.getToken());
  }

  public apiV1ClientGet(options?: any): Promise<Client.ClientDto[]> {
    return new Client.ClientApi(undefined, window.location.origin, undefined)
    .apiV1ClientGet(this.getToken());
  }

  public apiV1ClientPost(clientDto?: Client.ClientCreateDto, options?: any): Promise<Client.ClientDto> {
    return new Client.ClientApi(undefined, window.location.origin, undefined)
    .apiV1ClientPost(clientDto, this.getToken());
  }

  private getToken(): any {
    return { headers: {Authorization: "Bearer " + readTokenFromLocalStorage()!.token}};
  }

}
