/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-disable */

declare var __PROFILE__: boolean;
declare var __UMD__: boolean;

declare var __REACT_DEVTOOLS_GLOBAL_HOOK__: any; /*?{
  inject: ?((stuff: Object) => void)
};*/

// EventListener www fork
declare module 'EventListener' {
  declare module.exports: {
    listen: (
      target: Element,
      type: string,
      callback: Function,
      priority?: number,
      options?: {passive: boolean},
    ) => mixed,
    capture: (target: Element, type: string, callback: Function) => mixed,
  };
}
