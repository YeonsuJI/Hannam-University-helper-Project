var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.getImageSourceSync=exports.getImageSource=exports.default=exports.Button=void 0;var _createIconSet=_interopRequireDefault(require("./lib/create-icon-set"));var _Entypo=_interopRequireDefault(require("./glyphmaps/Entypo.json"));var iconSet=(0,_createIconSet.default)(_Entypo.default,'Entypo','Entypo.ttf');var _default=exports.default=iconSet;var Button=exports.Button=iconSet.Button,getImageSource=exports.getImageSource=iconSet.getImageSource,getImageSourceSync=exports.getImageSourceSync=iconSet.getImageSourceSync;