/**
 * form-serialize v1.0.0x
 *
 * Copyright (c) 2019, Dimitar Ivanov
 * https://github.com/riverside/form-serialize
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return factory;
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
		module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.serialize = factory();
    }
}(typeof window !== "undefined" ? window : this, function () {
    "use strict";

    function serialize(form) {

		if (typeof form === "string") {
			form = document.querySelector(form);
		}

    	if (!(typeof form === "object" && form.toString() === "[object HTMLFormElement]")) {
    		return;
		}

    	if (typeof URLSearchParams === "function") {
            return new URLSearchParams(new FormData(form)).toString();
        }

    	var i, j, jCnt,
            q = [],
            iCnt = form.elements.length;

		for (i = 0; i < iCnt; i += 1) {
            if (form.elements[i].name === "") {
                continue;
            }
            switch (form.elements[i].nodeName) {
                case 'INPUT':
                    switch (form.elements[i].type) {
                        case 'text':
                        case 'hidden':
                        case 'password':
                        case 'button':
                        case 'reset':
                        case 'submit':
                        case 'color':
                        case 'date':
                        case 'datetime-local':
                        case 'email':
                        case 'month':
                        case 'number':
                        case 'range':
                        case 'search':
                        case 'tel':
                        case 'time':
                        case 'url':
                        case 'week':
                            q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                        case 'checkbox':
                        case 'radio':
                            if (form.elements[i].checked) {
                                q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
                            }
                            break;
                        case 'file':
                            break;
                    }
                    break;
                case 'TEXTAREA':
                    q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                case 'SELECT':
                    switch (form.elements[i].type) {
                        case 'select-one':
                            q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                        case 'select-multiple':
                        	jCnt = form.elements[i].options.length;
							for (j = 0; j < jCnt; j += 1) {
                                if (form.elements[i].options[j].selected) {
                                    q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].options[j].value));
                                }
                            }
                            break;
                    }
                    break;
            }
        }
        return q.join("&");
    }

    return serialize;
}));