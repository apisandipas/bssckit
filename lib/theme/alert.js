"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globals = _interopRequireDefault(require("./globals"));

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alert = {
  colors: {
    primary: {
      text: function text(get) {
        return get('palette', 'primaryDarkest');
      },
      background: function background(get) {
        return get('palette', 'primaryLight');
      },
      border: function border(get) {
        return get('palette', 'primaryLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'primaryLighter');
      },
      hover: function hover(get) {
        return get('palette', 'primaryDarkest');
      }
    },
    secondary: {
      text: function text(get) {
        return get('palette', 'secondaryDarkest');
      },
      background: function background(get) {
        return get('palette', 'secondaryLight');
      },
      border: function border(get) {
        return get('palette', 'secondaryLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'secondaryLighter');
      },
      hover: function hover(get) {
        return get('palette', 'secondaryDarkest');
      }
    },
    success: {
      text: function text(get) {
        return get('palette', 'successDarkest');
      },
      background: function background(get) {
        return get('palette', 'successLight');
      },
      border: function border(get) {
        return get('palette', 'successLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'successLighter');
      },
      hover: function hover(get) {
        return get('palette', 'successDarkest');
      }
    },
    danger: {
      text: function text(get) {
        return get('palette', 'dangerDarkest');
      },
      background: function background(get) {
        return get('palette', 'dangerLight');
      },
      border: function border(get) {
        return get('palette', 'dangerLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'dangerLighter');
      },
      hover: function hover(get) {
        return get('palette', 'dangerDarkest');
      }
    },
    warning: {
      text: function text(get) {
        return get('palette', 'warningDarkest');
      },
      background: function background(get) {
        return get('palette', 'warningLight');
      },
      border: function border(get) {
        return get('palette', 'warningLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'warningLighter');
      },
      hover: function hover(get) {
        return get('palette', 'warningDarkest');
      }
    },
    info: {
      text: function text(get) {
        return get('palette', 'infoDarkest');
      },
      background: function background(get) {
        return get('palette', 'infoLight');
      },
      border: function border(get) {
        return get('palette', 'infoLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'infoLighter');
      },
      hover: function hover(get) {
        return get('palette', 'infoDarkest');
      }
    },
    light: {
      text: function text(get) {
        return get('palette', 'lightarkest');
      },
      background: function background(get) {
        return get('palette', 'lightLight');
      },
      border: function border(get) {
        return get('palette', 'lightDark');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'lightLighter');
      },
      hover: function hover(get) {
        return get('palette', 'darkDarkest');
      }
    },
    dark: {
      text: function text(get) {
        return get('palette', 'darkDarkest');
      },
      background: function background(get) {
        return get('palette', 'darkLight');
      },
      border: function border(get) {
        return get('palette', 'darkLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'darkLighter');
      },
      hover: function hover(get) {
        return get('palette', 'darkDarkest');
      }
    },
    "default": {
      text: function text(get) {
        return get('palette', 'secondaryDarkest');
      },
      background: function background(get) {
        return get('palette', 'secondaryLight');
      },
      border: function border(get) {
        return get('palette', 'secondaryLighter');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'secondaryLighter');
      },
      hover: function hover(get) {
        return get('palette', 'secondaryDarkest');
      }
    }
  },
  margin: {
    bottom: '1rem'
  },
  padding: {
    "default": '0.75rem 1.25rem',
    dismissibleRight: '4rem'
  },
  border: {
    "default": '1px solid transparent'
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  fontWeight: {
    "default": '700'
  }
};
var _default = alert;
exports["default"] = _default;