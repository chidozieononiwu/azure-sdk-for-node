// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2018-12-01')
  .reply(200, "{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"name\":\"batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":20,\"lowPriorityCoreQuota\":100,\"poolQuota\":100,\"activeJobAndJobScheduleQuota\":300,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2019-01-11T00:15:15.1972232Z\"},\"poolAllocationMode\":\"BatchService\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 11 Jan 2019 00:15:15 GMT',
  etag: '"0x8D67759DC56C388"',
  'x-ms-correlation-request-id': 'f58a82a0-a41c-44db-b7da-c258c93f260e',
  'x-ms-request-id': '18fb1c15-c0be-4a29-b949-16af73bf57f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS2:20190111T001636Z:f58a82a0-a41c-44db-b7da-c258c93f260e',
  date: 'Fri, 11 Jan 2019 00:16:36 GMT',
  connection: 'close' });
 return result; }]];