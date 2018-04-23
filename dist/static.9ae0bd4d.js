(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement(
    'div',
    { className: 'home-container' },
    _react2.default.createElement(
      'div',
      { className: 'home-text-container' },
      _react2.default.createElement(
        'h1',
        { style: { textAlign: 'center', padding: '0px', margin: '0px' } },
        'DEVELOPER'
      ),
      _react2.default.createElement(
        'span',
        { className: 'home-text-container-location' },
        'SANTA BARBARA, CA'
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-links' },
        _react2.default.createElement(
          'div',
          { className: 'home-link' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/about', className: 'home-link-text', style: { backgroundColor: 'black', color: 'white' } },
            'LEARN MORE'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'home-link' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/portfolio', className: 'home-link-text', style: { backgroundColor: '#cf000f' } },
            'VIEW PORTFOLIO'
          )
        )
      )
    )
  );
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement(
    'div',
    { className: 'about-container' },
    _react2.default.createElement(
      'div',
      { className: 'about-header', style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { fontSize: '30px', paddingTop: '0px' } : null : null },
      'WHAT I DO'
    ),
    _react2.default.createElement(
      'div',
      { className: 'about-section-container' },
      _react2.default.createElement(
        'div',
        { className: 'about-section-content' },
        _react2.default.createElement(
          'div',
          { className: 'about-section-header-container', style: typeof window !== 'undefined' ? window.innerWidth < 950 ? null : { width: '170px' } : null },
          _react2.default.createElement(
            'div',
            { style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { float: 'left', marginBottom: '5px' } : { float: 'right' } : null },
            'BACKGROUND'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'about-section-text', style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '100%', fontSize: '16px' } : {} : null },
          _react2.default.createElement(
            'span',
            null,
            'I\u2019m a frontend software developer and 3rd year student at UC Santa Barbara set to graduate from the College of Engineering in 2019 with a B.S. in Computer Science.',
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            'As a frontend developer, I stradle the border between engineering and design, combining the latest technologies with modern design standards to build sleek web apps. To ensure my work delivers a solid user experience, I focus on to develop engaging, responsive interfaces with an emphasis on simplicity.',
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            'I\u2019m currently available for work and am actively seeking an internship that will put my JavaScript abilities to the test and help me become a better software engineer. If your team needs an open-minded problem solver with a strong backgound in JavaScript, I\'m your guy.'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'about-section-container' },
      _react2.default.createElement(
        'div',
        { className: 'about-section-content' },
        _react2.default.createElement(
          'div',
          { className: 'about-section-header-container', style: typeof window !== 'undefined' ? window.innerWidth < 950 ? null : { width: '170px' } : null },
          _react2.default.createElement(
            'div',
            { style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { float: 'left', marginBottom: '5px' } : { float: 'right' } : null },
            'SKILLS'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'about-section-text', style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '100%', fontSize: '16px', justifyContent: 'center' } : null : null },
          _react2.default.createElement(
            'ul',
            { className: 'skills-content' },
            _react2.default.createElement(
              'li',
              { className: 'skills-column' },
              _react2.default.createElement(
                'div',
                { className: 'skills-header' },
                'LANGUAGES'
              ),
              _react2.default.createElement(
                'div',
                { className: 'skills-list' },
                _react2.default.createElement(
                  'span',
                  null,
                  'JavaScript (ES6)',
                  _react2.default.createElement('br', null),
                  'Ruby',
                  _react2.default.createElement('br', null),
                  'Java',
                  _react2.default.createElement('br', null),
                  'HTML',
                  _react2.default.createElement('br', null),
                  'CSS'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'skills-column' },
              _react2.default.createElement(
                'div',
                { className: 'skills-header' },
                'FRAMEWORKS'
              ),
              _react2.default.createElement(
                'div',
                { className: 'skills-list' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Node.js',
                  _react2.default.createElement('br', null),
                  'React.js',
                  _react2.default.createElement('br', null),
                  'Express.js',
                  _react2.default.createElement('br', null),
                  'Leaflet.js',
                  _react2.default.createElement('br', null),
                  'Ruby on Rails'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'skills-column', style: typeof window !== 'undefined' ? window.innerWidth < 530 ? { marginTop: '10px' } : null : null },
              _react2.default.createElement(
                'div',
                { className: 'skills-header' },
                'TOOLS'
              ),
              _react2.default.createElement(
                'div',
                { className: 'skills-list' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Git & GitHub',
                  _react2.default.createElement('br', null),
                  'Google Maps API',
                  _react2.default.createElement('br', null),
                  'Bash',
                  _react2.default.createElement('br', null),
                  'Webpack',
                  _react2.default.createElement('br', null),
                  'Chrome DevTools'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'skills-column', style: typeof window !== 'undefined' ? window.innerWidth < 646 ? { marginTop: '10px' } : {} : null },
              _react2.default.createElement(
                'div',
                { className: 'skills-header' },
                'Miscellaneous'
              ),
              _react2.default.createElement(
                'div',
                { className: 'skills-list' },
                _react2.default.createElement(
                  'span',
                  null,
                  'GIS',
                  _react2.default.createElement('br', null),
                  'Sketch',
                  _react2.default.createElement('br', null),
                  'Mapbox Studio'
                )
              )
            )
          )
        )
      )
    )
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _ucsbMapImage = __webpack_require__(31);

var _ucsbMapImage2 = _interopRequireDefault(_ucsbMapImage);

var _ucsbMapMacImage = __webpack_require__(32);

var _ucsbMapMacImage2 = _interopRequireDefault(_ucsbMapMacImage);

var _ucsbMapIphoneImage = __webpack_require__(33);

var _ucsbMapIphoneImage2 = _interopRequireDefault(_ucsbMapIphoneImage);

var _ivEmergencyDispatchImage = __webpack_require__(34);

var _ivEmergencyDispatchImage2 = _interopRequireDefault(_ivEmergencyDispatchImage);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement(
    'div',
    { className: 'portfolio-container' },
    _react2.default.createElement(
      'div',
      { className: 'portfolio-header', style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { fontSize: '30px', paddingTop: '0px' } : null : null },
      'WHAT I MAKE'
    ),
    _react2.default.createElement(
      'div',
      { style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '100%', textAlign: 'center' } : { float: 'right' } : null },
      _react2.default.createElement('img', { id: 'portfolio-image', src: _ucsbMapMacImage2.default, style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '350px', textAlign: 'center' } : { width: '600px' } : null })
    ),
    _react2.default.createElement(
      'div',
      { style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '100%', textAlign: 'center' } : null : null },
      _react2.default.createElement('img', { id: 'portfolio-image', src: _ucsbMapIphoneImage2.default, style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '350px', textAlign: 'center' } : null : null })
    ),
    _react2.default.createElement(
      'div',
      { style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '100%', textAlign: 'center' } : null : null },
      _react2.default.createElement('img', { id: 'portfolio-image', src: _ivEmergencyDispatchImage2.default, style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { width: '350px', textAlign: 'center' } : { width: '600px' } : null })
    )
  );
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement(
    'div',
    { className: 'resume-container' },
    _react2.default.createElement(
      'div',
      { className: 'resume-content' },
      _react2.default.createElement(
        'div',
        { className: 'resume-header' },
        'TY GOOCH'
      ),
      _react2.default.createElement(
        'div',
        { className: 'resume-contact-info' },
        _react2.default.createElement(
          'div',
          { className: 'resume-contact' },
          _react2.default.createElement('i', { className: 'fas fa-mobile-alt' }),
          _react2.default.createElement(
            'span',
            { className: 'phone-number' },
            '(805) 705-6502'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'resume-contact' },
          _react2.default.createElement('i', { className: 'far fa-envelope-open' }),
          _react2.default.createElement(
            'span',
            null,
            'gooch.ty@gmail.com'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'resume-contact' },
          _react2.default.createElement('i', { className: 'fas fa-home' }),
          _react2.default.createElement(
            'span',
            null,
            'Santa Barbara, CA'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'resume-body' },
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'projects' },
          _react2.default.createElement(
            'div',
            { className: 'body-header' },
            'PROJECTS'
          ),
          _react2.default.createElement('div', { className: 'body-header-line' }),
          _react2.default.createElement(
            'ul',
            { className: 'list' },
            _react2.default.createElement(
              'li',
              null,
              'UCSBMap.com \u2014 Interactive online map of the UCSB campus',
              _react2.default.createElement(
                'ul',
                { className: 'sublist' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Full stack web app built with Java Spring, MongoDB, React/Redux and Leaflet.js'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Used open source GIS resources to collect highly accurate GeoJSON data of UCSB buildings and interiors'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Developed chrome extension UCSB Map For GOLD that allows students to easily view their className locations on ucsbmap.com with one click from their online schedule'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              'Isla Vista Emergency Map \u2014 Emergency dispatch visualization with live updates',
              _react2.default.createElement(
                'ul',
                { className: 'sublist' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Full stack JavaScipt web app built with Express.js, Twitter API, and MongoDB on the backend and React/Redux and Google Maps API on the frontend'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Server side JavaScipt runs a Twitter livestream, parsing tweets to store emergency data'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Used Python to scrape 94,000 tweets, allowing users to view all emergencies in Isla Vista since March 2009'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              'Caltrain Live \u2014 Map of real time CalTrain vehicle locations',
              _react2.default.createElement(
                'ul',
                { className: 'sublist' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Uses JavaScript, jQuery, and Leaflet to add an interactive layer to Google Maps tiles'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Client side JavaScript determines approximate geographic locations of trains'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              'Cockatune \u2014 Spotify inspired full stack music app',
              _react2.default.createElement(
                'ul',
                { className: 'sublist' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Full stack web app built with Rails, JavaScript, and React/Redux with custom frontend user authentication and a single page workflow'
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'skills' },
          _react2.default.createElement(
            'div',
            { className: 'body-header' },
            'SKILLS'
          ),
          _react2.default.createElement('div', { className: 'body-header-line' }),
          _react2.default.createElement(
            'ul',
            { className: 'list' },
            _react2.default.createElement(
              'li',
              null,
              'JavaScript (ES6), jQuery'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Node.js'
            ),
            _react2.default.createElement(
              'li',
              null,
              'React.js, Redux'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Express.js'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Ruby, Ruby on Rails'
            ),
            _react2.default.createElement(
              'li',
              null,
              'MongoDB, PostgreSQL'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Leaflet.js, Google Maps'
            ),
            _react2.default.createElement(
              'li',
              null,
              'GIS'
            ),
            _react2.default.createElement(
              'li',
              null,
              'HTML, CSS'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'education' },
          _react2.default.createElement(
            'div',
            { className: 'body-header' },
            'EDUCATION'
          ),
          _react2.default.createElement('div', { className: 'body-header-line' }),
          _react2.default.createElement(
            'ul',
            { className: 'list' },
            _react2.default.createElement(
              'li',
              null,
              'UC Santa Barbara \u2014 Computer Science Engineering (2019)',
              _react2.default.createElement(
                'ul',
                { className: 'sublist' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Pursing B.S. degree. Coursework includes Python/C++ programming, data structures and algorithms, computer architecture, assembly language, and discrete mathematics'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              'App Academy (2017)',
              _react2.default.createElement(
                'ul',
                { className: 'sublist' },
                _react2.default.createElement(
                  'li',
                  null,
                  "1000-hour full-stack web development course with <5% acceptance rate. Coursework included JavaScript, React.js, Rails, scalability, algorithms, and single-page apps"
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'work-experience' },
          _react2.default.createElement(
            'div',
            { className: 'body-header' },
            'WORK EXPERIENCE'
          ),
          _react2.default.createElement('div', { className: 'body-header-line' }),
          _react2.default.createElement(
            'ul',
            { className: 'list' },
            _react2.default.createElement(
              'li',
              null,
              'The Guilfordian - Social Justice Editor/Web Developer (2014)',
              _react2.default.createElement(
                'ul',
                { className: 'sublist' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Helped manage a team of 18 writers. Created, pitched, and edited social justice oriented articles for Guilford College\u2019s student paper. Built and maintained Guilford College\u2019s social justice website using WordPress and CSS3. Awarded Most Outstanding College Newspaper by the American Scholastic Press Association in 2014.'
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'resume-footer' },
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/tygooch' },
          _react2.default.createElement(
            'i',
            { className: 'fab fa-github' },
            _react2.default.createElement(
              'span',
              null,
              'github.com/tygooch'
            )
          )
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://linkedin.com/in/tygooch' },
          _react2.default.createElement(
            'i',
            { className: 'fab fa-linkedin' },
            _react2.default.createElement(
              'span',
              null,
              'linkedin.com/in/tygooch'
            )
          )
        )
      ),
      _react2.default.createElement('br', null)
    )
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement(
    'div',
    { className: 'contact-container' },
    _react2.default.createElement(
      'div',
      { className: 'contact-header', style: typeof window !== 'undefined' ? window.innerWidth < 950 ? { fontSize: '30px', paddingTop: '0px' } : null : null },
      'HOW TO REACH ME'
    )
  );
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _d3Ease = __webpack_require__(14);

var _reactMove = __webpack_require__(15);

var _recompose = __webpack_require__(16);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHotLoader = __webpack_require__(17);

var _styledComponents = __webpack_require__(18);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactParticlesJs = __webpack_require__(19);

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

var _reactStaticRoutes = __webpack_require__(20);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _ScrollToTop = __webpack_require__(38);

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _logo = __webpack_require__(39);

var _logo2 = _interopRequireDefault(_logo);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import logoImage from './assets/personalLogoNew.svg'


// The magic :)
var AnimatedRoutes = (0, _recompose.getContext)({
  // We have to preserve the router context for each route
  // otherwise, a component may rerender with the wrong data
  // during animation
  router: _propTypes2.default.object,
  // We'll also look for the staticURL, so we can disable the animation during static render
  staticURL: _propTypes2.default.string
})(function (_ref) {
  var getComponentForPath = _ref.getComponentForPath,
      router = _ref.router,
      staticURL = _ref.staticURL;
  return _react2.default.createElement(_reactStatic.Route, {
    path: '*',
    render: function render(props) {
      // Get the component for this path
      var Comp = getComponentForPath((0, _reactStatic.cleanPath)(props.location.pathname));
      if (!Comp) {
        Comp = getComponentForPath('404');
      }

      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          _react2.default.createElement(
            'div',
            { style: { position: 'relative', height: '100%', width: 'inherit' } },
            _react2.default.createElement(Comp, props)
          )
        );
      }
      // console.log('path');
      // console.log(props.location.pathname);
      // let pathIndex
      // if(props.location.pathname === '/home')
      //   pathIndex = 0
      // if(props.location.pathname === '/about')
      //   pathIndex = 1
      // if(props.location.pathname === '/portfolio')
      //   pathIndex = 2
      // if(props.location.pathname === '/resume')
      //   pathIndex = 3
      // if(props.location.pathname === '/contact')
      //   pathIndex = 4
      //
      // console.log(pathIndex);
      // console.log('prevpath');
      //
      // console.log(props.location.state.prevPath);
      // let prevPathIndex
      // if(props.location.state.prevPath === '/home')
      //   prevPathIndex = 0
      // if(props.location.state.prevPath === '/about')
      //   prevPathIndex = 1
      // if(props.location.state.prevPath === '/portfolio')
      //   prevPathIndex = 2
      // if(props.location.state.prevPath === '/resume')
      //   prevPathIndex = 3
      // if(props.location.state.prevPath === '/contact')
      //   prevPathIndex = 4
      //
      // console.log(prevPathIndex);
      // console.log('===========');

      // Use React-Move to animate the different components coming in and out
      return _react2.default.createElement(
        _reactMove.NodeGroup
        // React-move will handle the entry and exit of any items we pass in `data`
        ,
        { data: [{
            // pass the current Comp, props, ID and router
            id: props.location.pathname,
            Comp: Comp,
            props: props,
            router: router
          }],
          keyAccessor: function keyAccessor(d) {
            return d.id;
          },
          start: function start(data) {
            return {
              opacity: [0]
              // translateY: [`100vh`],
            };
          },
          enter: function enter() {
            return {
              opacity: [1],
              translateY: ['0px'],
              timing: { duration: 650, delay: 650 }
            };
          },
          update: function update() {
            return {
              opacity: [1]
              // translateY: ['100%']
            };
          },
          leave: function leave(data) {
            return {
              opacity: [0],
              // translateY: [`100vh`],
              timing: { duration: 650 }
            };
          }
        },
        function (nodes) {
          return _react2.default.createElement(
            'div',
            { style: { position: 'relative', height: 'inherit', width: '100%' } },
            nodes.map(function (_ref2) {
              var key = _ref2.key,
                  data = _ref2.data,
                  _ref2$state = _ref2.state,
                  opacity = _ref2$state.opacity,
                  translateY = _ref2$state.translateY;

              // Here, we override the router context with the one that was
              // passed with each route
              var PreservedRouterContext = (0, _recompose.withContext)({
                router: _propTypes2.default.object
              }, function () {
                return {
                  router: data.router
                };
              })(function (props) {
                return _react2.default.createElement('div', props);
              });

              return _react2.default.createElement(
                PreservedRouterContext,
                {
                  key: key,
                  style: {
                    position: 'relative',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    transform: 'translateY(' + translateY + ')',
                    opacity: opacity
                    // height: '100%',
                    // width: '100%',
                  }
                },
                _react2.default.createElement(data.Comp, data.props)
              );
            })
          );
        }
      );
    }
  });
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      isMobile: typeof window !== 'undefined' ? window.innerWidth <= 700 ? true : false : false,
      prevPath: 'poop'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined') window.addEventListener("resize", this.handleResize.bind(this));

      this.handleResize();
    }
  }, {
    key: 'isMobile',
    value: function isMobile() {
      if (typeof window !== 'undefined') return window.innerWidth <= 700;
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      if (typeof window !== 'undefined') this.setState({ isMobile: window.innerWidth <= 700 ? true : false });
    }
  }, {
    key: 'getPathIndex',
    value: function getPathIndex(path) {
      if (path === '/home') return 0;
      if (path === '/about') return 1;
      if (path === '/portfolio') return 2;
      if (path === '/resume') return 3;
      if (path === '/contact') return 4;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        { type: 'browser' },
        _react2.default.createElement(
          'div',
          { className: 'app-container' },
          _react2.default.createElement(
            'nav',
            { className: 'header' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: { pathname: "/" }, exact: true, activeClassName: 'header-logo-active', className: 'header-logo' },
              _react2.default.createElement('img', { src: _logo2.default, alt: '' })
            ),
            _react2.default.createElement(
              'nav',
              { className: 'header-links', style: this.isMobile() ? { top: '64.5px', width: 'calc(100vw - 30px)', maxWidth: '600px', alignSelf: 'center', minWidth: '300px', paddingBottom: '6px', paddingLeft: '15px', paddingRight: '15px' } : null },
              _react2.default.createElement(
                _reactStatic.Link,
                { key: 0, to: { pathname: "/about" }, className: 'header-link', activeStyle: { width: 'auto', height: 'inherit' }, style: { marginRight: this.isMobile() ? '0px' : '0px' } },
                _react2.default.createElement(
                  'span',
                  { className: 'header-link-text' },
                  'ABOUT'
                )
              ),
              _react2.default.createElement(
                _reactStatic.Link,
                { to: { pathname: "/portfolio" }, className: 'header-link', activeStyle: { width: 'auto', height: 'inherit' }, style: { marginRight: this.isMobile() ? '0px' : '0px' } },
                _react2.default.createElement(
                  'span',
                  { className: 'header-link-text' },
                  'PORTFOLIO'
                )
              ),
              _react2.default.createElement(
                _reactStatic.Link,
                { to: { pathname: "/resume" }, className: 'header-link', activeStyle: { width: 'auto', height: 'inherit' }, style: { marginRight: this.isMobile() ? '0px' : '0px' } },
                _react2.default.createElement(
                  'span',
                  { className: 'header-link-text' },
                  'RESUME'
                )
              ),
              _react2.default.createElement(
                _reactStatic.Link,
                { to: { pathname: "/contact" }, className: 'header-link', activeStyle: { width: 'auto', height: 'inherit' }, style: { marginRight: this.isMobile() ? '0px' : '0px' } },
                _react2.default.createElement(
                  'span',
                  { className: 'header-link-text' },
                  'CONTACT'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'nav',
                { className: 'social-links' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://github.com/tygooch', className: 'social-link' },
                  _react2.default.createElement('i', { className: 'fab fa-github' })
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'https://linkedin.com/in/tygooch', className: 'social-link' },
                  _react2.default.createElement('i', { className: 'fab fa-linkedin-in' })
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'https://facebook.com/tybradleygooch', className: 'social-link' },
                  _react2.default.createElement('i', { className: 'fab fa-facebook-f' })
                )
              )
            )
          ),
          _react2.default.createElement(_reactParticlesJs2.default, {
            className: 'particles',
            canvasClassName: 'particles-canvas',
            width: '100vw',
            height: '100vh',
            style: {
              width: '100vw',
              height: this.isMobile() ? 'calc(100% - 87px)' : 'calc(100% - 66px)',
              position: 'fixed',
              top: this.isMobile() ? '87px' : '66px',
              left: '0px',
              zIndex: -1,
              opacity: 1
            },
            params: { "fps_limit": 60, "particles": { "number": { "value": typeof window !== 'undefined' ? window.innerWidth / 400 * 30 : 60, "density": { "enable": false, "value_area": 400 } }, "color": { "value": "#000000" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 1, "random": false }, "line_linked": { "enable": true, "distance": 224, "color": "#000000", "opacity": 0.5, "width": 0.32 }, "move": { "enable": true, "speed": 0.75, "direction": "none", "random": true, "straight": false, "out_mode": "bounce", "bounce": true, "attract": { "enable": false, "rotateX": -100, "rotateY": -100 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize": false }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.66 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }
          }),
          _react2.default.createElement(
            'div',
            { className: 'content', style: this.isMobile() ? { top: '86px' } : null },
            _react2.default.createElement(_reactStaticRoutes2.default, { component: AnimatedRoutes })
          ),
          _react2.default.createElement('div', { className: 'scroll-fade-bottom' })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-move");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(21);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(22);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(23);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _reactUniversalComponent = __webpack_require__(25);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/Home/Home',
  file: '/Users/tygooch/Documents/Projects/personal-site/personal-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/components/Home/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/Home/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/components/Home/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/About/About',
  file: '/Users/tygooch/Documents/Projects/personal-site/personal-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/components/About/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/About/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/components/About/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/Portfolio/Portfolio',
  file: '/Users/tygooch/Documents/Projects/personal-site/personal-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/components/Portfolio/Portfolio', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/Portfolio/Portfolio');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/components/Portfolio/Portfolio';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/Resume/Resume',
  file: '/Users/tygooch/Documents/Projects/personal-site/personal-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/components/Resume/Resume', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/Resume/Resume');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/components/Resume/Resume';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/Contact/Contact',
  file: '/Users/tygooch/Documents/Projects/personal-site/personal-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/components/Contact/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/Contact/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/components/Contact/Contact';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/404/404',
  file: '/Users/tygooch/Documents/Projects/personal-site/personal-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/components/404/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/404/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/components/404/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 5

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(26);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(27);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ucsbMapImage.da0df95a.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ucsbMapMacImage.385a60e6.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ucsbMapIphoneImage.ec379873.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ivEmergencyDispatchImage.db870335.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _reactStatic = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToTop = function (_Component) {
    _inherits(ScrollToTop, _Component);

    function ScrollToTop() {
        _classCallCheck(this, ScrollToTop);

        return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
    }

    _createClass(ScrollToTop, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.location !== prevProps.location) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children;
        }
    }]);

    return ScrollToTop;
}(_react.Component);

exports.default = (0, _reactStatic.withRouter)(ScrollToTop);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjgycHgiIGhlaWdodD0iMTEzcHgiIHZpZXdCb3g9IjAgMCAyODIgMTEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4xICg1MTE0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJMb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMzkuNzUsMCBMMzkuNzUsOC40IEwyNS4xMjUsOC40IEwyNS4xMjUsNTIuOTUgTDE0LjU1LDUyLjk1IEwxNC41NSw4LjQgTDAsOC40IEwwLDAgTDM5Ljc1LDAgWiBNODguMjc1LDAgTDcwLjM1LDM0LjQyNSBMNzAuMzUsNTIuOTUgTDU5LjcsNTIuOTUgTDU5LjcsMzQuNDI1IEw0MS43LDAgTDUzLjg1LDAgTDY1LjEsMjMuMTc1IEw3Ni4zNSwwIEw4OC4yNzUsMCBaIiBpZD0iLVRZLSIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjQ0YwMDBGIiBwb2ludHM9IjI4MiA0NC4wNSAyODIgNTIuODI1IDg4LjI3NSA1Mi44MjUgODguMjc1IDQ0LjA1Ij48L3BvbHlnb24+CiAgICAgICAgPHBhdGggZD0iTTI5LjU3NSw1OC41MjUgQzM2LjAyNTAzMjMsNTguNTI1IDQxLjM3NDk3ODgsNjAuMTEyNDg0MSA0NS42MjUsNjMuMjg3NSBDNDkuODc1MDIxMyw2Ni40NjI1MTU5IDUyLjU5OTk5NCw3MC43NDk5NzMgNTMuOCw3Ni4xNSBMNDIuNyw3Ni4xNSBDNDEuNjQ5OTk0OCw3My43NDk5ODggMzkuOTg3NTExNCw3MS44Mzc1MDcxIDM3LjcxMjUsNzAuNDEyNSBDMzUuNDM3NDg4Niw2OC45ODc0OTI5IDMyLjc1MDAxNTUsNjguMjc1IDI5LjY1LDY4LjI3NSBDMjYuNTk5OTg0OCw2OC4yNzUgMjMuOTAwMDExOCw2OC45NzQ5OTMgMjEuNTUsNzAuMzc1IEMxOS4xOTk5ODgzLDcxLjc3NTAwNyAxNy4zNzUwMDY1LDczLjc3NDk4NyAxNi4wNzUsNzYuMzc1IEMxNC43NzQ5OTM1LDc4Ljk3NTAxMyAxNC4xMjUsODIuMDI0OTgyNSAxNC4xMjUsODUuNTI1IEMxNC4xMjUsOTEuMDc1MDI3OCAxNS42MTI0ODUxLDk1LjM5OTk4NDUgMTguNTg3NSw5OC41IEMyMS41NjI1MTQ5LDEwMS42MDAwMTYgMjUuNjI0OTc0MywxMDMuMTUgMzAuNzc1LDEwMy4xNSBDMzQuNTc1MDE5LDEwMy4xNSAzNy44Mzc0ODY0LDEwMi4wMjUwMTEgNDAuNTYyNSw5OS43NzUgQzQzLjI4NzUxMzYsOTcuNTI0OTg4OCA0NS4wNDk5OTYsOTQuNDAwMDIgNDUuODUsOTAuNCBMMjcuOTI1LDkwLjQgTDI3LjkyNSw4Mi44MjUgTDU0LjcsODIuODI1IEw1NC43LDkzLjAyNSBDNTMuOTQ5OTk2Myw5Ni41MjUwMTc1IDUyLjQ4NzUxMDksOTkuNzQ5OTg1MiA1MC4zMTI1LDEwMi43IEM0OC4xMzc0ODkxLDEwNS42NTAwMTUgNDUuMjg3NTE3NiwxMDguMDEyNDkxIDQxLjc2MjUsMTA5Ljc4NzUgQzM4LjIzNzQ4MjQsMTExLjU2MjUwOSAzNC4yMDAwMjI4LDExMi40NSAyOS42NSwxMTIuNDUgQzI0LjQ0OTk3NCwxMTIuNDUgMTkuODYyNTE5OSwxMTEuMzEyNTExIDE1Ljg4NzUsMTA5LjAzNzUgQzExLjkxMjQ4MDEsMTA2Ljc2MjQ4OSA4LjgzNzUxMDg3LDEwMy41ODc1MiA2LjY2MjUsOTkuNTEyNSBDNC40ODc0ODkxMiw5NS40Mzc0Nzk2IDMuNCw5MC43NzUwMjYyIDMuNCw4NS41MjUgQzMuNCw4MC4yNzQ5NzM3IDQuNDg3NDg5MTIsNzUuNjEyNTIwNCA2LjY2MjUsNzEuNTM3NSBDOC44Mzc1MTA4Nyw2Ny40NjI0Nzk2IDExLjg5OTk4MDMsNjQuMjc1MDExNSAxNS44NSw2MS45NzUgQzE5LjgwMDAxOTcsNTkuNjc0OTg4NSAyNC4zNzQ5NzQsNTguNTI1IDI5LjU3NSw1OC41MjUgWiBNODcuNDc1LDU4LjMgQzkyLjQyNTAyNDcsNTguMyA5Ni45MTI0Nzk5LDU5LjQ0OTk4ODUgMTAwLjkzNzUsNjEuNzUgQzEwNC45NjI1Miw2NC4wNTAwMTE1IDEwOC4xMzc0ODgsNjcuMjYyNDc5NCAxMTAuNDYyNSw3MS4zODc1IEMxMTIuNzg3NTEyLDc1LjUxMjUyMDYgMTEzLjk1LDgwLjE3NDk3NCAxMTMuOTUsODUuMzc1IEMxMTMuOTUsOTAuNTc1MDI2IDExMi43ODc1MTIsOTUuMjQ5OTc5MiAxMTAuNDYyNSw5OS40IEMxMDguMTM3NDg4LDEwMy41NTAwMjEgMTA0Ljk2MjUyLDEwNi43NzQ5ODkgMTAwLjkzNzUsMTA5LjA3NSBDOTYuOTEyNDc5OSwxMTEuMzc1MDExIDkyLjQyNTAyNDcsMTEyLjUyNSA4Ny40NzUsMTEyLjUyNSBDODIuNTI0OTc1MiwxMTIuNTI1IDc4LjAzNzUyMDEsMTExLjM3NTAxMSA3NC4wMTI1LDEwOS4wNzUgQzY5Ljk4NzQ3OTksMTA2Ljc3NDk4OSA2Ni44MTI1MTE2LDEwMy41NTAwMjEgNjQuNDg3NSw5OS40IEM2Mi4xNjI0ODg0LDk1LjI0OTk3OTIgNjEsOTAuNTc1MDI2IDYxLDg1LjM3NSBDNjEsODAuMTc0OTc0IDYyLjE2MjQ4ODQsNzUuNTEyNTIwNiA2NC40ODc1LDcxLjM4NzUgQzY2LjgxMjUxMTYsNjcuMjYyNDc5NCA2OS45ODc0Nzk5LDY0LjA1MDAxMTUgNzQuMDEyNSw2MS43NSBDNzguMDM3NTIwMSw1OS40NDk5ODg1IDgyLjUyNDk3NTIsNTguMyA4Ny40NzUsNTguMyBaIE04Ny40NzUsNjguMDUgQzg0LjM3NDk4NDUsNjguMDUgODEuNjUwMDExNyw2OC43NDk5OTMgNzkuMyw3MC4xNSBDNzYuOTQ5OTg4Miw3MS41NTAwMDcgNzUuMTEyNTA2Niw3My41NjI0ODY5IDczLjc4NzUsNzYuMTg3NSBDNzIuNDYyNDkzNCw3OC44MTI1MTMxIDcxLjgsODEuODc0OTgyNSA3MS44LDg1LjM3NSBDNzEuOCw4OC44NzUwMTc1IDcyLjQ2MjQ5MzQsOTEuOTM3NDg2OSA3My43ODc1LDk0LjU2MjUgQzc1LjExMjUwNjYsOTcuMTg3NTEzMSA3Ni45NDk5ODgyLDk5LjE5OTk5MyA3OS4zLDEwMC42IEM4MS42NTAwMTE3LDEwMi4wMDAwMDcgODQuMzc0OTg0NSwxMDIuNyA4Ny40NzUsMTAyLjcgQzkwLjU3NTAxNTUsMTAyLjcgOTMuMjk5OTg4MiwxMDIuMDAwMDA3IDk1LjY1LDEwMC42IEM5OC4wMDAwMTE3LDk5LjE5OTk5MyA5OS44Mzc0OTM0LDk3LjE4NzUxMzEgMTAxLjE2MjUsOTQuNTYyNSBDMTAyLjQ4NzUwNyw5MS45Mzc0ODY5IDEwMy4xNSw4OC44NzUwMTc1IDEwMy4xNSw4NS4zNzUgQzEwMy4xNSw4MS44NzQ5ODI1IDEwMi40ODc1MDcsNzguODEyNTEzMSAxMDEuMTYyNSw3Ni4xODc1IEM5OS44Mzc0OTM0LDczLjU2MjQ4NjkgOTguMDAwMDExNyw3MS41NTAwMDcgOTUuNjUsNzAuMTUgQzkzLjI5OTk4ODIsNjguNzQ5OTkzIDkwLjU3NTAxNTUsNjguMDUgODcuNDc1LDY4LjA1IFogTTE0Ni43MjUsNTguMyBDMTUxLjY3NTAyNSw1OC4zIDE1Ni4xNjI0OCw1OS40NDk5ODg1IDE2MC4xODc1LDYxLjc1IEMxNjQuMjEyNTIsNjQuMDUwMDExNSAxNjcuMzg3NDg4LDY3LjI2MjQ3OTQgMTY5LjcxMjUsNzEuMzg3NSBDMTcyLjAzNzUxMiw3NS41MTI1MjA2IDE3My4yLDgwLjE3NDk3NCAxNzMuMiw4NS4zNzUgQzE3My4yLDkwLjU3NTAyNiAxNzIuMDM3NTEyLDk1LjI0OTk3OTIgMTY5LjcxMjUsOTkuNCBDMTY3LjM4NzQ4OCwxMDMuNTUwMDIxIDE2NC4yMTI1MiwxMDYuNzc0OTg5IDE2MC4xODc1LDEwOS4wNzUgQzE1Ni4xNjI0OCwxMTEuMzc1MDExIDE1MS42NzUwMjUsMTEyLjUyNSAxNDYuNzI1LDExMi41MjUgQzE0MS43NzQ5NzUsMTEyLjUyNSAxMzcuMjg3NTIsMTExLjM3NTAxMSAxMzMuMjYyNSwxMDkuMDc1IEMxMjkuMjM3NDgsMTA2Ljc3NDk4OSAxMjYuMDYyNTEyLDEwMy41NTAwMjEgMTIzLjczNzUsOTkuNCBDMTIxLjQxMjQ4OCw5NS4yNDk5NzkyIDEyMC4yNSw5MC41NzUwMjYgMTIwLjI1LDg1LjM3NSBDMTIwLjI1LDgwLjE3NDk3NCAxMjEuNDEyNDg4LDc1LjUxMjUyMDYgMTIzLjczNzUsNzEuMzg3NSBDMTI2LjA2MjUxMiw2Ny4yNjI0Nzk0IDEyOS4yMzc0OCw2NC4wNTAwMTE1IDEzMy4yNjI1LDYxLjc1IEMxMzcuMjg3NTIsNTkuNDQ5OTg4NSAxNDEuNzc0OTc1LDU4LjMgMTQ2LjcyNSw1OC4zIFogTTE0Ni43MjUsNjguMDUgQzE0My42MjQ5ODUsNjguMDUgMTQwLjkwMDAxMiw2OC43NDk5OTMgMTM4LjU1LDcwLjE1IEMxMzYuMTk5OTg4LDcxLjU1MDAwNyAxMzQuMzYyNTA3LDczLjU2MjQ4NjkgMTMzLjAzNzUsNzYuMTg3NSBDMTMxLjcxMjQ5Myw3OC44MTI1MTMxIDEzMS4wNSw4MS44NzQ5ODI1IDEzMS4wNSw4NS4zNzUgQzEzMS4wNSw4OC44NzUwMTc1IDEzMS43MTI0OTMsOTEuOTM3NDg2OSAxMzMuMDM3NSw5NC41NjI1IEMxMzQuMzYyNTA3LDk3LjE4NzUxMzEgMTM2LjE5OTk4OCw5OS4xOTk5OTMgMTM4LjU1LDEwMC42IEMxNDAuOTAwMDEyLDEwMi4wMDAwMDcgMTQzLjYyNDk4NSwxMDIuNyAxNDYuNzI1LDEwMi43IEMxNDkuODI1MDE2LDEwMi43IDE1Mi41NDk5ODgsMTAyLjAwMDAwNyAxNTQuOSwxMDAuNiBDMTU3LjI1MDAxMiw5OS4xOTk5OTMgMTU5LjA4NzQ5Myw5Ny4xODc1MTMxIDE2MC40MTI1LDk0LjU2MjUgQzE2MS43Mzc1MDcsOTEuOTM3NDg2OSAxNjIuNCw4OC44NzUwMTc1IDE2Mi40LDg1LjM3NSBDMTYyLjQsODEuODc0OTgyNSAxNjEuNzM3NTA3LDc4LjgxMjUxMzEgMTYwLjQxMjUsNzYuMTg3NSBDMTU5LjA4NzQ5Myw3My41NjI0ODY5IDE1Ny4yNTAwMTIsNzEuNTUwMDA3IDE1NC45LDcwLjE1IEMxNTIuNTQ5OTg4LDY4Ljc0OTk5MyAxNDkuODI1MDE2LDY4LjA1IDE0Ni43MjUsNjguMDUgWiBNMjA1LjA3NSw1OC41MjUgQzIxMS42NzUwMzMsNTguNTI1IDIxNy4xNDk5NzgsNjAuMjI0OTgzIDIyMS41LDYzLjYyNSBDMjI1Ljg1MDAyMiw2Ny4wMjUwMTcgMjI4LjcyNDk5Myw3MS42NDk5NzA3IDIzMC4xMjUsNzcuNSBMMjE5LjAyNSw3Ny41IEMyMTcuODc0OTk0LDc0LjY0OTk4NTcgMjE2LjA4NzUxMiw3Mi40MDAwMDgyIDIxMy42NjI1LDcwLjc1IEMyMTEuMjM3NDg4LDY5LjA5OTk5MTcgMjA4LjMyNTAxNyw2OC4yNzUgMjA0LjkyNSw2OC4yNzUgQzIwMi4xMjQ5ODYsNjguMjc1IDE5OS42MDAwMTEsNjguOTc0OTkzIDE5Ny4zNSw3MC4zNzUgQzE5NS4wOTk5ODksNzEuNzc1MDA3IDE5My4zNTAwMDYsNzMuNzc0OTg3IDE5Mi4xLDc2LjM3NSBDMTkwLjg0OTk5NCw3OC45NzUwMTMgMTkwLjIyNSw4Mi4wMjQ5ODI1IDE5MC4yMjUsODUuNTI1IEMxOTAuMjI1LDg4Ljk3NTAxNzMgMTkwLjg0OTk5NCw5MS45OTk5ODcgMTkyLjEsOTQuNiBDMTkzLjM1MDAwNiw5Ny4yMDAwMTMgMTk1LjA5OTk4OSw5OS4xOTk5OTMgMTk3LjM1LDEwMC42IEMxOTkuNjAwMDExLDEwMi4wMDAwMDcgMjAyLjEyNDk4NiwxMDIuNyAyMDQuOTI1LDEwMi43IEMyMDguMzI1MDE3LDEwMi43IDIxMS4yMzc0ODgsMTAxLjg3NTAwOCAyMTMuNjYyNSwxMDAuMjI1IEMyMTYuMDg3NTEyLDk4LjU3NDk5MTggMjE3Ljg3NDk5NCw5Ni4zMjUwMTQzIDIxOS4wMjUsOTMuNDc1IEwyMzAuMTI1LDkzLjQ3NSBDMjI4LjcyNDk5Myw5OS4zMjUwMjkzIDIyNS44NTAwMjIsMTAzLjk0OTk4MyAyMjEuNSwxMDcuMzUgQzIxNy4xNDk5NzgsMTEwLjc1MDAxNyAyMTEuNjc1MDMzLDExMi40NSAyMDUuMDc1LDExMi40NSBDMjAwLjAyNDk3NSwxMTIuNDUgMTk1LjU2MjUxOSwxMTEuMzEyNTExIDE5MS42ODc1LDEwOS4wMzc1IEMxODcuODEyNDgxLDEwNi43NjI0ODkgMTg0LjgxMjUxMSwxMDMuNTc1MDIgMTgyLjY4NzUsOTkuNDc1IEMxODAuNTYyNDg5LDk1LjM3NDk3OTUgMTc5LjUsOTAuNzI1MDI2IDE3OS41LDg1LjUyNSBDMTc5LjUsODAuMjc0OTczNyAxODAuNTYyNDg5LDc1LjYwMDAyMDUgMTgyLjY4NzUsNzEuNSBDMTg0LjgxMjUxMSw2Ny4zOTk5Nzk1IDE4Ny43OTk5ODEsNjQuMjEyNTExNCAxOTEuNjUsNjEuOTM3NSBDMTk1LjUwMDAxOSw1OS42NjI0ODg2IDE5OS45NzQ5NzUsNTguNTI1IDIwNS4wNzUsNTguNTI1IFogTTI4MS45NSw1OS4wNSBMMjgxLjk1LDExMiBMMjcxLjMsMTEyIEwyNzEuMyw4OC45NzUgTDI0OC42NSw4OC45NzUgTDI0OC42NSwxMTIgTDIzOC4wNzUsMTEyIEwyMzguMDc1LDU5LjA1IEwyNDguNjUsNTkuMDUgTDI0OC42NSw4MC41IEwyNzEuMyw4MC41IEwyNzEuMyw1OS4wNSBMMjgxLjk1LDU5LjA1IFoiIGlkPSJHT09DSCIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.9ae0bd4d.js.map