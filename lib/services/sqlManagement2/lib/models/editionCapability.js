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
 * The edition capability.
 *
 */
class EditionCapability {
  /**
   * Create a EditionCapability.
   * @member {string} [name] The database edition name.
   * @member {array} [supportedServiceLevelObjectives] The list of supported
   * service objectives for the edition.
   * @member {boolean} [zoneRedundant] Whether or not zone redundancy is
   * supported for the edition.
   * @member {string} [status] The status of the capability. Possible values
   * include: 'Visible', 'Available', 'Default', 'Disabled'
   * @member {string} [reason] The reason for the capability not being
   * available.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EditionCapability
   *
   * @returns {object} metadata of EditionCapability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EditionCapability',
      type: {
        name: 'Composite',
        className: 'EditionCapability',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          supportedServiceLevelObjectives: {
            required: false,
            readOnly: true,
            serializedName: 'supportedServiceLevelObjectives',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceObjectiveCapabilityElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceObjectiveCapability'
                  }
              }
            }
          },
          zoneRedundant: {
            required: false,
            readOnly: true,
            serializedName: 'zoneRedundant',
            type: {
              name: 'Boolean'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Visible', 'Available', 'Default', 'Disabled' ]
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EditionCapability;
