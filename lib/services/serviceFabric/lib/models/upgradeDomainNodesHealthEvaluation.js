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
 * Initializes a new instance of the UpgradeDomainNodesHealthEvaluation class.
 * @constructor
 * The evaluation of the upgrade domain nodes health
 *
 * @member {string} [upgradeDomainName]
 *
 * @member {array} [unhealthyEvaluations]
 *
 * @member {number} [totalCount]
 *
 * @member {number} [maxPercentUnhealthyNodes]
 *
 */
class UpgradeDomainNodesHealthEvaluation extends models['HealthEvaluation'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of UpgradeDomainNodesHealthEvaluation
   *
   * @returns {object} metadata of UpgradeDomainNodesHealthEvaluation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpgradeDomainNodes',
      type: {
        name: 'Composite',
        className: 'UpgradeDomainNodesHealthEvaluation',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            type: {
              name: 'String'
            }
          },
          upgradeDomainName: {
            required: false,
            serializedName: 'UpgradeDomainName',
            type: {
              name: 'String'
            }
          },
          unhealthyEvaluations: {
            required: false,
            serializedName: 'UnhealthyEvaluations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UnhealthyEvaluationElementType',
                  type: {
                    name: 'Composite',
                    className: 'UnhealthyEvaluation'
                  }
              }
            }
          },
          totalCount: {
            required: false,
            serializedName: 'TotalCount',
            type: {
              name: 'Number'
            }
          },
          maxPercentUnhealthyNodes: {
            required: false,
            serializedName: 'MaxPercentUnhealthyNodes',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = UpgradeDomainNodesHealthEvaluation;