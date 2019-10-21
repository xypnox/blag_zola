(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-polyfill"],{

/***/ "./src/scripts/details-polyfill.js":
/*!*****************************************!*\
  !*** ./src/scripts/details-polyfill.js ***!
  \*****************************************/
/*! exports provided: detailsPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detailsPolyfill\", function() { return detailsPolyfill; });\nvar body = document.body;\n\nvar detailsTagSupported = function detailsTagSupported() {\n  var el = document.createElement('details');\n  if (!('open' in el)) return false;\n  el.innerHTML = '<summary>a</summary>b';\n  body.appendChild(el);\n  var diff = el.offsetHeight;\n  el.open = true;\n  var result = diff != el.offsetHeight;\n  body.removeChild(el);\n  return result;\n};\n\nvar detailsPolyfill = function detailsPolyfill(detailsElements) {\n  if (!detailsTagSupported()) {\n    body.classList.add('no-details');\n    detailsElements.forEach(function (detailsElement) {\n      var summaryElement = detailsElement.querySelector('summary');\n      summaryElement.addEventListener('click', function () {\n        if (detailsElement.getAttribute('open')) {\n          detailsElement.open = false;\n          detailsElement.removeAttribute('open');\n        } else {\n          detailsElement.open = true;\n          detailsElement.setAttribute('open', 'open');\n        }\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/scripts/details-polyfill.js?");

/***/ })

}]);