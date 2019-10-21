(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments"],{

/***/ "./src/scripts/comments.js":
/*!*********************************!*\
  !*** ./src/scripts/comments.js ***!
  \*********************************/
/*! exports provided: initComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initComments\", function() { return initComments; });\nvar commentList = document.querySelector('.comment-list');\nvar respondBlock = document.querySelector('#respond');\nvar commentForm = respondBlock.querySelector('form');\nvar cancelReplyLink = respondBlock.querySelector('#cancel-comment-reply-link');\nvar parentIdInput = respondBlock.querySelector('[name=\"fields[parent_id]\"]');\n\nvar moveRespondBlock = function moveRespondBlock(commentId) {\n  if (!commentId) return;\n  var comment = commentList.querySelector(\"#comment-\".concat(commentId, \" article\"));\n  parentIdInput.value = commentId;\n  comment.parentNode.insertBefore(respondBlock, comment.nextSibling);\n  cancelReplyLink.style.display = '';\n  commentForm.querySelector('textarea').focus();\n  return false;\n};\n\nvar initComments = function initComments() {\n  cancelReplyLink.style.display = 'none';\n  cancelReplyLink.addEventListener('click', function (e) {\n    e.preventDefault();\n    parentIdInput.value = '';\n    commentList.parentNode.appendChild(respondBlock);\n    cancelReplyLink.style.display = 'none';\n  });\n  window.moveRespondBlock = moveRespondBlock;\n};\n\n//# sourceURL=webpack:///./src/scripts/comments.js?");

/***/ })

}]);