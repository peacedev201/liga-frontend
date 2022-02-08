var moment = require('moment');

export default function (ctx, inject) {
    inject('moment', moment)
}