webpackJsonp([4],{47:function(module,exports,__webpack_require__){eval("var Component = __webpack_require__(0)(\n  /* script */\n  __webpack_require__(53),\n  /* template */\n  __webpack_require__(62),\n  /* styles */\n  null,\n  /* scopeId */\n  null,\n  /* moduleIdentifier (server only) */\n  null\n)\n\nmodule.exports = Component.exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWdsaXN0LnZ1ZT9hMTA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFnbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJiN2I1ZjUyXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RhZ2xpc3QudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1RhZ2xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9")},53:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata: function data() {\n\t\treturn {\n\n\t\t\ttagListUrl: 'admin/index.php?m=Home&c=Index&a=labelsingle',\n\n\t\t\ttagList: [],\n\t\t\tloadingOnoff: false,\n\t\t\tajaxOnoff: false\n\n\t\t};\n\t},\n\n\n\tmethods: {\n\n\t\tAjaxDonghua: function AjaxDonghua() {\n\t\t\tthis.loadingOnoff = !this.loadingOnoff;\n\t\t},\n\n\t\tgetData: function getData() {\n\t\t\tthis.tagList = [];\n\t\t\tthis.$http.post(this.tagListUrl, { label: this.$route.params.tag }, { emulateJSON: true }).then(function (res) {\n\n\t\t\t\tfor (var i in res.data) {\n\n\t\t\t\t\tthis.tagList.push(res.data[i]);\n\t\t\t\t}\n\n\t\t\t\tif (this.tagList.length >= 12) {\n\t\t\t\t\tthis.ajaxOnoff = true;\n\t\t\t\t} else {\n\t\t\t\t\tthis.ajaxOnoff = false;\n\t\t\t\t}\n\t\t\t}, function (res) {\n\t\t\t\tconsole.log('请求失败');\n\t\t\t});\n\t\t},\n\n\n\t\tajax: function ajax() {\n\n\t\t\tthis.$http.post(this.tagListUrl, { label: this.$route.params.tag, now: this.tagList.length, loadings: 6 }, { emulateJSON: true }, this.AjaxDonghua()).then(function (res) {\n\n\t\t\t\tif (res.body == null) {\n\t\t\t\t\tthis.ajaxOnoff = false;\n\t\t\t\t\treturn false;\n\t\t\t\t} else {\n\n\t\t\t\t\tfor (var i in res.body) {\n\t\t\t\t\t\tthis.tagList.push(res.body[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tthis.AjaxDonghua();\n\t\t\t}, function (res) {\n\t\t\t\talert('网络故障，请重新加载');\n\t\t\t\tthis.AjaxDonghua();\n\t\t\t});\n\t\t}\n\n\t},\n\n\twatch: {\n\t\t'$route': 'getData'\n\t},\n\n\tcreated: function created() {\n\t\tthis.getData();\n\t},\n\n\tupdated: function updated() {\n\n\t\tthis.imgLoad();\n\t\tdocument.getElementById('body').onscroll = this.imgLoad;\n\t\twindow.onscroll = this.imgLoad;\n\t}\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVGFnbGlzdC52dWU/MWNjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7Ozt1QkFJQTs7O2VBTUE7O1lBQ0E7aUJBQ0E7Y0FNQTs7QUFWQTtBQVlBOzs7OztzQ0FHQTs2QkFDQTtBQUVBOzs4QkFDQTtrQkFDQTtzRkFDQSw0QkFFQTs7NEJBRUE7O2dDQUNBO0FBRUE7O21DQUNBO3NCQUNBO1dBQ0E7c0JBQ0E7QUFFQTtxQkFDQTtnQkFDQTtBQUNBO0FBRUE7Ozt3QkFFQTs7Y0FDQSxVQUNBLGtIQUNBLG1DQUdBOzswQkFDQTtzQkFDQTtZQUVBO1dBRUE7OzZCQUNBO2lDQUVBO0FBRUE7QUFHQTs7U0FHQTtxQkFDQTtVQUNBO1NBRUE7QUFFQTtBQU9BOztBQS9EQTs7O1lBbUVBO0FBSEE7OzZCQUlBO09BQ0E7QUFFQTs7NkJBRUE7O09BQ0E7a0RBQ0E7eUJBRUE7QUFRQTs7QUF4R0EiLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGFydGljbGUgaWQ9XCJkZXNpZ25MaXN0XCIgY2xhc3M9XCJsaXN0U3R5bGVcIj5cclxuXHRcdFxyXG5cdFx0XHQ8IS0tIGxhZGluZ+WKqOeUuyAtLT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNwaW5uZXJcIiB2LXNob3c9XCJ0YWdMaXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJib3VuY2UxXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJvdW5jZTJcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm91bmNlM1wiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7bmFtZTonZGV0YWlsJyxwYXJhbXM6e2lkOnZhbC5ib29rX2lkfX1cIiB0YWc9XCJzZWN0aW9uXCIgY2xhc3M9XCJsaXN0XCIgdi1mb3I9XCIodmFsLGluZGV4KSBpbiB0YWdMaXN0XCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4uL2Fzc2V0cy9sb2FkaW5nUGljLmpwZ1wiIDpkYXRhLXNyYz1cInZhbC5ib29rX2ltZ3BhdGhcIiBhbHQ9XCLliY3nq68gaHRtbDUgbm9kZWpzIHZ1ZSB3ZWJwYWNrXCIgY2xhc3M9XCJpbWdcIj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8aGdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdDxoND5cclxuXHRcdFx0XHRcdFx0XHRcdHt7dmFsLmJvb2tfdGl0bGV9fVxyXG5cdFx0XHRcdFx0XHRcdDwvaDQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxoNSB2LWh0bWw9XCJodG1sRGVjb2RlKHZhbC5ib29rX2NvbnRlbnQpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdFx0XHQ8L2hncm91cD5cclxuXHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkYXRlVGFnXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZGF0ZVwiPuaXpeacnzp7e3ZhbC5ib29rX2JlZ2ludGltZSB8IHRpbWV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0YWdcIj7moIfnrb46e3t2YWwuYm9va19sYWJlbH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L3JvdXRlci1saW5rPlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJsb2FkaW5nXCIgdi1zaG93PVwiYWpheE9ub2ZmXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Bpbm5lciBsb2FkaW5nU3R5bGVcIiB2LWlmPVwibG9hZGluZ09ub2ZmXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJib3VuY2UxXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJib3VuY2UyXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJib3VuY2UzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxoNCBAY2xpY2s9XCJhamF4XCIgdi1lbHNlPuWKoOi9veabtOWkmjwvaDQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cclxuXHQ8L2FydGljbGU+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdHtcclxuXHRcdFxyXG5cclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJue1xyXG5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0dGFnTGlzdFVybDonYWRtaW4vaW5kZXgucGhwP209SG9tZSZjPUluZGV4JmE9bGFiZWxzaW5nbGUnLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhZ0xpc3Q6W10sXHJcblx0XHRcdFx0bG9hZGluZ09ub2ZmOmZhbHNlLFxyXG5cdFx0XHRcdGFqYXhPbm9mZjpmYWxzZSxcclxuXHJcblx0XHRcdFx0XHJcblxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRtZXRob2RzOntcclxuXHJcblx0XHRcdEFqYXhEb25naHVhOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmdPbm9mZiA9ISB0aGlzLmxvYWRpbmdPbm9mZjtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGdldERhdGEoKXtcclxuXHRcdFx0XHR0aGlzLnRhZ0xpc3Q9W107XHJcblx0XHRcdFx0dGhpcy4kaHR0cC5wb3N0KHRoaXMudGFnTGlzdFVybCx7bGFiZWw6dGhpcy4kcm91dGUucGFyYW1zLnRhZ30se2VtdWxhdGVKU09OOnRydWV9KVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvcih2YXIgaSBpbiByZXMuZGF0YSl7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0aGlzLnRhZ0xpc3QucHVzaChyZXMuZGF0YVtpXSlcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZih0aGlzLnRhZ0xpc3QubGVuZ3RoPj0xMil7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWpheE9ub2ZmID10cnVlO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWpheE9ub2ZmID1mYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSxmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+ivt+axguWksei0pScpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGFqYXg6ZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0dGhpcy4kaHR0cC5wb3N0KFxyXG5cdFx0ICAgICAgICAgIHRoaXMudGFnTGlzdFVybCxcclxuXHRcdCAgICAgICAgICB7bGFiZWw6dGhpcy4kcm91dGUucGFyYW1zLnRhZyxub3c6dGhpcy50YWdMaXN0Lmxlbmd0aCxsb2FkaW5nczo2fSx7ZW11bGF0ZUpTT046dHJ1ZX0sdGhpcy5BamF4RG9uZ2h1YSgpXHJcblx0XHQgICAgICAgICAgKS50aGVuKGZ1bmN0aW9uKHJlcyl7XHJcblxyXG5cdFx0ICAgICAgICAgIFx0XHJcblx0XHQgICAgICAgICAgXHQgaWYocmVzLmJvZHk9PW51bGwpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFqYXhPbm9mZiA9ZmFsc2U7XHQgICBcclxuXHRcdCAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0ICAgICAgICAgICAgIH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIHJlcy5ib2R5KXtcclxuXHRcdCAgICAgICAgICAgICBcdFx0dGhpcy50YWdMaXN0LnB1c2gocmVzLmJvZHlbaV0pO1xyXG5cdFx0ICAgICAgICAgICAgICBcclxuXHRcdCAgICAgICAgICAgIFx0fVxyXG5cclxuXHRcdCAgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHRcdCAgICAgICAgICAgIHRoaXMuQWpheERvbmdodWEoKTtcclxuICAgICAgICAgICAgXHJcblxyXG5cdFx0ICAgICAgICAgIH0sZnVuY3Rpb24ocmVzKXtcclxuXHRcdCAgICAgICAgICAgIGFsZXJ0KCfnvZHnu5zmlYXpmpzvvIzor7fph43mlrDliqDovb0nKVxyXG5cdFx0ICAgICAgICAgICAgdGhpcy5BamF4RG9uZ2h1YSgpXHJcblx0XHQgICAgICAgICAgICBcclxuXHRcdCAgICAgICAgICB9KVxyXG5cclxuXHRcdFx0XHR9LFxyXG5cclxuXHJcblxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHQnJHJvdXRlJzonZ2V0RGF0YScsXHJcblx0XHR9LFxyXG5cclxuXHRcdGNyZWF0ZWQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5nZXREYXRhKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZWQ6ZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICBcdHRoaXMuaW1nTG9hZCgpO1xyXG4gICAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpLm9uc2Nyb2xsID0gdGhpcy5pbWdMb2FkO1xyXG4gICAgICAgICAgXHR3aW5kb3cub25zY3JvbGwgPSB0aGlzLmltZ0xvYWQ7XHJcbiAgICAgIFxyXG4gICAgICBcdH0sXHJcblxyXG5cdFx0XHJcblx0XHRcdFxyXG5cdFx0XHJcblxyXG5cclxuXHRcclxuXHRcdH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRhZ2xpc3QudnVlPzA1NTI1MDk0Il0sInNvdXJjZVJvb3QiOiIifQ==")},62:function(module,exports,__webpack_require__){eval('module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'article\', {\n    staticClass: "listStyle",\n    attrs: {\n      "id": "designList"\n    }\n  }, [_c(\'div\', {\n    directives: [{\n      name: "show",\n      rawName: "v-show",\n      value: (_vm.tagList.length == 0),\n      expression: "tagList.length==0"\n    }],\n    staticClass: "spinner"\n  }, [_c(\'div\', {\n    staticClass: "bounce1"\n  }), _vm._v(" "), _c(\'div\', {\n    staticClass: "bounce2"\n  }), _vm._v(" "), _c(\'div\', {\n    staticClass: "bounce3"\n  })]), _vm._v(" "), _vm._l((_vm.tagList), function(val, index) {\n    return _c(\'router-link\', {\n      staticClass: "list",\n      attrs: {\n        "to": {\n          name: \'detail\',\n          params: {\n            id: val.book_id\n          }\n        },\n        "tag": "section"\n      }\n    }, [_c(\'img\', {\n      staticClass: "img",\n      attrs: {\n        "src": __webpack_require__(11),\n        "data-src": val.book_imgpath,\n        "alt": "前端 html5 nodejs vue webpack"\n      }\n    }), _vm._v(" "), _c(\'hgroup\', [_c(\'h4\', [_vm._v("\\n\\t\\t\\t\\t\\t\\t\\t" + _vm._s(val.book_title) + "\\n\\t\\t\\t\\t\\t\\t")]), _vm._v(" "), _c(\'h5\', {\n      domProps: {\n        "innerHTML": _vm._s(_vm.htmlDecode(val.book_content))\n      }\n    })]), _vm._v(" "), _c(\'div\', {\n      staticClass: "dateTag"\n    }, [_c(\'span\', {\n      staticClass: "date"\n    }, [_vm._v("日期:" + _vm._s(_vm._f("time")(val.book_begintime)))]), _vm._v(" "), _c(\'span\', {\n      staticClass: "tag"\n    }, [_vm._v("标签:" + _vm._s(val.book_label))]), _vm._v(" "), _c(\'div\', {\n      staticClass: "clear"\n    })])])\n  }), _vm._v(" "), _c(\'div\', {\n    directives: [{\n      name: "show",\n      rawName: "v-show",\n      value: (_vm.ajaxOnoff),\n      expression: "ajaxOnoff"\n    }],\n    staticClass: "loading"\n  }, [(_vm.loadingOnoff) ? _c(\'div\', {\n    staticClass: "spinner loadingStyle"\n  }, [_c(\'div\', {\n    staticClass: "bounce1"\n  }), _vm._v(" "), _c(\'div\', {\n    staticClass: "bounce2"\n  }), _vm._v(" "), _c(\'div\', {\n    staticClass: "bounce3"\n  })]) : _c(\'h4\', {\n    on: {\n      "click": _vm.ajax\n    }\n  }, [_vm._v("加载更多")])])], 2)\n},staticRenderFns: []}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWdsaXN0LnZ1ZT9kZGM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6IjYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxpc3RTdHlsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZGVzaWduTGlzdFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udGFnTGlzdC5sZW5ndGggPT0gMCksXG4gICAgICBleHByZXNzaW9uOiBcInRhZ0xpc3QubGVuZ3RoPT0wXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm91bmNlMVwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJvdW5jZTJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3VuY2UzXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0udGFnTGlzdCksIGZ1bmN0aW9uKHZhbCwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiB7XG4gICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpZDogdmFsLmJvb2tfaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidGFnXCI6IFwic2VjdGlvblwiXG4gICAgICB9XG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJpbWdcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IHJlcXVpcmUoXCIuLi9hc3NldHMvbG9hZGluZ1BpYy5qcGdcIiksXG4gICAgICAgIFwiZGF0YS1zcmNcIjogdmFsLmJvb2tfaW1ncGF0aCxcbiAgICAgICAgXCJhbHRcIjogXCLliY3nq68gaHRtbDUgbm9kZWpzIHZ1ZSB3ZWJwYWNrXCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hncm91cCcsIFtfYygnaDQnLCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3ModmFsLmJvb2tfdGl0bGUpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1Jywge1xuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5odG1sRGVjb2RlKHZhbC5ib29rX2NvbnRlbnQpKVxuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkYXRlVGFnXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkYXRlXCJcbiAgICB9LCBbX3ZtLl92KFwi5pel5pyfOlwiICsgX3ZtLl9zKF92bS5fZihcInRpbWVcIikodmFsLmJvb2tfYmVnaW50aW1lKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFnXCJcbiAgICB9LCBbX3ZtLl92KFwi5qCH562+OlwiICsgX3ZtLl9zKHZhbC5ib29rX2xhYmVsKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyXCJcbiAgICB9KV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmFqYXhPbm9mZiksXG4gICAgICBleHByZXNzaW9uOiBcImFqYXhPbm9mZlwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZ1wiXG4gIH0sIFsoX3ZtLmxvYWRpbmdPbm9mZikgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXIgbG9hZGluZ1N0eWxlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm91bmNlMVwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJvdW5jZTJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3VuY2UzXCJcbiAgfSldKSA6IF9jKCdoNCcsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uYWpheFxuICAgIH1cbiAgfSwgW192bS5fdihcIuWKoOi9veabtOWkmlwiKV0pXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJiN2I1ZjUyXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UYWdsaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==')}});