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

import { RequestFile } from '../../models';
import { Finance202309GetTransactionsbyOrderResponseDataStatementTransactions } from './GetTransactionsbyOrderResponseDataStatementTransactions';

export class Finance202309GetTransactionsbyOrderResponseData {
    /**
    * The creation time of the order. Unix timestamp.
    */
    'orderCreateTime'?: number;
    /**
    * The order ID in TikTok Shop.
    */
    'orderId'?: string;
    /**
    * The list of statement transactions associated with the order.
    */
    'statementTransactions'?: Array<Finance202309GetTransactionsbyOrderResponseDataStatementTransactions>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orderCreateTime",
            "baseName": "order_create_time",
            "type": "number"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "statementTransactions",
            "baseName": "statement_transactions",
            "type": "Array<Finance202309GetTransactionsbyOrderResponseDataStatementTransactions>"
        }    ];

    static getAttributeTypeMap() {
        return Finance202309GetTransactionsbyOrderResponseData.attributeTypeMap;
    }
}

