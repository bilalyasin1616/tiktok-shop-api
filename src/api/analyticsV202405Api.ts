/**
 * tiktok shop openapi
 * sdk for apis
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { Analytics202405GetShopPerformanceResponse } from '../model/analytics/V202405/GetShopPerformanceResponse';
import { Analytics202405GetShopProductPerformanceListResponse } from '../model/analytics/V202405/GetShopProductPerformanceListResponse';
import { Analytics202405GetShopProductPerformanceResponse } from '../model/analytics/V202405/GetShopProductPerformanceResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://open-api.tiktokglobalshop.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AnalyticsV202405ApiApiKeys {
}

export class AnalyticsV202405Api {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    static readonly apiName = 'AnalyticsV202405Api' as const;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AnalyticsV202405ApiApiKeys, value: string) {
        (this.authentications as any)[AnalyticsV202405ApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns performance metrics at shop/seller level. This API currently provides data only for shops registered in the United States, United Kingdom, Singapore, Vietnam, and Thailand.
     * @summary GetShopPerformance
     * @param startDateGe Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, \&quot;ge\&quot; refers to \&quot;greater than or equal to\&quot; (inclusive)
     * @param endDateLt End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, \&quot;lt\&quot; refers to \&quot;less than\&quot; (exclusive)
     * @param xTtsAccessToken 
     * @param contentType Allowed type: application/json
     * @param withComparison Whether previous period data is returned for comparison. Available values: true, false Default value: false The previous period has the same length and granularity as the current period with end time being the same as the start time of the current period. Example: If start_time_ge &#x3D; 2024-04-01 and end_time_lt &#x3D; 2024-04-08, the previous period data will be from 2024-03-25 to 2024-04-01.
     * @param granularity Granularity of the data. Available values: ALL, 1D Default value: ALL * ALL: aggregate * 1D: daily
     * @param currency Currency. Available values: USD, LOCAL Default value: LOCAL * USD: US dollars * LOCAL: local currency where the shop is located
     * @param shopCipher 
     */
    public async ShopPerformanceGet (startDateGe: string, endDateLt: string, xTtsAccessToken: string, contentType: string, withComparison?: boolean, granularity?: string, currency?: string, shopCipher?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Analytics202405GetShopPerformanceResponse;  }> {
        const localVarPath = this.basePath + '/analytics/202405/shop/performance';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'startDateGe' is not null or undefined
        if (startDateGe === null || startDateGe === undefined) {
            throw new Error('Required parameter startDateGe was null or undefined when calling ShopPerformanceGet.');
        }

        // verify required parameter 'endDateLt' is not null or undefined
        if (endDateLt === null || endDateLt === undefined) {
            throw new Error('Required parameter endDateLt was null or undefined when calling ShopPerformanceGet.');
        }

        // verify required parameter 'xTtsAccessToken' is not null or undefined
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling ShopPerformanceGet.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling ShopPerformanceGet.');
        }

        if (startDateGe !== undefined) {
            localVarQueryParameters['start_date_ge'] = ObjectSerializer.serialize(startDateGe, "string");
        }

        if (endDateLt !== undefined) {
            localVarQueryParameters['end_date_lt'] = ObjectSerializer.serialize(endDateLt, "string");
        }

        if (withComparison !== undefined) {
            localVarQueryParameters['with_comparison'] = ObjectSerializer.serialize(withComparison, "boolean");
        }

        if (granularity !== undefined) {
            localVarQueryParameters['granularity'] = ObjectSerializer.serialize(granularity, "string");
        }

        if (currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, "string");
        }

        if (shopCipher !== undefined) {
            localVarQueryParameters['shop_cipher'] = ObjectSerializer.serialize(shopCipher, "string");
        }

        localVarHeaderParams['x-tts-access-token'] = ObjectSerializer.serialize(xTtsAccessToken, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Analytics202405GetShopPerformanceResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Analytics202405GetShopPerformanceResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a list of product performance metrics. This API currently provides data only for shops registered in the United States, United Kingdom, Singapore, Vietnam, and Thailand.
     * @summary GetShopProductPerformanceList
     * @param startDateGe Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, \&quot;ge\&quot; refers to \&quot;greater than or equal to\&quot; (inclusive)
     * @param endDateLt End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, \&quot;lt\&quot; refers to \&quot;less than\&quot; (exclusive)
     * @param xTtsAccessToken 
     * @param contentType Allowed type: application/json
     * @param pageSize Number of products per page. Max value: 100 Default value: 10
     * @param sortField Sort on. Available values: gmv, order_count, unit_sold_count, click_through_rate Default value: gmv
     * @param sortOrder Sort direction. Available values: ASC, DESC Default value: DESC * ASC: ascending * DESC: descending
     * @param currency Currency. Available values: USD, LOCAL Default value: LOCAL * USD: US dollars * LOCAL: local currency where the shop is located
     * @param pageToken Page token, indicating the current position. Used for requesting next page data. Leave this field empty for first time queries.
     * @param shopCipher 
     */
    public async ShopProductsPerformanceGet (startDateGe: string, endDateLt: string, xTtsAccessToken: string, contentType: string, pageSize?: number, sortField?: string, sortOrder?: string, currency?: string, pageToken?: string, shopCipher?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Analytics202405GetShopProductPerformanceListResponse;  }> {
        const localVarPath = this.basePath + '/analytics/202405/shop_products/performance';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'startDateGe' is not null or undefined
        if (startDateGe === null || startDateGe === undefined) {
            throw new Error('Required parameter startDateGe was null or undefined when calling ShopProductsPerformanceGet.');
        }

        // verify required parameter 'endDateLt' is not null or undefined
        if (endDateLt === null || endDateLt === undefined) {
            throw new Error('Required parameter endDateLt was null or undefined when calling ShopProductsPerformanceGet.');
        }

        // verify required parameter 'xTtsAccessToken' is not null or undefined
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling ShopProductsPerformanceGet.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling ShopProductsPerformanceGet.');
        }

        if (startDateGe !== undefined) {
            localVarQueryParameters['start_date_ge'] = ObjectSerializer.serialize(startDateGe, "string");
        }

        if (endDateLt !== undefined) {
            localVarQueryParameters['end_date_lt'] = ObjectSerializer.serialize(endDateLt, "string");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (sortField !== undefined) {
            localVarQueryParameters['sort_field'] = ObjectSerializer.serialize(sortField, "string");
        }

        if (sortOrder !== undefined) {
            localVarQueryParameters['sort_order'] = ObjectSerializer.serialize(sortOrder, "string");
        }

        if (currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, "string");
        }

        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = ObjectSerializer.serialize(pageToken, "string");
        }

        if (shopCipher !== undefined) {
            localVarQueryParameters['shop_cipher'] = ObjectSerializer.serialize(shopCipher, "string");
        }

        localVarHeaderParams['x-tts-access-token'] = ObjectSerializer.serialize(xTtsAccessToken, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Analytics202405GetShopProductPerformanceListResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Analytics202405GetShopProductPerformanceListResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns performance metrics for a product. This API currently provides data only for shops registered in the United States, United Kingdom, Singapore, Vietnam, and Thailand.
     * @summary GetShopProductPerformance
     * @param productId 
     * @param startDateGe Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, \&quot;ge\&quot; refers to \&quot;greater than or equal to\&quot; (inclusive)
     * @param endDateLt End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, \&quot;lt\&quot; refers to \&quot;less than\&quot; (exclusive)
     * @param xTtsAccessToken 
     * @param contentType Allowed type: application/json
     * @param withComparison Whether previous period data is returned for comparison. Available values: true, false Default value: false The previous period has the same length and granularity as the current period with end time being the same as the start time of the current period. Example: If start_time_ge &#x3D; 2024-04-01 and end_time_lt &#x3D; 2024-04-08, the previous period data will be from 2024-03-25 to 2024-04-01.
     * @param granularity Granularity of the data. Available values: ALL, 1D Default value: ALL * ALL: aggregate * 1D: daily
     * @param currency Currency. Available values: USD, LOCAL Default value: LOCAL * USD: US dollars * LOCAL: local currency where the shop is located
     * @param shopCipher 
     */
    public async ShopProductsProductIdPerformanceGet (productId: string, startDateGe: string, endDateLt: string, xTtsAccessToken: string, contentType: string, withComparison?: boolean, granularity?: string, currency?: string, shopCipher?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Analytics202405GetShopProductPerformanceResponse;  }> {
        const localVarPath = this.basePath + '/analytics/202405/shop_products/{product_id}/performance'
            .replace('{' + 'product_id' + '}', encodeURIComponent(String(productId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling ShopProductsProductIdPerformanceGet.');
        }

        // verify required parameter 'startDateGe' is not null or undefined
        if (startDateGe === null || startDateGe === undefined) {
            throw new Error('Required parameter startDateGe was null or undefined when calling ShopProductsProductIdPerformanceGet.');
        }

        // verify required parameter 'endDateLt' is not null or undefined
        if (endDateLt === null || endDateLt === undefined) {
            throw new Error('Required parameter endDateLt was null or undefined when calling ShopProductsProductIdPerformanceGet.');
        }

        // verify required parameter 'xTtsAccessToken' is not null or undefined
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling ShopProductsProductIdPerformanceGet.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling ShopProductsProductIdPerformanceGet.');
        }

        if (startDateGe !== undefined) {
            localVarQueryParameters['start_date_ge'] = ObjectSerializer.serialize(startDateGe, "string");
        }

        if (endDateLt !== undefined) {
            localVarQueryParameters['end_date_lt'] = ObjectSerializer.serialize(endDateLt, "string");
        }

        if (withComparison !== undefined) {
            localVarQueryParameters['with_comparison'] = ObjectSerializer.serialize(withComparison, "boolean");
        }

        if (granularity !== undefined) {
            localVarQueryParameters['granularity'] = ObjectSerializer.serialize(granularity, "string");
        }

        if (currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, "string");
        }

        if (shopCipher !== undefined) {
            localVarQueryParameters['shop_cipher'] = ObjectSerializer.serialize(shopCipher, "string");
        }

        localVarHeaderParams['x-tts-access-token'] = ObjectSerializer.serialize(xTtsAccessToken, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Analytics202405GetShopProductPerformanceResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Analytics202405GetShopProductPerformanceResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}

export const AnalyticsV202405ApiOperationNames = {
    ShopPerformanceGet: 'ShopPerformanceGet',ShopProductsPerformanceGet: 'ShopProductsPerformanceGet',ShopProductsProductIdPerformanceGet: 'ShopProductsProductIdPerformanceGet',
} as const


export type AnalyticsV202405ApiOperationTypes = {
    ShopPerformanceGet: AnalyticsV202405Api['ShopPerformanceGet'];ShopProductsPerformanceGet: AnalyticsV202405Api['ShopProductsPerformanceGet'];ShopProductsProductIdPerformanceGet: AnalyticsV202405Api['ShopProductsProductIdPerformanceGet'];
};

