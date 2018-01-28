/// <reference path="../../../../tmp/custom.d.ts" />
import { Configuration } from "./configuration";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface AccountsReceivableSummaryDto
 */
export interface AccountsReceivableSummaryDto {
    /**
     *
     * @type {number}
     * @memberof AccountsReceivableSummaryDto
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof AccountsReceivableSummaryDto
     */
    thirtyDays?: number;
    /**
     *
     * @type {number}
     * @memberof AccountsReceivableSummaryDto
     */
    sixtyDays?: number;
    /**
     *
     * @type {number}
     * @memberof AccountsReceivableSummaryDto
     */
    ninetyPlusDays?: number;
}
/**
 *
 * @export
 * @interface AppLogDto
 */
export interface AppLogDto {
    /**
     *
     * @type {number}
     * @memberof AppLogDto
     */
    id?: number;
    /**
     *
     * @type {Date}
     * @memberof AppLogDto
     */
    date?: Date;
    /**
     *
     * @type {string}
     * @memberof AppLogDto
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof AppLogDto
     */
    level?: string;
    /**
     *
     * @type {string}
     * @memberof AppLogDto
     */
    appName?: string;
}
/**
 *
 * @export
 * @interface AuthorizedPingDto
 */
export interface AuthorizedPingDto {
    /**
     *
     * @type {string}
     * @memberof AuthorizedPingDto
     */
    authorizedMessage?: string;
}
/**
 *
 * @export
 * @interface ClaimSummaryDto
 */
export interface ClaimSummaryDto {
    /**
     *
     * @type {string}
     * @memberof ClaimSummaryDto
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof ClaimSummaryDto
     */
    clientId?: number;
    /**
     *
     * @type {string}
     * @memberof ClaimSummaryDto
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof ClaimSummaryDto
     */
    statusText?: string;
    /**
     *
     * @type {Date}
     * @memberof ClaimSummaryDto
     */
    date?: Date;
    /**
     *
     * @type {number}
     * @memberof ClaimSummaryDto
     */
    id?: number;
}
/**
 *
 * @export
 * @interface ClientCreateDto
 */
export interface ClientCreateDto {
    /**
     *
     * @type {boolean}
     * @memberof ClientCreateDto
     */
    active?: boolean;
    /**
     *
     * @type {string}
     * @memberof ClientCreateDto
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof ClientCreateDto
     */
    clientGroupId?: number;
}
/**
 *
 * @export
 * @interface ClientDto
 */
export interface ClientDto {
    /**
     *
     * @type {boolean}
     * @memberof ClientDto
     */
    active?: boolean;
    /**
     *
     * @type {string}
     * @memberof ClientDto
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof ClientDto
     */
    clientGroupId?: number;
    /**
     *
     * @type {number}
     * @memberof ClientDto
     */
    id?: number;
}
/**
 *
 * @export
 * @interface ClientGroupCreateDto
 */
export interface ClientGroupCreateDto {
    /**
     *
     * @type {string}
     * @memberof ClientGroupCreateDto
     */
    name?: string;
}
/**
 *
 * @export
 * @interface ClientGroupDetailDto
 */
export interface ClientGroupDetailDto {
    /**
     *
     * @type {Array&lt;ClientDto&gt;}
     * @memberof ClientGroupDetailDto
     */
    clients?: Array<ClientDto>;
    /**
     *
     * @type {string}
     * @memberof ClientGroupDetailDto
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof ClientGroupDetailDto
     */
    id?: number;
}
/**
 *
 * @export
 * @interface ClientGroupDto
 */
export interface ClientGroupDto {
    /**
     *
     * @type {string}
     * @memberof ClientGroupDto
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof ClientGroupDto
     */
    id?: number;
}
/**
 *
 * @export
 * @interface IFormFile
 */
export interface IFormFile {
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    contentType?: string;
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    contentDisposition?: string;
    /**
     *
     * @type {{ [key: string]: Array&lt;string&gt;; }}
     * @memberof IFormFile
     */
    headers?: {
        [key: string]: Array<string>;
    };
    /**
     *
     * @type {number}
     * @memberof IFormFile
     */
    length?: number;
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    fileName?: string;
}
/**
 *
 * @export
 * @interface SalesSummaryDto
 */
export interface SalesSummaryDto {
    /**
     *
     * @type {number}
     * @memberof SalesSummaryDto
     */
    discounts?: number;
    /**
     *
     * @type {number}
     * @memberof SalesSummaryDto
     */
    revenue?: number;
    /**
     *
     * @type {number}
     * @memberof SalesSummaryDto
     */
    ordersShipped?: number;
}
/**
 * AccountsReceivableApi - fetch parameter creator
 * @export
 */
export declare const AccountsReceivableApiFetchParamCreator: (configuration?: Configuration) => {
    apiV1AccountsReceivableClientGet(id: number, options?: any): FetchArgs;
    apiV1AccountsReceivableClientGroupGet(id: number, options?: any): FetchArgs;
};
/**
 * AccountsReceivableApi - functional programming interface
 * @export
 */
export declare const AccountsReceivableApiFp: (configuration?: Configuration) => {
    apiV1AccountsReceivableClientGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AccountsReceivableSummaryDto>;
    apiV1AccountsReceivableClientGroupGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AccountsReceivableSummaryDto>;
};
/**
 * AccountsReceivableApi - factory interface
 * @export
 */
export declare const AccountsReceivableApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    apiV1AccountsReceivableClientGet(id: number, options?: any): Promise<AccountsReceivableSummaryDto>;
    apiV1AccountsReceivableClientGroupGet(id: number, options?: any): Promise<AccountsReceivableSummaryDto>;
};
/**
 * AccountsReceivableApi - object-oriented interface
 * @export
 * @class AccountsReceivableApi
 * @extends {BaseAPI}
 */
export declare class AccountsReceivableApi extends BaseAPI {
    /**
     *
     * @param {} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsReceivableApi
     */
    apiV1AccountsReceivableClientGet(id: number, options?: any): Promise<AccountsReceivableSummaryDto>;
    /**
     *
     * @param {} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsReceivableApi
     */
    apiV1AccountsReceivableClientGroupGet(id: number, options?: any): Promise<AccountsReceivableSummaryDto>;
}
/**
 * AppLogApi - fetch parameter creator
 * @export
 */
export declare const AppLogApiFetchParamCreator: (configuration?: Configuration) => {
    apiV1AppLogByIdGet(id: number, options?: any): FetchArgs;
    apiV1AppLogGet(options?: any): FetchArgs;
};
/**
 * AppLogApi - functional programming interface
 * @export
 */
export declare const AppLogApiFp: (configuration?: Configuration) => {
    apiV1AppLogByIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AppLogDto>;
    apiV1AppLogGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AppLogDto[]>;
};
/**
 * AppLogApi - factory interface
 * @export
 */
export declare const AppLogApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    apiV1AppLogByIdGet(id: number, options?: any): Promise<AppLogDto>;
    apiV1AppLogGet(options?: any): Promise<AppLogDto[]>;
};
/**
 * AppLogApi - object-oriented interface
 * @export
 * @class AppLogApi
 * @extends {BaseAPI}
 */
export declare class AppLogApi extends BaseAPI {
    /**
     *
     * @param {} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppLogApi
     */
    apiV1AppLogByIdGet(id: number, options?: any): Promise<AppLogDto>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppLogApi
     */
    apiV1AppLogGet(options?: any): Promise<AppLogDto[]>;
}
/**
 * AuthorizedPingApi - fetch parameter creator
 * @export
 */
export declare const AuthorizedPingApiFetchParamCreator: (configuration?: Configuration) => {
    apiV1AuthorizedPingGet(options?: any): FetchArgs;
};
/**
 * AuthorizedPingApi - functional programming interface
 * @export
 */
export declare const AuthorizedPingApiFp: (configuration?: Configuration) => {
    apiV1AuthorizedPingGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AuthorizedPingDto>;
};
/**
 * AuthorizedPingApi - factory interface
 * @export
 */
export declare const AuthorizedPingApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    apiV1AuthorizedPingGet(options?: any): Promise<AuthorizedPingDto>;
};
/**
 * AuthorizedPingApi - object-oriented interface
 * @export
 * @class AuthorizedPingApi
 * @extends {BaseAPI}
 */
export declare class AuthorizedPingApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizedPingApi
     */
    apiV1AuthorizedPingGet(options?: any): Promise<AuthorizedPingDto>;
}
/**
 * ClaimsApi - fetch parameter creator
 * @export
 */
export declare const ClaimsApiFetchParamCreator: (configuration?: Configuration) => {
    apiV1ClaimsGet(clientId: number, options?: any): FetchArgs;
    apiV1ClaimsPost(clientId: number, claimsFile: any, claimName?: string, options?: any): FetchArgs;
};
/**
 * ClaimsApi - functional programming interface
 * @export
 */
export declare const ClaimsApiFp: (configuration?: Configuration) => {
    apiV1ClaimsGet(clientId: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ClaimSummaryDto[]>;
    apiV1ClaimsPost(clientId: number, claimsFile: any, claimName?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ClaimSummaryDto>;
};
/**
 * ClaimsApi - factory interface
 * @export
 */
export declare const ClaimsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    apiV1ClaimsGet(clientId: number, options?: any): Promise<ClaimSummaryDto[]>;
    apiV1ClaimsPost(clientId: number, claimsFile: any, claimName?: string, options?: any): Promise<ClaimSummaryDto>;
};
/**
 * ClaimsApi - object-oriented interface
 * @export
 * @class ClaimsApi
 * @extends {BaseAPI}
 */
export declare class ClaimsApi extends BaseAPI {
    /**
     *
     * @param {} clientId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimsApi
     */
    apiV1ClaimsGet(clientId: number, options?: any): Promise<ClaimSummaryDto[]>;
    /**
     *
     * @param {} clientId
     * @param {} claimsFile Upload File
     * @param {} [claimName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimsApi
     */
    apiV1ClaimsPost(clientId: number, claimsFile: any, claimName?: string, options?: any): Promise<ClaimSummaryDto>;
}
/**
 * ClientApi - fetch parameter creator
 * @export
 */
export declare const ClientApiFetchParamCreator: (configuration?: Configuration) => {
    apiV1ClientGet(options?: any): FetchArgs;
    apiV1ClientPost(clientDto?: ClientCreateDto, options?: any): FetchArgs;
};
/**
 * ClientApi - functional programming interface
 * @export
 */
export declare const ClientApiFp: (configuration?: Configuration) => {
    apiV1ClientGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ClientDto[]>;
    apiV1ClientPost(clientDto?: ClientCreateDto, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ClientDto>;
};
/**
 * ClientApi - factory interface
 * @export
 */
export declare const ClientApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    apiV1ClientGet(options?: any): Promise<ClientDto[]>;
    apiV1ClientPost(clientDto?: ClientCreateDto, options?: any): Promise<ClientDto>;
};
/**
 * ClientApi - object-oriented interface
 * @export
 * @class ClientApi
 * @extends {BaseAPI}
 */
export declare class ClientApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    apiV1ClientGet(options?: any): Promise<ClientDto[]>;
    /**
     *
     * @param {} [clientDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    apiV1ClientPost(clientDto?: ClientCreateDto, options?: any): Promise<ClientDto>;
}
/**
 * ClientGroupApi - fetch parameter creator
 * @export
 */
export declare const ClientGroupApiFetchParamCreator: (configuration?: Configuration) => {
    apiV1ClientGroupByIdGet(id: number, options?: any): FetchArgs;
    apiV1ClientGroupGet(active?: boolean, options?: any): FetchArgs;
    apiV1ClientGroupPost(groupDto?: ClientGroupCreateDto, options?: any): FetchArgs;
};
/**
 * ClientGroupApi - functional programming interface
 * @export
 */
export declare const ClientGroupApiFp: (configuration?: Configuration) => {
    apiV1ClientGroupByIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ClientGroupDetailDto>;
    apiV1ClientGroupGet(active?: boolean, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ClientGroupDetailDto[]>;
    apiV1ClientGroupPost(groupDto?: ClientGroupCreateDto, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ClientGroupDto>;
};
/**
 * ClientGroupApi - factory interface
 * @export
 */
export declare const ClientGroupApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    apiV1ClientGroupByIdGet(id: number, options?: any): Promise<ClientGroupDetailDto>;
    apiV1ClientGroupGet(active?: boolean, options?: any): Promise<ClientGroupDetailDto[]>;
    apiV1ClientGroupPost(groupDto?: ClientGroupCreateDto, options?: any): Promise<ClientGroupDto>;
};
/**
 * ClientGroupApi - object-oriented interface
 * @export
 * @class ClientGroupApi
 * @extends {BaseAPI}
 */
export declare class ClientGroupApi extends BaseAPI {
    /**
     *
     * @param {} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientGroupApi
     */
    apiV1ClientGroupByIdGet(id: number, options?: any): Promise<ClientGroupDetailDto>;
    /**
     *
     * @param {} [active]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientGroupApi
     */
    apiV1ClientGroupGet(active?: boolean, options?: any): Promise<ClientGroupDetailDto[]>;
    /**
     *
     * @param {} [groupDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientGroupApi
     */
    apiV1ClientGroupPost(groupDto?: ClientGroupCreateDto, options?: any): Promise<ClientGroupDto>;
}
/**
 * SalesSummaryApi - fetch parameter creator
 * @export
 */
export declare const SalesSummaryApiFetchParamCreator: (configuration?: Configuration) => {
    apiV1SalesSummaryClientGet(id: number, options?: any): FetchArgs;
    apiV1SalesSummaryClientGroupGet(id: number, options?: any): FetchArgs;
};
/**
 * SalesSummaryApi - functional programming interface
 * @export
 */
export declare const SalesSummaryApiFp: (configuration?: Configuration) => {
    apiV1SalesSummaryClientGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SalesSummaryDto>;
    apiV1SalesSummaryClientGroupGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SalesSummaryDto>;
};
/**
 * SalesSummaryApi - factory interface
 * @export
 */
export declare const SalesSummaryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    apiV1SalesSummaryClientGet(id: number, options?: any): Promise<SalesSummaryDto>;
    apiV1SalesSummaryClientGroupGet(id: number, options?: any): Promise<SalesSummaryDto>;
};
/**
 * SalesSummaryApi - object-oriented interface
 * @export
 * @class SalesSummaryApi
 * @extends {BaseAPI}
 */
export declare class SalesSummaryApi extends BaseAPI {
    /**
     *
     * @param {} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalesSummaryApi
     */
    apiV1SalesSummaryClientGet(id: number, options?: any): Promise<SalesSummaryDto>;
    /**
     *
     * @param {} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalesSummaryApi
     */
    apiV1SalesSummaryClientGroupGet(id: number, options?: any): Promise<SalesSummaryDto>;
}
