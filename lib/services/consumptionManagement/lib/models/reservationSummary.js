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
 * reservation summary resource.
 *
 * @extends models['Resource']
 */
class ReservationSummary extends models['Resource'] {
  /**
   * Create a ReservationSummary.
   * @member {string} [reservationOrderId] The reservation order ID is the
   * identifier for a reservation purchase. Each reservation order ID
   * represents a single purchase transaction. A reservation order contains
   * reservations. The reservation order specifies the VM size and region for
   * the reservations.
   * @member {string} [reservationId] The reservation ID is the identifier of a
   * reservation within a reservation order. Each reservation is the grouping
   * for applying the benefit scope and also specifies the number of instances
   * to which the reservation benefit can be applied to.
   * @member {string} [skuName] This is the ARM Sku name. It can be used to
   * join with the servicetype field in additoinalinfo in usage records.
   * @member {number} [reservedHours] This is the total hours reserved. E.g. if
   * reservation for 1 instance was made on 1 PM, this will be 11 hours for
   * that day and 24 hours from subsequent days
   * @member {date} [usageDate] Data corresponding to the utilization record.
   * If the grain of data is monthly, it will be first day of month.
   * @member {number} [usedHours] Total used hours by the reservation
   * @member {number} [minUtilizationPercentage] This is the minimum hourly
   * utilization in the usage time (day or month). E.g. if usage record
   * corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was
   * 10%, this field will return 10% for that day
   * @member {number} [avgUtilizationPercentage] This is average utilization
   * for the entire time range. (day or month depending on the grain)
   * @member {number} [maxUtilizationPercentage] This is the maximum hourly
   * utilization in the usage time (day or month). E.g. if usage record
   * corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was
   * 100%, this field will return 100% for that day.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReservationSummary
   *
   * @returns {object} metadata of ReservationSummary
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReservationSummary',
      type: {
        name: 'Composite',
        className: 'ReservationSummary',
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
            readOnly: true,
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
          reservationOrderId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.reservationOrderId',
            type: {
              name: 'String'
            }
          },
          reservationId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.reservationId',
            type: {
              name: 'String'
            }
          },
          skuName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.skuName',
            type: {
              name: 'String'
            }
          },
          reservedHours: {
            required: false,
            readOnly: true,
            serializedName: 'properties.reservedHours',
            type: {
              name: 'Number'
            }
          },
          usageDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageDate',
            type: {
              name: 'DateTime'
            }
          },
          usedHours: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usedHours',
            type: {
              name: 'Number'
            }
          },
          minUtilizationPercentage: {
            required: false,
            readOnly: true,
            serializedName: 'properties.minUtilizationPercentage',
            type: {
              name: 'Number'
            }
          },
          avgUtilizationPercentage: {
            required: false,
            readOnly: true,
            serializedName: 'properties.avgUtilizationPercentage',
            type: {
              name: 'Number'
            }
          },
          maxUtilizationPercentage: {
            required: false,
            readOnly: true,
            serializedName: 'properties.maxUtilizationPercentage',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ReservationSummary;