(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{261:function(t,e,n){"use strict";var l={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},r=n(30),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),e("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: ".concat(t.scrollBtn?"block":"none"),attrs:{href:"#"},on:{click:t.scrollTop}},[e("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"site-footer"},[e("div",{staticClass:"site-footer_farm_image"},[e("img",{attrs:{src:"/assets/images/resources/site-footer-farm.png",alt:"Farm Image"}})]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-xl-4 col-lg-4 col-md-6"},[e("div",{staticClass:"footer-widget__column footer-widget__about wow fadeInUp",attrs:{"data-wow-delay":"100ms"}},[e("div",{staticClass:"footer-widget__title"},[e("h3",[t._v("About")])]),t._v(" "),e("div",{staticClass:"footer-widget_about_text"},[e("p",[t._v("Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat posuere dui. Pellentesque\n                venenatis sem non lacus ac auctor.")])])])]),t._v(" "),e("div",{staticClass:"col-xl-2 col-lg-2 col-md-6"},[e("div",{staticClass:"footer-widget__column footer-widget__link wow fadeInUp",attrs:{"data-wow-delay":"200ms"}},[e("div",{staticClass:"footer-widget__title"},[e("h3",[t._v("Explore")])]),t._v(" "),e("ul",{staticClass:"footer-widget__links-list list-unstyled"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("About Us")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Services")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Our Projects")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Meet the Farmers")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Latest News")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Contact")])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-lg-3 col-md-6"},[e("div",{staticClass:"footer-widget__column footer-widget__contact wow fadeInUp",attrs:{"data-wow-delay":"400ms"}},[e("div",{staticClass:"footer-widget__title"},[e("h3",[t._v("Contact")])]),t._v(" "),e("div",{staticClass:"footer-widget_contact"},[e("a",{attrs:{href:"mailto:needhelp@agrikol.com"}},[t._v("raja.zidaneiqbal@gmail.com")]),e("br"),t._v(" "),e("div",{staticClass:"site-footer__social"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-dribbble"})])])])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-footer_bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"site-footer_bottom_copyright"},[e("p",[t._v("@ All copyright 2024, "),e("a",{attrs:{href:"#"}},[t._v("Zidane Iqbal")])])]),t._v(" "),e("div",{staticClass:"site-footer_bottom_menu"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Terms of Use")])])])])])])}],!1,null,"6bd5c1fe",null);e.a=component.exports},262:function(t,e,n){"use strict";n(31),n(38),n(62),n(63),n(45),n(21),n(32);var l=n(23),r=n(39);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}var c={name:"Nav",data:function(){return{sticky:!1,mobileToggle:!1}},computed:{searchPopup:function(){return this.$store.state.searchPopupStatus}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}},Object(r.b)({searchPopupStatusChange:"changeSearchPopupStatus"}))},_=c,v=n(30),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-header__header-one-wrap"},[t._m(0),t._v(" "),e("header",{staticClass:"main-nav__header-one"},[e("nav",{class:"header-navigation stricky clearfix ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"main-nav__left"},[e("a",{staticClass:"main-nav__search search-popup__toggler",attrs:{href:"#"},on:{click:t.searchPopupStatusChange}},[e("i",{staticClass:"icon-magnifying-glass"})]),t._v(" "),e("a",{staticClass:"side-menu__toggler",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})])]),t._v(" "),e("div",{staticClass:"main-nav__main-navigation"},[e("ul",{staticClass:"main-nav__navigation-box"},[e("li",{staticClass:"dropdown current"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index2"}},[t._v("Home 02")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index3"}},[t._v("Home 03")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index4"}},[t._v("Home 04")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index5"}},[t._v("Home 05")])],1),t._v(" "),e("li",{staticClass:"dropdown"},[e("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/index"}},[t._v("Header 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index2"}},[t._v("Header 02")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index3"}},[t._v("Header 03")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index4"}},[t._v("Header 04")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index5"}},[t._v("Header 05")])],1)])])])],1),t._v(" "),e("li",{staticClass:"dropdown"},[e("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/service-detail"}},[t._v("Services Detail")])],1)])],1),t._v(" "),e("li",{staticClass:"dropdown"},[e("nuxt-link",{attrs:{to:"/projects"}},[t._v("Our Projects")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/projects_detail"}},[t._v("Projects Detail")])],1)])],1),t._v(" "),e("li",{staticClass:"dropdown"},[e("nuxt-link",{attrs:{to:"#"}},[t._v("Shop")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/product"}},[t._v("Products")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product-detail"}},[t._v("Product Detail")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1)])],1),t._v(" "),e("li",{staticClass:"dropdown"},[e("nuxt-link",{attrs:{to:"#"}},[t._v("Pages")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/why_choose_us"}},[t._v("Why Choose Us")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/farmers"}},[t._v("Farmers")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1)])],1),t._v(" "),e("li",{staticClass:"dropdown"},[e("nuxt-link",{attrs:{to:"#"}},[t._v("News")]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/news"}},[t._v("News")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/news_detail"}},[t._v("News Details")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._v(" "),e("div",{staticClass:"main-nav__right"},[e("div",{staticClass:"icon_cart_box"},[e("nuxt-link",{attrs:{to:"/cart"}},[e("span",{staticClass:"icon-shopping-cart"})])],1)])])]),t._v(" "),e("nav",{staticClass:"mobile-nav__container",style:"display: ".concat(t.mobileToggle?"block":"none")},[e("ul",{staticClass:"main-nav__navigation-box"},[e("li",{staticClass:"dropdown current"},[t._m(1),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index2"}},[t._v("Home 02")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index3"}},[t._v("Home 03")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index4"}},[t._v("Home 04")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index5"}},[t._v("Home 05")])],1),t._v(" "),e("li",{staticClass:"dropdown"},[t._m(2),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Header 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index2"}},[t._v("Header 02")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index3"}},[t._v("Header 03")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index4"}},[t._v("Header 04")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index5"}},[t._v("Header 05")])],1)])])])]),t._v(" "),e("li",{staticClass:"dropdown"},[t._m(3),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/service-detail"}},[t._v("Services Detail")])],1)])]),t._v(" "),e("li",{staticClass:"dropdown"},[t._m(4),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/projects_detail"}},[t._v("Projects Detail")])],1)])]),t._v(" "),e("li",{staticClass:"dropdown"},[t._m(5),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/product"}},[t._v("Products")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/product-detail"}},[t._v("Product Detail")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1)])]),t._v(" "),e("li",{staticClass:"dropdown"},[t._m(6),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/why_choose_us"}},[t._v("Why Choose Us")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/farmers"}},[t._v("Farmers")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1)])]),t._v(" "),e("li",{staticClass:"dropdown"},[t._m(7),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/news"}},[t._v("News")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/news_detail"}},[t._v("News Details")])],1)])]),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"topbar-one"},[e("div",{staticClass:"topbar_bg",staticStyle:{"background-image":"url(/assets/images/shapes/header-bg.png)"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"topbar-one__left"},[e("a",{attrs:{href:"mailto:needhelp@tripo.com"}},[e("span",{staticClass:"icon-message"}),t._v("needhelp@agrikol.com")]),t._v(" "),e("a",{attrs:{href:"tel:666-999-0000"}},[e("span",{staticClass:"icon-phone-call"}),t._v("666 888 0000")])]),t._v(" "),e("div",{staticClass:"topbar-one__middle"},[e("a",{staticClass:"main-nav__logo",attrs:{href:"/"}},[e("img",{staticClass:"main-logo",attrs:{src:"/assets/images/resources/logo.png",alt:"Awesome Image"}})])]),t._v(" "),e("div",{staticClass:"topbar-one__right"},[e("div",{staticClass:"topbar-one__social"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-dribbble"})])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Home"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n                Header Versions"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Services"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Our Projects"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Shop"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Pages"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            News"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])}],!1,null,"0f4346fd",null);e.a=component.exports},263:function(t,e,n){"use strict";var l={name:"PageHeader",props:{title:{type:String}}},r=n(30),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-header",staticStyle:{"background-image":"url(/assets/images/backgrounds/page-header-contact.jpg)"}},[e("div",{staticClass:"container"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"thm-breadcrumb list-unstyled"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("span",[t._v(t._s(t.title))])])])])])}),[],!1,null,"d0c76da0",null);e.a=component.exports},288:function(t,e,n){"use strict";n.r(e);var l=n(262),r=n(263),o=n(261),c={name:"ProjectDetail"},_=n(30),v={components:{ProjectDetail:Object(_.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"project_detail"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12"},[e("div",{staticClass:"project_detail_image"},[e("img",{attrs:{src:"/assets/images/project/project-detail-img-1.jpg",alt:""}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-8 col-lg-7"},[e("div",{staticClass:"project_detail_left_content"},[e("div",{staticClass:"harvest_innovations_detail"},[e("h2",[t._v("Harvest Innovations")]),t._v(" "),e("p",[t._v("There are many variations of passages of psum available, but the majority have\n              suffered alteration in some form, by injected humour, or randomised words which\n              don't look even slightly believable. If you are going to use a passage of Lorem\n              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of\n              text. Fustered impressive manifest crud opened inside owing punitively around\n              forewent and after wasteful telling sprang coldly and spoke less clients. Squid\n              hesitantly preparatory gibbered some tyran nically talkative jepers crud decore\n              recteque philosophia eumuas.")]),t._v(" "),e("p",{staticClass:"harvest_innovations_detail_bottom_text"},[t._v("Beyond more stoic this along goodness\n              hey this this wow manatee mongoose one as since a far flustered impressive manifest\n              far crud opened inside owing punitively around forewent and after wasteful telling\n              sprang coldly and spoke less clients. Squid hesitantly preparatory gibbered some\n              tyran nically talkative jeepers crud.")])]),t._v(" "),e("div",{staticClass:"project_challenges"},[e("h2",[t._v("Project challenges")]),t._v(" "),e("ul",{staticClass:"list-unstyled project_challenges_box"},[e("li",[e("div",{staticClass:"project_challenges_icon"},[e("span",{staticClass:"icon-growth"})]),t._v(" "),e("div",{staticClass:"project_challenges_content"},[e("h4",[t._v("Attract and retain quality high paying customers")]),t._v(" "),e("p",[t._v("Lorem ipsum is simply free text used by copytyping refreshing. Neque\n                    porro est qui dolorem ipsum quia quaed inventore veritatis et quasi\n                    architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis\n                    enim var sed efficitur turpis gilla sed sit amet finibus eros.")])])]),t._v(" "),e("li",[e("div",{staticClass:"project_challenges_icon"},[e("span",{staticClass:"icon-temperature"})]),t._v(" "),e("div",{staticClass:"project_challenges_content"},[e("h4",[t._v("Attract and retain quality high paying customers")]),t._v(" "),e("p",[t._v("Lorem ipsum is simply free text used by copytyping refreshing. Neque\n                    porro est qui dolorem ipsum quia quaed inventore veritatis et quasi\n                    architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis\n                    enim var sed efficitur turpis gilla sed sit amet finibus eros.")])])])])]),t._v(" "),e("div",{staticClass:"project_detail_last_text"},[e("p",[t._v("Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui\n              dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta\n              sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit\n              amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting\n              industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s,\n              when an unknown printer took a galley of type and scrambled it to make a type\n              specimen book. It has survived not only five centuries. ")])])])]),t._v(" "),e("div",{staticClass:"col-xl-4 col-lg-5"},[e("div",{staticClass:"project_information_box"},[e("h3",[t._v("Project information")]),t._v(" "),e("ul",{staticClass:"project_information_list list-unstyled"},[e("li",[e("span",[t._v("Date:")]),t._v("06 Nov, 2019")]),t._v(" "),e("li",[e("span",[t._v("Client:")]),t._v("Themeforest, Envato")]),t._v(" "),e("li",[e("span",[t._v("Website:")]),t._v("agrikol.com")]),t._v(" "),e("li",[e("span",[t._v("Location:")]),t._v("New York, USA")]),t._v(" "),e("li",[e("span",[t._v("Value:")]),t._v("$25,60000")])]),t._v(" "),e("div",{staticClass:"project_information__social"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-dribbble"})])])])])])])])}],!1,null,"047d7b16",null).exports,Footer:o.a,PageHeader:r.a,Nav:l.a},head:function(){return{title:"Agrikol  | Project Detail"}}},d=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("Nav"),t._v(" "),e("PageHeader",{attrs:{title:"Project Detail"}}),t._v(" "),e("ProjectDetail"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=d.exports}}]);