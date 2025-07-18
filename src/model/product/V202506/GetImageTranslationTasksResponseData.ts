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
import { Product202506GetImageTranslationTasksResponseDataTranslationTasks } from './GetImageTranslationTasksResponseDataTranslationTasks';

export class Product202506GetImageTranslationTasksResponseData {
    /**
    * The requested translation tasks and the corresponding results. Each task corresponds to the translation of 1 image into 1 target language.
    */
    'translationTasks'?: Array<Product202506GetImageTranslationTasksResponseDataTranslationTasks>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "translationTasks",
            "baseName": "translation_tasks",
            "type": "Array<Product202506GetImageTranslationTasksResponseDataTranslationTasks>"
        }    ];

    static getAttributeTypeMap() {
        return Product202506GetImageTranslationTasksResponseData.attributeTypeMap;
    }
}

