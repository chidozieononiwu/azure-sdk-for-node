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
 * @class
 * Initializes a new instance of the OperationResult class.
 * @constructor
 * OperationResult entity for Intune.
 *
 * @member {string} friendlyName
 *
 * @member {string} [category]
 *
 * @member {string} [lastModifiedTime]
 *
 * @member {string} [state]
 *
 * @member {array} operationMetadata
 *
 */
class OperationResult extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationResult
   *
   * @returns {object} metadata of OperationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationResult',
      type: {
        name: 'Composite',
        className: 'OperationResult',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: true,
            serializedName: 'properties.friendlyName',
            type: {
              name: 'String'
            }
          },
          category: {
            required: false,
            serializedName: 'properties.category',
            type: {
              name: 'String'
            }
          },
          lastModifiedTime: {
            required: false,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          operationMetadata: {
            required: true,
            serializedName: 'properties.operationMetadata',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationMetadataPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'OperationMetadataProperties'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OperationResult;