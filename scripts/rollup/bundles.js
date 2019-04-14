'use strict';

const bundleTypes = {
  UMD_DEV: 'UMD_DEV',
  UMD_PROD: 'UMD_PROD',
  UMD_PROFILING: 'UMD_PROFILING',
  NODE_DEV: 'NODE_DEV',
  NODE_PROD: 'NODE_PROD',
  NODE_PROFILING: 'NODE_PROFILING',
  RC_WWW_DEV: 'RC_WWW_DEV',
  RC_WWW_PROD: 'RC_WWW_PROD',
  RC_WWW_PROFILING: 'RC_WWW_PROFILING',
  RN_OSS_DEV: 'RN_OSS_DEV',
  RN_OSS_PROD: 'RN_OSS_PROD',
  RN_OSS_PROFILING: 'RN_OSS_PROFILING',
  RN_RC_DEV: 'RN_RC_DEV',
  RN_RC_PROD: 'RN_RC_PROD',
  RN_RC_PROFILING: 'RN_RC_PROFILING',
};

// const UMD_DEV = bundleTypes.UMD_DEV;
// const UMD_PROD = bundleTypes.UMD_PROD;
// const UMD_PROFILING = bundleTypes.UMD_PROFILING;
// const NODE_DEV = bundleTypes.NODE_DEV;
// const NODE_PROD = bundleTypes.NODE_PROD;
// const NODE_PROFILING = bundleTypes.NODE_PROFILING;
// const RC_WWW_DEV = bundleTypes.RC_WWW_DEV;
// const RC_WWW_PROD = bundleTypes.RC_WWW_PROD;
// const RC_WWW_PROFILING = bundleTypes.RC_WWW_PROFILING;
// const RN_OSS_DEV = bundleTypes.RN_OSS_DEV;
// const RN_OSS_PROD = bundleTypes.RN_OSS_PROD;
// const RN_OSS_PROFILING = bundleTypes.RN_OSS_PROFILING;
// const RN_RC_DEV = bundleTypes.RN_RC_DEV;
// const RN_RC_PROD = bundleTypes.RN_RC_PROD;
// const RN_RC_PROFILING = bundleTypes.RN_RC_PROFILING;

const moduleTypes = {
};

const bundles = [
 
];

// Based on deep-freeze by substack (public domain)
function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function(prop) {
    if (
      o[prop] !== null &&
      (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });
  return o;
}

// Don't accidentally mutate config as part of the build
deepFreeze(bundles);

module.exports = {
  bundleTypes,
  moduleTypes,
  bundles,
};
