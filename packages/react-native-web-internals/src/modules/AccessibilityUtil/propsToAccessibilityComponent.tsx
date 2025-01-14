// @ts-nocheck
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import propsToAriaRole from './propsToAriaRole.js'

const roleComponents = {
  article: 'article',
  banner: 'header',
  blockquote: 'blockquote',
  code: 'code',
  complementary: 'aside',
  contentinfo: 'footer',
  deletion: 'del',
  emphasis: 'em',
  figure: 'figure',
  insertion: 'ins',
  form: 'form',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section',
  strong: 'strong',
}

const emptyObject = {}

const propsToAccessibilityComponent = (props: Object = emptyObject): void | string => {
  // special-case for "label" role which doesn't map to an ARIA role
  if (props.accessibilityRole === 'label') {
    return 'label'
  }

  const role = propsToAriaRole(props)
  if (role) {
    if (role === 'heading') {
      const level = props.accessibilityLevel || props['aria-level']
      if (level != null) {
        return `h${level}`
      }
      return 'h1'
    }
    return roleComponents[role]
  }
}

export default propsToAccessibilityComponent
