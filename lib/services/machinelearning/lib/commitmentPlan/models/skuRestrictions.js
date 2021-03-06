/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Describes restrictions which would prevent a SKU from being used.
 *
 */
class SkuRestrictions {
  /**
   * Create a SkuRestrictions.
   * @property {string} [type] The type of restrictions. Possible values
   * include: 'location', 'zone'
   * @property {array} [values] The value of restrictions. If the restriction
   * type is set to location. This would be different locations where the SKU
   * is restricted.
   * @property {string} [reasonCode] The reason for restriction. Possible
   * values include: 'QuotaId', 'NotAvailableForSubscription'
   */
  constructor() {
  }

  /**
   * Defines the metadata of SkuRestrictions
   *
   * @returns {object} metadata of SkuRestrictions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SkuRestrictions',
      type: {
        name: 'Composite',
        className: 'SkuRestrictions',
        modelProperties: {
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            readOnly: true,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          reasonCode: {
            required: false,
            readOnly: true,
            serializedName: 'reasonCode',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SkuRestrictions;
