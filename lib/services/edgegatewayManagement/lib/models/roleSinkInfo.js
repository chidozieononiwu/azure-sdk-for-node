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
 * Compute role against which events will be raised.
 *
 */
class RoleSinkInfo {
  /**
   * Create a RoleSinkInfo.
   * @property {string} roleId Compute role ID.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RoleSinkInfo
   *
   * @returns {object} metadata of RoleSinkInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoleSinkInfo',
      type: {
        name: 'Composite',
        className: 'RoleSinkInfo',
        modelProperties: {
          roleId: {
            required: true,
            serializedName: 'roleId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RoleSinkInfo;