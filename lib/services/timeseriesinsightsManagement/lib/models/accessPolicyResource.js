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
 * An access policy is used to grant users and applications access to the
 * environment. Roles are assigned to service principals in Azure Active
 * Directory. These roles define the actions the principal can perform through
 * the Time Series Insights data plane APIs.
 *
 * @extends models['Resource']
 */
class AccessPolicyResource extends models['Resource'] {
  /**
   * Create a AccessPolicyResource.
   * @member {string} [principalObjectId] The objectId of the principal in
   * Azure Active Directory.
   * @member {string} [description] An description of the access policy.
   * @member {array} [roles] The list of roles the principal is assigned on the
   * environment.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AccessPolicyResource
   *
   * @returns {object} metadata of AccessPolicyResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AccessPolicyResource',
      type: {
        name: 'Composite',
        className: 'AccessPolicyResource',
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
          principalObjectId: {
            required: false,
            serializedName: 'properties.principalObjectId',
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
          },
          roles: {
            required: false,
            serializedName: 'properties.roles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AccessPolicyRoleElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'Reader', 'Contributor' ]
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AccessPolicyResource;
