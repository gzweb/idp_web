import cn from './cn'
import zh from './zh'
import en from './en'

import publicLanguage from '../../../i18n/index'  // 获取通用的语言包

Object.assign(cn,publicLanguage.cn); //合并语言包
Object.assign(zh,publicLanguage.zh);
Object.assign(en,publicLanguage.en);

export default {
    cn,
    zh,
    en
}