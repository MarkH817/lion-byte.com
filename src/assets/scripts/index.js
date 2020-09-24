import 'modern-normalize'
import 'typeface-nunito'
import 'typeface-open-sans'

import 'styles/index.less'

async function core () {
  if (
    process.env.NODE_ENV === 'development' ||
    localStorage.getItem('dev_mode') === 'true'
  ) {
    await import(/* webpackChunkName: "dev-only" */ './modules/dev-only')
  }
}

core()
