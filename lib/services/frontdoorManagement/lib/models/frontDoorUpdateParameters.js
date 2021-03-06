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
 * The properties needed to update a Front Door
 *
 */
class FrontDoorUpdateParameters {
  /**
   * Create a FrontDoorUpdateParameters.
   * @member {string} [friendlyName] A friendly name for the frontDoor
   * @member {array} [routingRules] Routing rules associated with this Front
   * Door.
   * @member {array} [loadBalancingSettings] Load balancing settings associated
   * with this Front Door instance.
   * @member {array} [healthProbeSettings] Health probe settings associated
   * with this Front Door instance.
   * @member {array} [backendPools] Backend pools available to routing rules.
   * @member {array} [frontendEndpoints] Frontend endpoints available to
   * routing rules.
   * @member {string} [enabledState] Operational status of the Front Door load
   * balancer. Permitted values are 'Enabled' or 'Disabled'. Possible values
   * include: 'Enabled', 'Disabled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of FrontDoorUpdateParameters
   *
   * @returns {object} metadata of FrontDoorUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FrontDoorUpdateParameters',
      type: {
        name: 'Composite',
        className: 'FrontDoorUpdateParameters',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          routingRules: {
            required: false,
            serializedName: 'routingRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RoutingRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'RoutingRule'
                  }
              }
            }
          },
          loadBalancingSettings: {
            required: false,
            serializedName: 'loadBalancingSettings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LoadBalancingSettingsModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'LoadBalancingSettingsModel'
                  }
              }
            }
          },
          healthProbeSettings: {
            required: false,
            serializedName: 'healthProbeSettings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HealthProbeSettingsModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'HealthProbeSettingsModel'
                  }
              }
            }
          },
          backendPools: {
            required: false,
            serializedName: 'backendPools',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BackendPoolElementType',
                  type: {
                    name: 'Composite',
                    className: 'BackendPool'
                  }
              }
            }
          },
          frontendEndpoints: {
            required: false,
            serializedName: 'frontendEndpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FrontendEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'FrontendEndpoint'
                  }
              }
            }
          },
          enabledState: {
            required: false,
            serializedName: 'enabledState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FrontDoorUpdateParameters;
