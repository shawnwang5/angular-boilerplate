import { home } from './pages/home'
import { common } from './common'

const targetJson = {
    header: {
        desc: 'header'
    },
    common: {},
    pages: {},
    footer: {
        desc: 'footer'
    }
}

targetJson.pages = Object.assign(targetJson.pages, home)
targetJson.common = Object.assign(targetJson.common, common)
export const jp = targetJson
