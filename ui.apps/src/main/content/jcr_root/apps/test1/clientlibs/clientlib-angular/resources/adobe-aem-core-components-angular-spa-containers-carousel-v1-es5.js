function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adobe-aem-core-components-angular-spa-containers-carousel-v1"], {
  /***/
  "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-carousel-v1.js":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-carousel-v1.js ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: AemAngularCoreWcmComponentsCarouselV1, CarouselV1Component, ɵ0 */

  /***/
  function node_modulesAdobeAemCoreComponentsAngularSpa__ivy_ngcc__Fesm2015AdobeAemCoreComponentsAngularSpaContainersCarouselV1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AemAngularCoreWcmComponentsCarouselV1", function () {
      return AemAngularCoreWcmComponentsCarouselV1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselV1Component", function () {
      return CarouselV1Component;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-spa/core */
    "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     ~ Copyright 2020 Adobe Systems Incorporated
     ~
     ~ Licensed under the Apache License, Version 2.0 (the "License");
     ~ you may not use this file except in compliance with the License.
     ~ You may obtain a copy of the License at
     ~
     ~     http://www.apache.org/licenses/LICENSE-2.0
     ~
     ~ Unless required by applicable law or agreed to in writing, software
     ~ distributed under the License is distributed on an "AS IS" BASIS,
     ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     ~ See the License for the specific language governing permissions and
     ~ limitations under the License.
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    function CarouselV1Component_ng_container_0_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var allowedComponent_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.allowedComponentClassNames);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cq-data-path", allowedComponent_r4.path)("data-emptytext", allowedComponent_r4.title);
      }
    }

    function CarouselV1Component_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselV1Component_ng_container_0_ng_container_3_Template, 2, 4, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.getAllowedComponentListPlaceholderClassNames());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.allowedComponentListTitleClassNames);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-text", ctx_r0.getAllowedComponentListLabel());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getAllowedComponents());
      }
    }

    function CarouselV1Component_ng_template_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemKey_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r5.getSlideCssClass(i_r11));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", ctx_r5.id, "-item-", i_r11, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r5.getSlideAriaLabel(i_r11));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cqItem", ctx_r5.getItem(itemKey_r10))("cqPath", ctx_r5.getDataPath(itemKey_r10))("itemName", itemKey_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cq-data-path", ctx_r5.getDataPath(itemKey_r10));
      }
    }

    function CarouselV1Component_ng_template_1_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselV1Component_ng_template_1_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r12.toggleAutoPlay(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r6.baseCssClass + "__action " + ctx_r6.baseCssClass + "__action--pause" + (!ctx_r6.autoPlayIntervalOn ? " " + ctx_r6.baseCssClass + "__action--disabled" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r6.accessibility.pause);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r6.baseCssClass, "__action-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r6.baseCssClass, "__action-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r6.accessibility.pause);
      }
    }

    function CarouselV1Component_ng_template_1_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselV1Component_ng_template_1_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r14.toggleAutoPlay(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.baseCssClass + "__action " + ctx_r7.baseCssClass + "__action--play" + (ctx_r7.autoPlayIntervalOn ? " " + ctx_r7.baseCssClass + "__action--disabled" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r7.accessibility.play);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r7.baseCssClass, "__action-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r7.baseCssClass, "__action-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r7.accessibility.play);
      }
    }

    function CarouselV1Component_ng_template_1_li_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselV1Component_ng_template_1_li_14_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var i_r17 = ctx.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r18.handleIndicatorClick(i_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemKey_r16 = ctx.$implicit;
        var i_r17 = ctx.index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r8.getIndicatorCssClass(i_r17));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r8.cqItems[itemKey_r16]["cq:panelTitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-controls", ctx_r8.getAriaControlsId(i_r17))("aria-label", ctx_r8.getIndicatorAriaLabel(i_r17));
      }
    }

    function CarouselV1Component_ng_template_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r9.getPlaceholderClassNames());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cq-data-path", ctx_r9.placeholderPath);
      }
    }

    function CarouselV1Component_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CarouselV1Component_ng_template_1_Template_div_mouseenter_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.handleOnMouseEnter();
        })("mouseleave", function CarouselV1Component_ng_template_1_Template_div_mouseleave_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.handleOnMouseLeave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselV1Component_ng_template_1_div_3_Template, 2, 9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselV1Component_ng_template_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.handleOnButtonPrev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CarouselV1Component_ng_template_1_button_8_Template, 3, 9, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CarouselV1Component_ng_template_1_button_9_Template, 3, 9, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselV1Component_ng_template_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.handleOnButtonNext();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ol", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CarouselV1Component_ng_template_1_li_14_Template, 1, 5, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CarouselV1Component_ng_template_1_div_15_Template, 1, 3, "div", 12);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.baseCssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-roledescription", ctx_r2.accessibilityLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r2.baseCssClass, "__content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.cqItemsOrder);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r2.baseCssClass, "__actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("", ctx_r2.baseCssClass, "__action ", ctx_r2.baseCssClass, "__action--previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.accessibility.previous);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r2.baseCssClass, "__action-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r2.baseCssClass, "__action-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r2.accessibility.previous);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.autoplay);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.autoplay);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("", ctx_r2.baseCssClass, "__action ", ctx_r2.baseCssClass, "__action--next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.accessibility.next);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r2.baseCssClass, "__action-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r2.baseCssClass, "__action-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r2.accessibility.next);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r2.baseCssClass, "__indicators");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.accessibility.indicators);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.cqItemsOrder);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isInEditMode);
      }
    }

    var formatFn = function formatFn(value, args) {
      var content = value;

      for (var i = 0; i < args.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, args[i]);
      }

      return content;
    };

    var ɵ0 = formatFn;

    var CarouselV1Component = /*#__PURE__*/function (_adobe_aem_core_compo) {
      _inherits(CarouselV1Component, _adobe_aem_core_compo);

      var _super = _createSuper(CarouselV1Component);

      function CarouselV1Component(changeDetectorRef, _platformId) {
        var _this;

        _classCallCheck(this, CarouselV1Component);

        _this = _super.call(this, _platformId);
        _this.changeDetectorRef = changeDetectorRef;
        _this._platformId = _platformId;
        _this.autoplay = false;
        _this.accessibilityLabel = 'Carousel';
        _this.activeIndex = 0;
        _this.delay = 0;
        _this.baseCssClass = 'cmp-carousel';
        _this.accessibility = {
          play: 'Play',
          pause: 'Pause',
          next: 'Next',
          previous: 'Previous',
          slide: 'Slide {0} of {1}',
          indicator: 'Slide {0}',
          indicators: 'Choose a slide to display'
        };
        _this.interval = 0;
        _this.autoPlayIntervalOn = false;
        _this.autoPlayHalted = false;

        _this.clearAutoPlay = function () {
          _this.autoPlayIntervalOn = false;

          _this.changeDetectorRef.detectChanges();

          window.clearInterval(_this.interval);
        };

        return _this;
      }

      _createClass(CarouselV1Component, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          _get(_getPrototypeOf(CarouselV1Component.prototype), "ngAfterViewInit", this).call(this);

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this._platformId) && this.autoplay) {
            this.__autoPlay();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(CarouselV1Component.prototype), "ngOnDestroy", this).call(this);

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this._platformId) && this.autoplay && !this.isInEditor) {
            this.clearAutoPlay();
          }
        }
      }, {
        key: "onAuthorIndexChange",
        value: function onAuthorIndexChange(index) {
          this.activeIndex = index;
          this.clearAutoPlay();
        }
      }, {
        key: "handleOnMouseEnter",
        value: function handleOnMouseEnter() {
          if (!this.autopauseDisabled && this.autoplay) {
            this.autoPlayHalted = true;
          }
        }
      }, {
        key: "handleOnMouseLeave",
        value: function handleOnMouseLeave() {
          if (!this.autopauseDisabled && this.autoplay) {
            this.autoPlayHalted = false;
          }
        }
      }, {
        key: "getAriaControlsId",
        value: function getAriaControlsId(index) {
          return "".concat(this.id, "-item-").concat(index);
        }
      }, {
        key: "getIndicatorAriaLabel",
        value: function getIndicatorAriaLabel(index) {
          return formatFn(this.accessibility.indicator, [index + 1]);
        }
      }, {
        key: "getSlideAriaLabel",
        value: function getSlideAriaLabel(index) {
          return formatFn(this.accessibility.slide, [index + 1, this.cqItemsOrder.length]);
        }
      }, {
        key: "getSlideCssClass",
        value: function getSlideCssClass(index) {
          return this.activeIndex === index ? "".concat(this.baseCssClass, "__item ").concat(this.baseCssClass, "__item--active") : "".concat(this.baseCssClass, "__item");
        }
      }, {
        key: "getIndicatorCssClass",
        value: function getIndicatorCssClass(index) {
          return this.activeIndex === index ? "".concat(this.baseCssClass, "__indicator ").concat(this.baseCssClass, "__indicator--active") : "".concat(this.baseCssClass, "__indicator");
        }
      }, {
        key: "handleOnButtonPrev",
        value: function handleOnButtonPrev() {
          this.prevSlide();
        }
      }, {
        key: "handleOnButtonNext",
        value: function handleOnButtonNext() {
          this.nextSlide();
        }
      }, {
        key: "handleIndicatorClick",
        value: function handleIndicatorClick(index) {
          this.activeIndex = index;
        }
      }, {
        key: "__autoPlay",
        value: function __autoPlay() {
          var _this2 = this;

          this.autoPlayIntervalOn = true;
          this.interval = window.setInterval(function () {
            _this2.autoPlayTick();
          }, this.delay);
          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "autoPlayTick",
        value: function autoPlayTick() {
          if (!this.autoplay || this.autoPlayHalted || this.cqItemsOrder.length <= 1) {
            return;
          }

          this.nextSlide();
        }
      }, {
        key: "toggleAutoPlay",
        value: function toggleAutoPlay(toggle) {
          if (toggle) {
            this.__autoPlay();
          } else {
            this.clearAutoPlay();
          }
        }
      }, {
        key: "nextSlide",
        value: function nextSlide() {
          var activeIndex = this.__getActiveIndex();

          if (activeIndex === this.cqItemsOrder.length - 1) {
            this.__setSlide(0);
          } else {
            this.__setSlide(activeIndex + 1);
          }
        }
      }, {
        key: "prevSlide",
        value: function prevSlide() {
          var activeIndex = this.__getActiveIndex();

          if (activeIndex === 0) {
            this.__setSlide(this.cqItemsOrder.length - 1);
          } else {
            this.__setSlide(activeIndex - 1);
          }
        }
      }, {
        key: "__getActiveIndex",
        value: function __getActiveIndex() {
          return this.activeIndex;
        }
      }, {
        key: "__setSlide",
        value: function __setSlide(index) {
          this.activeIndex = index;
        }
      }]);

      return CarouselV1Component;
    }(_adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_2__["AbstractContainerComponent"]);

    CarouselV1Component.ɵfac = function CarouselV1Component_Factory(t) {
      return new (t || CarouselV1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
    };

    CarouselV1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CarouselV1Component,
      selectors: [["core-carousel-v1"]],
      hostVars: 5,
      hostBindings: function CarouselV1Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cq-data-path", ctx.cqPath)("data-cmp-data-layer", ctx.dataLayerString)("data-panelcontainer", "carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.baseCssClass);
        }
      },
      inputs: {
        autoplay: "autoplay",
        accessibilityLabel: "accessibilityLabel",
        activeIndex: "activeIndex",
        delay: "delay",
        accessibility: "accessibility",
        autopauseDisabled: "autopauseDisabled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["container", ""], [4, "ngFor", "ngForOf"], [1, "carousel"], ["role", "group", 3, "id"], [3, "mouseenter", "mouseleave"], ["role", "tabpanel", 3, "class", "id", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "innerText"], ["type", "button", 3, "ngClass", "click", 4, "ngIf"], ["role", "tablist"], ["role", "tab", 3, "class", "innerText", "click", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["role", "tabpanel", 3, "id"], [3, "aemModelProvider", "cqItem", "cqPath", "itemName"], ["type", "button", 3, "ngClass", "click"], ["role", "tab", 3, "innerText", "click"]],
      template: function CarouselV1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselV1Component_ng_container_0_Template, 4, 6, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselV1Component_ng_template_1_Template, 16, 44, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAllowedComponentsApplicable())("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_6__["AEMModelProviderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      encapsulation: 2
    });

    CarouselV1Component.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CarouselV1Component.prototype, "autoplay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CarouselV1Component.prototype, "accessibilityLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CarouselV1Component.prototype, "autopauseDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CarouselV1Component.prototype, "activeIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CarouselV1Component.prototype, "delay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CarouselV1Component.prototype, "baseCssClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CarouselV1Component.prototype, "accessibility", void 0);
    CarouselV1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], Object])], CarouselV1Component);

    var AemAngularCoreWcmComponentsCarouselV1 = /*#__PURE__*/_createClass(function AemAngularCoreWcmComponentsCarouselV1() {
      _classCallCheck(this, AemAngularCoreWcmComponentsCarouselV1);
    });

    AemAngularCoreWcmComponentsCarouselV1.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AemAngularCoreWcmComponentsCarouselV1
    });
    AemAngularCoreWcmComponentsCarouselV1.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AemAngularCoreWcmComponentsCarouselV1_Factory(t) {
        return new (t || AemAngularCoreWcmComponentsCarouselV1)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_6__["SpaAngularEditableComponentsModule"], _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_2__["AemAngularCoreSpaWcmComponentsCore"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselV1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'core-carousel-v1',
          host: {
            '[class]': 'hostClasses',
            '[attr.data-cq-data-path]': 'cqPath',
            '[attr.data-cmp-data-layer]': 'dataLayerString',
            '[attr.data-panelcontainer]': '"carousel"'
          },
          template: "<!--/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n  ~ Copyright 2020 Adobe\n  ~\n  ~ Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~     http://www.apache.org/licenses/LICENSE-2.0\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/-->\n\n<ng-container *ngIf=\"isAllowedComponentsApplicable(); else container\">\n    <div [class]=\"getAllowedComponentListPlaceholderClassNames()\">\n        <div [attr.data-text]=\"getAllowedComponentListLabel()\" [class]=\"allowedComponentListTitleClassNames\"></div>\n        <ng-container *ngFor=\"let allowedComponent of getAllowedComponents()\">\n            <div [attr.data-cq-data-path]=\"allowedComponent.path\"\n                 [attr.data-emptytext]=\"allowedComponent.title\"\n                 [class]=\"allowedComponentClassNames\"></div>\n        </ng-container>\n    </div>\n</ng-container>\n<ng-template #container>\n    \n    <div class=\"carousel\">\n        <div id=\"{{id}}\" class=\"{{baseCssClass}}\" role=\"group\" [attr.aria-roledescription]=\"accessibilityLabel\">\n            <div class=\"{{baseCssClass}}__content\" (mouseenter)=\"handleOnMouseEnter()\" (mouseleave)=\"handleOnMouseLeave()\"\n            >\n                <div *ngFor=\"let itemKey of cqItemsOrder; let i = index\"\n                     [class]=\"getSlideCssClass(i)\"\n                     id=\"{{id}}-item-{{i}}\"\n                     role=\"tabpanel\"\n                     [attr.aria-label]=\"getSlideAriaLabel(i)\">\n                    <div\n                            [aemModelProvider]\n                            [cqItem]=\"getItem(itemKey)\"\n                            [cqPath]=\"getDataPath(itemKey)\"\n                            [itemName]=\"itemKey\"\n                            [attr.data-cq-data-path]=\"getDataPath(itemKey)\"></div>\n                </div>\n                \n                <div class=\"{{baseCssClass}}__actions\">\n                    <button class=\"{{baseCssClass}}__action {{baseCssClass}}__action--previous\"\n                            type=\"button\"\n                            [attr.aria-label]=\"accessibility.previous\"\n                            (click)=\"handleOnButtonPrev()\">\n                        <span class=\"{{baseCssClass}}__action-icon\"></span>\n                        <span class=\"{{baseCssClass}}__action-text\" [innerText]=\"accessibility.previous\"></span>\n                    </button>\n                    \n                    \n                    <button [ngClass]=\"baseCssClass + '__action ' + baseCssClass + '__action--pause' + (!autoPlayIntervalOn ? ' ' + baseCssClass + '__action--disabled' : '')\"\n                            type=\"button\"\n                            *ngIf=\"autoplay\"\n                            [attr.aria-label]=\"accessibility.pause\"\n                            (click)=\"toggleAutoPlay(false)\">\n                        <span class=\"{{baseCssClass}}__action-icon\"></span>\n                        <span class=\"{{baseCssClass}}__action-text\" [innerText]=\"accessibility.pause\"></span>\n                    </button>\n                    <button [ngClass]=\"baseCssClass + '__action ' + baseCssClass + '__action--play' + (autoPlayIntervalOn ? ' ' + baseCssClass + '__action--disabled' : '')\"\n                            type=\"button\"\n                            *ngIf=\"autoplay\"\n                            [attr.aria-label]=\"accessibility.play\"\n                            (click)=\"toggleAutoPlay(true)\">\n                        <span class=\"{{baseCssClass}}__action-icon\"></span>\n                        <span class=\"{{baseCssClass}}__action-text\" [innerText]=\"accessibility.play\"></span>\n                    </button>\n                    \n                    \n                    <button class=\"{{baseCssClass}}__action {{baseCssClass}}__action--next\"\n                            type=\"button\"\n                            [attr.aria-label]=\"accessibility.next\"\n                            (click)=\"handleOnButtonNext()\">\n                        <span class=\"{{baseCssClass}}__action-icon\"></span>\n                        <span class=\"{{baseCssClass}}__action-text\" [innerText]=\"accessibility.next\"></span>\n                    </button>\n                \n                </div>\n                <ol class=\"{{baseCssClass}}__indicators\" role=\"tablist\" [attr.aria-label]=\"accessibility.indicators\">\n                    <li *ngFor=\"let itemKey of cqItemsOrder; let i = index\"\n                        [class]=\"getIndicatorCssClass(i)\"\n                        role=\"tab\"\n                        (click)=\"handleIndicatorClick(i)\"\n                        [attr.aria-controls]=\"getAriaControlsId(i)\"\n                        [attr.aria-label]=\"getIndicatorAriaLabel(i)\" [innerText]=\"cqItems[itemKey]['cq:panelTitle']\"></li>\n                </ol>\n            </div>\n        \n        </div>\n    </div>\n    \n    <div *ngIf=\"isInEditMode;\"\n         [attr.data-cq-data-path]=\"placeholderPath\"\n         [class]=\"getPlaceholderClassNames()\">\n    </div>\n    \n</ng-template>\n"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      }, {
        autoplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        accessibilityLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        activeIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        baseCssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class']
        }],
        accessibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autopauseDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AemAngularCoreWcmComponentsCarouselV1, {
        declarations: function declarations() {
          return [CarouselV1Component];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_6__["SpaAngularEditableComponentsModule"], _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_2__["AemAngularCoreSpaWcmComponentsCore"]];
        },
        exports: function exports() {
          return [CarouselV1Component];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AemAngularCoreWcmComponentsCarouselV1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_6__["SpaAngularEditableComponentsModule"], _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_2__["AemAngularCoreSpaWcmComponentsCore"]],
          declarations: [CarouselV1Component],
          exports: [CarouselV1Component],
          entryComponents: [CarouselV1Component]
        }]
      }], null, null);
    })();
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     ~ Copyright 2020 Adobe Systems Incorporated
     ~
     ~ Licensed under the Apache License, Version 2.0 (the "License");
     ~ you may not use this file except in compliance with the License.
     ~ You may obtain a copy of the License at
     ~
     ~     http://www.apache.org/licenses/LICENSE-2.0
     ~
     ~ Unless required by applicable law or agreed to in writing, software
     ~ distributed under the License is distributed on an "AS IS" BASIS,
     ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     ~ See the License for the specific language governing permissions and
     ~ limitations under the License.
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=adobe-aem-core-components-angular-spa-containers-carousel-v1.js.map

    /***/

  }
}]);
//# sourceMappingURL=adobe-aem-core-components-angular-spa-containers-carousel-v1-es5.js.map