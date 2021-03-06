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
 * The parameters supplied to the update variable operation.
 *
 */
class VariableUpdateParameters {
  /**
   * Create a VariableUpdateParameters.
   * @member {string} [name] Gets or sets the name of the variable.
   * @member {string} [value] Gets or sets the value of the variable.
   * @member {string} [description] Gets or sets the description of the
   * variable.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VariableUpdateParameters
   *
   * @returns {object} metadata of VariableUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VariableUpdateParameters',
      type: {
        name: 'Composite',
        className: 'VariableUpdateParameters',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'properties.value',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VariableUpdateParameters;
