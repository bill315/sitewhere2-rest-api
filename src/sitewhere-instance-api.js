/**
 * API calls associated with SiteWhere instance.
 */
import { restAuthGet, restAuthPost } from './sitewhere-rest'

/**
 * Get list of all microservices in current topology.
 */
export function getTopology (axios) {
  return restAuthGet(axios, 'instance/topology')
}

/**
 * Get list of global microservices in current topology.
 */
export function getGlobalTopology (axios) {
  return restAuthGet(axios, 'instance/topology/global')
}

/**
 * Get list of tenant microservices in current topology.
 */
export function getTenantTopology (axios) {
  return restAuthGet(axios, 'instance/topology/tenant')
}

/**
 * Get the state of all tenant engines (across all microservice instances)
 * for a given tenant id.
 */
export function getMicroserviceTenantRuntimeState (axios, identifier, tenantId) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/tenants/' + tenantId + '/state')
}

/**
 * Get configuration model for a given microservice identifier.
 */
export function getConfigurationModel (axios, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/configuration/model')
}

/**
 * Get global microservice configuration based on identifier.
 */
export function getGlobalConfiguration (axios, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/configuration')
}

/**
 * Get tenant microservice configuration based on identifier.
 */
export function getTenantConfiguration (axios, tenantId, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/configuration/' + tenantId)
}

/**
 * Update global microservice configuration based on identifier.
 */
export function updateGlobalConfiguration (axios, identifier, config) {
  return restAuthPost(axios, 'instance/microservice/' + identifier +
    '/configuration', config)
}

/**
 * Update tenant microservice configuration based on identifier.
 */
export function updateTenantConfiguration (axios, tenantId, identifier, config) {
  return restAuthPost(axios, 'instance/microservice/' + identifier +
    '/configuration/' + tenantId, config)
}

/**
 * Get a list of script metadata for the given tenant.
 */
export function listTenantScriptMetadata (axios, tenantId) {
  return restAuthGet(axios, 'instance/scripting/tenants/' +
    tenantId + '/scripts')
}

/**
 * Get metadata for a tenant script based on unique script id.
 */
export function getTenantScriptMetadata (axios, tenantId, scriptId) {
  return restAuthGet(axios, 'instance/scripting/tenants/' +
    tenantId + '/scripts/' + scriptId)
}

/**
 * Create a new tenant script.
 */
export function createTenantScript (axios, tenantId, request) {
  return restAuthPost(axios, 'instance/scripting/tenants/' +
    tenantId + '/scripts/', request)
}

/**
 * Get tenant script content based on unique script id and version identifier.
 */
export function getTenantScriptContent (axios, tenantId, scriptId, versionId) {
  return restAuthGet(axios, 'instance/scripting/tenants/' +
    tenantId + '/scripts/' + scriptId + '/versions/' +
    versionId + '/content')
}

/**
 * Update an existing script.
 */
export function updateTenantScript (axios, tenantId, scriptId, versionId, request) {
  return restAuthPost(axios, 'instance/scripting/tenants/' +
    tenantId + '/scripts/' + scriptId + '/versions/' +
    versionId, request)
}

/**
 * Clone an existing tenant script version to create a new version.
 */
export function cloneTenantScript (axios, tenantId, scriptId, versionId, request) {
  return restAuthPost(axios, 'instance/scripting/tenants/' +
    tenantId + '/scripts/' + scriptId + '/versions/' +
    versionId + '/clone', request)
}

/**
 * Activate a tenant script.
 */
export function activateTenantScript (axios, tenantId, scriptId, versionId) {
  return restAuthPost(axios, 'instance/scripting/tenants/' +
    tenantId + '/scripts/' + scriptId + '/versions/' +
    versionId + '/activate', null)
}
