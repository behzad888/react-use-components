/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

module.exports = [
  {
    shortName: 'dom',
    entryPoints: [
    ],
    isFlowTyped: true,
    isFizzSupported: true,
  },
  {
    shortName: 'dom-browser',
    entryPoints: [],
    isFlowTyped: true,
    isFizzSupported: true,
  },
  {
    shortName: 'native',
    entryPoints: [],
    isFlowTyped: true,
    isFizzSupported: false,
  },
  {
    shortName: 'test',
    entryPoints: [],
    isFlowTyped: true,
    isFizzSupported: false,
  },
  {
    shortName: 'custom',
    entryPoints: [
    ],
    isFlowTyped: true,
    isFizzSupported: true,
  },
];
