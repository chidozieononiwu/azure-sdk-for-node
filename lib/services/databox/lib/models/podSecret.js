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

const models = require('./index');

/**
 * The secrets related to a Pod.
 *
 */
class PodSecret {
  /**
   * Create a PodSecret.
   * @member {string} [deviceSerialNumber] Serial number of the assigned
   * device.
   * @member {string} [devicePassword] Password for out of the box experience
   * on device.
   * @member {array} [accountCredentialDetails] Per account level access
   * credentials.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PodSecret
   *
   * @returns {object} metadata of PodSecret
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PodSecret',
      type: {
        name: 'Composite',
        className: 'PodSecret',
        modelProperties: {
          deviceSerialNumber: {
            required: false,
            serializedName: 'deviceSerialNumber',
            type: {
              name: 'String'
            }
          },
          devicePassword: {
            required: false,
            serializedName: 'devicePassword',
            type: {
              name: 'String'
            }
          },
          accountCredentialDetails: {
            required: false,
            serializedName: 'accountCredentialDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AccountCredentialDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'AccountCredentialDetails'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PodSecret;
