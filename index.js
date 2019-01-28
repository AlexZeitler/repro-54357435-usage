'use strict';

// TODO: get rid of '.Claim;' at the end of the require statement
const Claim = require('my-lib-54357435').Claim;
const claim = new Claim('tenantId', '123');

/** @type {AuthenticatedRequest} */ // TODO: be able to use my-lib.http.AuthenticatedRequest
const request = {};
