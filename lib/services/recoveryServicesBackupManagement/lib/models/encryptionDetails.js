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
 * Details needed if the VM was encrypted at the time of backup.
 *
 */
class EncryptionDetails {
  /**
   * Create a EncryptionDetails.
   * @member {boolean} [encryptionEnabled] Identifies whether this backup copy
   * represents an encrypted VM at the time of backup.
   * @member {string} [kekUrl] Key Url.
   * @member {string} [secretKeyUrl] Secret Url.
   * @member {string} [kekVaultId] ID of Key Vault where KEK is stored.
   * @member {string} [secretKeyVaultId] ID of Key Vault where Secret is
   * stored.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EncryptionDetails
   *
   * @returns {object} metadata of EncryptionDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EncryptionDetails',
      type: {
        name: 'Composite',
        className: 'EncryptionDetails',
        modelProperties: {
          encryptionEnabled: {
            required: false,
            serializedName: 'encryptionEnabled',
            type: {
              name: 'Boolean'
            }
          },
          kekUrl: {
            required: false,
            serializedName: 'kekUrl',
            type: {
              name: 'String'
            }
          },
          secretKeyUrl: {
            required: false,
            serializedName: 'secretKeyUrl',
            type: {
              name: 'String'
            }
          },
          kekVaultId: {
            required: false,
            serializedName: 'kekVaultId',
            type: {
              name: 'String'
            }
          },
          secretKeyVaultId: {
            required: false,
            serializedName: 'secretKeyVaultId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EncryptionDetails;
