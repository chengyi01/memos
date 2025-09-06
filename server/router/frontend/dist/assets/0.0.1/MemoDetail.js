import { p as createLucideIcon, a as useNavigateTo, j as jsxRuntimeExports, c as cn, a_ as extractMemoIdFromName, a$ as MemoRelation_Type, u as useTranslate, b0 as Memo_Property, b1 as Link, b2 as CircleCheckBig, b3 as CodeXml, b4 as Hash, aW as useLocation, b5 as Sheet, b6 as SheetTrigger, B as Button, b7 as SheetContent, o as observer, l as useResponsiveWidth, Q as useParams, f as useCurrentUser, r as memoStore, b8 as memoNamePrefix, e as c$2, n as MobileHeader, G as Link$1, M as MemoView, b9 as MemoEditor } from "./index.js";
import { r as reactExports, R as React } from "./leaflet-vendor.js";
import { e as select, aU as pointer, aV as timer, aW as dispatch, aX as quadtree, P as ordinal, aY as schemePaired, aZ as drag, a_ as transform, a$ as sum, b0 as zoom, aA as min$1, aB as max$1 } from "./mermaid-vendor.js";
import { L as debounce, M as throttle, g as getDefaultExportFromCjs, J as isEqual } from "./utils-vendor.js";
import { M as MessageCircle } from "./message-circle.js";
import "./katex-vendor.js";
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 6h10", key: "9lnwnk" }],
  ["path", { d: "M6 12h9", key: "1g9pqf" }],
  ["path", { d: "M11 18h7", key: "c8dzvl" }]
];
const ChartNoAxesGantt = createLucideIcon("chart-no-axes-gantt", __iconNode$1);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M2 8V2h6", key: "hiwtdz" }],
  ["path", { d: "m2 2 10 10", key: "1oh8rs" }],
  ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }]
];
const CircleArrowOutUpLeft = createLucideIcon("circle-arrow-out-up-left", __iconNode);
function _iterableToArrayLimit$5(arr, i2) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i2) {
        if (Object(_i) !== _i) return;
        _n = false;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i2); _n = true) ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$5(arr, i2) {
  return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i2) || _unsupportedIterableToArray$6(arr, i2) || _nonIterableRest$5();
}
function _toConsumableArray$4(arr) {
  return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$6(arr) || _nonIterableSpread$4();
}
function _arrayWithoutHoles$4(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$6(arr);
}
function _arrayWithHoles$5(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray$4(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray$6(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray$6(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$6(o2, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _nonIterableSpread$4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive$4(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey$4(arg) {
  var key = _toPrimitive$4(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var omit = function omit2(obj, keys) {
  var keySet = new Set(keys);
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray$4(Object.entries(obj).filter(function(_ref2) {
    var _ref3 = _slicedToArray$5(_ref2, 1), key = _ref3[0];
    return !keySet.has(key);
  }).map(function(_ref4) {
    var _ref5 = _slicedToArray$5(_ref4, 2), key = _ref5[0], val = _ref5[1];
    return _defineProperty$2({}, key, val);
  }))));
};
function _arrayLikeToArray$5(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _arrayWithHoles$4(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles$3(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray$5(r2);
}
function _iterableToArray$3(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit$4(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$4(r2, e2) {
  return _arrayWithHoles$4(r2) || _iterableToArrayLimit$4(r2, e2) || _unsupportedIterableToArray$5(r2, e2) || _nonIterableRest$4();
}
function _toConsumableArray$3(r2) {
  return _arrayWithoutHoles$3(r2) || _iterableToArray$3(r2) || _unsupportedIterableToArray$5(r2) || _nonIterableSpread$3();
}
function _unsupportedIterableToArray$5(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray$5(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$5(r2, a2) : void 0;
  }
}
function index$5(kapsuleComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$wrapperElementTy = _ref.wrapperElementType, wrapperElementType = _ref$wrapperElementTy === void 0 ? "div" : _ref$wrapperElementTy, _ref$nodeMapper = _ref.nodeMapper, nodeMapper = _ref$nodeMapper === void 0 ? function(node) {
    return node;
  } : _ref$nodeMapper, _ref$methodNames = _ref.methodNames, methodNames = _ref$methodNames === void 0 ? [] : _ref$methodNames, _ref$initPropNames = _ref.initPropNames, initPropNames = _ref$initPropNames === void 0 ? [] : _ref$initPropNames;
  return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var domEl = reactExports.useRef();
    var comp = reactExports.useMemo(function() {
      var configOptions = Object.fromEntries(initPropNames.filter(function(p2) {
        return props.hasOwnProperty(p2);
      }).map(function(prop) {
        return [prop, props[prop]];
      }));
      return kapsuleComponent(configOptions);
    }, []);
    useEffectOnce(function() {
      comp(nodeMapper(domEl.current));
    }, reactExports.useLayoutEffect);
    useEffectOnce(function() {
      return comp._destructor instanceof Function ? comp._destructor : void 0;
    });
    var _call = reactExports.useCallback(
      function(method) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return comp[method] instanceof Function ? comp[method].apply(comp, args) : void 0;
      },
      [comp]
    );
    var prevPropsRef = reactExports.useRef({});
    Object.keys(omit(props, [].concat(_toConsumableArray$3(methodNames), _toConsumableArray$3(initPropNames)))).filter(function(p2) {
      return prevPropsRef.current[p2] !== props[p2];
    }).forEach(function(p2) {
      return _call(p2, props[p2]);
    });
    prevPropsRef.current = props;
    reactExports.useImperativeHandle(ref, function() {
      return Object.fromEntries(methodNames.map(function(method) {
        return [method, function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _call.apply(void 0, [method].concat(args));
        }];
      }));
    }, [_call]);
    return /* @__PURE__ */ React.createElement(wrapperElementType, {
      ref: domEl
    });
  });
}
function useEffectOnce(effect) {
  var useEffectFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : reactExports.useEffect;
  var destroyFunc = reactExports.useRef();
  var effectCalled = reactExports.useRef(false);
  var renderAfterCalled = reactExports.useRef(false);
  var _useState = reactExports.useState(0), _useState2 = _slicedToArray$4(_useState, 2);
  _useState2[0];
  var setVal = _useState2[1];
  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }
  useEffectFn(function() {
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }
    setVal(function(val) {
      return val + 1;
    });
    return function() {
      if (!renderAfterCalled.current) return;
      if (destroyFunc.current) destroyFunc.current();
    };
  }, []);
}
var Easing = Object.freeze({
  Linear: Object.freeze({
    None: function(amount) {
      return amount;
    },
    In: function(amount) {
      return amount;
    },
    Out: function(amount) {
      return amount;
    },
    InOut: function(amount) {
      return amount;
    }
  }),
  Quadratic: Object.freeze({
    In: function(amount) {
      return amount * amount;
    },
    Out: function(amount) {
      return amount * (2 - amount);
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount;
      }
      return -0.5 * (--amount * (amount - 2) - 1);
    }
  }),
  Cubic: Object.freeze({
    In: function(amount) {
      return amount * amount * amount;
    },
    Out: function(amount) {
      return --amount * amount * amount + 1;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount + 2);
    }
  }),
  Quartic: Object.freeze({
    In: function(amount) {
      return amount * amount * amount * amount;
    },
    Out: function(amount) {
      return 1 - --amount * amount * amount * amount;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount;
      }
      return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
    }
  }),
  Quintic: Object.freeze({
    In: function(amount) {
      return amount * amount * amount * amount * amount;
    },
    Out: function(amount) {
      return --amount * amount * amount * amount * amount + 1;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
    }
  }),
  Sinusoidal: Object.freeze({
    In: function(amount) {
      return 1 - Math.sin((1 - amount) * Math.PI / 2);
    },
    Out: function(amount) {
      return Math.sin(amount * Math.PI / 2);
    },
    InOut: function(amount) {
      return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
    }
  }),
  Exponential: Object.freeze({
    In: function(amount) {
      return amount === 0 ? 0 : Math.pow(1024, amount - 1);
    },
    Out: function(amount) {
      return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
    },
    InOut: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      if ((amount *= 2) < 1) {
        return 0.5 * Math.pow(1024, amount - 1);
      }
      return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
    }
  }),
  Circular: Object.freeze({
    In: function(amount) {
      return 1 - Math.sqrt(1 - amount * amount);
    },
    Out: function(amount) {
      return Math.sqrt(1 - --amount * amount);
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
    }
  }),
  Elastic: Object.freeze({
    In: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
    },
    Out: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      amount *= 2;
      if (amount < 1) {
        return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
      }
      return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
    }
  }),
  Back: Object.freeze({
    In: function(amount) {
      var s2 = 1.70158;
      return amount === 1 ? 1 : amount * amount * ((s2 + 1) * amount - s2);
    },
    Out: function(amount) {
      var s2 = 1.70158;
      return amount === 0 ? 0 : --amount * amount * ((s2 + 1) * amount + s2) + 1;
    },
    InOut: function(amount) {
      var s2 = 1.70158 * 1.525;
      if ((amount *= 2) < 1) {
        return 0.5 * (amount * amount * ((s2 + 1) * amount - s2));
      }
      return 0.5 * ((amount -= 2) * amount * ((s2 + 1) * amount + s2) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(amount) {
      return 1 - Easing.Bounce.Out(1 - amount);
    },
    Out: function(amount) {
      if (amount < 1 / 2.75) {
        return 7.5625 * amount * amount;
      } else if (amount < 2 / 2.75) {
        return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
      } else if (amount < 2.5 / 2.75) {
        return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
      } else {
        return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
      }
    },
    InOut: function(amount) {
      if (amount < 0.5) {
        return Easing.Bounce.In(amount * 2) * 0.5;
      }
      return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(power) {
    if (power === void 0) {
      power = 4;
    }
    power = power < Number.EPSILON ? Number.EPSILON : power;
    power = power > 1e4 ? 1e4 : power;
    return {
      In: function(amount) {
        return Math.pow(amount, power);
      },
      Out: function(amount) {
        return 1 - Math.pow(1 - amount, power);
      },
      InOut: function(amount) {
        if (amount < 0.5) {
          return Math.pow(amount * 2, power) / 2;
        }
        return (1 - Math.pow(2 - amount * 2, power)) / 2 + 0.5;
      }
    };
  }
});
var now = function() {
  return performance.now();
};
var Group = (
  /** @class */
  function() {
    function Group2() {
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      this._tweens = {};
      this._tweensAddedDuringUpdate = {};
      this.add.apply(this, tweens);
    }
    Group2.prototype.getAll = function() {
      var _this = this;
      return Object.keys(this._tweens).map(function(tweenId) {
        return _this._tweens[tweenId];
      });
    };
    Group2.prototype.removeAll = function() {
      this._tweens = {};
    };
    Group2.prototype.add = function() {
      var _a;
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      for (var _b = 0, tweens_1 = tweens; _b < tweens_1.length; _b++) {
        var tween = tweens_1[_b];
        (_a = tween._group) === null || _a === void 0 ? void 0 : _a.remove(tween);
        tween._group = this;
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
      }
    };
    Group2.prototype.remove = function() {
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      for (var _a = 0, tweens_2 = tweens; _a < tweens_2.length; _a++) {
        var tween = tweens_2[_a];
        tween._group = void 0;
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
      }
    };
    Group2.prototype.allStopped = function() {
      return this.getAll().every(function(tween) {
        return !tween.isPlaying();
      });
    };
    Group2.prototype.update = function(time, preserve) {
      if (time === void 0) {
        time = now();
      }
      if (preserve === void 0) {
        preserve = true;
      }
      var tweenIds = Object.keys(this._tweens);
      if (tweenIds.length === 0)
        return;
      while (tweenIds.length > 0) {
        this._tweensAddedDuringUpdate = {};
        for (var i2 = 0; i2 < tweenIds.length; i2++) {
          var tween = this._tweens[tweenIds[i2]];
          var autoStart = !preserve;
          if (tween && tween.update(time, autoStart) === false && !preserve)
            this.remove(tween);
        }
        tweenIds = Object.keys(this._tweensAddedDuringUpdate);
      }
    };
    return Group2;
  }()
);
var Interpolation = {
  Linear: function(v2, k2) {
    var m2 = v2.length - 1;
    var f2 = m2 * k2;
    var i2 = Math.floor(f2);
    var fn = Interpolation.Utils.Linear;
    if (k2 < 0) {
      return fn(v2[0], v2[1], f2);
    }
    if (k2 > 1) {
      return fn(v2[m2], v2[m2 - 1], m2 - f2);
    }
    return fn(v2[i2], v2[i2 + 1 > m2 ? m2 : i2 + 1], f2 - i2);
  },
  Utils: {
    Linear: function(p0, p1, t2) {
      return (p1 - p0) * t2 + p0;
    }
  }
};
var Sequence = (
  /** @class */
  function() {
    function Sequence2() {
    }
    Sequence2.nextId = function() {
      return Sequence2._nextId++;
    };
    Sequence2._nextId = 0;
    return Sequence2;
  }()
);
var mainGroup = new Group();
var Tween = (
  /** @class */
  function() {
    function Tween2(object, group) {
      this._isPaused = false;
      this._pauseStart = 0;
      this._valuesStart = {};
      this._valuesEnd = {};
      this._valuesStartRepeat = {};
      this._duration = 1e3;
      this._isDynamic = false;
      this._initialRepeat = 0;
      this._repeat = 0;
      this._yoyo = false;
      this._isPlaying = false;
      this._reversed = false;
      this._delayTime = 0;
      this._startTime = 0;
      this._easingFunction = Easing.Linear.None;
      this._interpolationFunction = Interpolation.Linear;
      this._chainedTweens = [];
      this._onStartCallbackFired = false;
      this._onEveryStartCallbackFired = false;
      this._id = Sequence.nextId();
      this._isChainStopped = false;
      this._propertiesAreSetUp = false;
      this._goToEnd = false;
      this._object = object;
      if (typeof group === "object") {
        this._group = group;
        group.add(this);
      } else if (group === true) {
        this._group = mainGroup;
        mainGroup.add(this);
      }
    }
    Tween2.prototype.getId = function() {
      return this._id;
    };
    Tween2.prototype.isPlaying = function() {
      return this._isPlaying;
    };
    Tween2.prototype.isPaused = function() {
      return this._isPaused;
    };
    Tween2.prototype.getDuration = function() {
      return this._duration;
    };
    Tween2.prototype.to = function(target, duration) {
      if (duration === void 0) {
        duration = 1e3;
      }
      if (this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      this._valuesEnd = target;
      this._propertiesAreSetUp = false;
      this._duration = duration < 0 ? 0 : duration;
      return this;
    };
    Tween2.prototype.duration = function(duration) {
      if (duration === void 0) {
        duration = 1e3;
      }
      this._duration = duration < 0 ? 0 : duration;
      return this;
    };
    Tween2.prototype.dynamic = function(dynamic) {
      if (dynamic === void 0) {
        dynamic = false;
      }
      this._isDynamic = dynamic;
      return this;
    };
    Tween2.prototype.start = function(time, overrideStartingValues) {
      if (time === void 0) {
        time = now();
      }
      if (overrideStartingValues === void 0) {
        overrideStartingValues = false;
      }
      if (this._isPlaying) {
        return this;
      }
      this._repeat = this._initialRepeat;
      if (this._reversed) {
        this._reversed = false;
        for (var property in this._valuesStartRepeat) {
          this._swapEndStartRepeatValues(property);
          this._valuesStart[property] = this._valuesStartRepeat[property];
        }
      }
      this._isPlaying = true;
      this._isPaused = false;
      this._onStartCallbackFired = false;
      this._onEveryStartCallbackFired = false;
      this._isChainStopped = false;
      this._startTime = time;
      this._startTime += this._delayTime;
      if (!this._propertiesAreSetUp || overrideStartingValues) {
        this._propertiesAreSetUp = true;
        if (!this._isDynamic) {
          var tmp = {};
          for (var prop in this._valuesEnd)
            tmp[prop] = this._valuesEnd[prop];
          this._valuesEnd = tmp;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, overrideStartingValues);
      }
      return this;
    };
    Tween2.prototype.startFromCurrentValues = function(time) {
      return this.start(time, true);
    };
    Tween2.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overrideStartingValues) {
      for (var property in _valuesEnd) {
        var startValue = _object[property];
        var startValueIsArray = Array.isArray(startValue);
        var propType = startValueIsArray ? "array" : typeof startValue;
        var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
        if (propType === "undefined" || propType === "function") {
          continue;
        }
        if (isInterpolationList) {
          var endValues = _valuesEnd[property];
          if (endValues.length === 0) {
            continue;
          }
          var temp = [startValue];
          for (var i2 = 0, l2 = endValues.length; i2 < l2; i2 += 1) {
            var value = this._handleRelativeValue(startValue, endValues[i2]);
            if (isNaN(value)) {
              isInterpolationList = false;
              console.warn("Found invalid interpolation list. Skipping.");
              break;
            }
            temp.push(value);
          }
          if (isInterpolationList) {
            _valuesEnd[property] = temp;
          }
        }
        if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
          _valuesStart[property] = startValueIsArray ? [] : {};
          var nestedObject = startValue;
          for (var prop in nestedObject) {
            _valuesStart[property][prop] = nestedObject[prop];
          }
          _valuesStartRepeat[property] = startValueIsArray ? [] : {};
          var endValues = _valuesEnd[property];
          if (!this._isDynamic) {
            var tmp = {};
            for (var prop in endValues)
              tmp[prop] = endValues[prop];
            _valuesEnd[property] = endValues = tmp;
          }
          this._setupProperties(nestedObject, _valuesStart[property], endValues, _valuesStartRepeat[property], overrideStartingValues);
        } else {
          if (typeof _valuesStart[property] === "undefined" || overrideStartingValues) {
            _valuesStart[property] = startValue;
          }
          if (!startValueIsArray) {
            _valuesStart[property] *= 1;
          }
          if (isInterpolationList) {
            _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
          } else {
            _valuesStartRepeat[property] = _valuesStart[property] || 0;
          }
        }
      }
    };
    Tween2.prototype.stop = function() {
      if (!this._isChainStopped) {
        this._isChainStopped = true;
        this.stopChainedTweens();
      }
      if (!this._isPlaying) {
        return this;
      }
      this._isPlaying = false;
      this._isPaused = false;
      if (this._onStopCallback) {
        this._onStopCallback(this._object);
      }
      return this;
    };
    Tween2.prototype.end = function() {
      this._goToEnd = true;
      this.update(this._startTime + this._duration);
      return this;
    };
    Tween2.prototype.pause = function(time) {
      if (time === void 0) {
        time = now();
      }
      if (this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = true;
      this._pauseStart = time;
      return this;
    };
    Tween2.prototype.resume = function(time) {
      if (time === void 0) {
        time = now();
      }
      if (!this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = false;
      this._startTime += time - this._pauseStart;
      this._pauseStart = 0;
      return this;
    };
    Tween2.prototype.stopChainedTweens = function() {
      for (var i2 = 0, numChainedTweens = this._chainedTweens.length; i2 < numChainedTweens; i2++) {
        this._chainedTweens[i2].stop();
      }
      return this;
    };
    Tween2.prototype.group = function(group) {
      if (!group) {
        console.warn("tween.group() without args has been removed, use group.add(tween) instead.");
        return this;
      }
      group.add(this);
      return this;
    };
    Tween2.prototype.remove = function() {
      var _a;
      (_a = this._group) === null || _a === void 0 ? void 0 : _a.remove(this);
      return this;
    };
    Tween2.prototype.delay = function(amount) {
      if (amount === void 0) {
        amount = 0;
      }
      this._delayTime = amount;
      return this;
    };
    Tween2.prototype.repeat = function(times) {
      if (times === void 0) {
        times = 0;
      }
      this._initialRepeat = times;
      this._repeat = times;
      return this;
    };
    Tween2.prototype.repeatDelay = function(amount) {
      this._repeatDelayTime = amount;
      return this;
    };
    Tween2.prototype.yoyo = function(yoyo) {
      if (yoyo === void 0) {
        yoyo = false;
      }
      this._yoyo = yoyo;
      return this;
    };
    Tween2.prototype.easing = function(easingFunction) {
      if (easingFunction === void 0) {
        easingFunction = Easing.Linear.None;
      }
      this._easingFunction = easingFunction;
      return this;
    };
    Tween2.prototype.interpolation = function(interpolationFunction) {
      if (interpolationFunction === void 0) {
        interpolationFunction = Interpolation.Linear;
      }
      this._interpolationFunction = interpolationFunction;
      return this;
    };
    Tween2.prototype.chain = function() {
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      this._chainedTweens = tweens;
      return this;
    };
    Tween2.prototype.onStart = function(callback) {
      this._onStartCallback = callback;
      return this;
    };
    Tween2.prototype.onEveryStart = function(callback) {
      this._onEveryStartCallback = callback;
      return this;
    };
    Tween2.prototype.onUpdate = function(callback) {
      this._onUpdateCallback = callback;
      return this;
    };
    Tween2.prototype.onRepeat = function(callback) {
      this._onRepeatCallback = callback;
      return this;
    };
    Tween2.prototype.onComplete = function(callback) {
      this._onCompleteCallback = callback;
      return this;
    };
    Tween2.prototype.onStop = function(callback) {
      this._onStopCallback = callback;
      return this;
    };
    Tween2.prototype.update = function(time, autoStart) {
      var _this = this;
      var _a;
      if (time === void 0) {
        time = now();
      }
      if (autoStart === void 0) {
        autoStart = Tween2.autoStartOnUpdate;
      }
      if (this._isPaused)
        return true;
      var property;
      if (!this._goToEnd && !this._isPlaying) {
        if (autoStart)
          this.start(time, true);
        else
          return false;
      }
      this._goToEnd = false;
      if (time < this._startTime) {
        return true;
      }
      if (this._onStartCallbackFired === false) {
        if (this._onStartCallback) {
          this._onStartCallback(this._object);
        }
        this._onStartCallbackFired = true;
      }
      if (this._onEveryStartCallbackFired === false) {
        if (this._onEveryStartCallback) {
          this._onEveryStartCallback(this._object);
        }
        this._onEveryStartCallbackFired = true;
      }
      var elapsedTime = time - this._startTime;
      var durationAndDelay = this._duration + ((_a = this._repeatDelayTime) !== null && _a !== void 0 ? _a : this._delayTime);
      var totalTime = this._duration + this._repeat * durationAndDelay;
      var calculateElapsedPortion = function() {
        if (_this._duration === 0)
          return 1;
        if (elapsedTime > totalTime) {
          return 1;
        }
        var timesRepeated = Math.trunc(elapsedTime / durationAndDelay);
        var timeIntoCurrentRepeat = elapsedTime - timesRepeated * durationAndDelay;
        var portion = Math.min(timeIntoCurrentRepeat / _this._duration, 1);
        if (portion === 0 && elapsedTime === _this._duration) {
          return 1;
        }
        return portion;
      };
      var elapsed = calculateElapsedPortion();
      var value = this._easingFunction(elapsed);
      this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
      if (this._onUpdateCallback) {
        this._onUpdateCallback(this._object, elapsed);
      }
      if (this._duration === 0 || elapsedTime >= this._duration) {
        if (this._repeat > 0) {
          var completeCount = Math.min(Math.trunc((elapsedTime - this._duration) / durationAndDelay) + 1, this._repeat);
          if (isFinite(this._repeat)) {
            this._repeat -= completeCount;
          }
          for (property in this._valuesStartRepeat) {
            if (!this._yoyo && typeof this._valuesEnd[property] === "string") {
              this._valuesStartRepeat[property] = // eslint-disable-next-line
              // @ts-ignore FIXME?
              this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
            }
            if (this._yoyo) {
              this._swapEndStartRepeatValues(property);
            }
            this._valuesStart[property] = this._valuesStartRepeat[property];
          }
          if (this._yoyo) {
            this._reversed = !this._reversed;
          }
          this._startTime += durationAndDelay * completeCount;
          if (this._onRepeatCallback) {
            this._onRepeatCallback(this._object);
          }
          this._onEveryStartCallbackFired = false;
          return true;
        } else {
          if (this._onCompleteCallback) {
            this._onCompleteCallback(this._object);
          }
          for (var i2 = 0, numChainedTweens = this._chainedTweens.length; i2 < numChainedTweens; i2++) {
            this._chainedTweens[i2].start(this._startTime + this._duration, false);
          }
          this._isPlaying = false;
          return false;
        }
      }
      return true;
    };
    Tween2.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
      for (var property in _valuesEnd) {
        if (_valuesStart[property] === void 0) {
          continue;
        }
        var start = _valuesStart[property] || 0;
        var end = _valuesEnd[property];
        var startIsArray = Array.isArray(_object[property]);
        var endIsArray = Array.isArray(end);
        var isInterpolationList = !startIsArray && endIsArray;
        if (isInterpolationList) {
          _object[property] = this._interpolationFunction(end, value);
        } else if (typeof end === "object" && end) {
          this._updateProperties(_object[property], start, end, value);
        } else {
          end = this._handleRelativeValue(start, end);
          if (typeof end === "number") {
            _object[property] = start + (end - start) * value;
          }
        }
      }
    };
    Tween2.prototype._handleRelativeValue = function(start, end) {
      if (typeof end !== "string") {
        return end;
      }
      if (end.charAt(0) === "+" || end.charAt(0) === "-") {
        return start + parseFloat(end);
      }
      return parseFloat(end);
    };
    Tween2.prototype._swapEndStartRepeatValues = function(property) {
      var tmp = this._valuesStartRepeat[property];
      var endValue = this._valuesEnd[property];
      if (typeof endValue === "string") {
        this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
      } else {
        this._valuesStartRepeat[property] = this._valuesEnd[property];
      }
      this._valuesEnd[property] = tmp;
    };
    Tween2.autoStartOnUpdate = false;
    return Tween2;
  }()
);
Sequence.nextId;
var TWEEN = mainGroup;
TWEEN.getAll.bind(TWEEN);
TWEEN.removeAll.bind(TWEEN);
TWEEN.add.bind(TWEEN);
TWEEN.remove.bind(TWEEN);
TWEEN.update.bind(TWEEN);
function _arrayLikeToArray$4(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _arrayWithHoles$3(r2) {
  if (Array.isArray(r2)) return r2;
}
function _classCallCheck$1(a2, n2) {
  if (!(a2 instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _createClass$1(e2, r2, t2) {
  return Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _iterableToArrayLimit$3(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$3(r2, e2) {
  return _arrayWithHoles$3(r2) || _iterableToArrayLimit$3(r2, e2) || _unsupportedIterableToArray$4(r2, e2) || _nonIterableRest$3();
}
function _unsupportedIterableToArray$4(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray$4(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$4(r2, a2) : void 0;
  }
}
var Prop = /* @__PURE__ */ _createClass$1(function Prop2(name, _ref) {
  var _ref$default = _ref["default"], defaultVal = _ref$default === void 0 ? null : _ref$default, _ref$triggerUpdate = _ref.triggerUpdate, triggerUpdate = _ref$triggerUpdate === void 0 ? true : _ref$triggerUpdate, _ref$onChange = _ref.onChange, onChange15 = _ref$onChange === void 0 ? function(newVal, state) {
  } : _ref$onChange;
  _classCallCheck$1(this, Prop2);
  this.name = name;
  this.defaultVal = defaultVal;
  this.triggerUpdate = triggerUpdate;
  this.onChange = onChange15;
});
function index$4(_ref2) {
  var _ref2$stateInit = _ref2.stateInit, stateInit3 = _ref2$stateInit === void 0 ? function() {
    return {};
  } : _ref2$stateInit, _ref2$props = _ref2.props, rawProps = _ref2$props === void 0 ? {} : _ref2$props, _ref2$methods = _ref2.methods, methods = _ref2$methods === void 0 ? {} : _ref2$methods, _ref2$aliases = _ref2.aliases, aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases, _ref2$init = _ref2.init, initFn = _ref2$init === void 0 ? function() {
  } : _ref2$init, _ref2$update = _ref2.update, updateFn2 = _ref2$update === void 0 ? function() {
  } : _ref2$update;
  var props = Object.keys(rawProps).map(function(propName) {
    return new Prop(propName, rawProps[propName]);
  });
  return function KapsuleComp() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var classMode = !!(this instanceof KapsuleComp ? this.constructor : void 0);
    var nodeElement = classMode ? args.shift() : void 0;
    var _args$ = args[0], options = _args$ === void 0 ? {} : _args$;
    var state = Object.assign(
      {},
      stateInit3 instanceof Function ? stateInit3(options) : stateInit3,
      // Support plain objects for backwards compatibility
      {
        initialised: false
      }
    );
    var changedProps = {};
    function comp(nodeElement2) {
      initStatic(nodeElement2, options);
      digest();
      return comp;
    }
    var initStatic = function initStatic2(nodeElement2, options2) {
      initFn.call(comp, nodeElement2, state, options2);
      state.initialised = true;
    };
    var digest = debounce(function() {
      if (!state.initialised) {
        return;
      }
      updateFn2.call(comp, state, changedProps);
      changedProps = {};
    }, 1);
    props.forEach(function(prop) {
      comp[prop.name] = getSetProp(prop);
      function getSetProp(_ref3) {
        var prop2 = _ref3.name, _ref3$triggerUpdate = _ref3.triggerUpdate, redigest = _ref3$triggerUpdate === void 0 ? false : _ref3$triggerUpdate, _ref3$onChange = _ref3.onChange, onChange15 = _ref3$onChange === void 0 ? function(newVal, state2) {
        } : _ref3$onChange, _ref3$defaultVal = _ref3.defaultVal, defaultVal = _ref3$defaultVal === void 0 ? null : _ref3$defaultVal;
        return function(_2) {
          var curVal = state[prop2];
          if (!arguments.length) {
            return curVal;
          }
          var val = _2 === void 0 ? defaultVal : _2;
          state[prop2] = val;
          onChange15.call(comp, val, state, curVal);
          !changedProps.hasOwnProperty(prop2) && (changedProps[prop2] = curVal);
          if (redigest) {
            digest();
          }
          return comp;
        };
      }
    });
    Object.keys(methods).forEach(function(methodName) {
      comp[methodName] = function() {
        var _methods$methodName;
        for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args2[_key2] = arguments[_key2];
        }
        return (_methods$methodName = methods[methodName]).call.apply(_methods$methodName, [comp, state].concat(args2));
      };
    });
    Object.entries(aliases).forEach(function(_ref4) {
      var _ref5 = _slicedToArray$3(_ref4, 2), alias = _ref5[0], target = _ref5[1];
      return comp[alias] = comp[target];
    });
    comp.resetProps = function() {
      props.forEach(function(prop) {
        comp[prop.name](prop.defaultVal);
      });
      return comp;
    };
    comp.resetProps();
    state._rerender = digest;
    classMode && nodeElement && comp(nodeElement);
    return comp;
  };
}
var index$3 = function(p2) {
  return typeof p2 === "function" ? p2 : typeof p2 === "string" ? function(obj) {
    return obj[p2];
  } : function(obj) {
    return p2;
  };
};
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};
  if (color instanceof tinycolor) {
    return color;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G2, B2;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R = RsRGB / 12.92;
    else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G2 = GsRGB / 12.92;
    else G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B2 = BsRGB / 12.92;
    else B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G2 + 0.0722 * B2;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h = Math.round(hsv.h * 360), s2 = Math.round(hsv.s * 100), v2 = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h + ", " + s2 + "%, " + v2 + "%)" : "hsva(" + h + ", " + s2 + "%, " + v2 + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h = Math.round(hsl.h * 360), s2 = Math.round(hsl.s * 100), l2 = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h + ", " + s2 + "%, " + l2 + "%)" : "hsla(" + h + ", " + s2 + "%, " + l2 + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s2 = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s2._r, s2._g, s2._b, s2._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color, opts) {
  if (_typeof$2(color) == "object") {
    var newColor = {};
    for (var i2 in color) {
      if (color.hasOwnProperty(i2)) {
        if (i2 === "a") {
          newColor[i2] = color[i2];
        } else {
          newColor[i2] = convertToPercentage(color[i2]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof$2(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
function rgbToRgb(r2, g2, b) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r2, g2, b) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b = bound01(b, 255);
  var max2 = Math.max(r2, g2, b), min2 = Math.min(r2, g2, b);
  var h, s2, l2 = (max2 + min2) / 2;
  if (max2 == min2) {
    h = s2 = 0;
  } else {
    var d2 = max2 - min2;
    s2 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
    switch (max2) {
      case r2:
        h = (g2 - b) / d2 + (g2 < b ? 6 : 0);
        break;
      case g2:
        h = (b - r2) / d2 + 2;
        break;
      case b:
        h = (r2 - g2) / d2 + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s: s2,
    l: l2
  };
}
function hslToRgb(h, s2, l2) {
  var r2, g2, b;
  h = bound01(h, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  function hue2rgb(p3, q3, t2) {
    if (t2 < 0) t2 += 1;
    if (t2 > 1) t2 -= 1;
    if (t2 < 1 / 6) return p3 + (q3 - p3) * 6 * t2;
    if (t2 < 1 / 2) return q3;
    if (t2 < 2 / 3) return p3 + (q3 - p3) * (2 / 3 - t2) * 6;
    return p3;
  }
  if (s2 === 0) {
    r2 = g2 = b = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p2 = 2 * l2 - q2;
    r2 = hue2rgb(p2, q2, h + 1 / 3);
    g2 = hue2rgb(p2, q2, h);
    b = hue2rgb(p2, q2, h - 1 / 3);
  }
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b * 255
  };
}
function rgbToHsv(r2, g2, b) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b = bound01(b, 255);
  var max2 = Math.max(r2, g2, b), min2 = Math.min(r2, g2, b);
  var h, s2, v2 = max2;
  var d2 = max2 - min2;
  s2 = max2 === 0 ? 0 : d2 / max2;
  if (max2 == min2) {
    h = 0;
  } else {
    switch (max2) {
      case r2:
        h = (g2 - b) / d2 + (g2 < b ? 6 : 0);
        break;
      case g2:
        h = (b - r2) / d2 + 2;
        break;
      case b:
        h = (r2 - g2) / d2 + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s: s2,
    v: v2
  };
}
function hsvToRgb(h, s2, v2) {
  h = bound01(h, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h), f2 = h - i2, p2 = v2 * (1 - s2), q2 = v2 * (1 - f2 * s2), t2 = v2 * (1 - (1 - f2) * s2), mod = i2 % 6, r2 = [v2, q2, p2, p2, t2, v2][mod], g2 = [t2, v2, v2, q2, p2, p2][mod], b = [p2, p2, t2, v2, v2, q2][mod];
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b * 255
  };
}
function rgbToHex(r2, g2, b, allow3Char) {
  var hex = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b).toString(16))];
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b, a2, allow4Char) {
  var hex = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a2))];
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function rgbaToArgbHex(r2, g2, b, a2) {
  var hex = [pad2(convertDecimalToHex(a2)), pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}
function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result = [tinycolor(color)];
  var step = 360 / number;
  for (var i2 = 1; i2 < number; i2++) {
    result.push(tinycolor({
      h: (hsl.h + i2 * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h = hsv.h, s2 = hsv.s, v2 = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h,
      s: s2,
      v: v2
    }));
    v2 = (v2 + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p2 = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
    a: (rgb2.a - rgb1.a) * p2 + rgb1.a
  };
  return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i2 = 0; i2 < colorList.length; i2++) {
    readability = tinycolor.readability(baseColor, colorList[i2]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i2]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip(names);
function flip(o2) {
  var flipped = {};
  for (var i2 in o2) {
    if (o2.hasOwnProperty(i2)) {
      flipped[o2[i2]] = i2;
    }
  }
  return flipped;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function bound01(n2, max2) {
  if (isOnePointZero(n2)) n2 = "100%";
  var processPercent = isPercentage(n2);
  n2 = Math.min(max2, Math.max(0, parseFloat(n2)));
  if (processPercent) {
    n2 = parseInt(n2 * max2, 10) / 100;
  }
  if (Math.abs(n2 - max2) < 1e-6) {
    return 1;
  }
  return n2 % max2 / parseFloat(max2);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n2) {
  return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") != -1;
}
function pad2(c2) {
  return c2.length == 1 ? "0" + c2 : "" + c2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    n2 = n2 * 100 + "%";
  }
  return n2;
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
var matchers = function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level,
    size
  };
}
function _arrayLikeToArray$3(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _arrayWithoutHoles$2(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray$3(r2);
}
function _assertClassBrand(e2, t2, n2) {
  if ("function" == typeof e2 ? e2 === t2 : e2.has(t2)) return arguments.length < 3 ? t2 : n2;
  throw new TypeError("Private element is not present on this object");
}
function _checkPrivateRedeclaration(e2, t2) {
  if (t2.has(e2)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a2, n2) {
  if (!(a2 instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s2, a2) {
  return s2.get(_assertClassBrand(s2, a2));
}
function _classPrivateFieldInitSpec(e2, t2, a2) {
  _checkPrivateRedeclaration(e2, t2), t2.set(e2, a2);
}
function _classPrivateFieldSet2(s2, a2, r2) {
  return s2.set(_assertClassBrand(s2, a2), r2), r2;
}
function _defineProperties(e2, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o2 = r2[t2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey$3(o2.key), o2);
  }
}
function _createClass(e2, r2, t2) {
  return r2 && _defineProperties(e2.prototype, r2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _iterableToArray$2(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$2(r2) {
  return _arrayWithoutHoles$2(r2) || _iterableToArray$2(r2) || _unsupportedIterableToArray$3(r2) || _nonIterableSpread$2();
}
function _toPrimitive$3(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t2);
}
function _toPropertyKey$3(t2) {
  var i2 = _toPrimitive$3(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _unsupportedIterableToArray$3(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray$3(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$3(r2, a2) : void 0;
  }
}
var ENTROPY = 123;
var int2HexColor = function int2HexColor2(num) {
  return "#".concat(Math.min(num, Math.pow(2, 24)).toString(16).padStart(6, "0"));
};
var rgb2Int = function rgb2Int2(r2, g2, b) {
  return (r2 << 16) + (g2 << 8) + b;
};
var colorStr2Int = function colorStr2Int2(str) {
  var _tinyColor$toRgb = tinycolor(str).toRgb(), r2 = _tinyColor$toRgb.r, g2 = _tinyColor$toRgb.g, b = _tinyColor$toRgb.b;
  return rgb2Int(r2, g2, b);
};
var checksum = function checksum2(n2, csBits) {
  return n2 * ENTROPY % Math.pow(2, csBits);
};
var _registry = /* @__PURE__ */ new WeakMap();
var _csBits = /* @__PURE__ */ new WeakMap();
var _default = /* @__PURE__ */ function() {
  function _default11() {
    var csBits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6;
    _classCallCheck(this, _default11);
    _classPrivateFieldInitSpec(this, _registry, void 0);
    _classPrivateFieldInitSpec(this, _csBits, void 0);
    _classPrivateFieldSet2(_csBits, this, csBits);
    this.reset();
  }
  return _createClass(_default11, [{
    key: "reset",
    value: function reset() {
      _classPrivateFieldSet2(_registry, this, ["__reserved for background__"]);
    }
  }, {
    key: "register",
    value: function register(obj) {
      if (_classPrivateFieldGet2(_registry, this).length >= Math.pow(2, 24 - _classPrivateFieldGet2(_csBits, this))) {
        return null;
      }
      var idx = _classPrivateFieldGet2(_registry, this).length;
      var cs = checksum(idx, _classPrivateFieldGet2(_csBits, this));
      var color = int2HexColor(idx + (cs << 24 - _classPrivateFieldGet2(_csBits, this)));
      _classPrivateFieldGet2(_registry, this).push(obj);
      return color;
    }
  }, {
    key: "lookup",
    value: function lookup(color) {
      if (!color) return null;
      var n2 = typeof color === "string" ? colorStr2Int(color) : rgb2Int.apply(void 0, _toConsumableArray$2(color));
      if (!n2) return null;
      var idx = n2 & Math.pow(2, 24 - _classPrivateFieldGet2(_csBits, this)) - 1;
      var cs = n2 >> 24 - _classPrivateFieldGet2(_csBits, this) & Math.pow(2, _classPrivateFieldGet2(_csBits, this)) - 1;
      if (checksum(idx, _classPrivateFieldGet2(_csBits, this)) !== cs || idx >= _classPrivateFieldGet2(_registry, this).length) return null;
      return _classPrivateFieldGet2(_registry, this)[idx];
    }
    // How many bits to reserve for checksum. Will eat away into the usable size of the registry.
  }]);
}();
var n, l, u, t$1, i, r, o, e, f, c$1, s, a$1, p = {}, v = [], y$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, w = Array.isArray;
function d(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t2) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m$1(l2, e2, i2, r2, null);
}
function m$1(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e2), e2;
}
function k(n2) {
  return n2.children;
}
function x$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, u2, t2, r2, o2, f2, c2, s2 = 1; i.length; ) i.length > s2 && i.sort(e), n2 = i.shift(), s2 = i.length, n2.__d && (t2 = void 0, o2 = (r2 = (u2 = n2).__v).__e, f2 = [], c2 = [], u2.__P && ((t2 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(t2), O(u2.__P, t2, r2, u2.__n, u2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f2, null == o2 ? S(r2) : o2, !!(32 & r2.__u), c2), t2.__v = r2.__v, t2.__.__k[t2.__i] = t2, N(f2, t2, c2), t2.__e != o2 && C(t2)));
  $.__r = 0;
}
function I(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h, y2, w2, d2, g2, _2 = t2 && t2.__k || v, m2 = l2.length;
  for (f2 = P(u2, l2, _2, f2, m2), a2 = 0; a2 < m2; a2++) null != (y2 = u2.__k[a2]) && (h = -1 == y2.__i ? p : _2[y2.__i] || p, y2.__i = a2, g2 = O(n2, y2, h, i2, r2, o2, e2, f2, c2, s2), w2 = y2.__e, y2.ref && h.ref != y2.ref && (h.ref && B(h.ref, null, y2), s2.push(y2.ref, y2.__c || w2, y2)), null == d2 && null != w2 && (d2 = w2), 4 & y2.__u || h.__k === y2.__k ? f2 = A(y2, f2, n2) : "function" == typeof y2.type && void 0 !== g2 ? f2 = g2 : w2 && (f2 = w2.nextSibling), y2.__u &= -7);
  return u2.__e = d2, f2;
}
function P(n2, l2, u2, t2, i2) {
  var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f2 = r2 + h, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m$1(null, o2, null, null, null) : w(o2) ? m$1(k, { children: o2 }, null, null, null) : null == o2.constructor && o2.__b > 0 ? m$1(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = L(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h-- : i2 < s2 && h++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h-- : c2 == f2 + 1 ? h++ : (c2 > f2 ? h-- : h++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), D(e2, e2));
  return t2;
}
function A(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = A(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = S(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function L(n2, l2, u2, t2) {
  var i2, r2, o2, e2 = n2.key, f2 = n2.type, c2 = l2[u2], s2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == n2.key || s2 && e2 == c2.key && f2 == c2.type) return u2;
  if (t2 > (s2 ? 1 : 0)) {
    for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f2 == c2.type) return o2;
  }
  return -1;
}
function T(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y$1.test(l2) ? u2 : u2 + "px";
}
function j(n2, l2, u2, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] == t2[l2] || T(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$1, n2.addEventListener(l2, r2 ? a$1 : s, r2)) : n2.removeEventListener(l2, r2 ? a$1 : s, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = c$1++;
      else if (u2.t < t2.u) return;
      return t2(l.event ? l.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h, p2, v2, y2, _2, m2, b, S2, C2, M2, $2, P2, A2, H, L2, T2, j2 = u2.type;
  if (null != u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l.__b) && a2(u2);
  n: if ("function" == typeof j2) try {
    if (b = u2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? m2 = (h = u2.__c = t2.__c).__ = h.__E : (S2 ? u2.__c = h = new j2(b, M2) : (u2.__c = h = new x$1(b, M2), h.constructor = j2, h.render = E), C2 && C2.sub(h), h.props = b, h.state || (h.state = {}), h.context = M2, h.__n = i2, p2 = h.__d = true, h.__h = [], h._sb = []), S2 && null == h.__s && (h.__s = h.state), S2 && null != j2.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d({}, h.__s)), d(h.__s, j2.getDerivedStateFromProps(b, h.__s))), v2 = h.props, y2 = h.state, h.__v = u2, p2) S2 && null == j2.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S2 && null != h.componentDidMount && h.__h.push(h.componentDidMount);
    else {
      if (S2 && null == j2.getDerivedStateFromProps && b !== v2 && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M2), !h.__e && null != h.shouldComponentUpdate && false === h.shouldComponentUpdate(b, h.__s, M2) || u2.__v == t2.__v) {
        for (u2.__v != t2.__v && (h.props = b, h.state = h.__s, h.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), $2 = 0; $2 < h._sb.length; $2++) h.__h.push(h._sb[$2]);
        h._sb = [], h.__h.length && e2.push(h);
        break n;
      }
      null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M2), S2 && null != h.componentDidUpdate && h.__h.push(function() {
        h.componentDidUpdate(v2, y2, _2);
      });
    }
    if (h.context = M2, h.props = b, h.__P = n2, h.__e = false, P2 = l.__r, A2 = 0, S2) {
      for (h.state = h.__s, h.__d = false, P2 && P2(u2), a2 = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
      h._sb = [];
    } else do {
      h.__d = false, P2 && P2(u2), a2 = h.render(h.props, h.state, h.context), h.state = h.__s;
    } while (h.__d && ++A2 < 25);
    h.state = h.__s, null != h.getChildContext && (i2 = d(d({}, i2), h.getChildContext())), S2 && !p2 && null != h.getSnapshotBeforeUpdate && (_2 = h.getSnapshotBeforeUpdate(v2, y2)), L2 = a2, null != a2 && a2.type === k && null == a2.key && (L2 = V(a2.props.children)), f2 = I(n2, w(L2) ? L2 : [L2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h.base = u2.__e, u2.__u &= -161, h.__h.length && e2.push(h), m2 && (h.__E = h.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o2) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else {
      for (T2 = o2.length; T2--; ) g(o2[T2]);
      z$1(u2);
    }
    else u2.__e = t2.__e, u2.__k = t2.__k, n3.then || z$1(u2);
    l.__e(n3, u2, t2);
  }
  else null == o2 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = q(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
  return (a2 = l.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function z$1(n2) {
  n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z$1);
}
function N(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) B(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function V(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(V) : d({}, n2);
}
function q(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h, v2, y2, d2, _2, m2, b = i2.props, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((d2 = e2[a2]) && "setAttribute" in d2 == !!x2 && (x2 ? d2.localName == x2 : 3 == d2.nodeType)) {
      u2 = d2, e2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) b === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n.call(u2.childNodes), b = i2.props || p, !c2 && null != e2) for (b = {}, a2 = 0; a2 < u2.attributes.length; a2++) b[(d2 = u2.attributes[a2]).name] = d2.value;
    for (a2 in b) if (d2 = b[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) v2 = d2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      j(u2, a2, null, d2, o2);
    }
    for (a2 in k2) d2 = k2[a2], "children" == a2 ? y2 = d2 : "dangerouslySetInnerHTML" == a2 ? h = d2 : "value" == a2 ? _2 = d2 : "checked" == a2 ? m2 = d2 : c2 && "function" != typeof d2 || b[a2] === d2 || j(u2, a2, d2, b[a2], o2);
    if (h) c2 || v2 && (h.__html == v2.__html || h.__html == u2.innerHTML) || (u2.innerHTML = h.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), I("template" == t2.type ? u2.content : u2, w(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _2 ? u2.removeAttribute("value") : null != _2 && (_2 !== u2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 != b[a2]) && j(u2, a2, _2, b[a2], o2), a2 = "checked", null != m2 && m2 != u2[a2] && j(u2, a2, m2, b[a2], o2));
  }
  return u2;
}
function B(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function D(n2, u2, t2) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || B(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && D(i2[r2], u2, t2 || "function" != typeof n2.type);
  t2 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function E(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function G(u2, t2, i2) {
  var r2, o2, e2, f2;
  t2 == document && (t2 = document.documentElement), l.__ && l.__(u2, t2), o2 = (r2 = false) ? null : t2.__k, e2 = [], f2 = [], O(t2, u2 = t2.__k = _(k, null, [u2]), o2 || p, p, t2.namespaceURI, o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, o2 ? o2.__e : t2.firstChild, r2, f2), N(e2, u2, f2);
}
function K(l2, u2, t2) {
  var i2, r2, o2, e2, f2 = d({}, l2.props);
  for (o2 in l2.type && l2.type.defaultProps && (e2 = l2.type.defaultProps), u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = void 0 === u2[o2] && null != e2 ? e2[o2] : u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), m$1(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
}
n = v.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t$1 = function(n2) {
  return null != n2 && null == n2.constructor;
}, x$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u2), this.props)), n2 && d(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, x$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x$1.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c$1 = 0, s = F(false), a$1 = F(true);
function _arrayLikeToArray$2(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _arrayWithHoles$2(r2) {
  if (Array.isArray(r2)) return r2;
}
function _defineProperty$1(e2, r2, t2) {
  return (r2 = _toPropertyKey$2(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function _iterableToArrayLimit$2(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$1(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _slicedToArray$2(r2, e2) {
  return _arrayWithHoles$2(r2) || _iterableToArrayLimit$2(r2, e2) || _unsupportedIterableToArray$2(r2, e2) || _nonIterableRest$2();
}
function _toPrimitive$2(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _toPropertyKey$2(t2) {
  var i2 = _toPrimitive$2(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
function _unsupportedIterableToArray$2(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray$2(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$2(r2, a2) : void 0;
  }
}
var _reactElement2VNode = function reactElement2VNode(el) {
  if (!(_typeof$1(el) === "object")) return el;
  var res = K(el);
  if (res.props) {
    var _res$props;
    res.props = _objectSpread2$1({}, res.props);
    if (res !== null && res !== void 0 && (_res$props = res.props) !== null && _res$props !== void 0 && _res$props.children) {
      res.props.children = Array.isArray(res.props.children) ? res.props.children.map(_reactElement2VNode) : _reactElement2VNode(res.props.children);
    }
  }
  return res;
};
var isReactRenderable = function isReactRenderable2(o2) {
  return t$1(K(o2));
};
var render = function render2(jsx, domEl) {
  delete domEl.__k;
  G(_reactElement2VNode(jsx), domEl);
};
function styleInject$1(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$1 = ".float-tooltip-kap {\n  position: absolute;\n  width: max-content; /* prevent shrinking near right edge */\n  max-width: max(50%, 150px);\n  padding: 3px 5px;\n  border-radius: 3px;\n  font: 12px sans-serif;\n  color: #eee;\n  background: rgba(0,0,0,0.6);\n  pointer-events: none;\n}\n";
styleInject$1(css_248z$1);
var index$2 = index$4({
  props: {
    content: {
      "default": false
    },
    offsetX: {
      triggerUpdate: false
    },
    // null or number
    offsetY: {
      triggerUpdate: false
    }
    // null or number
  },
  init: function init(domNode, state) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style;
    var isD3Selection = !!domNode && _typeof$1(domNode) === "object" && !!domNode.node && typeof domNode.node === "function";
    var el = select(isD3Selection ? domNode.node() : domNode);
    el.style("position") === "static" && el.style("position", "relative");
    state.tooltipEl = el.append("div").attr("class", "float-tooltip-kap");
    Object.entries(style).forEach(function(_ref2) {
      var _ref3 = _slicedToArray$2(_ref2, 2), k2 = _ref3[0], v2 = _ref3[1];
      return state.tooltipEl.style(k2, v2);
    });
    state.tooltipEl.style("left", "-10000px").style("display", "none");
    var evSuffix = "tooltip-".concat(Math.round(Math.random() * 1e12));
    state.mouseInside = false;
    el.on("mousemove.".concat(evSuffix), function(ev) {
      state.mouseInside = true;
      var mousePos = pointer(ev);
      var domNode2 = el.node();
      var canvasWidth = domNode2.offsetWidth;
      var canvasHeight = domNode2.offsetHeight;
      var translate = [state.offsetX === null || state.offsetX === void 0 ? "-".concat(mousePos[0] / canvasWidth * 100, "%") : typeof state.offsetX === "number" ? "calc(-50% + ".concat(state.offsetX, "px)") : state.offsetX, state.offsetY === null || state.offsetY === void 0 ? canvasHeight > 130 && canvasHeight - mousePos[1] < 100 ? "calc(-100% - 6px)" : "21px" : typeof state.offsetY === "number" ? state.offsetY < 0 ? "calc(-100% - ".concat(Math.abs(state.offsetY), "px)") : "".concat(state.offsetY, "px") : state.offsetY];
      state.tooltipEl.style("left", mousePos[0] + "px").style("top", mousePos[1] + "px").style("transform", "translate(".concat(translate.join(","), ")"));
      state.content && state.tooltipEl.style("display", "inline");
    });
    el.on("mouseover.".concat(evSuffix), function() {
      state.mouseInside = true;
      state.content && state.tooltipEl.style("display", "inline");
    });
    el.on("mouseout.".concat(evSuffix), function() {
      state.mouseInside = false;
      state.tooltipEl.style("display", "none");
    });
  },
  update: function update(state) {
    state.tooltipEl.style("display", !!state.content && state.mouseInside ? "inline" : "none");
    if (!state.content) {
      state.tooltipEl.text("");
    } else if (state.content instanceof HTMLElement) {
      state.tooltipEl.text("");
      state.tooltipEl.append(function() {
        return state.content;
      });
    } else if (typeof state.content === "string") {
      state.tooltipEl.html(state.content);
    } else if (isReactRenderable(state.content)) {
      state.tooltipEl.text("");
      render(state.content, state.tooltipEl.node());
    } else {
      state.tooltipEl.style("display", "none");
      console.warn("Tooltip content is invalid, skipping.", state.content, state.content.toString());
    }
  }
});
function forceCenter(x2, y2, z2) {
  var nodes, strength = 1;
  if (x2 == null) x2 = 0;
  if (y2 == null) y2 = 0;
  if (z2 == null) z2 = 0;
  function force() {
    var i2, n2 = nodes.length, node, sx = 0, sy = 0, sz = 0;
    for (i2 = 0; i2 < n2; ++i2) {
      node = nodes[i2], sx += node.x || 0, sy += node.y || 0, sz += node.z || 0;
    }
    for (sx = (sx / n2 - x2) * strength, sy = (sy / n2 - y2) * strength, sz = (sz / n2 - z2) * strength, i2 = 0; i2 < n2; ++i2) {
      node = nodes[i2];
      if (sx) {
        node.x -= sx;
      }
      if (sy) {
        node.y -= sy;
      }
      if (sz) {
        node.z -= sz;
      }
    }
  }
  force.initialize = function(_2) {
    nodes = _2;
  };
  force.x = function(_2) {
    return arguments.length ? (x2 = +_2, force) : x2;
  };
  force.y = function(_2) {
    return arguments.length ? (y2 = +_2, force) : y2;
  };
  force.z = function(_2) {
    return arguments.length ? (z2 = +_2, force) : z2;
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = +_2, force) : strength;
  };
  return force;
}
function tree_add$1(d2) {
  const x2 = +this._x.call(null, d2);
  return add$1(this.cover(x2), x2, d2);
}
function add$1(tree, x2, d2) {
  if (isNaN(x2)) return tree;
  var parent, node = tree._root, leaf = { data: d2 }, x0 = tree._x0, x1 = tree._x1, xm, xp, right, i2, j2;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x2 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (parent = node, !(node = node[i2 = +right])) return parent[i2] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  if (x2 === xp) return leaf.next = node, parent ? parent[i2] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i2] = new Array(2) : tree._root = new Array(2);
    if (right = x2 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
  } while ((i2 = +right) === (j2 = +(xp >= xm)));
  return parent[j2] = node, parent[i2] = leaf, tree;
}
function addAll$1(data) {
  if (!Array.isArray(data)) data = Array.from(data);
  const n2 = data.length;
  const xz = new Float64Array(n2);
  let x0 = Infinity, x1 = -Infinity;
  for (let i2 = 0, x2; i2 < n2; ++i2) {
    if (isNaN(x2 = +this._x.call(null, data[i2]))) continue;
    xz[i2] = x2;
    if (x2 < x0) x0 = x2;
    if (x2 > x1) x1 = x2;
  }
  if (x0 > x1) return this;
  this.cover(x0).cover(x1);
  for (let i2 = 0; i2 < n2; ++i2) {
    add$1(this, xz[i2], data[i2]);
  }
  return this;
}
function tree_cover$1(x2) {
  if (isNaN(x2 = +x2)) return this;
  var x0 = this._x0, x1 = this._x1;
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x2)) + 1;
  } else {
    var z2 = x1 - x0 || 1, node = this._root, parent, i2;
    while (x0 > x2 || x2 >= x1) {
      i2 = +(x2 < x0);
      parent = new Array(2), parent[i2] = node, node = parent, z2 *= 2;
      switch (i2) {
        case 0:
          x1 = x0 + z2;
          break;
        case 1:
          x0 = x1 - z2;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._x1 = x1;
  return this;
}
function tree_data$1() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}
function tree_extent$1(_2) {
  return arguments.length ? this.cover(+_2[0][0]).cover(+_2[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function Half(node, x0, x1) {
  this.node = node;
  this.x0 = x0;
  this.x1 = x1;
}
function tree_find$1(x2, radius) {
  var data, x0 = this._x0, x1, x22, x3 = this._x1, halves = [], node = this._root, q2, i2;
  if (node) halves.push(new Half(node, x0, x3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x2 - radius;
    x3 = x2 + radius;
  }
  while (q2 = halves.pop()) {
    if (!(node = q2.node) || (x1 = q2.x0) > x3 || (x22 = q2.x1) < x0) continue;
    if (node.length) {
      var xm = (x1 + x22) / 2;
      halves.push(
        new Half(node[1], xm, x22),
        new Half(node[0], x1, xm)
      );
      if (i2 = +(x2 >= xm)) {
        q2 = halves[halves.length - 1];
        halves[halves.length - 1] = halves[halves.length - 1 - i2];
        halves[halves.length - 1 - i2] = q2;
      }
    } else {
      var d2 = Math.abs(x2 - +this._x.call(null, node.data));
      if (d2 < radius) {
        radius = d2;
        x0 = x2 - d2;
        x3 = x2 + d2;
        data = node.data;
      }
    }
  }
  return data;
}
function tree_remove$1(d2) {
  if (isNaN(x2 = +this._x.call(null, d2))) return this;
  var parent, node = this._root, retainer, previous, next, x0 = this._x0, x1 = this._x1, x2, xm, right, i2, j2;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x2 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (!(parent = node, node = node[i2 = +right])) return this;
    if (!node.length) break;
    if (parent[i2 + 1 & 1]) retainer = parent, j2 = i2;
  }
  while (node.data !== d2) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent) return this._root = next, this;
  next ? parent[i2] = next : delete parent[i2];
  if ((node = parent[0] || parent[1]) && node === (parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j2] = node;
    else this._root = node;
  }
  return this;
}
function removeAll$1(data) {
  for (var i2 = 0, n2 = data.length; i2 < n2; ++i2) this.remove(data[i2]);
  return this;
}
function tree_root$1() {
  return this._root;
}
function tree_size$1() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size;
    while (node = node.next);
  });
  return size;
}
function tree_visit$1(callback) {
  var halves = [], q2, node = this._root, child, x0, x1;
  if (node) halves.push(new Half(node, this._x0, this._x1));
  while (q2 = halves.pop()) {
    if (!callback(node = q2.node, x0 = q2.x0, x1 = q2.x1) && node.length) {
      var xm = (x0 + x1) / 2;
      if (child = node[1]) halves.push(new Half(child, xm, x1));
      if (child = node[0]) halves.push(new Half(child, x0, xm));
    }
  }
  return this;
}
function tree_visitAfter$1(callback) {
  var halves = [], next = [], q2;
  if (this._root) halves.push(new Half(this._root, this._x0, this._x1));
  while (q2 = halves.pop()) {
    var node = q2.node;
    if (node.length) {
      var child, x0 = q2.x0, x1 = q2.x1, xm = (x0 + x1) / 2;
      if (child = node[0]) halves.push(new Half(child, x0, xm));
      if (child = node[1]) halves.push(new Half(child, xm, x1));
    }
    next.push(q2);
  }
  while (q2 = next.pop()) {
    callback(q2.node, q2.x0, q2.x1);
  }
  return this;
}
function defaultX$1(d2) {
  return d2[0];
}
function tree_x$1(_2) {
  return arguments.length ? (this._x = _2, this) : this._x;
}
function binarytree(nodes, x2) {
  var tree = new Binarytree(x2 == null ? defaultX$1 : x2, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Binarytree(x2, x0, x1) {
  this._x = x2;
  this._x0 = x0;
  this._x1 = x1;
  this._root = void 0;
}
function leaf_copy$1(leaf) {
  var copy = { data: leaf.data }, next = copy;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy;
}
var treeProto$1 = binarytree.prototype = Binarytree.prototype;
treeProto$1.copy = function() {
  var copy = new Binarytree(this._x, this._x0, this._x1), node = this._root, nodes, child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy$1(node), copy;
  nodes = [{ source: node, target: copy._root = new Array(2) }];
  while (node = nodes.pop()) {
    for (var i2 = 0; i2 < 2; ++i2) {
      if (child = node.source[i2]) {
        if (child.length) nodes.push({ source: child, target: node.target[i2] = new Array(2) });
        else node.target[i2] = leaf_copy$1(child);
      }
    }
  }
  return copy;
};
treeProto$1.add = tree_add$1;
treeProto$1.addAll = addAll$1;
treeProto$1.cover = tree_cover$1;
treeProto$1.data = tree_data$1;
treeProto$1.extent = tree_extent$1;
treeProto$1.find = tree_find$1;
treeProto$1.remove = tree_remove$1;
treeProto$1.removeAll = removeAll$1;
treeProto$1.root = tree_root$1;
treeProto$1.size = tree_size$1;
treeProto$1.visit = tree_visit$1;
treeProto$1.visitAfter = tree_visitAfter$1;
treeProto$1.x = tree_x$1;
function tree_add(d2) {
  const x2 = +this._x.call(null, d2), y2 = +this._y.call(null, d2), z2 = +this._z.call(null, d2);
  return add(this.cover(x2, y2, z2), x2, y2, z2, d2);
}
function add(tree, x2, y2, z2, d2) {
  if (isNaN(x2) || isNaN(y2) || isNaN(z2)) return tree;
  var parent, node = tree._root, leaf = { data: d2 }, x0 = tree._x0, y0 = tree._y0, z0 = tree._z0, x1 = tree._x1, y1 = tree._y1, z1 = tree._z1, xm, ym, zm, xp, yp, zp, right, bottom, deep, i2, j2;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x2 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y2 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (deep = z2 >= (zm = (z0 + z1) / 2)) z0 = zm;
    else z1 = zm;
    if (parent = node, !(node = node[i2 = deep << 2 | bottom << 1 | right])) return parent[i2] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  zp = +tree._z.call(null, node.data);
  if (x2 === xp && y2 === yp && z2 === zp) return leaf.next = node, parent ? parent[i2] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i2] = new Array(8) : tree._root = new Array(8);
    if (right = x2 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y2 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (deep = z2 >= (zm = (z0 + z1) / 2)) z0 = zm;
    else z1 = zm;
  } while ((i2 = deep << 2 | bottom << 1 | right) === (j2 = (zp >= zm) << 2 | (yp >= ym) << 1 | xp >= xm));
  return parent[j2] = node, parent[i2] = leaf, tree;
}
function addAll(data) {
  if (!Array.isArray(data)) data = Array.from(data);
  const n2 = data.length;
  const xz = new Float64Array(n2);
  const yz = new Float64Array(n2);
  const zz = new Float64Array(n2);
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
  for (let i2 = 0, d2, x2, y2, z2; i2 < n2; ++i2) {
    if (isNaN(x2 = +this._x.call(null, d2 = data[i2])) || isNaN(y2 = +this._y.call(null, d2)) || isNaN(z2 = +this._z.call(null, d2))) continue;
    xz[i2] = x2;
    yz[i2] = y2;
    zz[i2] = z2;
    if (x2 < x0) x0 = x2;
    if (x2 > x1) x1 = x2;
    if (y2 < y0) y0 = y2;
    if (y2 > y1) y1 = y2;
    if (z2 < z0) z0 = z2;
    if (z2 > z1) z1 = z2;
  }
  if (x0 > x1 || y0 > y1 || z0 > z1) return this;
  this.cover(x0, y0, z0).cover(x1, y1, z1);
  for (let i2 = 0; i2 < n2; ++i2) {
    add(this, xz[i2], yz[i2], zz[i2], data[i2]);
  }
  return this;
}
function tree_cover(x2, y2, z2) {
  if (isNaN(x2 = +x2) || isNaN(y2 = +y2) || isNaN(z2 = +z2)) return this;
  var x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1;
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x2)) + 1;
    y1 = (y0 = Math.floor(y2)) + 1;
    z1 = (z0 = Math.floor(z2)) + 1;
  } else {
    var t2 = x1 - x0 || 1, node = this._root, parent, i2;
    while (x0 > x2 || x2 >= x1 || y0 > y2 || y2 >= y1 || z0 > z2 || z2 >= z1) {
      i2 = (z2 < z0) << 2 | (y2 < y0) << 1 | x2 < x0;
      parent = new Array(8), parent[i2] = node, node = parent, t2 *= 2;
      switch (i2) {
        case 0:
          x1 = x0 + t2, y1 = y0 + t2, z1 = z0 + t2;
          break;
        case 1:
          x0 = x1 - t2, y1 = y0 + t2, z1 = z0 + t2;
          break;
        case 2:
          x1 = x0 + t2, y0 = y1 - t2, z1 = z0 + t2;
          break;
        case 3:
          x0 = x1 - t2, y0 = y1 - t2, z1 = z0 + t2;
          break;
        case 4:
          x1 = x0 + t2, y1 = y0 + t2, z0 = z1 - t2;
          break;
        case 5:
          x0 = x1 - t2, y1 = y0 + t2, z0 = z1 - t2;
          break;
        case 6:
          x1 = x0 + t2, y0 = y1 - t2, z0 = z1 - t2;
          break;
        case 7:
          x0 = x1 - t2, y0 = y1 - t2, z0 = z1 - t2;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._y0 = y0;
  this._z0 = z0;
  this._x1 = x1;
  this._y1 = y1;
  this._z1 = z1;
  return this;
}
function tree_data() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}
function tree_extent(_2) {
  return arguments.length ? this.cover(+_2[0][0], +_2[0][1], +_2[0][2]).cover(+_2[1][0], +_2[1][1], +_2[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function Octant(node, x0, y0, z0, x1, y1, z1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.z0 = z0;
  this.x1 = x1;
  this.y1 = y1;
  this.z1 = z1;
}
function tree_find(x2, y2, z2, radius) {
  var data, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1, y1, z1, x22, y22, z22, x3 = this._x1, y3 = this._y1, z3 = this._z1, octs = [], node = this._root, q2, i2;
  if (node) octs.push(new Octant(node, x0, y0, z0, x3, y3, z3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x2 - radius, y0 = y2 - radius, z0 = z2 - radius;
    x3 = x2 + radius, y3 = y2 + radius, z3 = z2 + radius;
    radius *= radius;
  }
  while (q2 = octs.pop()) {
    if (!(node = q2.node) || (x1 = q2.x0) > x3 || (y1 = q2.y0) > y3 || (z1 = q2.z0) > z3 || (x22 = q2.x1) < x0 || (y22 = q2.y1) < y0 || (z22 = q2.z1) < z0) continue;
    if (node.length) {
      var xm = (x1 + x22) / 2, ym = (y1 + y22) / 2, zm = (z1 + z22) / 2;
      octs.push(
        new Octant(node[7], xm, ym, zm, x22, y22, z22),
        new Octant(node[6], x1, ym, zm, xm, y22, z22),
        new Octant(node[5], xm, y1, zm, x22, ym, z22),
        new Octant(node[4], x1, y1, zm, xm, ym, z22),
        new Octant(node[3], xm, ym, z1, x22, y22, zm),
        new Octant(node[2], x1, ym, z1, xm, y22, zm),
        new Octant(node[1], xm, y1, z1, x22, ym, zm),
        new Octant(node[0], x1, y1, z1, xm, ym, zm)
      );
      if (i2 = (z2 >= zm) << 2 | (y2 >= ym) << 1 | x2 >= xm) {
        q2 = octs[octs.length - 1];
        octs[octs.length - 1] = octs[octs.length - 1 - i2];
        octs[octs.length - 1 - i2] = q2;
      }
    } else {
      var dx = x2 - +this._x.call(null, node.data), dy = y2 - +this._y.call(null, node.data), dz = z2 - +this._z.call(null, node.data), d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < radius) {
        var d3 = Math.sqrt(radius = d2);
        x0 = x2 - d3, y0 = y2 - d3, z0 = z2 - d3;
        x3 = x2 + d3, y3 = y2 + d3, z3 = z2 + d3;
        data = node.data;
      }
    }
  }
  return data;
}
const distance = (x1, y1, z1, x2, y2, z2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
function findAllWithinRadius(x2, y2, z2, radius) {
  const result = [];
  const xMin = x2 - radius;
  const yMin = y2 - radius;
  const zMin = z2 - radius;
  const xMax = x2 + radius;
  const yMax = y2 + radius;
  const zMax = z2 + radius;
  this.visit((node, x1, y1, z1, x22, y22, z22) => {
    if (!node.length) {
      do {
        const d2 = node.data;
        if (distance(x2, y2, z2, this._x(d2), this._y(d2), this._z(d2)) <= radius) {
          result.push(d2);
        }
      } while (node = node.next);
    }
    return x1 > xMax || y1 > yMax || z1 > zMax || x22 < xMin || y22 < yMin || z22 < zMin;
  });
  return result;
}
function tree_remove(d2) {
  if (isNaN(x2 = +this._x.call(null, d2)) || isNaN(y2 = +this._y.call(null, d2)) || isNaN(z2 = +this._z.call(null, d2))) return this;
  var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1, x2, y2, z2, xm, ym, zm, right, bottom, deep, i2, j2;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x2 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y2 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (deep = z2 >= (zm = (z0 + z1) / 2)) z0 = zm;
    else z1 = zm;
    if (!(parent = node, node = node[i2 = deep << 2 | bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i2 + 1 & 7] || parent[i2 + 2 & 7] || parent[i2 + 3 & 7] || parent[i2 + 4 & 7] || parent[i2 + 5 & 7] || parent[i2 + 6 & 7] || parent[i2 + 7 & 7]) retainer = parent, j2 = i2;
  }
  while (node.data !== d2) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent) return this._root = next, this;
  next ? parent[i2] = next : delete parent[i2];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3] || parent[4] || parent[5] || parent[6] || parent[7]) && node === (parent[7] || parent[6] || parent[5] || parent[4] || parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j2] = node;
    else this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i2 = 0, n2 = data.length; i2 < n2; ++i2) this.remove(data[i2]);
  return this;
}
function tree_root() {
  return this._root;
}
function tree_size() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size;
    while (node = node.next);
  });
  return size;
}
function tree_visit(callback) {
  var octs = [], q2, node = this._root, child, x0, y0, z0, x1, y1, z1;
  if (node) octs.push(new Octant(node, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
  while (q2 = octs.pop()) {
    if (!callback(node = q2.node, x0 = q2.x0, y0 = q2.y0, z0 = q2.z0, x1 = q2.x1, y1 = q2.y1, z1 = q2.z1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
      if (child = node[7]) octs.push(new Octant(child, xm, ym, zm, x1, y1, z1));
      if (child = node[6]) octs.push(new Octant(child, x0, ym, zm, xm, y1, z1));
      if (child = node[5]) octs.push(new Octant(child, xm, y0, zm, x1, ym, z1));
      if (child = node[4]) octs.push(new Octant(child, x0, y0, zm, xm, ym, z1));
      if (child = node[3]) octs.push(new Octant(child, xm, ym, z0, x1, y1, zm));
      if (child = node[2]) octs.push(new Octant(child, x0, ym, z0, xm, y1, zm));
      if (child = node[1]) octs.push(new Octant(child, xm, y0, z0, x1, ym, zm));
      if (child = node[0]) octs.push(new Octant(child, x0, y0, z0, xm, ym, zm));
    }
  }
  return this;
}
function tree_visitAfter(callback) {
  var octs = [], next = [], q2;
  if (this._root) octs.push(new Octant(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
  while (q2 = octs.pop()) {
    var node = q2.node;
    if (node.length) {
      var child, x0 = q2.x0, y0 = q2.y0, z0 = q2.z0, x1 = q2.x1, y1 = q2.y1, z1 = q2.z1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
      if (child = node[0]) octs.push(new Octant(child, x0, y0, z0, xm, ym, zm));
      if (child = node[1]) octs.push(new Octant(child, xm, y0, z0, x1, ym, zm));
      if (child = node[2]) octs.push(new Octant(child, x0, ym, z0, xm, y1, zm));
      if (child = node[3]) octs.push(new Octant(child, xm, ym, z0, x1, y1, zm));
      if (child = node[4]) octs.push(new Octant(child, x0, y0, zm, xm, ym, z1));
      if (child = node[5]) octs.push(new Octant(child, xm, y0, zm, x1, ym, z1));
      if (child = node[6]) octs.push(new Octant(child, x0, ym, zm, xm, y1, z1));
      if (child = node[7]) octs.push(new Octant(child, xm, ym, zm, x1, y1, z1));
    }
    next.push(q2);
  }
  while (q2 = next.pop()) {
    callback(q2.node, q2.x0, q2.y0, q2.z0, q2.x1, q2.y1, q2.z1);
  }
  return this;
}
function defaultX(d2) {
  return d2[0];
}
function tree_x(_2) {
  return arguments.length ? (this._x = _2, this) : this._x;
}
function defaultY(d2) {
  return d2[1];
}
function tree_y(_2) {
  return arguments.length ? (this._y = _2, this) : this._y;
}
function defaultZ(d2) {
  return d2[2];
}
function tree_z(_2) {
  return arguments.length ? (this._z = _2, this) : this._z;
}
function octree(nodes, x2, y2, z2) {
  var tree = new Octree(x2 == null ? defaultX : x2, y2 == null ? defaultY : y2, z2 == null ? defaultZ : z2, NaN, NaN, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Octree(x2, y2, z2, x0, y0, z0, x1, y1, z1) {
  this._x = x2;
  this._y = y2;
  this._z = z2;
  this._x0 = x0;
  this._y0 = y0;
  this._z0 = z0;
  this._x1 = x1;
  this._y1 = y1;
  this._z1 = z1;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy = { data: leaf.data }, next = copy;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy;
}
var treeProto = octree.prototype = Octree.prototype;
treeProto.copy = function() {
  var copy = new Octree(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), node = this._root, nodes, child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy(node), copy;
  nodes = [{ source: node, target: copy._root = new Array(8) }];
  while (node = nodes.pop()) {
    for (var i2 = 0; i2 < 8; ++i2) {
      if (child = node.source[i2]) {
        if (child.length) nodes.push({ source: child, target: node.target[i2] = new Array(8) });
        else node.target[i2] = leaf_copy(child);
      }
    }
  }
  return copy;
};
treeProto.add = tree_add;
treeProto.addAll = addAll;
treeProto.cover = tree_cover;
treeProto.data = tree_data;
treeProto.extent = tree_extent;
treeProto.find = tree_find;
treeProto.findAllWithinRadius = findAllWithinRadius;
treeProto.remove = tree_remove;
treeProto.removeAll = removeAll;
treeProto.root = tree_root;
treeProto.size = tree_size;
treeProto.visit = tree_visit;
treeProto.visitAfter = tree_visitAfter;
treeProto.x = tree_x;
treeProto.y = tree_y;
treeProto.z = tree_z;
function constant(x2) {
  return function() {
    return x2;
  };
}
function jiggle(random) {
  return (random() - 0.5) * 1e-6;
}
function index$1(d2) {
  return d2.index;
}
function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}
function forceLink(links) {
  var id = index$1, strength = defaultStrength, strengths, distance2 = constant(30), distances, nodes, nDim, count, bias, random, iterations = 1;
  if (links == null) links = [];
  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }
  function force(alpha) {
    for (var k2 = 0, n2 = links.length; k2 < iterations; ++k2) {
      for (var i2 = 0, link, source, target, x2 = 0, y2 = 0, z2 = 0, l2, b; i2 < n2; ++i2) {
        link = links[i2], source = link.source, target = link.target;
        x2 = target.x + target.vx - source.x - source.vx || jiggle(random);
        if (nDim > 1) {
          y2 = target.y + target.vy - source.y - source.vy || jiggle(random);
        }
        if (nDim > 2) {
          z2 = target.z + target.vz - source.z - source.vz || jiggle(random);
        }
        l2 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
        l2 = (l2 - distances[i2]) / l2 * alpha * strengths[i2];
        x2 *= l2, y2 *= l2, z2 *= l2;
        target.vx -= x2 * (b = bias[i2]);
        if (nDim > 1) {
          target.vy -= y2 * b;
        }
        if (nDim > 2) {
          target.vz -= z2 * b;
        }
        source.vx += x2 * (b = 1 - b);
        if (nDim > 1) {
          source.vy += y2 * b;
        }
        if (nDim > 2) {
          source.vz += z2 * b;
        }
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i2, n2 = nodes.length, m2 = links.length, nodeById = new Map(nodes.map((d2, i3) => [id(d2, i3, nodes), d2])), link;
    for (i2 = 0, count = new Array(n2); i2 < m2; ++i2) {
      link = links[i2], link.index = i2;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }
    for (i2 = 0, bias = new Array(m2); i2 < m2; ++i2) {
      link = links[i2], bias[i2] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }
    strengths = new Array(m2), initializeStrength();
    distances = new Array(m2), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes) return;
    for (var i2 = 0, n2 = links.length; i2 < n2; ++i2) {
      strengths[i2] = +strength(links[i2], i2, links);
    }
  }
  function initializeDistance() {
    if (!nodes) return;
    for (var i2 = 0, n2 = links.length; i2 < n2; ++i2) {
      distances[i2] = +distance2(links[i2], i2, links);
    }
  }
  force.initialize = function(_nodes, ...args) {
    nodes = _nodes;
    random = args.find((arg) => typeof arg === "function") || Math.random;
    nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
    initialize();
  };
  force.links = function(_2) {
    return arguments.length ? (links = _2, initialize(), force) : links;
  };
  force.id = function(_2) {
    return arguments.length ? (id = _2, force) : id;
  };
  force.iterations = function(_2) {
    return arguments.length ? (iterations = +_2, force) : iterations;
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant(+_2), initializeStrength(), force) : strength;
  };
  force.distance = function(_2) {
    return arguments.length ? (distance2 = typeof _2 === "function" ? _2 : constant(+_2), initializeDistance(), force) : distance2;
  };
  return force;
}
const a = 1664525;
const c = 1013904223;
const m = 4294967296;
function lcg() {
  let s2 = 1;
  return () => (s2 = (a * s2 + c) % m) / m;
}
var MAX_DIMENSIONS = 3;
function x(d2) {
  return d2.x;
}
function y(d2) {
  return d2.y;
}
function z(d2) {
  return d2.z;
}
var initialRadius = 10, initialAngleRoll = Math.PI * (3 - Math.sqrt(5)), initialAngleYaw = Math.PI * 20 / (9 + Math.sqrt(221));
function forceSimulation(nodes, numDimensions) {
  numDimensions = numDimensions || 2;
  var nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(numDimensions))), simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch("tick", "end"), random = lcg();
  if (nodes == null) nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations) {
    var i2, n2 = nodes.length, node;
    if (iterations === void 0) iterations = 1;
    for (var k2 = 0; k2 < iterations; ++k2) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function(force) {
        force(alpha);
      });
      for (i2 = 0; i2 < n2; ++i2) {
        node = nodes[i2];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (nDim > 1) {
          if (node.fy == null) node.y += node.vy *= velocityDecay;
          else node.y = node.fy, node.vy = 0;
        }
        if (nDim > 2) {
          if (node.fz == null) node.z += node.vz *= velocityDecay;
          else node.z = node.fz, node.vz = 0;
        }
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i2 = 0, n2 = nodes.length, node; i2 < n2; ++i2) {
      node = nodes[i2], node.index = i2;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (node.fz != null) node.z = node.fz;
      if (isNaN(node.x) || nDim > 1 && isNaN(node.y) || nDim > 2 && isNaN(node.z)) {
        var radius = initialRadius * (nDim > 2 ? Math.cbrt(0.5 + i2) : nDim > 1 ? Math.sqrt(0.5 + i2) : i2), rollAngle = i2 * initialAngleRoll, yawAngle = i2 * initialAngleYaw;
        if (nDim === 1) {
          node.x = radius;
        } else if (nDim === 2) {
          node.x = radius * Math.cos(rollAngle);
          node.y = radius * Math.sin(rollAngle);
        } else {
          node.x = radius * Math.sin(rollAngle) * Math.cos(yawAngle);
          node.y = radius * Math.cos(rollAngle);
          node.z = radius * Math.sin(rollAngle) * Math.sin(yawAngle);
        }
      }
      if (isNaN(node.vx) || nDim > 1 && isNaN(node.vy) || nDim > 2 && isNaN(node.vz)) {
        node.vx = 0;
        if (nDim > 1) {
          node.vy = 0;
        }
        if (nDim > 2) {
          node.vz = 0;
        }
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random, nDim);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    numDimensions: function(_2) {
      return arguments.length ? (nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(_2))), forces.forEach(initializeForce), simulation) : nDim;
    },
    nodes: function(_2) {
      return arguments.length ? (nodes = _2, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function(_2) {
      return arguments.length ? (alpha = +_2, simulation) : alpha;
    },
    alphaMin: function(_2) {
      return arguments.length ? (alphaMin = +_2, simulation) : alphaMin;
    },
    alphaDecay: function(_2) {
      return arguments.length ? (alphaDecay = +_2, simulation) : +alphaDecay;
    },
    alphaTarget: function(_2) {
      return arguments.length ? (alphaTarget = +_2, simulation) : alphaTarget;
    },
    velocityDecay: function(_2) {
      return arguments.length ? (velocityDecay = 1 - _2, simulation) : 1 - velocityDecay;
    },
    randomSource: function(_2) {
      return arguments.length ? (random = _2, forces.forEach(initializeForce), simulation) : random;
    },
    force: function(name, _2) {
      return arguments.length > 1 ? (_2 == null ? forces.delete(name) : forces.set(name, initializeForce(_2)), simulation) : forces.get(name);
    },
    find: function() {
      var args = Array.prototype.slice.call(arguments);
      var x2 = args.shift() || 0, y2 = (nDim > 1 ? args.shift() : null) || 0, z2 = (nDim > 2 ? args.shift() : null) || 0, radius = args.shift() || Infinity;
      var i2 = 0, n2 = nodes.length, dx, dy, dz, d2, node, closest;
      radius *= radius;
      for (i2 = 0; i2 < n2; ++i2) {
        node = nodes[i2];
        dx = x2 - node.x;
        dy = y2 - (node.y || 0);
        dz = z2 - (node.z || 0);
        d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < radius) closest = node, radius = d2;
      }
      return closest;
    },
    on: function(name, _2) {
      return arguments.length > 1 ? (event.on(name, _2), simulation) : event.on(name);
    }
  };
}
function forceManyBody() {
  var nodes, nDim, node, random, alpha, strength = constant(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_2) {
    var i2, n2 = nodes.length, tree = (nDim === 1 ? binarytree(nodes, x) : nDim === 2 ? quadtree(nodes, x, y) : nDim === 3 ? octree(nodes, x, y, z) : null).visitAfter(accumulate);
    for (alpha = _2, i2 = 0; i2 < n2; ++i2) node = nodes[i2], tree.visit(apply);
  }
  function initialize() {
    if (!nodes) return;
    var i2, n2 = nodes.length, node2;
    strengths = new Array(n2);
    for (i2 = 0; i2 < n2; ++i2) node2 = nodes[i2], strengths[node2.index] = +strength(node2, i2, nodes);
  }
  function accumulate(treeNode) {
    var strength2 = 0, q2, c2, weight = 0, x2, y2, z2, i2;
    var numChildren = treeNode.length;
    if (numChildren) {
      for (x2 = y2 = z2 = i2 = 0; i2 < numChildren; ++i2) {
        if ((q2 = treeNode[i2]) && (c2 = Math.abs(q2.value))) {
          strength2 += q2.value, weight += c2, x2 += c2 * (q2.x || 0), y2 += c2 * (q2.y || 0), z2 += c2 * (q2.z || 0);
        }
      }
      strength2 *= Math.sqrt(4 / numChildren);
      treeNode.x = x2 / weight;
      if (nDim > 1) {
        treeNode.y = y2 / weight;
      }
      if (nDim > 2) {
        treeNode.z = z2 / weight;
      }
    } else {
      q2 = treeNode;
      q2.x = q2.data.x;
      if (nDim > 1) {
        q2.y = q2.data.y;
      }
      if (nDim > 2) {
        q2.z = q2.data.z;
      }
      do
        strength2 += strengths[q2.data.index];
      while (q2 = q2.next);
    }
    treeNode.value = strength2;
  }
  function apply(treeNode, x1, arg1, arg2, arg3) {
    if (!treeNode.value) return true;
    var x2 = [arg1, arg2, arg3][nDim - 1];
    var x3 = treeNode.x - node.x, y2 = nDim > 1 ? treeNode.y - node.y : 0, z2 = nDim > 2 ? treeNode.z - node.z : 0, w2 = x2 - x1, l2 = x3 * x3 + y2 * y2 + z2 * z2;
    if (w2 * w2 / theta2 < l2) {
      if (l2 < distanceMax2) {
        if (x3 === 0) x3 = jiggle(random), l2 += x3 * x3;
        if (nDim > 1 && y2 === 0) y2 = jiggle(random), l2 += y2 * y2;
        if (nDim > 2 && z2 === 0) z2 = jiggle(random), l2 += z2 * z2;
        if (l2 < distanceMin2) l2 = Math.sqrt(distanceMin2 * l2);
        node.vx += x3 * treeNode.value * alpha / l2;
        if (nDim > 1) {
          node.vy += y2 * treeNode.value * alpha / l2;
        }
        if (nDim > 2) {
          node.vz += z2 * treeNode.value * alpha / l2;
        }
      }
      return true;
    } else if (treeNode.length || l2 >= distanceMax2) return;
    if (treeNode.data !== node || treeNode.next) {
      if (x3 === 0) x3 = jiggle(random), l2 += x3 * x3;
      if (nDim > 1 && y2 === 0) y2 = jiggle(random), l2 += y2 * y2;
      if (nDim > 2 && z2 === 0) z2 = jiggle(random), l2 += z2 * z2;
      if (l2 < distanceMin2) l2 = Math.sqrt(distanceMin2 * l2);
    }
    do
      if (treeNode.data !== node) {
        w2 = strengths[treeNode.data.index] * alpha / l2;
        node.vx += x3 * w2;
        if (nDim > 1) {
          node.vy += y2 * w2;
        }
        if (nDim > 2) {
          node.vz += z2 * w2;
        }
      }
    while (treeNode = treeNode.next);
  }
  force.initialize = function(_nodes, ...args) {
    nodes = _nodes;
    random = args.find((arg) => typeof arg === "function") || Math.random;
    nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
    initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant(+_2), initialize(), force) : strength;
  };
  force.distanceMin = function(_2) {
    return arguments.length ? (distanceMin2 = _2 * _2, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_2) {
    return arguments.length ? (distanceMax2 = _2 * _2, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_2) {
    return arguments.length ? (theta2 = _2 * _2, force) : Math.sqrt(theta2);
  };
  return force;
}
function forceRadial(radius, x2, y2, z2) {
  var nodes, nDim, strength = constant(0.1), strengths, radiuses;
  if (typeof radius !== "function") radius = constant(+radius);
  if (x2 == null) x2 = 0;
  if (y2 == null) y2 = 0;
  if (z2 == null) z2 = 0;
  function force(alpha) {
    for (var i2 = 0, n2 = nodes.length; i2 < n2; ++i2) {
      var node = nodes[i2], dx = node.x - x2 || 1e-6, dy = (node.y || 0) - y2 || 1e-6, dz = (node.z || 0) - z2 || 1e-6, r2 = Math.sqrt(dx * dx + dy * dy + dz * dz), k2 = (radiuses[i2] - r2) * strengths[i2] * alpha / r2;
      node.vx += dx * k2;
      if (nDim > 1) {
        node.vy += dy * k2;
      }
      if (nDim > 2) {
        node.vz += dz * k2;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i2, n2 = nodes.length;
    strengths = new Array(n2);
    radiuses = new Array(n2);
    for (i2 = 0; i2 < n2; ++i2) {
      radiuses[i2] = +radius(nodes[i2], i2, nodes);
      strengths[i2] = isNaN(radiuses[i2]) ? 0 : +strength(nodes[i2], i2, nodes);
    }
  }
  force.initialize = function(initNodes, ...args) {
    nodes = initNodes;
    nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
    initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant(+_2), initialize(), force) : strength;
  };
  force.radius = function(_2) {
    return arguments.length ? (radius = typeof _2 === "function" ? _2 : constant(+_2), initialize(), force) : radius;
  };
  force.x = function(_2) {
    return arguments.length ? (x2 = +_2, force) : x2;
  };
  force.y = function(_2) {
    return arguments.length ? (y2 = +_2, force) : y2;
  };
  force.z = function(_2) {
    return arguments.length ? (z2 = +_2, force) : z2;
  };
  return force;
}
const { abs: abs$1, cos: cos$1, sin: sin$1, acos: acos$1, atan2, sqrt: sqrt$1, pow } = Math;
function crt(v2) {
  return v2 < 0 ? -pow(-v2, 1 / 3) : pow(v2, 1 / 3);
}
const pi$1 = Math.PI, tau = 2 * pi$1, quart = pi$1 / 2, epsilon = 1e-6, nMax = Number.MAX_SAFE_INTEGER || 9007199254740991, nMin = Number.MIN_SAFE_INTEGER || -9007199254740991, ZERO = { x: 0, y: 0, z: 0 };
const utils = {
  // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
  Tvalues: [
    -0.06405689286260563,
    0.06405689286260563,
    -0.1911188674736163,
    0.1911188674736163,
    -0.3150426796961634,
    0.3150426796961634,
    -0.4337935076260451,
    0.4337935076260451,
    -0.5454214713888396,
    0.5454214713888396,
    -0.6480936519369755,
    0.6480936519369755,
    -0.7401241915785544,
    0.7401241915785544,
    -0.820001985973903,
    0.820001985973903,
    -0.8864155270044011,
    0.8864155270044011,
    -0.9382745520027328,
    0.9382745520027328,
    -0.9747285559713095,
    0.9747285559713095,
    -0.9951872199970213,
    0.9951872199970213
  ],
  // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
  Cvalues: [
    0.12793819534675216,
    0.12793819534675216,
    0.1258374563468283,
    0.1258374563468283,
    0.12167047292780339,
    0.12167047292780339,
    0.1155056680537256,
    0.1155056680537256,
    0.10744427011596563,
    0.10744427011596563,
    0.09761865210411388,
    0.09761865210411388,
    0.08619016153195327,
    0.08619016153195327,
    0.0733464814110803,
    0.0733464814110803,
    0.05929858491543678,
    0.05929858491543678,
    0.04427743881741981,
    0.04427743881741981,
    0.028531388628933663,
    0.028531388628933663,
    0.0123412297999872,
    0.0123412297999872
  ],
  arcfn: function(t2, derivativeFn) {
    const d2 = derivativeFn(t2);
    let l2 = d2.x * d2.x + d2.y * d2.y;
    if (typeof d2.z !== "undefined") {
      l2 += d2.z * d2.z;
    }
    return sqrt$1(l2);
  },
  compute: function(t2, points, _3d) {
    if (t2 === 0) {
      points[0].t = 0;
      return points[0];
    }
    const order = points.length - 1;
    if (t2 === 1) {
      points[order].t = 1;
      return points[order];
    }
    const mt = 1 - t2;
    let p2 = points;
    if (order === 0) {
      points[0].t = t2;
      return points[0];
    }
    if (order === 1) {
      const ret = {
        x: mt * p2[0].x + t2 * p2[1].x,
        y: mt * p2[0].y + t2 * p2[1].y,
        t: t2
      };
      if (_3d) {
        ret.z = mt * p2[0].z + t2 * p2[1].z;
      }
      return ret;
    }
    if (order < 4) {
      let mt2 = mt * mt, t22 = t2 * t2, a2, b, c2, d2 = 0;
      if (order === 2) {
        p2 = [p2[0], p2[1], p2[2], ZERO];
        a2 = mt2;
        b = mt * t2 * 2;
        c2 = t22;
      } else if (order === 3) {
        a2 = mt2 * mt;
        b = mt2 * t2 * 3;
        c2 = mt * t22 * 3;
        d2 = t2 * t22;
      }
      const ret = {
        x: a2 * p2[0].x + b * p2[1].x + c2 * p2[2].x + d2 * p2[3].x,
        y: a2 * p2[0].y + b * p2[1].y + c2 * p2[2].y + d2 * p2[3].y,
        t: t2
      };
      if (_3d) {
        ret.z = a2 * p2[0].z + b * p2[1].z + c2 * p2[2].z + d2 * p2[3].z;
      }
      return ret;
    }
    const dCpts = JSON.parse(JSON.stringify(points));
    while (dCpts.length > 1) {
      for (let i2 = 0; i2 < dCpts.length - 1; i2++) {
        dCpts[i2] = {
          x: dCpts[i2].x + (dCpts[i2 + 1].x - dCpts[i2].x) * t2,
          y: dCpts[i2].y + (dCpts[i2 + 1].y - dCpts[i2].y) * t2
        };
        if (typeof dCpts[i2].z !== "undefined") {
          dCpts[i2].z = dCpts[i2].z + (dCpts[i2 + 1].z - dCpts[i2].z) * t2;
        }
      }
      dCpts.splice(dCpts.length - 1, 1);
    }
    dCpts[0].t = t2;
    return dCpts[0];
  },
  computeWithRatios: function(t2, points, ratios, _3d) {
    const mt = 1 - t2, r2 = ratios, p2 = points;
    let f1 = r2[0], f2 = r2[1], f3 = r2[2], f4 = r2[3], d2;
    f1 *= mt;
    f2 *= t2;
    if (p2.length === 2) {
      d2 = f1 + f2;
      return {
        x: (f1 * p2[0].x + f2 * p2[1].x) / d2,
        y: (f1 * p2[0].y + f2 * p2[1].y) / d2,
        z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z) / d2,
        t: t2
      };
    }
    f1 *= mt;
    f2 *= 2 * mt;
    f3 *= t2 * t2;
    if (p2.length === 3) {
      d2 = f1 + f2 + f3;
      return {
        x: (f1 * p2[0].x + f2 * p2[1].x + f3 * p2[2].x) / d2,
        y: (f1 * p2[0].y + f2 * p2[1].y + f3 * p2[2].y) / d2,
        z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z + f3 * p2[2].z) / d2,
        t: t2
      };
    }
    f1 *= mt;
    f2 *= 1.5 * mt;
    f3 *= 3 * mt;
    f4 *= t2 * t2 * t2;
    if (p2.length === 4) {
      d2 = f1 + f2 + f3 + f4;
      return {
        x: (f1 * p2[0].x + f2 * p2[1].x + f3 * p2[2].x + f4 * p2[3].x) / d2,
        y: (f1 * p2[0].y + f2 * p2[1].y + f3 * p2[2].y + f4 * p2[3].y) / d2,
        z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z + f3 * p2[2].z + f4 * p2[3].z) / d2,
        t: t2
      };
    }
  },
  derive: function(points, _3d) {
    const dpoints = [];
    for (let p2 = points, d2 = p2.length, c2 = d2 - 1; d2 > 1; d2--, c2--) {
      const list = [];
      for (let j2 = 0, dpt; j2 < c2; j2++) {
        dpt = {
          x: c2 * (p2[j2 + 1].x - p2[j2].x),
          y: c2 * (p2[j2 + 1].y - p2[j2].y)
        };
        if (_3d) {
          dpt.z = c2 * (p2[j2 + 1].z - p2[j2].z);
        }
        list.push(dpt);
      }
      dpoints.push(list);
      p2 = list;
    }
    return dpoints;
  },
  between: function(v2, m2, M2) {
    return m2 <= v2 && v2 <= M2 || utils.approximately(v2, m2) || utils.approximately(v2, M2);
  },
  approximately: function(a2, b, precision) {
    return abs$1(a2 - b) <= (precision || epsilon);
  },
  length: function(derivativeFn) {
    const z2 = 0.5, len = utils.Tvalues.length;
    let sum2 = 0;
    for (let i2 = 0, t2; i2 < len; i2++) {
      t2 = z2 * utils.Tvalues[i2] + z2;
      sum2 += utils.Cvalues[i2] * utils.arcfn(t2, derivativeFn);
    }
    return z2 * sum2;
  },
  map: function(v2, ds, de, ts, te) {
    const d1 = de - ds, d2 = te - ts, v22 = v2 - ds, r2 = v22 / d1;
    return ts + d2 * r2;
  },
  lerp: function(r2, v1, v2) {
    const ret = {
      x: v1.x + r2 * (v2.x - v1.x),
      y: v1.y + r2 * (v2.y - v1.y)
    };
    if (v1.z !== void 0 && v2.z !== void 0) {
      ret.z = v1.z + r2 * (v2.z - v1.z);
    }
    return ret;
  },
  pointToString: function(p2) {
    let s2 = p2.x + "/" + p2.y;
    if (typeof p2.z !== "undefined") {
      s2 += "/" + p2.z;
    }
    return s2;
  },
  pointsToString: function(points) {
    return "[" + points.map(utils.pointToString).join(", ") + "]";
  },
  copy: function(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  angle: function(o2, v1, v2) {
    const dx1 = v1.x - o2.x, dy1 = v1.y - o2.y, dx2 = v2.x - o2.x, dy2 = v2.y - o2.y, cross = dx1 * dy2 - dy1 * dx2, dot = dx1 * dx2 + dy1 * dy2;
    return atan2(cross, dot);
  },
  // round as string, to avoid rounding errors
  round: function(v2, d2) {
    const s2 = "" + v2;
    const pos = s2.indexOf(".");
    return parseFloat(s2.substring(0, pos + 1 + d2));
  },
  dist: function(p1, p2) {
    const dx = p1.x - p2.x, dy = p1.y - p2.y;
    return sqrt$1(dx * dx + dy * dy);
  },
  closest: function(LUT, point) {
    let mdist = pow(2, 63), mpos, d2;
    LUT.forEach(function(p2, idx) {
      d2 = utils.dist(point, p2);
      if (d2 < mdist) {
        mdist = d2;
        mpos = idx;
      }
    });
    return { mdist, mpos };
  },
  abcratio: function(t2, n2) {
    if (n2 !== 2 && n2 !== 3) {
      return false;
    }
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    } else if (t2 === 0 || t2 === 1) {
      return t2;
    }
    const bottom = pow(t2, n2) + pow(1 - t2, n2), top = bottom - 1;
    return abs$1(top / bottom);
  },
  projectionratio: function(t2, n2) {
    if (n2 !== 2 && n2 !== 3) {
      return false;
    }
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    } else if (t2 === 0 || t2 === 1) {
      return t2;
    }
    const top = pow(1 - t2, n2), bottom = pow(t2, n2) + top;
    return top / bottom;
  },
  lli8: function(x1, y1, x2, y2, x3, y3, x4, y4) {
    const nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), d2 = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d2 == 0) {
      return false;
    }
    return { x: nx / d2, y: ny / d2 };
  },
  lli4: function(p1, p2, p3, p4) {
    const x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y, x3 = p3.x, y3 = p3.y, x4 = p4.x, y4 = p4.y;
    return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
  },
  lli: function(v1, v2) {
    return utils.lli4(v1, v1.c, v2, v2.c);
  },
  makeline: function(p1, p2) {
    return new Bezier(
      p1.x,
      p1.y,
      (p1.x + p2.x) / 2,
      (p1.y + p2.y) / 2,
      p2.x,
      p2.y
    );
  },
  findbbox: function(sections) {
    let mx = nMax, my = nMax, MX = nMin, MY = nMin;
    sections.forEach(function(s2) {
      const bbox = s2.bbox();
      if (mx > bbox.x.min) mx = bbox.x.min;
      if (my > bbox.y.min) my = bbox.y.min;
      if (MX < bbox.x.max) MX = bbox.x.max;
      if (MY < bbox.y.max) MY = bbox.y.max;
    });
    return {
      x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
      y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my }
    };
  },
  shapeintersections: function(s1, bbox1, s2, bbox2, curveIntersectionThreshold) {
    if (!utils.bboxoverlap(bbox1, bbox2)) return [];
    const intersections = [];
    const a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
    const a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
    a1.forEach(function(l1) {
      if (l1.virtual) return;
      a2.forEach(function(l2) {
        if (l2.virtual) return;
        const iss = l1.intersects(l2, curveIntersectionThreshold);
        if (iss.length > 0) {
          iss.c1 = l1;
          iss.c2 = l2;
          iss.s1 = s1;
          iss.s2 = s2;
          intersections.push(iss);
        }
      });
    });
    return intersections;
  },
  makeshape: function(forward, back, curveIntersectionThreshold) {
    const bpl = back.points.length;
    const fpl = forward.points.length;
    const start = utils.makeline(back.points[bpl - 1], forward.points[0]);
    const end = utils.makeline(forward.points[fpl - 1], back.points[0]);
    const shape = {
      startcap: start,
      forward,
      back,
      endcap: end,
      bbox: utils.findbbox([start, forward, back, end])
    };
    shape.intersections = function(s2) {
      return utils.shapeintersections(
        shape,
        shape.bbox,
        s2,
        s2.bbox,
        curveIntersectionThreshold
      );
    };
    return shape;
  },
  getminmax: function(curve, d2, list) {
    if (!list) return { min: 0, max: 0 };
    let min2 = nMax, max2 = nMin, t2, c2;
    if (list.indexOf(0) === -1) {
      list = [0].concat(list);
    }
    if (list.indexOf(1) === -1) {
      list.push(1);
    }
    for (let i2 = 0, len = list.length; i2 < len; i2++) {
      t2 = list[i2];
      c2 = curve.get(t2);
      if (c2[d2] < min2) {
        min2 = c2[d2];
      }
      if (c2[d2] > max2) {
        max2 = c2[d2];
      }
    }
    return { min: min2, mid: (min2 + max2) / 2, max: max2, size: max2 - min2 };
  },
  align: function(points, line) {
    const tx = line.p1.x, ty = line.p1.y, a2 = -atan2(line.p2.y - ty, line.p2.x - tx), d2 = function(v2) {
      return {
        x: (v2.x - tx) * cos$1(a2) - (v2.y - ty) * sin$1(a2),
        y: (v2.x - tx) * sin$1(a2) + (v2.y - ty) * cos$1(a2)
      };
    };
    return points.map(d2);
  },
  roots: function(points, line) {
    line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
    const order = points.length - 1;
    const aligned = utils.align(points, line);
    const reduce = function(t2) {
      return 0 <= t2 && t2 <= 1;
    };
    if (order === 2) {
      const a3 = aligned[0].y, b2 = aligned[1].y, c3 = aligned[2].y, d3 = a3 - 2 * b2 + c3;
      if (d3 !== 0) {
        const m1 = -sqrt$1(b2 * b2 - a3 * c3), m2 = -a3 + b2, v12 = -(m1 + m2) / d3, v2 = -(-m1 + m2) / d3;
        return [v12, v2].filter(reduce);
      } else if (b2 !== c3 && d3 === 0) {
        return [(2 * b2 - c3) / (2 * b2 - 2 * c3)].filter(reduce);
      }
      return [];
    }
    const pa = aligned[0].y, pb = aligned[1].y, pc = aligned[2].y, pd = aligned[3].y;
    let d2 = -pa + 3 * pb - 3 * pc + pd, a2 = 3 * pa - 6 * pb + 3 * pc, b = -3 * pa + 3 * pb, c2 = pa;
    if (utils.approximately(d2, 0)) {
      if (utils.approximately(a2, 0)) {
        if (utils.approximately(b, 0)) {
          return [];
        }
        return [-c2 / b].filter(reduce);
      }
      const q3 = sqrt$1(b * b - 4 * a2 * c2), a22 = 2 * a2;
      return [(q3 - b) / a22, (-b - q3) / a22].filter(reduce);
    }
    a2 /= d2;
    b /= d2;
    c2 /= d2;
    const p2 = (3 * b - a2 * a2) / 3, p3 = p2 / 3, q2 = (2 * a2 * a2 * a2 - 9 * a2 * b + 27 * c2) / 27, q22 = q2 / 2, discriminant = q22 * q22 + p3 * p3 * p3;
    let u1, v1, x1, x2, x3;
    if (discriminant < 0) {
      const mp3 = -p2 / 3, mp33 = mp3 * mp3 * mp3, r2 = sqrt$1(mp33), t2 = -q2 / (2 * r2), cosphi = t2 < -1 ? -1 : t2 > 1 ? 1 : t2, phi = acos$1(cosphi), crtr = crt(r2), t1 = 2 * crtr;
      x1 = t1 * cos$1(phi / 3) - a2 / 3;
      x2 = t1 * cos$1((phi + tau) / 3) - a2 / 3;
      x3 = t1 * cos$1((phi + 2 * tau) / 3) - a2 / 3;
      return [x1, x2, x3].filter(reduce);
    } else if (discriminant === 0) {
      u1 = q22 < 0 ? crt(-q22) : -crt(q22);
      x1 = 2 * u1 - a2 / 3;
      x2 = -u1 - a2 / 3;
      return [x1, x2].filter(reduce);
    } else {
      const sd = sqrt$1(discriminant);
      u1 = crt(-q22 + sd);
      v1 = crt(q22 + sd);
      return [u1 - v1 - a2 / 3].filter(reduce);
    }
  },
  droots: function(p2) {
    if (p2.length === 3) {
      const a2 = p2[0], b = p2[1], c2 = p2[2], d2 = a2 - 2 * b + c2;
      if (d2 !== 0) {
        const m1 = -sqrt$1(b * b - a2 * c2), m2 = -a2 + b, v1 = -(m1 + m2) / d2, v2 = -(-m1 + m2) / d2;
        return [v1, v2];
      } else if (b !== c2 && d2 === 0) {
        return [(2 * b - c2) / (2 * (b - c2))];
      }
      return [];
    }
    if (p2.length === 2) {
      const a2 = p2[0], b = p2[1];
      if (a2 !== b) {
        return [a2 / (a2 - b)];
      }
      return [];
    }
    return [];
  },
  curvature: function(t2, d1, d2, _3d, kOnly) {
    let num, dnm, adk, dk, k2 = 0, r2 = 0;
    const d3 = utils.compute(t2, d1);
    const dd = utils.compute(t2, d2);
    const qdsum = d3.x * d3.x + d3.y * d3.y;
    if (_3d) {
      num = sqrt$1(
        pow(d3.y * dd.z - dd.y * d3.z, 2) + pow(d3.z * dd.x - dd.z * d3.x, 2) + pow(d3.x * dd.y - dd.x * d3.y, 2)
      );
      dnm = pow(qdsum + d3.z * d3.z, 3 / 2);
    } else {
      num = d3.x * dd.y - d3.y * dd.x;
      dnm = pow(qdsum, 3 / 2);
    }
    if (num === 0 || dnm === 0) {
      return { k: 0, r: 0 };
    }
    k2 = num / dnm;
    r2 = dnm / num;
    if (!kOnly) {
      const pk = utils.curvature(t2 - 1e-3, d1, d2, _3d, true).k;
      const nk = utils.curvature(t2 + 1e-3, d1, d2, _3d, true).k;
      dk = (nk - k2 + (k2 - pk)) / 2;
      adk = (abs$1(nk - k2) + abs$1(k2 - pk)) / 2;
    }
    return { k: k2, r: r2, dk, adk };
  },
  inflections: function(points) {
    if (points.length < 4) return [];
    const p2 = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }), a2 = p2[2].x * p2[1].y, b = p2[3].x * p2[1].y, c2 = p2[1].x * p2[2].y, d2 = p2[3].x * p2[2].y, v1 = 18 * (-3 * a2 + 2 * b + 3 * c2 - d2), v2 = 18 * (3 * a2 - b - 3 * c2), v3 = 18 * (c2 - a2);
    if (utils.approximately(v1, 0)) {
      if (!utils.approximately(v2, 0)) {
        let t2 = -v3 / v2;
        if (0 <= t2 && t2 <= 1) return [t2];
      }
      return [];
    }
    const d22 = 2 * v1;
    if (utils.approximately(d22, 0)) return [];
    const trm = v2 * v2 - 4 * v1 * v3;
    if (trm < 0) return [];
    const sq = Math.sqrt(trm);
    return [(sq - v2) / d22, -(v2 + sq) / d22].filter(function(r2) {
      return 0 <= r2 && r2 <= 1;
    });
  },
  bboxoverlap: function(b1, b2) {
    const dims = ["x", "y"], len = dims.length;
    for (let i2 = 0, dim, l2, t2, d2; i2 < len; i2++) {
      dim = dims[i2];
      l2 = b1[dim].mid;
      t2 = b2[dim].mid;
      d2 = (b1[dim].size + b2[dim].size) / 2;
      if (abs$1(l2 - t2) >= d2) return false;
    }
    return true;
  },
  expandbox: function(bbox, _bbox) {
    if (_bbox.x.min < bbox.x.min) {
      bbox.x.min = _bbox.x.min;
    }
    if (_bbox.y.min < bbox.y.min) {
      bbox.y.min = _bbox.y.min;
    }
    if (_bbox.z && _bbox.z.min < bbox.z.min) {
      bbox.z.min = _bbox.z.min;
    }
    if (_bbox.x.max > bbox.x.max) {
      bbox.x.max = _bbox.x.max;
    }
    if (_bbox.y.max > bbox.y.max) {
      bbox.y.max = _bbox.y.max;
    }
    if (_bbox.z && _bbox.z.max > bbox.z.max) {
      bbox.z.max = _bbox.z.max;
    }
    bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
    bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
    if (bbox.z) {
      bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
    }
    bbox.x.size = bbox.x.max - bbox.x.min;
    bbox.y.size = bbox.y.max - bbox.y.min;
    if (bbox.z) {
      bbox.z.size = bbox.z.max - bbox.z.min;
    }
  },
  pairiteration: function(c1, c2, curveIntersectionThreshold) {
    const c1b = c1.bbox(), c2b = c2.bbox(), r2 = 1e5, threshold = curveIntersectionThreshold || 0.5;
    if (c1b.x.size + c1b.y.size < threshold && c2b.x.size + c2b.y.size < threshold) {
      return [
        (r2 * (c1._t1 + c1._t2) / 2 | 0) / r2 + "/" + (r2 * (c2._t1 + c2._t2) / 2 | 0) / r2
      ];
    }
    let cc1 = c1.split(0.5), cc2 = c2.split(0.5), pairs = [
      { left: cc1.left, right: cc2.left },
      { left: cc1.left, right: cc2.right },
      { left: cc1.right, right: cc2.right },
      { left: cc1.right, right: cc2.left }
    ];
    pairs = pairs.filter(function(pair) {
      return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
    });
    let results = [];
    if (pairs.length === 0) return results;
    pairs.forEach(function(pair) {
      results = results.concat(
        utils.pairiteration(pair.left, pair.right, threshold)
      );
    });
    results = results.filter(function(v2, i2) {
      return results.indexOf(v2) === i2;
    });
    return results;
  },
  getccenter: function(p1, p2, p3) {
    const dx1 = p2.x - p1.x, dy1 = p2.y - p1.y, dx2 = p3.x - p2.x, dy2 = p3.y - p2.y, dx1p = dx1 * cos$1(quart) - dy1 * sin$1(quart), dy1p = dx1 * sin$1(quart) + dy1 * cos$1(quart), dx2p = dx2 * cos$1(quart) - dy2 * sin$1(quart), dy2p = dx2 * sin$1(quart) + dy2 * cos$1(quart), mx1 = (p1.x + p2.x) / 2, my1 = (p1.y + p2.y) / 2, mx2 = (p2.x + p3.x) / 2, my2 = (p2.y + p3.y) / 2, mx1n = mx1 + dx1p, my1n = my1 + dy1p, mx2n = mx2 + dx2p, my2n = my2 + dy2p, arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n), r2 = utils.dist(arc, p1);
    let s2 = atan2(p1.y - arc.y, p1.x - arc.x), m2 = atan2(p2.y - arc.y, p2.x - arc.x), e2 = atan2(p3.y - arc.y, p3.x - arc.x), _2;
    if (s2 < e2) {
      if (s2 > m2 || m2 > e2) {
        s2 += tau;
      }
      if (s2 > e2) {
        _2 = e2;
        e2 = s2;
        s2 = _2;
      }
    } else {
      if (e2 < m2 && m2 < s2) {
        _2 = e2;
        e2 = s2;
        s2 = _2;
      } else {
        e2 += tau;
      }
    }
    arc.s = s2;
    arc.e = e2;
    arc.r = r2;
    return arc;
  },
  numberSort: function(a2, b) {
    return a2 - b;
  }
};
class PolyBezier {
  constructor(curves) {
    this.curves = [];
    this._3d = false;
    if (!!curves) {
      this.curves = curves;
      this._3d = this.curves[0]._3d;
    }
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return "[" + this.curves.map(function(curve) {
      return utils.pointsToString(curve.points);
    }).join(", ") + "]";
  }
  addCurve(curve) {
    this.curves.push(curve);
    this._3d = this._3d || curve._3d;
  }
  length() {
    return this.curves.map(function(v2) {
      return v2.length();
    }).reduce(function(a2, b) {
      return a2 + b;
    });
  }
  curve(idx) {
    return this.curves[idx];
  }
  bbox() {
    const c2 = this.curves;
    var bbox = c2[0].bbox();
    for (var i2 = 1; i2 < c2.length; i2++) {
      utils.expandbox(bbox, c2[i2].bbox());
    }
    return bbox;
  }
  offset(d2) {
    const offset = [];
    this.curves.forEach(function(v2) {
      offset.push(...v2.offset(d2));
    });
    return new PolyBezier(offset);
  }
}
const { abs, min, max, cos, sin, acos, sqrt } = Math;
const pi = Math.PI;
class Bezier {
  constructor(coords) {
    let args = coords && coords.forEach ? coords : Array.from(arguments).slice();
    let coordlen = false;
    if (typeof args[0] === "object") {
      coordlen = args.length;
      const newargs = [];
      args.forEach(function(point2) {
        ["x", "y", "z"].forEach(function(d2) {
          if (typeof point2[d2] !== "undefined") {
            newargs.push(point2[d2]);
          }
        });
      });
      args = newargs;
    }
    let higher = false;
    const len = args.length;
    if (coordlen) {
      if (coordlen > 4) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
        higher = true;
      }
    } else {
      if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
      }
    }
    const _3d = this._3d = !higher && (len === 9 || len === 12) || coords && coords[0] && typeof coords[0].z !== "undefined";
    const points = this.points = [];
    for (let idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
      var point = {
        x: args[idx],
        y: args[idx + 1]
      };
      if (_3d) {
        point.z = args[idx + 2];
      }
      points.push(point);
    }
    const order = this.order = points.length - 1;
    const dims = this.dims = ["x", "y"];
    if (_3d) dims.push("z");
    this.dimlen = dims.length;
    const aligned = utils.align(points, { p1: points[0], p2: points[order] });
    const baselength = utils.dist(points[0], points[order]);
    this._linear = aligned.reduce((t2, p2) => t2 + abs(p2.y), 0) < baselength / 50;
    this._lut = [];
    this._t1 = 0;
    this._t2 = 1;
    this.update();
  }
  static quadraticFromPoints(p1, p2, p3, t2) {
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    }
    if (t2 === 0) {
      return new Bezier(p2, p2, p3);
    }
    if (t2 === 1) {
      return new Bezier(p1, p2, p2);
    }
    const abc = Bezier.getABC(2, p1, p2, p3, t2);
    return new Bezier(p1, abc.A, p3);
  }
  static cubicFromPoints(S2, B2, E2, t2, d1) {
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    }
    const abc = Bezier.getABC(3, S2, B2, E2, t2);
    if (typeof d1 === "undefined") {
      d1 = utils.dist(B2, abc.C);
    }
    const d2 = d1 * (1 - t2) / t2;
    const selen = utils.dist(S2, E2), lx = (E2.x - S2.x) / selen, ly = (E2.y - S2.y) / selen, bx1 = d1 * lx, by1 = d1 * ly, bx2 = d2 * lx, by2 = d2 * ly;
    const e1 = { x: B2.x - bx1, y: B2.y - by1 }, e2 = { x: B2.x + bx2, y: B2.y + by2 }, A2 = abc.A, v1 = { x: A2.x + (e1.x - A2.x) / (1 - t2), y: A2.y + (e1.y - A2.y) / (1 - t2) }, v2 = { x: A2.x + (e2.x - A2.x) / t2, y: A2.y + (e2.y - A2.y) / t2 }, nc1 = { x: S2.x + (v1.x - S2.x) / t2, y: S2.y + (v1.y - S2.y) / t2 }, nc2 = {
      x: E2.x + (v2.x - E2.x) / (1 - t2),
      y: E2.y + (v2.y - E2.y) / (1 - t2)
    };
    return new Bezier(S2, nc1, nc2, E2);
  }
  static getUtils() {
    return utils;
  }
  getUtils() {
    return Bezier.getUtils();
  }
  static get PolyBezier() {
    return PolyBezier;
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return utils.pointsToString(this.points);
  }
  toSVG() {
    if (this._3d) return false;
    const p2 = this.points, x2 = p2[0].x, y2 = p2[0].y, s2 = ["M", x2, y2, this.order === 2 ? "Q" : "C"];
    for (let i2 = 1, last = p2.length; i2 < last; i2++) {
      s2.push(p2[i2].x);
      s2.push(p2[i2].y);
    }
    return s2.join(" ");
  }
  setRatios(ratios) {
    if (ratios.length !== this.points.length) {
      throw new Error("incorrect number of ratio values");
    }
    this.ratios = ratios;
    this._lut = [];
  }
  verify() {
    const print = this.coordDigest();
    if (print !== this._print) {
      this._print = print;
      this.update();
    }
  }
  coordDigest() {
    return this.points.map(function(c2, pos) {
      return "" + pos + c2.x + c2.y + (c2.z ? c2.z : 0);
    }).join("");
  }
  update() {
    this._lut = [];
    this.dpoints = utils.derive(this.points, this._3d);
    this.computedirection();
  }
  computedirection() {
    const points = this.points;
    const angle = utils.angle(points[0], points[this.order], points[1]);
    this.clockwise = angle > 0;
  }
  length() {
    return utils.length(this.derivative.bind(this));
  }
  static getABC(order = 2, S2, B2, E2, t2 = 0.5) {
    const u2 = utils.projectionratio(t2, order), um = 1 - u2, C2 = {
      x: u2 * S2.x + um * E2.x,
      y: u2 * S2.y + um * E2.y
    }, s2 = utils.abcratio(t2, order), A2 = {
      x: B2.x + (B2.x - C2.x) / s2,
      y: B2.y + (B2.y - C2.y) / s2
    };
    return { A: A2, B: B2, C: C2, S: S2, E: E2 };
  }
  getABC(t2, B2) {
    B2 = B2 || this.get(t2);
    let S2 = this.points[0];
    let E2 = this.points[this.order];
    return Bezier.getABC(this.order, S2, B2, E2, t2);
  }
  getLUT(steps) {
    this.verify();
    steps = steps || 100;
    if (this._lut.length === steps + 1) {
      return this._lut;
    }
    this._lut = [];
    steps++;
    this._lut = [];
    for (let i2 = 0, p2, t2; i2 < steps; i2++) {
      t2 = i2 / (steps - 1);
      p2 = this.compute(t2);
      p2.t = t2;
      this._lut.push(p2);
    }
    return this._lut;
  }
  on(point, error) {
    error = error || 5;
    const lut = this.getLUT(), hits = [];
    for (let i2 = 0, c2, t2 = 0; i2 < lut.length; i2++) {
      c2 = lut[i2];
      if (utils.dist(c2, point) < error) {
        hits.push(c2);
        t2 += i2 / lut.length;
      }
    }
    if (!hits.length) return false;
    return t /= hits.length;
  }
  project(point) {
    const LUT = this.getLUT(), l2 = LUT.length - 1, closest = utils.closest(LUT, point), mpos = closest.mpos, t1 = (mpos - 1) / l2, t2 = (mpos + 1) / l2, step = 0.1 / l2;
    let mdist = closest.mdist, t3 = t1, ft = t3, p2;
    mdist += 1;
    for (let d2; t3 < t2 + step; t3 += step) {
      p2 = this.compute(t3);
      d2 = utils.dist(point, p2);
      if (d2 < mdist) {
        mdist = d2;
        ft = t3;
      }
    }
    ft = ft < 0 ? 0 : ft > 1 ? 1 : ft;
    p2 = this.compute(ft);
    p2.t = ft;
    p2.d = mdist;
    return p2;
  }
  get(t2) {
    return this.compute(t2);
  }
  point(idx) {
    return this.points[idx];
  }
  compute(t2) {
    if (this.ratios) {
      return utils.computeWithRatios(t2, this.points, this.ratios, this._3d);
    }
    return utils.compute(t2, this.points, this._3d, this.ratios);
  }
  raise() {
    const p2 = this.points, np = [p2[0]], k2 = p2.length;
    for (let i2 = 1, pi2, pim; i2 < k2; i2++) {
      pi2 = p2[i2];
      pim = p2[i2 - 1];
      np[i2] = {
        x: (k2 - i2) / k2 * pi2.x + i2 / k2 * pim.x,
        y: (k2 - i2) / k2 * pi2.y + i2 / k2 * pim.y
      };
    }
    np[k2] = p2[k2 - 1];
    return new Bezier(np);
  }
  derivative(t2) {
    return utils.compute(t2, this.dpoints[0], this._3d);
  }
  dderivative(t2) {
    return utils.compute(t2, this.dpoints[1], this._3d);
  }
  align() {
    let p2 = this.points;
    return new Bezier(utils.align(p2, { p1: p2[0], p2: p2[p2.length - 1] }));
  }
  curvature(t2) {
    return utils.curvature(t2, this.dpoints[0], this.dpoints[1], this._3d);
  }
  inflections() {
    return utils.inflections(this.points);
  }
  normal(t2) {
    return this._3d ? this.__normal3(t2) : this.__normal2(t2);
  }
  __normal2(t2) {
    const d2 = this.derivative(t2);
    const q2 = sqrt(d2.x * d2.x + d2.y * d2.y);
    return { t: t2, x: -d2.y / q2, y: d2.x / q2 };
  }
  __normal3(t2) {
    const r1 = this.derivative(t2), r2 = this.derivative(t2 + 0.01), q1 = sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z), q2 = sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
    r1.x /= q1;
    r1.y /= q1;
    r1.z /= q1;
    r2.x /= q2;
    r2.y /= q2;
    r2.z /= q2;
    const c2 = {
      x: r2.y * r1.z - r2.z * r1.y,
      y: r2.z * r1.x - r2.x * r1.z,
      z: r2.x * r1.y - r2.y * r1.x
    };
    const m2 = sqrt(c2.x * c2.x + c2.y * c2.y + c2.z * c2.z);
    c2.x /= m2;
    c2.y /= m2;
    c2.z /= m2;
    const R = [
      c2.x * c2.x,
      c2.x * c2.y - c2.z,
      c2.x * c2.z + c2.y,
      c2.x * c2.y + c2.z,
      c2.y * c2.y,
      c2.y * c2.z - c2.x,
      c2.x * c2.z - c2.y,
      c2.y * c2.z + c2.x,
      c2.z * c2.z
    ];
    const n2 = {
      t: t2,
      x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
      y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
      z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
    };
    return n2;
  }
  hull(t2) {
    let p2 = this.points, _p = [], q2 = [], idx = 0;
    q2[idx++] = p2[0];
    q2[idx++] = p2[1];
    q2[idx++] = p2[2];
    if (this.order === 3) {
      q2[idx++] = p2[3];
    }
    while (p2.length > 1) {
      _p = [];
      for (let i2 = 0, pt, l2 = p2.length - 1; i2 < l2; i2++) {
        pt = utils.lerp(t2, p2[i2], p2[i2 + 1]);
        q2[idx++] = pt;
        _p.push(pt);
      }
      p2 = _p;
    }
    return q2;
  }
  split(t1, t2) {
    if (t1 === 0 && !!t2) {
      return this.split(t2).left;
    }
    if (t2 === 1) {
      return this.split(t1).right;
    }
    const q2 = this.hull(t1);
    const result = {
      left: this.order === 2 ? new Bezier([q2[0], q2[3], q2[5]]) : new Bezier([q2[0], q2[4], q2[7], q2[9]]),
      right: this.order === 2 ? new Bezier([q2[5], q2[4], q2[2]]) : new Bezier([q2[9], q2[8], q2[6], q2[3]]),
      span: q2
    };
    result.left._t1 = utils.map(0, 0, 1, this._t1, this._t2);
    result.left._t2 = utils.map(t1, 0, 1, this._t1, this._t2);
    result.right._t1 = utils.map(t1, 0, 1, this._t1, this._t2);
    result.right._t2 = utils.map(1, 0, 1, this._t1, this._t2);
    if (!t2) {
      return result;
    }
    t2 = utils.map(t2, t1, 1, 0, 1);
    return result.right.split(t2).left;
  }
  extrema() {
    const result = {};
    let roots = [];
    this.dims.forEach(
      (function(dim) {
        let mfn = function(v2) {
          return v2[dim];
        };
        let p2 = this.dpoints[0].map(mfn);
        result[dim] = utils.droots(p2);
        if (this.order === 3) {
          p2 = this.dpoints[1].map(mfn);
          result[dim] = result[dim].concat(utils.droots(p2));
        }
        result[dim] = result[dim].filter(function(t2) {
          return t2 >= 0 && t2 <= 1;
        });
        roots = roots.concat(result[dim].sort(utils.numberSort));
      }).bind(this)
    );
    result.values = roots.sort(utils.numberSort).filter(function(v2, idx) {
      return roots.indexOf(v2) === idx;
    });
    return result;
  }
  bbox() {
    const extrema = this.extrema(), result = {};
    this.dims.forEach(
      (function(d2) {
        result[d2] = utils.getminmax(this, d2, extrema[d2]);
      }).bind(this)
    );
    return result;
  }
  overlaps(curve) {
    const lbbox = this.bbox(), tbbox = curve.bbox();
    return utils.bboxoverlap(lbbox, tbbox);
  }
  offset(t2, d2) {
    if (typeof d2 !== "undefined") {
      const c2 = this.get(t2), n2 = this.normal(t2);
      const ret = {
        c: c2,
        n: n2,
        x: c2.x + n2.x * d2,
        y: c2.y + n2.y * d2
      };
      if (this._3d) {
        ret.z = c2.z + n2.z * d2;
      }
      return ret;
    }
    if (this._linear) {
      const nv = this.normal(0), coords = this.points.map(function(p2) {
        const ret = {
          x: p2.x + t2 * nv.x,
          y: p2.y + t2 * nv.y
        };
        if (p2.z && nv.z) {
          ret.z = p2.z + t2 * nv.z;
        }
        return ret;
      });
      return [new Bezier(coords)];
    }
    return this.reduce().map(function(s2) {
      if (s2._linear) {
        return s2.offset(t2)[0];
      }
      return s2.scale(t2);
    });
  }
  simple() {
    if (this.order === 3) {
      const a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
      const a2 = utils.angle(this.points[0], this.points[3], this.points[2]);
      if (a1 > 0 && a2 < 0 || a1 < 0 && a2 > 0) return false;
    }
    const n1 = this.normal(0);
    const n2 = this.normal(1);
    let s2 = n1.x * n2.x + n1.y * n2.y;
    if (this._3d) {
      s2 += n1.z * n2.z;
    }
    return abs(acos(s2)) < pi / 3;
  }
  reduce() {
    let i2, t1 = 0, t2 = 0, step = 0.01, segment, pass1 = [], pass2 = [];
    let extrema = this.extrema().values;
    if (extrema.indexOf(0) === -1) {
      extrema = [0].concat(extrema);
    }
    if (extrema.indexOf(1) === -1) {
      extrema.push(1);
    }
    for (t1 = extrema[0], i2 = 1; i2 < extrema.length; i2++) {
      t2 = extrema[i2];
      segment = this.split(t1, t2);
      segment._t1 = t1;
      segment._t2 = t2;
      pass1.push(segment);
      t1 = t2;
    }
    pass1.forEach(function(p1) {
      t1 = 0;
      t2 = 0;
      while (t2 <= 1) {
        for (t2 = t1 + step; t2 <= 1 + step; t2 += step) {
          segment = p1.split(t1, t2);
          if (!segment.simple()) {
            t2 -= step;
            if (abs(t1 - t2) < step) {
              return [];
            }
            segment = p1.split(t1, t2);
            segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
            segment._t2 = utils.map(t2, 0, 1, p1._t1, p1._t2);
            pass2.push(segment);
            t1 = t2;
            break;
          }
        }
      }
      if (t1 < 1) {
        segment = p1.split(t1, 1);
        segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
        segment._t2 = p1._t2;
        pass2.push(segment);
      }
    });
    return pass2;
  }
  translate(v2, d1, d2) {
    d2 = typeof d2 === "number" ? d2 : d1;
    const o2 = this.order;
    let d3 = this.points.map((_2, i2) => (1 - i2 / o2) * d1 + i2 / o2 * d2);
    return new Bezier(
      this.points.map((p2, i2) => ({
        x: p2.x + v2.x * d3[i2],
        y: p2.y + v2.y * d3[i2]
      }))
    );
  }
  scale(d2) {
    const order = this.order;
    let distanceFn = false;
    if (typeof d2 === "function") {
      distanceFn = d2;
    }
    if (distanceFn && order === 2) {
      return this.raise().scale(distanceFn);
    }
    const clockwise = this.clockwise;
    const points = this.points;
    if (this._linear) {
      return this.translate(
        this.normal(0),
        distanceFn ? distanceFn(0) : d2,
        distanceFn ? distanceFn(1) : d2
      );
    }
    const r1 = distanceFn ? distanceFn(0) : d2;
    const r2 = distanceFn ? distanceFn(1) : d2;
    const v2 = [this.offset(0, 10), this.offset(1, 10)];
    const np = [];
    const o2 = utils.lli4(v2[0], v2[0].c, v2[1], v2[1].c);
    if (!o2) {
      throw new Error("cannot scale this curve. Try reducing it first.");
    }
    [0, 1].forEach(function(t2) {
      const p2 = np[t2 * order] = utils.copy(points[t2 * order]);
      p2.x += (t2 ? r2 : r1) * v2[t2].n.x;
      p2.y += (t2 ? r2 : r1) * v2[t2].n.y;
    });
    if (!distanceFn) {
      [0, 1].forEach((t2) => {
        if (order === 2 && !!t2) return;
        const p2 = np[t2 * order];
        const d3 = this.derivative(t2);
        const p22 = { x: p2.x + d3.x, y: p2.y + d3.y };
        np[t2 + 1] = utils.lli4(p2, p22, o2, points[t2 + 1]);
      });
      return new Bezier(np);
    }
    [0, 1].forEach(function(t2) {
      if (order === 2 && !!t2) return;
      var p2 = points[t2 + 1];
      var ov = {
        x: p2.x - o2.x,
        y: p2.y - o2.y
      };
      var rc = distanceFn ? distanceFn((t2 + 1) / order) : d2;
      if (distanceFn && !clockwise) rc = -rc;
      var m2 = sqrt(ov.x * ov.x + ov.y * ov.y);
      ov.x /= m2;
      ov.y /= m2;
      np[t2 + 1] = {
        x: p2.x + rc * ov.x,
        y: p2.y + rc * ov.y
      };
    });
    return new Bezier(np);
  }
  outline(d1, d2, d3, d4) {
    d2 = d2 === void 0 ? d1 : d2;
    if (this._linear) {
      const n2 = this.normal(0);
      const start = this.points[0];
      const end = this.points[this.points.length - 1];
      let s2, mid, e2;
      if (d3 === void 0) {
        d3 = d1;
        d4 = d2;
      }
      s2 = { x: start.x + n2.x * d1, y: start.y + n2.y * d1 };
      e2 = { x: end.x + n2.x * d3, y: end.y + n2.y * d3 };
      mid = { x: (s2.x + e2.x) / 2, y: (s2.y + e2.y) / 2 };
      const fline = [s2, mid, e2];
      s2 = { x: start.x - n2.x * d2, y: start.y - n2.y * d2 };
      e2 = { x: end.x - n2.x * d4, y: end.y - n2.y * d4 };
      mid = { x: (s2.x + e2.x) / 2, y: (s2.y + e2.y) / 2 };
      const bline = [e2, mid, s2];
      const ls2 = utils.makeline(bline[2], fline[0]);
      const le2 = utils.makeline(fline[2], bline[0]);
      const segments2 = [ls2, new Bezier(fline), le2, new Bezier(bline)];
      return new PolyBezier(segments2);
    }
    const reduced = this.reduce(), len = reduced.length, fcurves = [];
    let bcurves = [], p2, alen = 0, tlen = this.length();
    const graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";
    function linearDistanceFunction(s2, e2, tlen2, alen2, slen) {
      return function(v2) {
        const f1 = alen2 / tlen2, f2 = (alen2 + slen) / tlen2, d5 = e2 - s2;
        return utils.map(v2, 0, 1, s2 + f1 * d5, s2 + f2 * d5);
      };
    }
    reduced.forEach(function(segment) {
      const slen = segment.length();
      if (graduated) {
        fcurves.push(
          segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
        );
        bcurves.push(
          segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
        );
      } else {
        fcurves.push(segment.scale(d1));
        bcurves.push(segment.scale(-d2));
      }
      alen += slen;
    });
    bcurves = bcurves.map(function(s2) {
      p2 = s2.points;
      if (p2[3]) {
        s2.points = [p2[3], p2[2], p2[1], p2[0]];
      } else {
        s2.points = [p2[2], p2[1], p2[0]];
      }
      return s2;
    }).reverse();
    const fs = fcurves[0].points[0], fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1], bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1], be = bcurves[0].points[0], ls = utils.makeline(bs, fs), le = utils.makeline(fe, be), segments = [ls].concat(fcurves).concat([le]).concat(bcurves);
    return new PolyBezier(segments);
  }
  outlineshapes(d1, d2, curveIntersectionThreshold) {
    d2 = d2 || d1;
    const outline = this.outline(d1, d2).curves;
    const shapes = [];
    for (let i2 = 1, len = outline.length; i2 < len / 2; i2++) {
      const shape = utils.makeshape(
        outline[i2],
        outline[len - i2],
        curveIntersectionThreshold
      );
      shape.startcap.virtual = i2 > 1;
      shape.endcap.virtual = i2 < len / 2 - 1;
      shapes.push(shape);
    }
    return shapes;
  }
  intersects(curve, curveIntersectionThreshold) {
    if (!curve) return this.selfintersects(curveIntersectionThreshold);
    if (curve.p1 && curve.p2) {
      return this.lineIntersects(curve);
    }
    if (curve instanceof Bezier) {
      curve = curve.reduce();
    }
    return this.curveintersects(
      this.reduce(),
      curve,
      curveIntersectionThreshold
    );
  }
  lineIntersects(line) {
    const mx = min(line.p1.x, line.p2.x), my = min(line.p1.y, line.p2.y), MX = max(line.p1.x, line.p2.x), MY = max(line.p1.y, line.p2.y);
    return utils.roots(this.points, line).filter((t2) => {
      var p2 = this.get(t2);
      return utils.between(p2.x, mx, MX) && utils.between(p2.y, my, MY);
    });
  }
  selfintersects(curveIntersectionThreshold) {
    const reduced = this.reduce(), len = reduced.length - 2, results = [];
    for (let i2 = 0, result, left, right; i2 < len; i2++) {
      left = reduced.slice(i2, i2 + 1);
      right = reduced.slice(i2 + 2);
      result = this.curveintersects(left, right, curveIntersectionThreshold);
      results.push(...result);
    }
    return results;
  }
  curveintersects(c1, c2, curveIntersectionThreshold) {
    const pairs = [];
    c1.forEach(function(l2) {
      c2.forEach(function(r2) {
        if (l2.overlaps(r2)) {
          pairs.push({ left: l2, right: r2 });
        }
      });
    });
    let intersections = [];
    pairs.forEach(function(pair) {
      const result = utils.pairiteration(
        pair.left,
        pair.right,
        curveIntersectionThreshold
      );
      if (result.length > 0) {
        intersections = intersections.concat(result);
      }
    });
    return intersections;
  }
  arcs(errorThreshold) {
    errorThreshold = errorThreshold || 0.5;
    return this._iterate(errorThreshold, []);
  }
  _error(pc, np1, s2, e2) {
    const q2 = (e2 - s2) / 4, c1 = this.get(s2 + q2), c2 = this.get(e2 - q2), ref = utils.dist(pc, np1), d1 = utils.dist(pc, c1), d2 = utils.dist(pc, c2);
    return abs(d1 - ref) + abs(d2 - ref);
  }
  _iterate(errorThreshold, circles) {
    let t_s = 0, t_e = 1, safety;
    do {
      safety = 0;
      t_e = 1;
      let np1 = this.get(t_s), np2, np3, arc, prev_arc;
      let curr_good = false, prev_good = false, done;
      let t_m = t_e, prev_e = 1;
      do {
        prev_good = curr_good;
        prev_arc = arc;
        t_m = (t_s + t_e) / 2;
        np2 = this.get(t_m);
        np3 = this.get(t_e);
        arc = utils.getccenter(np1, np2, np3);
        arc.interval = {
          start: t_s,
          end: t_e
        };
        let error = this._error(arc, np1, t_s, t_e);
        curr_good = error <= errorThreshold;
        done = prev_good && !curr_good;
        if (!done) prev_e = t_e;
        if (curr_good) {
          if (t_e >= 1) {
            arc.interval.end = prev_e = 1;
            prev_arc = arc;
            if (t_e > 1) {
              let d2 = {
                x: arc.x + arc.r * cos(arc.e),
                y: arc.y + arc.r * sin(arc.e)
              };
              arc.e += utils.angle({ x: arc.x, y: arc.y }, d2, this.get(1));
            }
            break;
          }
          t_e = t_e + (t_e - t_s) / 2;
        } else {
          t_e = t_m;
        }
      } while (!done && safety++ < 100);
      if (safety >= 100) {
        break;
      }
      prev_arc = prev_arc ? prev_arc : arc;
      circles.push(prev_arc);
      t_s = prev_e;
    } while (t_e < 1);
    return circles;
  }
}
function _arrayLikeToArray$1(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _arrayWithHoles$1(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles$1(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray$1(r2);
}
function _iterableToArray$1(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit$1(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(e2, t2) {
  if (null == e2) return {};
  var o2, r2, i2 = _objectWithoutPropertiesLoose(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var s2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < s2.length; r2++) o2 = s2[r2], t2.includes(o2) || {}.propertyIsEnumerable.call(e2, o2) && (i2[o2] = e2[o2]);
  }
  return i2;
}
function _objectWithoutPropertiesLoose(r2, e2) {
  if (null == r2) return {};
  var t2 = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (e2.includes(n2)) continue;
    t2[n2] = r2[n2];
  }
  return t2;
}
function _slicedToArray$1(r2, e2) {
  return _arrayWithHoles$1(r2) || _iterableToArrayLimit$1(r2, e2) || _unsupportedIterableToArray$1(r2, e2) || _nonIterableRest$1();
}
function _toConsumableArray$1(r2) {
  return _arrayWithoutHoles$1(r2) || _iterableToArray$1(r2) || _unsupportedIterableToArray$1(r2) || _nonIterableSpread$1();
}
function _toPrimitive$1(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t2);
}
function _toPropertyKey$1(t2) {
  var i2 = _toPrimitive$1(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _unsupportedIterableToArray$1(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray$1(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$1(r2, a2) : void 0;
  }
}
var index = function() {
  var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var keyAccessors = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var multiItem = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var flattenKeys = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var keys = (keyAccessors instanceof Array ? keyAccessors.length ? keyAccessors : [void 0] : [keyAccessors]).map(function(key) {
    return {
      keyAccessor: key,
      isProp: !(key instanceof Function)
    };
  });
  var indexedResult = list.reduce(function(res, item) {
    var iterObj = res;
    var itemVal = item;
    keys.forEach(function(_ref, idx) {
      var keyAccessor = _ref.keyAccessor, isProp = _ref.isProp;
      var key;
      if (isProp) {
        var _itemVal = itemVal, propVal = _itemVal[keyAccessor], rest = _objectWithoutProperties(_itemVal, [keyAccessor].map(_toPropertyKey$1));
        key = propVal;
        itemVal = rest;
      } else {
        key = keyAccessor(itemVal, idx);
      }
      if (idx + 1 < keys.length) {
        if (!iterObj.hasOwnProperty(key)) {
          iterObj[key] = {};
        }
        iterObj = iterObj[key];
      } else {
        if (multiItem) {
          if (!iterObj.hasOwnProperty(key)) {
            iterObj[key] = [];
          }
          iterObj[key].push(itemVal);
        } else {
          iterObj[key] = itemVal;
        }
      }
    });
    return res;
  }, {});
  if (multiItem instanceof Function) {
    (function reduce(node) {
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      if (level === keys.length) {
        Object.keys(node).forEach(function(k2) {
          return node[k2] = multiItem(node[k2]);
        });
      } else {
        Object.values(node).forEach(function(child) {
          return reduce(child, level + 1);
        });
      }
    })(indexedResult);
  }
  var result = indexedResult;
  if (flattenKeys) {
    result = [];
    (function flatten(node) {
      var accKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      if (accKeys.length === keys.length) {
        result.push({
          keys: accKeys,
          vals: node
        });
      } else {
        Object.entries(node).forEach(function(_ref2) {
          var _ref3 = _slicedToArray$1(_ref2, 2), key = _ref3[0], val = _ref3[1];
          return flatten(val, [].concat(_toConsumableArray$1(accKeys), [key]));
        });
      }
    })(indexedResult);
    if (keyAccessors instanceof Array && keyAccessors.length === 0 && result.length === 1) {
      result[0].keys = [];
    }
  }
  return result;
};
function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = ".force-graph-container canvas {\n  display: block;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.force-graph-container .clickable {\n  cursor: pointer;\n}\n\n.force-graph-container .grabbable {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.force-graph-container .grabbable:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n";
styleInject(css_248z);
function _arrayLikeToArray(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}
function _construct(t2, e2, r2) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o2 = [null];
  o2.push.apply(o2, e2);
  var p2 = new (t2.bind.apply(t2, o2))();
  return p2;
}
function _defineProperty(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t2;
  })();
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _unsupportedIterableToArray(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
  }
}
var autoColorScale = ordinal(schemePaired);
function autoColorObjects(objects, colorByAccessor, colorField) {
  if (!colorByAccessor || typeof colorField !== "string") return;
  objects.filter(function(obj) {
    return !obj[colorField];
  }).forEach(function(obj) {
    obj[colorField] = autoColorScale(colorByAccessor(obj));
  });
}
function getDagDepths(_ref, idAccessor) {
  var nodes = _ref.nodes, links = _ref.links;
  var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$nodeFilter = _ref2.nodeFilter, nodeFilter = _ref2$nodeFilter === void 0 ? function() {
    return true;
  } : _ref2$nodeFilter, _ref2$onLoopError = _ref2.onLoopError, onLoopError = _ref2$onLoopError === void 0 ? function(loopIds) {
    throw "Invalid DAG structure! Found cycle in node path: ".concat(loopIds.join(" -> "), ".");
  } : _ref2$onLoopError;
  var graph = {};
  nodes.forEach(function(node) {
    return graph[idAccessor(node)] = {
      data: node,
      out: [],
      depth: -1,
      skip: !nodeFilter(node)
    };
  });
  links.forEach(function(_ref3) {
    var source = _ref3.source, target = _ref3.target;
    var sourceId = getNodeId(source);
    var targetId = getNodeId(target);
    if (!graph.hasOwnProperty(sourceId)) throw "Missing source node with id: ".concat(sourceId);
    if (!graph.hasOwnProperty(targetId)) throw "Missing target node with id: ".concat(targetId);
    var sourceNode = graph[sourceId];
    var targetNode = graph[targetId];
    sourceNode.out.push(targetNode);
    function getNodeId(node) {
      return _typeof(node) === "object" ? idAccessor(node) : node;
    }
  });
  var foundLoops = [];
  traverse(Object.values(graph));
  var nodeDepths = Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(graph).filter(function(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2), node = _ref5[1];
    return !node.skip;
  }).map(function(_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2), id = _ref7[0], node = _ref7[1];
    return _defineProperty({}, id, node.depth);
  }))));
  return nodeDepths;
  function traverse(nodes2) {
    var nodeStack = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var currentDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var _loop = function _loop2() {
      var node = nodes2[i2];
      if (nodeStack.indexOf(node) !== -1) {
        var loop = [].concat(_toConsumableArray(nodeStack.slice(nodeStack.indexOf(node))), [node]).map(function(d2) {
          return idAccessor(d2.data);
        });
        if (!foundLoops.some(function(foundLoop) {
          return foundLoop.length === loop.length && foundLoop.every(function(id, idx) {
            return id === loop[idx];
          });
        })) {
          foundLoops.push(loop);
          onLoopError(loop);
        }
        return 1;
      }
      if (currentDepth > node.depth) {
        node.depth = currentDepth;
        traverse(node.out, [].concat(_toConsumableArray(nodeStack), [node]), currentDepth + (node.skip ? 0 : 1));
      }
    };
    for (var i2 = 0, l2 = nodes2.length; i2 < l2; i2++) {
      if (_loop()) continue;
    }
  }
}
var DAG_LEVEL_NODE_RATIO = 2;
var notifyRedraw = function notifyRedraw2(_2, state) {
  return state.onNeedsRedraw && state.onNeedsRedraw();
};
var updDataPhotons = function updDataPhotons2(_2, state) {
  if (!state.isShadow) {
    var linkParticlesAccessor = index$3(state.linkDirectionalParticles);
    state.graphData.links.forEach(function(link) {
      var numPhotons = Math.round(Math.abs(linkParticlesAccessor(link)));
      if (numPhotons) {
        link.__photons = _toConsumableArray(Array(numPhotons)).map(function() {
          return {};
        });
      } else {
        delete link.__photons;
      }
    });
  }
};
var CanvasForceGraph = index$4({
  props: {
    graphData: {
      "default": {
        nodes: [],
        links: []
      },
      onChange: function onChange(_2, state) {
        state.engineRunning = false;
        updDataPhotons(_2, state);
      }
    },
    dagMode: {
      onChange: function onChange2(dagMode, state) {
        !dagMode && (state.graphData.nodes || []).forEach(function(n2) {
          return n2.fx = n2.fy = void 0;
        });
      }
    },
    dagLevelDistance: {},
    dagNodeFilter: {
      "default": function _default2(node) {
        return true;
      }
    },
    onDagError: {
      triggerUpdate: false
    },
    nodeRelSize: {
      "default": 4,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    // area per val unit
    nodeId: {
      "default": "id"
    },
    nodeVal: {
      "default": "val",
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeColor: {
      "default": "color",
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeAutoColorBy: {},
    nodeCanvasObject: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeCanvasObjectMode: {
      "default": function _default3() {
        return "replace";
      },
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeVisibility: {
      "default": true,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkSource: {
      "default": "source"
    },
    linkTarget: {
      "default": "target"
    },
    linkVisibility: {
      "default": true,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkColor: {
      "default": "color",
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkAutoColorBy: {},
    linkLineDash: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkWidth: {
      "default": 1,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkCurvature: {
      "default": 0,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkCanvasObject: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkCanvasObjectMode: {
      "default": function _default4() {
        return "replace";
      },
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkDirectionalArrowLength: {
      "default": 0,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkDirectionalArrowColor: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkDirectionalArrowRelPos: {
      "default": 0.5,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    // value between 0<>1 indicating the relative pos along the (exposed) line
    linkDirectionalParticles: {
      "default": 0,
      triggerUpdate: false,
      onChange: updDataPhotons
    },
    // animate photons travelling in the link direction
    linkDirectionalParticleSpeed: {
      "default": 0.01,
      triggerUpdate: false
    },
    // in link length ratio per frame
    linkDirectionalParticleOffset: {
      "default": 0,
      triggerUpdate: false
    },
    // starting position offset along the link's length, like a pre-delay. Values between [0, 1]
    linkDirectionalParticleWidth: {
      "default": 4,
      triggerUpdate: false
    },
    linkDirectionalParticleColor: {
      triggerUpdate: false
    },
    linkDirectionalParticleCanvasObject: {
      triggerUpdate: false
    },
    globalScale: {
      "default": 1,
      triggerUpdate: false
    },
    d3AlphaMin: {
      "default": 0,
      triggerUpdate: false
    },
    d3AlphaDecay: {
      "default": 0.0228,
      triggerUpdate: false,
      onChange: function onChange3(alphaDecay, state) {
        state.forceLayout.alphaDecay(alphaDecay);
      }
    },
    d3AlphaTarget: {
      "default": 0,
      triggerUpdate: false,
      onChange: function onChange4(alphaTarget, state) {
        state.forceLayout.alphaTarget(alphaTarget);
      }
    },
    d3VelocityDecay: {
      "default": 0.4,
      triggerUpdate: false,
      onChange: function onChange5(velocityDecay, state) {
        state.forceLayout.velocityDecay(velocityDecay);
      }
    },
    warmupTicks: {
      "default": 0,
      triggerUpdate: false
    },
    // how many times to tick the force engine at init before starting to render
    cooldownTicks: {
      "default": Infinity,
      triggerUpdate: false
    },
    cooldownTime: {
      "default": 15e3,
      triggerUpdate: false
    },
    // ms
    onUpdate: {
      "default": function _default5() {
      },
      triggerUpdate: false
    },
    onFinishUpdate: {
      "default": function _default6() {
      },
      triggerUpdate: false
    },
    onEngineTick: {
      "default": function _default7() {
      },
      triggerUpdate: false
    },
    onEngineStop: {
      "default": function _default8() {
      },
      triggerUpdate: false
    },
    onNeedsRedraw: {
      triggerUpdate: false
    },
    isShadow: {
      "default": false,
      triggerUpdate: false
    }
  },
  methods: {
    // Expose d3 forces for external manipulation
    d3Force: function d3Force(state, forceName, forceFn) {
      if (forceFn === void 0) {
        return state.forceLayout.force(forceName);
      }
      state.forceLayout.force(forceName, forceFn);
      return this;
    },
    d3ReheatSimulation: function d3ReheatSimulation(state) {
      state.forceLayout.alpha(1);
      this.resetCountdown();
      return this;
    },
    // reset cooldown state
    resetCountdown: function resetCountdown(state) {
      state.cntTicks = 0;
      state.startTickTime = /* @__PURE__ */ new Date();
      state.engineRunning = true;
      return this;
    },
    isEngineRunning: function isEngineRunning(state) {
      return !!state.engineRunning;
    },
    tickFrame: function tickFrame(state) {
      !state.isShadow && layoutTick();
      paintLinks();
      !state.isShadow && paintArrows();
      !state.isShadow && paintPhotons();
      paintNodes();
      return this;
      function layoutTick() {
        if (state.engineRunning) {
          if (++state.cntTicks > state.cooldownTicks || /* @__PURE__ */ new Date() - state.startTickTime > state.cooldownTime || state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin) {
            state.engineRunning = false;
            state.onEngineStop();
          } else {
            state.forceLayout.tick();
            state.onEngineTick();
          }
        }
      }
      function paintNodes() {
        var getVisibility = index$3(state.nodeVisibility);
        var getVal = index$3(state.nodeVal);
        var getColor = index$3(state.nodeColor);
        var getNodeCanvasObjectMode = index$3(state.nodeCanvasObjectMode);
        var ctx = state.ctx;
        var padAmount = state.isShadow / state.globalScale;
        var visibleNodes = state.graphData.nodes.filter(getVisibility);
        ctx.save();
        visibleNodes.forEach(function(node) {
          var nodeCanvasObjectMode = getNodeCanvasObjectMode(node);
          if (state.nodeCanvasObject && (nodeCanvasObjectMode === "before" || nodeCanvasObjectMode === "replace")) {
            state.nodeCanvasObject(node, ctx, state.globalScale);
            if (nodeCanvasObjectMode === "replace") {
              ctx.restore();
              return;
            }
          }
          var r2 = Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize + padAmount;
          ctx.beginPath();
          ctx.arc(node.x, node.y, r2, 0, 2 * Math.PI, false);
          ctx.fillStyle = getColor(node) || "rgba(31, 120, 180, 0.92)";
          ctx.fill();
          if (state.nodeCanvasObject && nodeCanvasObjectMode === "after") {
            state.nodeCanvasObject(node, state.ctx, state.globalScale);
          }
        });
        ctx.restore();
      }
      function paintLinks() {
        var getVisibility = index$3(state.linkVisibility);
        var getColor = index$3(state.linkColor);
        var getWidth = index$3(state.linkWidth);
        var getLineDash = index$3(state.linkLineDash);
        var getCurvature = index$3(state.linkCurvature);
        var getLinkCanvasObjectMode = index$3(state.linkCanvasObjectMode);
        var ctx = state.ctx;
        var padAmount = state.isShadow * 2;
        var visibleLinks = state.graphData.links.filter(getVisibility);
        visibleLinks.forEach(calcLinkControlPoints);
        var beforeCustomLinks = [], afterCustomLinks = [], defaultPaintLinks = visibleLinks;
        if (state.linkCanvasObject) {
          var replaceCustomLinks = [], otherCustomLinks = [];
          visibleLinks.forEach(function(d2) {
            return ({
              before: beforeCustomLinks,
              after: afterCustomLinks,
              replace: replaceCustomLinks
            }[getLinkCanvasObjectMode(d2)] || otherCustomLinks).push(d2);
          });
          defaultPaintLinks = [].concat(_toConsumableArray(beforeCustomLinks), afterCustomLinks, otherCustomLinks);
          beforeCustomLinks = beforeCustomLinks.concat(replaceCustomLinks);
        }
        ctx.save();
        beforeCustomLinks.forEach(function(link) {
          return state.linkCanvasObject(link, ctx, state.globalScale);
        });
        ctx.restore();
        var linksPerColor = index(defaultPaintLinks, [getColor, getWidth, getLineDash]);
        ctx.save();
        Object.entries(linksPerColor).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), color = _ref2[0], linksPerWidth = _ref2[1];
          var lineColor = !color || color === "undefined" ? "rgba(0,0,0,0.15)" : color;
          Object.entries(linksPerWidth).forEach(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), width = _ref4[0], linesPerLineDash = _ref4[1];
            var lineWidth = (width || 1) / state.globalScale + padAmount;
            Object.entries(linesPerLineDash).forEach(function(_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2);
              _ref6[0];
              var links = _ref6[1];
              var lineDashSegments = getLineDash(links[0]);
              ctx.beginPath();
              links.forEach(function(link) {
                var start = link.source;
                var end = link.target;
                if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
                ctx.moveTo(start.x, start.y);
                var controlPoints = link.__controlPoints;
                if (!controlPoints) {
                  ctx.lineTo(end.x, end.y);
                } else {
                  ctx[controlPoints.length === 2 ? "quadraticCurveTo" : "bezierCurveTo"].apply(ctx, _toConsumableArray(controlPoints).concat([end.x, end.y]));
                }
              });
              ctx.strokeStyle = lineColor;
              ctx.lineWidth = lineWidth;
              ctx.setLineDash(lineDashSegments || []);
              ctx.stroke();
            });
          });
        });
        ctx.restore();
        ctx.save();
        afterCustomLinks.forEach(function(link) {
          return state.linkCanvasObject(link, ctx, state.globalScale);
        });
        ctx.restore();
        function calcLinkControlPoints(link) {
          var curvature = getCurvature(link);
          if (!curvature) {
            link.__controlPoints = null;
            return;
          }
          var start = link.source;
          var end = link.target;
          if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
          var l2 = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
          if (l2 > 0) {
            var a2 = Math.atan2(end.y - start.y, end.x - start.x);
            var d2 = l2 * curvature;
            var cp = {
              // control point
              x: (start.x + end.x) / 2 + d2 * Math.cos(a2 - Math.PI / 2),
              y: (start.y + end.y) / 2 + d2 * Math.sin(a2 - Math.PI / 2)
            };
            link.__controlPoints = [cp.x, cp.y];
          } else {
            var _d = curvature * 70;
            link.__controlPoints = [end.x, end.y - _d, end.x + _d, end.y];
          }
        }
      }
      function paintArrows() {
        var ARROW_WH_RATIO = 1.6;
        var ARROW_VLEN_RATIO = 0.2;
        var getLength = index$3(state.linkDirectionalArrowLength);
        var getRelPos = index$3(state.linkDirectionalArrowRelPos);
        var getVisibility = index$3(state.linkVisibility);
        var getColor = index$3(state.linkDirectionalArrowColor || state.linkColor);
        var getNodeVal = index$3(state.nodeVal);
        var ctx = state.ctx;
        ctx.save();
        state.graphData.links.filter(getVisibility).forEach(function(link) {
          var arrowLength = getLength(link);
          if (!arrowLength || arrowLength < 0) return;
          var start = link.source;
          var end = link.target;
          if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
          var startR = Math.sqrt(Math.max(0, getNodeVal(start) || 1)) * state.nodeRelSize;
          var endR = Math.sqrt(Math.max(0, getNodeVal(end) || 1)) * state.nodeRelSize;
          var arrowRelPos = Math.min(1, Math.max(0, getRelPos(link)));
          var arrowColor = getColor(link) || "rgba(0,0,0,0.28)";
          var arrowHalfWidth = arrowLength / ARROW_WH_RATIO / 2;
          var bzLine = link.__controlPoints && _construct(Bezier, [start.x, start.y].concat(_toConsumableArray(link.__controlPoints), [end.x, end.y]));
          var getCoordsAlongLine = bzLine ? function(t2) {
            return bzLine.get(t2);
          } : function(t2) {
            return {
              // straight line: interpolate linearly
              x: start.x + (end.x - start.x) * t2 || 0,
              y: start.y + (end.y - start.y) * t2 || 0
            };
          };
          var lineLen = bzLine ? bzLine.length() : Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
          var posAlongLine = startR + arrowLength + (lineLen - startR - endR - arrowLength) * arrowRelPos;
          var arrowHead = getCoordsAlongLine(posAlongLine / lineLen);
          var arrowTail = getCoordsAlongLine((posAlongLine - arrowLength) / lineLen);
          var arrowTailVertex = getCoordsAlongLine((posAlongLine - arrowLength * (1 - ARROW_VLEN_RATIO)) / lineLen);
          var arrowTailAngle = Math.atan2(arrowHead.y - arrowTail.y, arrowHead.x - arrowTail.x) - Math.PI / 2;
          ctx.beginPath();
          ctx.moveTo(arrowHead.x, arrowHead.y);
          ctx.lineTo(arrowTail.x + arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y + arrowHalfWidth * Math.sin(arrowTailAngle));
          ctx.lineTo(arrowTailVertex.x, arrowTailVertex.y);
          ctx.lineTo(arrowTail.x - arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y - arrowHalfWidth * Math.sin(arrowTailAngle));
          ctx.fillStyle = arrowColor;
          ctx.fill();
        });
        ctx.restore();
      }
      function paintPhotons() {
        var getNumPhotons = index$3(state.linkDirectionalParticles);
        var getSpeed = index$3(state.linkDirectionalParticleSpeed);
        var getOffset = index$3(state.linkDirectionalParticleOffset);
        var getDiameter = index$3(state.linkDirectionalParticleWidth);
        var getVisibility = index$3(state.linkVisibility);
        var getColor = index$3(state.linkDirectionalParticleColor || state.linkColor);
        var ctx = state.ctx;
        ctx.save();
        state.graphData.links.filter(getVisibility).forEach(function(link) {
          var numCyclePhotons = getNumPhotons(link);
          if (!link.hasOwnProperty("__photons") || !link.__photons.length) return;
          var start = link.source;
          var end = link.target;
          if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
          var particleSpeed = getSpeed(link);
          var particleOffset = Math.abs(getOffset(link));
          var photons = link.__photons || [];
          var photonR = Math.max(0, getDiameter(link) / 2) / Math.sqrt(state.globalScale);
          var photonColor = getColor(link) || "rgba(0,0,0,0.28)";
          ctx.fillStyle = photonColor;
          var bzLine = link.__controlPoints ? _construct(Bezier, [start.x, start.y].concat(_toConsumableArray(link.__controlPoints), [end.x, end.y])) : null;
          var cyclePhotonIdx = 0;
          var needsCleanup = false;
          photons.forEach(function(photon) {
            var singleHop = !!photon.__singleHop;
            if (!photon.hasOwnProperty("__progressRatio")) {
              photon.__progressRatio = singleHop ? 0 : (cyclePhotonIdx + particleOffset) / numCyclePhotons;
            }
            !singleHop && cyclePhotonIdx++;
            photon.__progressRatio += particleSpeed;
            if (photon.__progressRatio >= 1) {
              if (!singleHop) {
                photon.__progressRatio = photon.__progressRatio % 1;
              } else {
                needsCleanup = true;
                return;
              }
            }
            var photonPosRatio = photon.__progressRatio;
            var coords = bzLine ? bzLine.get(photonPosRatio) : {
              // straight line: interpolate linearly
              x: start.x + (end.x - start.x) * photonPosRatio || 0,
              y: start.y + (end.y - start.y) * photonPosRatio || 0
            };
            if (state.linkDirectionalParticleCanvasObject) {
              state.linkDirectionalParticleCanvasObject(coords.x, coords.y, link, ctx, state.globalScale);
            } else {
              ctx.beginPath();
              ctx.arc(coords.x, coords.y, photonR, 0, 2 * Math.PI, false);
              ctx.fill();
            }
          });
          if (needsCleanup) {
            link.__photons = link.__photons.filter(function(photon) {
              return !photon.__singleHop || photon.__progressRatio <= 1;
            });
          }
        });
        ctx.restore();
      }
    },
    emitParticle: function emitParticle(state, link) {
      if (link) {
        !link.__photons && (link.__photons = []);
        link.__photons.push({
          __singleHop: true
        });
      }
      return this;
    }
  },
  stateInit: function stateInit() {
    return {
      forceLayout: forceSimulation().force("link", forceLink()).force("charge", forceManyBody()).force("center", forceCenter()).force("dagRadial", null).stop(),
      engineRunning: false
    };
  },
  init: function init2(canvasCtx, state) {
    state.ctx = canvasCtx;
  },
  update: function update2(state, changedProps) {
    state.engineRunning = false;
    state.onUpdate();
    if (state.nodeAutoColorBy !== null) {
      autoColorObjects(state.graphData.nodes, index$3(state.nodeAutoColorBy), state.nodeColor);
    }
    if (state.linkAutoColorBy !== null) {
      autoColorObjects(state.graphData.links, index$3(state.linkAutoColorBy), state.linkColor);
    }
    state.graphData.links.forEach(function(link) {
      link.source = link[state.linkSource];
      link.target = link[state.linkTarget];
    });
    state.forceLayout.stop().alpha(1).nodes(state.graphData.nodes);
    var linkForce = state.forceLayout.force("link");
    if (linkForce) {
      linkForce.id(function(d2) {
        return d2[state.nodeId];
      }).links(state.graphData.links);
    }
    var nodeDepths = state.dagMode && getDagDepths(state.graphData, function(node) {
      return node[state.nodeId];
    }, {
      nodeFilter: state.dagNodeFilter,
      onLoopError: state.onDagError || void 0
    });
    var maxDepth = Math.max.apply(Math, _toConsumableArray(Object.values(nodeDepths || [])));
    var dagLevelDistance = state.dagLevelDistance || state.graphData.nodes.length / (maxDepth || 1) * DAG_LEVEL_NODE_RATIO * (["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? 0.7 : 1);
    if (["lr", "rl", "td", "bu"].includes(changedProps.dagMode)) {
      var resetProp = ["lr", "rl"].includes(changedProps.dagMode) ? "fx" : "fy";
      state.graphData.nodes.filter(state.dagNodeFilter).forEach(function(node) {
        return delete node[resetProp];
      });
    }
    if (["lr", "rl", "td", "bu"].includes(state.dagMode)) {
      var invert = ["rl", "bu"].includes(state.dagMode);
      var fixFn = function fixFn2(node) {
        return (nodeDepths[node[state.nodeId]] - maxDepth / 2) * dagLevelDistance * (invert ? -1 : 1);
      };
      var _resetProp = ["lr", "rl"].includes(state.dagMode) ? "fx" : "fy";
      state.graphData.nodes.filter(state.dagNodeFilter).forEach(function(node) {
        return node[_resetProp] = fixFn(node);
      });
    }
    state.forceLayout.force("dagRadial", ["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? forceRadial(function(node) {
      var nodeDepth = nodeDepths[node[state.nodeId]] || -1;
      return (state.dagMode === "radialin" ? maxDepth - nodeDepth : nodeDepth) * dagLevelDistance;
    }).strength(function(node) {
      return state.dagNodeFilter(node) ? 1 : 0;
    }) : null);
    for (var i2 = 0; i2 < state.warmupTicks && !(state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin); i2++) {
      state.forceLayout.tick();
    }
    this.resetCountdown();
    state.onFinishUpdate();
  }
});
function linkKapsule(kapsulePropNames, kapsuleType) {
  var propNames = kapsulePropNames instanceof Array ? kapsulePropNames : [kapsulePropNames];
  var dummyK = new kapsuleType();
  dummyK._destructor && dummyK._destructor();
  return {
    linkProp: function linkProp(prop) {
      return {
        "default": dummyK[prop](),
        onChange: function onChange15(v2, state) {
          propNames.forEach(function(propName) {
            return state[propName][prop](v2);
          });
        },
        triggerUpdate: false
      };
    },
    linkMethod: function linkMethod(method) {
      return function(state) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var returnVals = [];
        propNames.forEach(function(propName) {
          var kapsuleInstance = state[propName];
          var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);
          if (returnVal !== kapsuleInstance) {
            returnVals.push(returnVal);
          }
        });
        return returnVals.length ? returnVals[0] : this;
      };
    }
  };
}
var HOVER_CANVAS_THROTTLE_DELAY = 800;
var ZOOM2NODES_FACTOR = 4;
var DRAG_CLICK_TOLERANCE_PX = 5;
var bindFG = linkKapsule("forceGraph", CanvasForceGraph);
var bindBoth = linkKapsule(["forceGraph", "shadowGraph"], CanvasForceGraph);
var linkedProps = Object.assign.apply(Object, _toConsumableArray(["nodeColor", "nodeAutoColorBy", "nodeCanvasObject", "nodeCanvasObjectMode", "linkColor", "linkAutoColorBy", "linkLineDash", "linkWidth", "linkCanvasObject", "linkCanvasObjectMode", "linkDirectionalArrowLength", "linkDirectionalArrowColor", "linkDirectionalArrowRelPos", "linkDirectionalParticles", "linkDirectionalParticleSpeed", "linkDirectionalParticleOffset", "linkDirectionalParticleWidth", "linkDirectionalParticleColor", "linkDirectionalParticleCanvasObject", "dagMode", "dagLevelDistance", "dagNodeFilter", "onDagError", "d3AlphaMin", "d3AlphaDecay", "d3VelocityDecay", "warmupTicks", "cooldownTicks", "cooldownTime", "onEngineTick", "onEngineStop"].map(function(p2) {
  return _defineProperty({}, p2, bindFG.linkProp(p2));
})).concat(_toConsumableArray(["nodeRelSize", "nodeId", "nodeVal", "nodeVisibility", "linkSource", "linkTarget", "linkVisibility", "linkCurvature"].map(function(p2) {
  return _defineProperty({}, p2, bindBoth.linkProp(p2));
}))));
var linkedMethods = Object.assign.apply(Object, _toConsumableArray(["d3Force", "d3ReheatSimulation", "emitParticle"].map(function(p2) {
  return _defineProperty({}, p2, bindFG.linkMethod(p2));
})));
function adjustCanvasSize(state) {
  if (state.canvas) {
    var curWidth = state.canvas.width;
    var curHeight = state.canvas.height;
    if (curWidth === 300 && curHeight === 150) {
      curWidth = curHeight = 0;
    }
    var pxScale = window.devicePixelRatio;
    curWidth /= pxScale;
    curHeight /= pxScale;
    [state.canvas, state.shadowCanvas].forEach(function(canvas) {
      canvas.style.width = "".concat(state.width, "px");
      canvas.style.height = "".concat(state.height, "px");
      canvas.width = state.width * pxScale;
      canvas.height = state.height * pxScale;
      if (!curWidth && !curHeight) {
        canvas.getContext("2d").scale(pxScale, pxScale);
      }
    });
    var k2 = transform(state.canvas).k;
    state.zoom.translateBy(state.zoom.__baseElem, (state.width - curWidth) / 2 / k2, (state.height - curHeight) / 2 / k2);
    state.needsRedraw = true;
  }
}
function resetTransform(ctx) {
  var pxRatio = window.devicePixelRatio;
  ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
}
function clearCanvas(ctx, width, height) {
  ctx.save();
  resetTransform(ctx);
  ctx.clearRect(0, 0, width, height);
  ctx.restore();
}
var forceGraph = index$4({
  props: _objectSpread2({
    width: {
      "default": window.innerWidth,
      onChange: function onChange6(_2, state) {
        return adjustCanvasSize(state);
      },
      triggerUpdate: false
    },
    height: {
      "default": window.innerHeight,
      onChange: function onChange7(_2, state) {
        return adjustCanvasSize(state);
      },
      triggerUpdate: false
    },
    graphData: {
      "default": {
        nodes: [],
        links: []
      },
      onChange: function onChange8(d2, state) {
        [d2.nodes, d2.links].every(function(arr) {
          return (arr || []).every(function(d3) {
            return !d3.hasOwnProperty("__indexColor");
          });
        }) && state.colorTracker.reset();
        [{
          type: "Node",
          objs: d2.nodes
        }, {
          type: "Link",
          objs: d2.links
        }].forEach(hexIndex);
        state.forceGraph.graphData(d2);
        state.shadowGraph.graphData(d2);
        function hexIndex(_ref4) {
          var type = _ref4.type, objs = _ref4.objs;
          objs.filter(function(d3) {
            if (!d3.hasOwnProperty("__indexColor")) return true;
            var cur = state.colorTracker.lookup(d3.__indexColor);
            return !cur || !cur.hasOwnProperty("d") || cur.d !== d3;
          }).forEach(function(d3) {
            d3.__indexColor = state.colorTracker.register({
              type,
              d: d3
            });
          });
        }
      },
      triggerUpdate: false
    },
    backgroundColor: {
      onChange: function onChange9(color, state) {
        state.canvas && color && (state.canvas.style.background = color);
      },
      triggerUpdate: false
    },
    nodeLabel: {
      "default": "name",
      triggerUpdate: false
    },
    nodePointerAreaPaint: {
      onChange: function onChange10(paintFn, state) {
        state.shadowGraph.nodeCanvasObject(!paintFn ? null : function(node, ctx, globalScale) {
          return paintFn(node, node.__indexColor, ctx, globalScale);
        });
        state.flushShadowCanvas && state.flushShadowCanvas();
      },
      triggerUpdate: false
    },
    linkPointerAreaPaint: {
      onChange: function onChange11(paintFn, state) {
        state.shadowGraph.linkCanvasObject(!paintFn ? null : function(link, ctx, globalScale) {
          return paintFn(link, link.__indexColor, ctx, globalScale);
        });
        state.flushShadowCanvas && state.flushShadowCanvas();
      },
      triggerUpdate: false
    },
    linkLabel: {
      "default": "name",
      triggerUpdate: false
    },
    linkHoverPrecision: {
      "default": 4,
      triggerUpdate: false
    },
    minZoom: {
      "default": 0.01,
      onChange: function onChange12(minZoom, state) {
        state.zoom.scaleExtent([minZoom, state.zoom.scaleExtent()[1]]);
      },
      triggerUpdate: false
    },
    maxZoom: {
      "default": 1e3,
      onChange: function onChange13(maxZoom, state) {
        state.zoom.scaleExtent([state.zoom.scaleExtent()[0], maxZoom]);
      },
      triggerUpdate: false
    },
    enableNodeDrag: {
      "default": true,
      triggerUpdate: false
    },
    enableZoomInteraction: {
      "default": true,
      triggerUpdate: false
    },
    enablePanInteraction: {
      "default": true,
      triggerUpdate: false
    },
    enableZoomPanInteraction: {
      "default": true,
      triggerUpdate: false
    },
    // to be deprecated
    enablePointerInteraction: {
      "default": true,
      onChange: function onChange14(_2, state) {
        state.hoverObj = null;
      },
      triggerUpdate: false
    },
    autoPauseRedraw: {
      "default": true,
      triggerUpdate: false
    },
    onNodeDrag: {
      "default": function _default9() {
      },
      triggerUpdate: false
    },
    onNodeDragEnd: {
      "default": function _default10() {
      },
      triggerUpdate: false
    },
    onNodeClick: {
      triggerUpdate: false
    },
    onNodeRightClick: {
      triggerUpdate: false
    },
    onNodeHover: {
      triggerUpdate: false
    },
    onLinkClick: {
      triggerUpdate: false
    },
    onLinkRightClick: {
      triggerUpdate: false
    },
    onLinkHover: {
      triggerUpdate: false
    },
    onBackgroundClick: {
      triggerUpdate: false
    },
    onBackgroundRightClick: {
      triggerUpdate: false
    },
    onZoom: {
      triggerUpdate: false
    },
    onZoomEnd: {
      triggerUpdate: false
    },
    onRenderFramePre: {
      triggerUpdate: false
    },
    onRenderFramePost: {
      triggerUpdate: false
    }
  }, linkedProps),
  aliases: {
    // Prop names supported for backwards compatibility
    stopAnimation: "pauseAnimation"
  },
  methods: _objectSpread2({
    graph2ScreenCoords: function graph2ScreenCoords(state, x2, y2) {
      var t2 = transform(state.canvas);
      return {
        x: x2 * t2.k + t2.x,
        y: y2 * t2.k + t2.y
      };
    },
    screen2GraphCoords: function screen2GraphCoords(state, x2, y2) {
      var t2 = transform(state.canvas);
      return {
        x: (x2 - t2.x) / t2.k,
        y: (y2 - t2.y) / t2.k
      };
    },
    centerAt: function centerAt(state, x2, y2, transitionDuration) {
      if (!state.canvas) return null;
      if (x2 !== void 0 || y2 !== void 0) {
        var finalPos = Object.assign({}, x2 !== void 0 ? {
          x: x2
        } : {}, y2 !== void 0 ? {
          y: y2
        } : {});
        if (!transitionDuration) {
          setCenter(finalPos);
        } else {
          state.tweenGroup.add(new Tween(getCenter()).to(finalPos, transitionDuration).easing(Easing.Quadratic.Out).onUpdate(setCenter).start());
        }
        return this;
      }
      return getCenter();
      function getCenter() {
        var t2 = transform(state.canvas);
        return {
          x: (state.width / 2 - t2.x) / t2.k,
          y: (state.height / 2 - t2.y) / t2.k
        };
      }
      function setCenter(_ref5) {
        var x3 = _ref5.x, y3 = _ref5.y;
        state.zoom.translateTo(state.zoom.__baseElem, x3 === void 0 ? getCenter().x : x3, y3 === void 0 ? getCenter().y : y3);
        state.needsRedraw = true;
      }
    },
    zoom: function zoom2(state, k2, transitionDuration) {
      if (!state.canvas) return null;
      if (k2 !== void 0) {
        if (!transitionDuration) {
          setZoom(k2);
        } else {
          state.tweenGroup.add(new Tween({
            k: getZoom()
          }).to({
            k: k2
          }, transitionDuration).easing(Easing.Quadratic.Out).onUpdate(function(_ref6) {
            var k3 = _ref6.k;
            return setZoom(k3);
          }).start());
        }
        return this;
      }
      return getZoom();
      function getZoom() {
        return transform(state.canvas).k;
      }
      function setZoom(k3) {
        state.zoom.scaleTo(state.zoom.__baseElem, k3);
        state.needsRedraw = true;
      }
    },
    zoomToFit: function zoomToFit(state) {
      var transitionDuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var padding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10;
      for (var _len = arguments.length, bboxArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        bboxArgs[_key - 3] = arguments[_key];
      }
      var bbox = this.getGraphBbox.apply(this, bboxArgs);
      if (bbox) {
        var center = {
          x: (bbox.x[0] + bbox.x[1]) / 2,
          y: (bbox.y[0] + bbox.y[1]) / 2
        };
        var zoomK = Math.max(1e-12, Math.min(1e12, (state.width - padding * 2) / (bbox.x[1] - bbox.x[0]), (state.height - padding * 2) / (bbox.y[1] - bbox.y[0])));
        this.centerAt(center.x, center.y, transitionDuration);
        this.zoom(zoomK, transitionDuration);
      }
      return this;
    },
    getGraphBbox: function getGraphBbox(state) {
      var nodeFilter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
        return true;
      };
      var getVal = index$3(state.nodeVal);
      var getR = function getR2(node) {
        return Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize;
      };
      var nodesPos = state.graphData.nodes.filter(nodeFilter).map(function(node) {
        return {
          x: node.x,
          y: node.y,
          r: getR(node)
        };
      });
      return !nodesPos.length ? null : {
        x: [min$1(nodesPos, function(node) {
          return node.x - node.r;
        }), max$1(nodesPos, function(node) {
          return node.x + node.r;
        })],
        y: [min$1(nodesPos, function(node) {
          return node.y - node.r;
        }), max$1(nodesPos, function(node) {
          return node.y + node.r;
        })]
      };
    },
    pauseAnimation: function pauseAnimation(state) {
      if (state.animationFrameRequestId) {
        cancelAnimationFrame(state.animationFrameRequestId);
        state.animationFrameRequestId = null;
      }
      return this;
    },
    resumeAnimation: function resumeAnimation(state) {
      if (!state.animationFrameRequestId) {
        this._animationCycle();
      }
      return this;
    },
    _destructor: function _destructor() {
      this.pauseAnimation();
      this.graphData({
        nodes: [],
        links: []
      });
    }
  }, linkedMethods),
  stateInit: function stateInit2() {
    return {
      lastSetZoom: 1,
      zoom: zoom(),
      forceGraph: new CanvasForceGraph(),
      shadowGraph: new CanvasForceGraph().cooldownTicks(0).nodeColor("__indexColor").linkColor("__indexColor").isShadow(true),
      colorTracker: new _default(),
      // indexed objects for rgb lookup
      tweenGroup: new Group()
    };
  },
  init: function init3(domNode, state) {
    var _this = this;
    domNode.innerHTML = "";
    var container = document.createElement("div");
    container.classList.add("force-graph-container");
    container.style.position = "relative";
    domNode.appendChild(container);
    state.canvas = document.createElement("canvas");
    if (state.backgroundColor) state.canvas.style.background = state.backgroundColor;
    container.appendChild(state.canvas);
    state.shadowCanvas = document.createElement("canvas");
    var ctx = state.canvas.getContext("2d");
    var shadowCtx = state.shadowCanvas.getContext("2d", {
      willReadFrequently: true
    });
    var pointerPos = {
      x: -1e12,
      y: -1e12
    };
    var getObjUnderPointer = function getObjUnderPointer2() {
      var obj = null;
      var pxScale = window.devicePixelRatio;
      var px = pointerPos.x > 0 && pointerPos.y > 0 ? shadowCtx.getImageData(pointerPos.x * pxScale, pointerPos.y * pxScale, 1, 1) : null;
      px && (obj = state.colorTracker.lookup(px.data));
      return obj;
    };
    select(state.canvas).call(drag().subject(function() {
      if (!state.enableNodeDrag) {
        return null;
      }
      var obj = getObjUnderPointer();
      return obj && obj.type === "Node" ? obj.d : null;
    }).on("start", function(ev) {
      var obj = ev.subject;
      obj.__initialDragPos = {
        x: obj.x,
        y: obj.y,
        fx: obj.fx,
        fy: obj.fy
      };
      if (!ev.active) {
        obj.fx = obj.x;
        obj.fy = obj.y;
      }
      state.canvas.classList.add("grabbable");
    }).on("drag", function(ev) {
      var obj = ev.subject;
      var initPos = obj.__initialDragPos;
      var dragPos = ev;
      var k2 = transform(state.canvas).k;
      var translate = {
        x: initPos.x + (dragPos.x - initPos.x) / k2 - obj.x,
        y: initPos.y + (dragPos.y - initPos.y) / k2 - obj.y
      };
      ["x", "y"].forEach(function(c2) {
        return obj["f".concat(c2)] = obj[c2] = initPos[c2] + (dragPos[c2] - initPos[c2]) / k2;
      });
      if (!obj.__dragged && DRAG_CLICK_TOLERANCE_PX >= Math.sqrt(sum(["x", "y"].map(function(k3) {
        return Math.pow(ev[k3] - initPos[k3], 2);
      })))) return;
      state.forceGraph.d3AlphaTarget(0.3).resetCountdown();
      state.isPointerDragging = true;
      obj.__dragged = true;
      state.onNodeDrag(obj, translate);
    }).on("end", function(ev) {
      var obj = ev.subject;
      var initPos = obj.__initialDragPos;
      var translate = {
        x: obj.x - initPos.x,
        y: obj.y - initPos.y
      };
      if (initPos.fx === void 0) {
        obj.fx = void 0;
      }
      if (initPos.fy === void 0) {
        obj.fy = void 0;
      }
      delete obj.__initialDragPos;
      if (state.forceGraph.d3AlphaTarget()) {
        state.forceGraph.d3AlphaTarget(0).resetCountdown();
      }
      state.canvas.classList.remove("grabbable");
      state.isPointerDragging = false;
      if (obj.__dragged) {
        delete obj.__dragged;
        state.onNodeDragEnd(obj, translate);
      }
    }));
    state.zoom(state.zoom.__baseElem = select(state.canvas));
    state.zoom.__baseElem.on("dblclick.zoom", null);
    state.zoom.filter(function(ev) {
      return (
        // disable zoom interaction
        !ev.button && state.enableZoomPanInteraction && (ev.type !== "wheel" || index$3(state.enableZoomInteraction)(ev)) && (ev.type === "wheel" || index$3(state.enablePanInteraction)(ev))
      );
    }).on("zoom", function(ev) {
      var t2 = ev.transform;
      [ctx, shadowCtx].forEach(function(c2) {
        resetTransform(c2);
        c2.translate(t2.x, t2.y);
        c2.scale(t2.k, t2.k);
      });
      state.isPointerDragging = true;
      state.onZoom && state.onZoom(_objectSpread2(_objectSpread2({}, t2), _this.centerAt()));
      state.needsRedraw = true;
    }).on("end", function(ev) {
      state.isPointerDragging = false;
      state.onZoomEnd && state.onZoomEnd(_objectSpread2(_objectSpread2({}, ev.transform), _this.centerAt()));
    });
    adjustCanvasSize(state);
    state.forceGraph.onNeedsRedraw(function() {
      return state.needsRedraw = true;
    }).onFinishUpdate(function() {
      if (transform(state.canvas).k === state.lastSetZoom && state.graphData.nodes.length) {
        state.zoom.scaleTo(state.zoom.__baseElem, state.lastSetZoom = ZOOM2NODES_FACTOR / Math.cbrt(state.graphData.nodes.length));
        state.needsRedraw = true;
      }
    });
    state.tooltip = new index$2(container);
    ["pointermove", "pointerdown"].forEach(function(evType) {
      return container.addEventListener(evType, function(ev) {
        if (evType === "pointerdown") {
          state.isPointerPressed = true;
          state.pointerDownEvent = ev;
        }
        !state.isPointerDragging && ev.type === "pointermove" && state.onBackgroundClick && (ev.pressure > 0 || state.isPointerPressed) && (ev.pointerType === "mouse" || ev.movementX === void 0 || [ev.movementX, ev.movementY].some(function(m2) {
          return Math.abs(m2) > 1;
        })) && (state.isPointerDragging = true);
        var offset = getOffset(container);
        pointerPos.x = ev.pageX - offset.left;
        pointerPos.y = ev.pageY - offset.top;
        function getOffset(el) {
          var rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
          };
        }
      }, {
        passive: true
      });
    });
    container.addEventListener("pointerup", function(ev) {
      if (!state.isPointerPressed) {
        return;
      }
      state.isPointerPressed = false;
      if (state.isPointerDragging) {
        state.isPointerDragging = false;
        return;
      }
      var cbEvents = [ev, state.pointerDownEvent];
      requestAnimationFrame(function() {
        if (ev.button === 0) {
          if (state.hoverObj) {
            var fn = state["on".concat(state.hoverObj.type, "Click")];
            fn && fn.apply(void 0, [state.hoverObj.d].concat(cbEvents));
          } else {
            state.onBackgroundClick && state.onBackgroundClick.apply(state, cbEvents);
          }
        }
        if (ev.button === 2) {
          if (state.hoverObj) {
            var _fn = state["on".concat(state.hoverObj.type, "RightClick")];
            _fn && _fn.apply(void 0, [state.hoverObj.d].concat(cbEvents));
          } else {
            state.onBackgroundRightClick && state.onBackgroundRightClick.apply(state, cbEvents);
          }
        }
      });
    }, {
      passive: true
    });
    container.addEventListener("contextmenu", function(ev) {
      if (!state.onBackgroundRightClick && !state.onNodeRightClick && !state.onLinkRightClick) return true;
      ev.preventDefault();
      return false;
    });
    state.forceGraph(ctx);
    state.shadowGraph(shadowCtx);
    var refreshShadowCanvas = throttle(function() {
      clearCanvas(shadowCtx, state.width, state.height);
      state.shadowGraph.linkWidth(function(l2) {
        return index$3(state.linkWidth)(l2) + state.linkHoverPrecision;
      });
      var t2 = transform(state.canvas);
      state.shadowGraph.globalScale(t2.k).tickFrame();
    }, HOVER_CANVAS_THROTTLE_DELAY);
    state.flushShadowCanvas = refreshShadowCanvas.flush;
    (this._animationCycle = function animate() {
      var doRedraw = !state.autoPauseRedraw || !!state.needsRedraw || state.forceGraph.isEngineRunning() || state.graphData.links.some(function(d2) {
        return d2.__photons && d2.__photons.length;
      });
      state.needsRedraw = false;
      if (state.enablePointerInteraction) {
        var obj = !state.isPointerDragging ? getObjUnderPointer() : null;
        if (obj !== state.hoverObj) {
          var prevObj = state.hoverObj;
          var prevObjType = prevObj ? prevObj.type : null;
          var objType = obj ? obj.type : null;
          if (prevObjType && prevObjType !== objType) {
            var fn = state["on".concat(prevObjType, "Hover")];
            fn && fn(null, prevObj.d);
          }
          if (objType) {
            var _fn2 = state["on".concat(objType, "Hover")];
            _fn2 && _fn2(obj.d, prevObjType === objType ? prevObj.d : null);
          }
          state.tooltip.content(obj ? index$3(state["".concat(obj.type.toLowerCase(), "Label")])(obj.d) || null : null);
          state.canvas.classList[obj && state["on".concat(objType, "Click")] || !obj && state.onBackgroundClick ? "add" : "remove"]("clickable");
          state.hoverObj = obj;
        }
        doRedraw && refreshShadowCanvas();
      }
      if (doRedraw) {
        clearCanvas(ctx, state.width, state.height);
        var globalScale = transform(state.canvas).k;
        state.onRenderFramePre && state.onRenderFramePre(ctx, globalScale);
        state.forceGraph.globalScale(globalScale).tickFrame();
        state.onRenderFramePost && state.onRenderFramePost(ctx, globalScale);
      }
      state.tweenGroup.update();
      state.animationFrameRequestId = requestAnimationFrame(animate);
    })();
  },
  update: function updateFn(state) {
  }
});
var propTypes = { exports: {} };
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  {
    propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}
var propTypesExports = /* @__PURE__ */ requirePropTypes();
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
const commonPropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  graphData: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  backgroundColor: PropTypes.string,
  nodeRelSize: PropTypes.number,
  nodeId: PropTypes.string,
  nodeLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  nodeVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  nodeVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  nodeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  nodeAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onNodeHover: PropTypes.func,
  onNodeClick: PropTypes.func,
  linkSource: PropTypes.string,
  linkTarget: PropTypes.string,
  linkLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  linkColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkCurvature: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalArrowLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalArrowColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkDirectionalArrowRelPos: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticles: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkDirectionalParticleColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onLinkHover: PropTypes.func,
  onLinkClick: PropTypes.func,
  dagMode: PropTypes.oneOf(["td", "bu", "lr", "rl", "zin", "zout", "radialin", "radialout"]),
  dagLevelDistance: PropTypes.number,
  dagNodeFilter: PropTypes.func,
  onDagError: PropTypes.func,
  d3AlphaMin: PropTypes.number,
  d3AlphaDecay: PropTypes.number,
  d3VelocityDecay: PropTypes.number,
  warmupTicks: PropTypes.number,
  cooldownTicks: PropTypes.number,
  cooldownTime: PropTypes.number,
  onEngineTick: PropTypes.func,
  onEngineStop: PropTypes.func,
  getGraphBbox: PropTypes.func
};
const pointerBasedPropTypes = {
  zoomToFit: PropTypes.func,
  onNodeRightClick: PropTypes.func,
  onNodeDrag: PropTypes.func,
  onNodeDragEnd: PropTypes.func,
  onLinkRightClick: PropTypes.func,
  linkHoverPrecision: PropTypes.number,
  onBackgroundClick: PropTypes.func,
  onBackgroundRightClick: PropTypes.func,
  enablePointerInteraction: PropTypes.bool,
  enableNodeDrag: PropTypes.bool
};
const threeBasedPropTypes = {
  showNavInfo: PropTypes.bool,
  nodeOpacity: PropTypes.number,
  nodeResolution: PropTypes.number,
  nodeThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  nodeThreeObjectExtend: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  nodePositionUpdate: PropTypes.func,
  linkOpacity: PropTypes.number,
  linkResolution: PropTypes.number,
  linkCurveRotation: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  linkMaterial: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  linkThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  linkThreeObjectExtend: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  linkPositionUpdate: PropTypes.func,
  linkDirectionalArrowResolution: PropTypes.number,
  linkDirectionalParticleResolution: PropTypes.number,
  linkDirectionalParticleThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  forceEngine: PropTypes.oneOf(["d3", "ngraph"]),
  ngraphPhysics: PropTypes.object,
  numDimensions: PropTypes.oneOf([1, 2, 3])
};
const ForceGraph2DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, {
  linkLineDash: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.string, PropTypes.func]),
  nodeCanvasObjectMode: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  nodeCanvasObject: PropTypes.func,
  nodePointerAreaPaint: PropTypes.func,
  linkCanvasObjectMode: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkCanvasObject: PropTypes.func,
  linkPointerAreaPaint: PropTypes.func,
  linkDirectionalParticleCanvasObject: PropTypes.func,
  autoPauseRedraw: PropTypes.bool,
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  enableZoomInteraction: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  enablePanInteraction: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onZoom: PropTypes.func,
  onZoomEnd: PropTypes.func,
  onRenderFramePre: PropTypes.func,
  onRenderFramePost: PropTypes.func
});
Object.assign({}, commonPropTypes, pointerBasedPropTypes, threeBasedPropTypes, {
  enableNavigationControls: PropTypes.bool,
  controlType: PropTypes.oneOf(["trackball", "orbit", "fly"]),
  rendererConfig: PropTypes.object,
  extraRenderers: PropTypes.arrayOf(PropTypes.shape({
    render: PropTypes.func.isRequired
  }))
});
Object.assign({}, commonPropTypes, threeBasedPropTypes, {
  nodeDesc: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkDesc: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
});
Object.assign({}, commonPropTypes, threeBasedPropTypes, {
  markerAttrs: PropTypes.object,
  yOffset: PropTypes.number,
  glScale: PropTypes.number
});
const ForceGraph2D = index$5(forceGraph, {
  methodNames: [
    // bind methods
    "emitParticle",
    "d3Force",
    "d3ReheatSimulation",
    "stopAnimation",
    "pauseAnimation",
    "resumeAnimation",
    "centerAt",
    "zoom",
    "zoomToFit",
    "getGraphBbox",
    "screen2GraphCoords",
    "graph2ScreenCoords"
  ]
});
ForceGraph2D.displayName = "ForceGraph2D";
ForceGraph2D.propTypes = ForceGraph2DPropTypes;
const convertMemoRelationsToGraphData = (memoRelations) => {
  const nodesMap = /* @__PURE__ */ new Map();
  const links = [];
  memoRelations.forEach((relation) => {
    const memo = relation.memo;
    const relatedMemo = relation.relatedMemo;
    if (!nodesMap.has(memo.name)) {
      nodesMap.set(memo.name, { id: memo.name, memo });
    }
    if (!nodesMap.has(relatedMemo.name)) {
      nodesMap.set(relatedMemo.name, { id: relatedMemo.name, memo: relatedMemo });
    }
    links.push({
      source: memo.name,
      target: relatedMemo.name,
      type: relation.type
      // Include the type of relation as a property of the link.
    });
  });
  return {
    nodes: Array.from(nodesMap.values()),
    links
  };
};
const MAIN_NODE_COLOR = "#14b8a6";
const DEFAULT_NODE_COLOR = "#a1a1aa";
const MemoRelationForceGraph = ({ className, memo, parentPage }) => {
  const navigateTo = useNavigateTo();
  const [mode, setMode] = reactExports.useState("light");
  const containerRef = reactExports.useRef(null);
  const graphRef = reactExports.useRef(void 0);
  const [graphSize, setGraphSize] = reactExports.useState({ width: 0, height: 0 });
  reactExports.useEffect(() => {
    const updateMode = () => {
      const isDark2 = document.documentElement.classList.contains("dark");
      setMode(isDark2 ? "dark" : "light");
    };
    updateMode();
    const observer2 = new MutationObserver(updateMode);
    observer2.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer2.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (!containerRef.current) return;
    setGraphSize(containerRef.current.getBoundingClientRect());
  }, []);
  const onNodeClick = (node) => {
    if (node.memo.name === memo.name) return;
    navigateTo(`/${memo.name}`, {
      state: {
        from: parentPage
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: cn("opacity-80", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ForceGraph2D,
    {
      ref: graphRef,
      width: graphSize.width,
      height: graphSize.height,
      enableZoomInteraction: true,
      cooldownTicks: 0,
      nodeColor: (node) => node.id === memo.name ? MAIN_NODE_COLOR : DEFAULT_NODE_COLOR,
      nodeRelSize: 3,
      nodeLabel: (node) => extractMemoIdFromName(node.memo.name).slice(0, 6).toLowerCase(),
      linkColor: () => mode === "light" ? "#e4e4e7" : "#3f3f46",
      graphData: convertMemoRelationsToGraphData(memo.relations.filter((r2) => r2.type === MemoRelation_Type.REFERENCE)),
      onNodeClick,
      linkDirectionalArrowLength: 3,
      linkDirectionalArrowRelPos: 1,
      linkCurvature: 0.25
    }
  ) });
};
const MemoDetailSidebar = ({ memo, className, parentPage }) => {
  const t2 = useTranslate();
  const property = Memo_Property.fromPartial(memo.property || {});
  const hasSpecialProperty = property.hasLink || property.hasTaskList || property.hasCode || property.hasIncompleteTasks;
  const shouldShowRelationGraph = memo.relations.filter((r2) => r2.type === MemoRelation_Type.REFERENCE).length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "aside",
    {
      className: cn("relative w-full h-auto max-h-screen overflow-auto hide-scrollbar flex flex-col justify-start items-start", className),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-start items-start w-full px-1 gap-2 h-auto shrink-0 flex-nowrap hide-scrollbar", children: [
        shouldShowRelationGraph && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-36 border border-border rounded-lg bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MemoRelationForceGraph, { className: "w-full h-full", memo, parentPage }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-1 left-2 text-xs opacity-60 font-mono gap-1 flex flex-row items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common.relations") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-60", children: "(Beta)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex flex-row justify-start items-center w-full gap-1 mb-1 text-sm leading-6 text-muted-foreground select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common.created-at") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: memo.createTime?.toLocaleString() })
        ] }),
        !isEqual(memo.createTime, memo.updateTime) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex flex-row justify-start items-center w-full gap-1 mb-1 text-sm leading-6 text-muted-foreground select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common.last-updated-at") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: memo.updateTime?.toLocaleString() })
        ] }),
        hasSpecialProperty && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex flex-row justify-start items-center w-full gap-1 mb-1 text-sm leading-6 text-muted-foreground select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common.properties") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-start items-center gap-x-2 gap-y-1 flex-wrap text-muted-foreground", children: [
            property.hasLink && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-auto border border-border pl-1 pr-1.5 rounded-md flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-auto flex justify-start items-center mr-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-4 h-auto mr-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm", children: t2("memo.links") })
            ] }) }),
            property.hasTaskList && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-auto border border-border pl-1 pr-1.5 rounded-md flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-auto flex justify-start items-center mr-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-auto mr-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm", children: t2("memo.to-do") })
            ] }) }),
            property.hasCode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-auto border border-border pl-1 pr-1.5 rounded-md flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-auto flex justify-start items-center mr-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-4 h-auto mr-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm", children: t2("memo.code") })
            ] }) })
          ] })
        ] }),
        memo.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-start items-center w-full gap-1 mb-1 text-sm leading-6 text-muted-foreground select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common.tags") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0", children: [
              "(",
              memo.tags.length,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-row justify-start items-center relative flex-wrap gap-x-2 gap-y-1", children: memo.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "shrink-0 w-auto max-w-full text-sm rounded-md leading-6 flex flex-row justify-start items-center select-none hover:opacity-80 text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "group-hover:hidden w-4 h-auto shrink-0 opacity-40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("inline-flex flex-nowrap ml-0.5 gap-0.5 cursor-pointer max-w-[calc(100%-16px)]"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate opacity-80", children: tag }) })
              ]
            },
            tag
          )) })
        ] })
      ] })
    }
  );
};
const MemoDetailSidebarDrawer = ({ memo, parentPage }) => {
  const location = useLocation();
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "bg-transparent! px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesGantt, { className: "w-5 h-auto text-muted-foreground" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { side: "right", className: "w-full sm:w-80 px-4 bg-popover", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MemoDetailSidebar, { className: "py-4", memo, parentPage }) })
  ] });
};
const MemoDetail = observer(() => {
  const t2 = useTranslate();
  const { md } = useResponsiveWidth();
  const params = useParams();
  const navigateTo = useNavigateTo();
  const { state: locationState } = useLocation();
  const currentUser = useCurrentUser();
  const uid = params.uid;
  const memoName = `${memoNamePrefix}${uid}`;
  const memo = memoStore.getMemoByName(memoName);
  const [parentMemo, setParentMemo] = reactExports.useState(void 0);
  const [showCommentEditor, setShowCommentEditor] = reactExports.useState(false);
  const commentRelations = memo?.relations.filter((relation) => relation.relatedMemo?.name === memo.name && relation.type === MemoRelation_Type.COMMENT) || [];
  const comments = commentRelations.map((relation) => memoStore.getMemoByName(relation.memo.name)).filter((memo2) => memo2);
  const showCreateCommentButton = currentUser && !showCommentEditor;
  reactExports.useEffect(() => {
    if (memoName) {
      memoStore.getOrFetchMemoByName(memoName).catch((error) => {
        c$2.error(error.details);
        navigateTo("/403");
      });
    } else {
      navigateTo("/404");
    }
  }, [memoName]);
  reactExports.useEffect(() => {
    if (!memo) {
      return;
    }
    (async () => {
      if (memo.parent) {
        memoStore.getOrFetchMemoByName(memo.parent).then((memo2) => {
          setParentMemo(memo2);
        });
      } else {
        setParentMemo(void 0);
      }
      await Promise.all(commentRelations.map((relation) => memoStore.getOrFetchMemoByName(relation.memo.name)));
    })();
  }, [memo]);
  if (!memo) {
    return null;
  }
  const handleShowCommentEditor = () => {
    setShowCommentEditor(true);
  };
  const handleCommentCreated = async (memoCommentName) => {
    await memoStore.getOrFetchMemoByName(memoCommentName);
    await memoStore.getOrFetchMemoByName(memo.name, { skipCache: true });
    setShowCommentEditor(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "@container w-full max-w-5xl min-h-full flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8", children: [
    !md && /* @__PURE__ */ jsxRuntimeExports.jsx(MobileHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MemoDetailSidebarDrawer, { memo, parentPage: locationState?.from }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full flex flex-row justify-start items-start px-4 sm:px-6 gap-4"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(md ? "w-[calc(100%-15rem)]" : "w-full"), children: [
        parentMemo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-auto inline-block mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link$1,
          {
            className: "px-3 py-1 border border-border rounded-lg max-w-xs w-auto text-sm flex flex-row justify-start items-center flex-nowrap text-muted-foreground hover:shadow hover:opacity-80",
            to: `/${parentMemo.name}`,
            state: locationState,
            viewTransition: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleArrowOutUpLeft, { className: "w-4 h-auto shrink-0 opacity-60 mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: parentMemo.content })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MemoView,
          {
            className: "shadow hover:shadow-md transition-all",
            memo,
            compact: false,
            parentPage: locationState?.from,
            showCreator: true,
            showVisibility: true,
            showPinned: true,
            showNsfwContent: true
          },
          `${memo.name}-${memo.displayTime}`
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 pb-16 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "comments", className: "sr-only", children: t2("memo.comment.self") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto grow w-full min-h-full flex flex-col justify-start items-start gap-y-1", children: comments.length === 0 ? showCreateCommentButton && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-row justify-center items-center py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: handleShowCommentEditor, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t2("memo.comment.write-a-comment") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "ml-2 w-5 h-auto text-muted-foreground" })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-between items-center h-8 pl-3 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-start items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-auto text-muted-foreground mr-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: t2("memo.comment.self") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm ml-1", children: [
                  "(",
                  comments.length,
                  ")"
                ] })
              ] }),
              showCreateCommentButton && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "text-muted-foreground", onClick: handleShowCommentEditor, children: t2("memo.comment.write-a-comment") })
            ] }),
            comments.map((comment) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              MemoView,
              {
                memo: comment,
                parentPage: locationState?.from,
                showCreator: true,
                compact: true
              },
              `${comment.name}-${comment.displayTime}`
            ))
          ] }) }),
          showCommentEditor && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MemoEditor,
            {
              cacheKey: `${memo.name}-${memo.updateTime}-comment`,
              placeholder: t2("editor.add-your-comment-here"),
              parentMemoName: memo.name,
              autoFocus: true,
              onConfirm: handleCommentCreated,
              onCancel: () => setShowCommentEditor(false)
            }
          ) })
        ] })
      ] }),
      md && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 left-0 shrink-0 -mt-6 w-56 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MemoDetailSidebar, { className: "py-6", memo, parentPage: locationState?.from }) })
    ] })
  ] });
});
export {
  MemoDetail as default
};
