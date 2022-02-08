import Vue from 'vue'
import de from 'vee-validate/dist/locale/de';
import VeeValidate, { Validator } from 'vee-validate';

// Install the Plugin.
Vue.use(VeeValidate, {
    inject: false,
    fieldsBagName: 'veeFields',
});

// Localize takes the locale object as the second degument (optional) and merges it.
Validator.localize('de', de);