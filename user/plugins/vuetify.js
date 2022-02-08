import Vue from 'vue';
import Vuetify, {
    VTextField,
    VTextarea,
    VAutocomplete,
    VCheckbox
} from 'vuetify/lib';

Vue.use(Vuetify, {
    components: {
        VTextField,
        VTextarea,
        VAutocomplete,
        VCheckbox
    },
});

const opts = {}

export default new Vuetify(opts)