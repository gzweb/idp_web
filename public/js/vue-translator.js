/*!
* vue-translator A deadly simple i18n translate plugin for Vue, ready for Server Side Rendering.
* Version 0.8.0
* Copyright (C) 2017 JounQin <admin@1stg.me>
* Released under the MIT license
*
* Github: https://github.com/JounQin/vue-translator
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define('vue-translator', ['exports', 'vue'], factory) :
    (factory((global.VueTranslator = {}),global.Vue));
}(this, (function (exports,Vue) { 'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

    var LOCALE = 'locale';
    var DEFAULT_LOCALE = 'defaultLocale';
    var defineReactive = Vue.util.defineReactive;
    var translations;
    var getValue = function (input, key) {
        key = key.replace(/\[(\d+)\]/g, '.$1');
        var value = input;
        key.split('.').some(function (k) {
            if (!value || typeof value !== 'object') {
                return true;
            }
            value = value[k];
        });
        if (typeof value === 'object') {
            // istanbul ignore next
            if (value !== null) {
                Vue.util.warn('you are trying to get non-literal value');
            }
            return value && value.toString();
        }
        return value;
    };
    var createTranslator = function (translatorOptions) {
        if (typeof translatorOptions === 'string') {
            translatorOptions = { locale: translatorOptions };
        }
        var instanceLocale = translatorOptions.locale, instanceTranslations = translatorOptions.translations, instanceDefaultLocale = translatorOptions.defaultLocale;
        if (instanceTranslations) {
            if (!translations) {
                translations = instanceTranslations;
            }
            // istanbul ignore next
            else if (translations !== instanceTranslations) {
                Vue.util.warn('translations should only be injected once!');
            }
        }
        else if (!translations) {
            Vue.util.warn('translations has not be injected, translator will not work!');
        }
        var instance = function (key, params, ignoreNonExist) {
            var locale = instance.locale;
            var translation = translations[locale];
            var value = getValue(translation, key);
            if (value === undefined) {
                var defaultLocale = instance.defaultLocale;
                if (defaultLocale && defaultLocale !== locale) {
                    var defaultTranslation = translations[defaultLocale];
                    value = getValue(defaultTranslation, key);
                }
                if (value === undefined &&
                    !ignoreNonExist) {
                    Vue.util.warn("your are trying to get nonexistent key `" + key + "` without default locale fallback");
                }
            }
            value =
                value &&
                    value.replace(/{([^{}]+)}/g, function (matched, $0) { return getValue(params, $0.trim()); });
            return value == null ? key : value;
        };
        defineReactive(instance, LOCALE, instanceLocale);
        defineReactive(instance, DEFAULT_LOCALE, instanceDefaultLocale);
        return instance;
    };

    var mergedCache = [];
    var VueTranslator = function ($Vue, options) {
        if (typeof options === 'string') {
            options = {
                locale: options,
            };
        }
        var defaultLocale = options.defaultLocale, locale = options.locale, merge = options.merge, _a = options.translations, translations = _a === void 0 ? {} : _a;
        var defaultTranslator = createTranslator({
            locale: locale,
            translations: translations,
            defaultLocale: defaultLocale,
        });
        $Vue.translator = defaultTranslator;
        $Vue.mixin({
            beforeCreate: function () {
                var translator = this.$options.translator;
                var cid = Object.getPrototypeOf(this).constructor.cid;
                if (!translator || mergedCache.indexOf(cid) + 1) {
                    return;
                }
                if (!merge) {
                    // istanbul ignore next
                    {
                        $Vue.util.warn('VueTranslator will not help you to merge translations, please pass your own merge strategy, `lodash.merge` for example');
                    }
                    return;
                }
                merge(translations, translator);
                mergedCache.push(cid);
            },
        });
        Object.defineProperty($Vue.prototype, '$t', {
                value: defaultTranslator,
                writable: "development" === 'development',
            });
        var filter = options.filter;
        if (!filter) {
            return;
        }
        if (filter === true) {
            filter = 'translate';
        }
        {
            $Vue.filter(filter, defaultTranslator);
            return;
        }
        var _f = $Vue.prototype._f;
        // a hacky way to support filter on server, so `filter` is not enabled by default
        $Vue.prototype._f = function (id) {
            if (this.$options.filters[filter]) {
                $Vue.util.warn("duplicate filter `" + filter + "` found, please rename to a unique filter name");
            }
            return id === filter ? this.$t : _f.call(this, id);
        };
    };
    var install = VueTranslator;

    exports.default = VueTranslator;
    exports.install = install;
    exports.createTranslator = createTranslator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
