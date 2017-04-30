
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import lodash from 'lodash';
import Vue from 'vue';
import axios from 'axios';

UIkit.use(Icons);

window._ = lodash;

window.Vue = Vue;

window.axios = axios;

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};
