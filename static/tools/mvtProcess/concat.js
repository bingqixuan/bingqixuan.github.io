// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
"use strict";window.MBTile={},MBTile.read=function(e,i){return e.readFields(MBTile._readField,{layers:[]},i)},MBTile._readField=function(e,i,a){3===e&&i.layers.push(MBTile.Layer.read(a,a.readVarint()+a.pos))},MBTile.write=function(e,i){if(e.layers)for(var a=0;a<e.layers.length;a++)i.writeMessage(3,MBTile.Layer.write,e.layers[a])},MBTile.GeomType={UNKNOWN:0,POINT:1,LINESTRING:2,POLYGON:3},MBTile.Value={},MBTile.Value.read=function(e,i){return e.readFields(MBTile.Value._readField,{string_value:"",float_value:0,double_value:0,int_value:0,uint_value:0,sint_value:0,bool_value:!1},i)},MBTile.Value._readField=function(e,i,a){1===e?i.string_value=a.readString():2===e?i.float_value=a.readFloat():3===e?i.double_value=a.readDouble():4===e?i.int_value=a.readVarint(!0):5===e?i.uint_value=a.readVarint():6===e?i.sint_value=a.readSVarint():7===e&&(i.bool_value=a.readBoolean())},MBTile.Value.write=function(e,i){e.string_value&&i.writeStringField(1,e.string_value),e.float_value&&i.writeFloatField(2,e.float_value),e.double_value&&i.writeDoubleField(3,e.double_value),e.int_value&&i.writeVarintField(4,e.int_value),e.uint_value&&i.writeVarintField(5,e.uint_value),e.sint_value&&i.writeSVarintField(6,e.sint_value),e.bool_value&&i.writeBooleanField(7,e.bool_value)},MBTile.Feature={},MBTile.Feature.read=function(e,i){return e.readFields(MBTile.Feature._readField,{id:0,tags:[],type:0,geometry:[]},i)},MBTile.Feature._readField=function(e,i,a){1===e?i.id=a.readVarint():2===e?a.readPackedVarint(i.tags):3===e?i.type=a.readVarint():4===e&&a.readPackedVarint(i.geometry)},MBTile.Feature.write=function(e,i){e.id&&i.writeVarintField(1,e.id),e.tags&&i.writePackedVarint(2,e.tags),e.type&&i.writeVarintField(3,e.type),e.geometry&&i.writePackedVarint(4,e.geometry)},MBTile.Layer={},MBTile.Layer.read=function(e,i){return e.readFields(MBTile.Layer._readField,{version:1,name:"",features:[],keys:[],values:[],extent:4096},i)},MBTile.Layer._readField=function(e,i,a){15===e?i.version=a.readVarint():1===e?i.name=a.readString():2===e?i.features.push(MBTile.Feature.read(a,a.readVarint()+a.pos)):3===e?i.keys.push(a.readString()):4===e?i.values.push(MBTile.Value.read(a,a.readVarint()+a.pos)):5===e&&(i.extent=a.readVarint())},MBTile.Layer.write=function(e,i){if(void 0!=e.version&&1!==e.version&&i.writeVarintField(15,e.version),e.name&&i.writeStringField(1,e.name),e.features)for(var a=0;a<e.features.length;a++)i.writeMessage(2,MBTile.Feature.write,e.features[a]);if(e.keys)for(a=0;a<e.keys.length;a++)i.writeStringField(3,e.keys[a]);if(e.values)for(a=0;a<e.values.length;a++)i.writeMessage(4,MBTile.Value.write,e.values[a]);void 0!=e.extent&&4096!==e.extent&&i.writeVarintField(5,e.extent)};
},{}]},{},[7])
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({15:[function(require,module,exports) {
exports.read=function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,e=f>>1,i=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=w;i>0;M=256*M+a[o+N],N+=n,i-=8);for(p=M&(1<<-i)-1,M>>=-i,i+=r;i>0;p=256*p+a[o+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:1/0*(s?-1:1);p+=Math.pow(2,r),M-=e}return(s?-1:1)*p*Math.pow(2,M-r)},exports.write=function(a,o,t,r,h,M){var p,w,f,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=i):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),(o+=p+N>=1?n/f:n*Math.pow(2,1-N))*f>=2&&(p++,f/=2),p+N>=i?(w=0,p=i):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,e+=h;e>0;a[t+s]=255&p,s+=u,p/=256,e-=8);a[t+s-u]|=128*l};
},{}],9:[function(require,module,exports) {
"use strict";function t(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}function i(i){return i.type===t.Bytes?i.readVarint()+i.pos:i.pos+1}function e(t,i,e){return e?4294967296*i+(t>>>0):4294967296*(i>>>0)+(t>>>0)}function r(t,i,e){var r=i<=16383?1:i<=2097151?2:i<=268435455?3:Math.ceil(Math.log(i)/(7*Math.LN2));e.realloc(r);for(var s=e.pos-1;s>=t;s--)e.buf[s+r]=e.buf[s]}function s(t,i){for(var e=0;e<t.length;e++)i.writeVarint(t[e])}function n(t,i){for(var e=0;e<t.length;e++)i.writeSVarint(t[e])}function o(t,i){for(var e=0;e<t.length;e++)i.writeFloat(t[e])}function h(t,i){for(var e=0;e<t.length;e++)i.writeDouble(t[e])}function a(t,i){for(var e=0;e<t.length;e++)i.writeBoolean(t[e])}function u(t,i){for(var e=0;e<t.length;e++)i.writeFixed32(t[e])}function f(t,i){for(var e=0;e<t.length;e++)i.writeSFixed32(t[e])}function d(t,i){for(var e=0;e<t.length;e++)i.writeFixed64(t[e])}function c(t,i){for(var e=0;e<t.length;e++)i.writeSFixed64(t[e])}function p(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16)+16777216*t[i+3]}function l(t,i,e){t[e]=i,t[e+1]=i>>>8,t[e+2]=i>>>16,t[e+3]=i>>>24}function w(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16)+(t[i+3]<<24)}module.exports=t;var F=require("ieee754");t.Varint=0,t.Fixed64=1,t.Bytes=2,t.Fixed32=5;t.prototype={destroy:function(){this.buf=null},readFields:function(t,i,e){for(e=e||this.length;this.pos<e;){var r=this.readVarint(),s=r>>3,n=this.pos;this.type=7&r,t(s,i,this),this.pos===n&&this.skip(r)}return i},readMessage:function(t,i){return this.readFields(t,i,this.readVarint()+this.pos)},readFixed32:function(){var t=p(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=w(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=p(this.buf,this.pos)+4294967296*p(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=p(this.buf,this.pos)+4294967296*w(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=F.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=F.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var i,r,s=this.buf;return r=s[this.pos++],i=127&r,r<128?i:(r=s[this.pos++],i|=(127&r)<<7,r<128?i:(r=s[this.pos++],i|=(127&r)<<14,r<128?i:(r=s[this.pos++],i|=(127&r)<<21,r<128?i:(r=s[this.pos],i|=(15&r)<<28,function(t,i,r){var s,n,o=r.buf;if(n=o[r.pos++],s=(112&n)>>4,n<128)return e(t,s,i);if(n=o[r.pos++],s|=(127&n)<<3,n<128)return e(t,s,i);if(n=o[r.pos++],s|=(127&n)<<10,n<128)return e(t,s,i);if(n=o[r.pos++],s|=(127&n)<<17,n<128)return e(t,s,i);if(n=o[r.pos++],s|=(127&n)<<24,n<128)return e(t,s,i);if(n=o[r.pos++],s|=(1&n)<<31,n<128)return e(t,s,i);throw new Error("Expected varint not more than 10 bytes")}(i,t,this)))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,i=function(t,i,e){for(var r="",s=i;s<e;){var n=t[s],o=null,h=n>239?4:n>223?3:n>191?2:1;if(s+h>e)break;var a,u,f;1===h?n<128&&(o=n):2===h?128==(192&(a=t[s+1]))&&(o=(31&n)<<6|63&a)<=127&&(o=null):3===h?(a=t[s+1],u=t[s+2],128==(192&a)&&128==(192&u)&&((o=(15&n)<<12|(63&a)<<6|63&u)<=2047||o>=55296&&o<=57343)&&(o=null)):4===h&&(a=t[s+1],u=t[s+2],f=t[s+3],128==(192&a)&&128==(192&u)&&128==(192&f)&&((o=(15&n)<<18|(63&a)<<12|(63&u)<<6|63&f)<=65535||o>=1114112)&&(o=null)),null===o?(o=65533,h=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|1023&o),r+=String.fromCharCode(o),s+=h}return r}(this.buf,this.pos,t);return this.pos=t,i},readBytes:function(){var t=this.readVarint()+this.pos,i=this.buf.subarray(this.pos,t);return this.pos=t,i},readPackedVarint:function(t,e){var r=i(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){var e=i(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(i){var e=7&i;if(e===t.Varint)for(;this.buf[this.pos++]>127;);else if(e===t.Bytes)this.pos=this.readVarint()+this.pos;else if(e===t.Fixed32)this.pos+=4;else{if(e!==t.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8}},writeTag:function(t,i){this.writeVarint(t<<3|i)},realloc:function(t){for(var i=this.length||16;i<this.pos+t;)i*=2;if(i!==this.length){var e=new Uint8Array(i);e.set(this.buf),this.buf=e,this.length=i}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),l(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),l(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),l(this.buf,-1&t,this.pos),l(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),l(this.buf,-1&t,this.pos),l(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,i){var e,r;if(t>=0?(e=t%4294967296|0,r=t/4294967296|0):(r=~(-t/4294967296),4294967295^(e=~(-t%4294967296))?e=e+1|0:(e=0,r=r+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");i.realloc(10),function(t,i,e){e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos]=127&t}(e,0,i),function(t,i){var e=(7&t)<<4;i.buf[i.pos++]|=e|((t>>>=3)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t)))))}(r,i)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var i=this.pos;this.pos=function(t,i,e){for(var r,s,n=0;n<i.length;n++){if((r=i.charCodeAt(n))>55295&&r<57344){if(!s){r>56319||n+1===i.length?(t[e++]=239,t[e++]=191,t[e++]=189):s=r;continue}if(r<56320){t[e++]=239,t[e++]=191,t[e++]=189,s=r;continue}r=s-55296<<10|r-56320|65536,s=null}else s&&(t[e++]=239,t[e++]=191,t[e++]=189,s=null);r<128?t[e++]=r:(r<2048?t[e++]=r>>6|192:(r<65536?t[e++]=r>>12|224:(t[e++]=r>>18|240,t[e++]=r>>12&63|128),t[e++]=r>>6&63|128),t[e++]=63&r|128)}return e}(this.buf,t,this.pos);var e=this.pos-i;e>=128&&r(i,e,this),this.pos=i-1,this.writeVarint(e),this.pos+=e},writeFloat:function(t){this.realloc(4),F.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),F.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var i=t.length;this.writeVarint(i),this.realloc(i);for(var e=0;e<i;e++)this.buf[this.pos++]=t[e]},writeRawMessage:function(t,i){this.pos++;var e=this.pos;t(i,this);var s=this.pos-e;s>=128&&r(e,s,this),this.pos=e-1,this.writeVarint(s),this.pos+=s},writeMessage:function(i,e,r){this.writeTag(i,t.Bytes),this.writeRawMessage(e,r)},writePackedVarint:function(t,i){this.writeMessage(t,s,i)},writePackedSVarint:function(t,i){this.writeMessage(t,n,i)},writePackedBoolean:function(t,i){this.writeMessage(t,a,i)},writePackedFloat:function(t,i){this.writeMessage(t,o,i)},writePackedDouble:function(t,i){this.writeMessage(t,h,i)},writePackedFixed32:function(t,i){this.writeMessage(t,u,i)},writePackedSFixed32:function(t,i){this.writeMessage(t,f,i)},writePackedFixed64:function(t,i){this.writeMessage(t,d,i)},writePackedSFixed64:function(t,i){this.writeMessage(t,c,i)},writeBytesField:function(i,e){this.writeTag(i,t.Bytes),this.writeBytes(e)},writeFixed32Field:function(i,e){this.writeTag(i,t.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(i,e){this.writeTag(i,t.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(i,e){this.writeTag(i,t.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(i,e){this.writeTag(i,t.Fixed64),this.writeSFixed64(e)},writeVarintField:function(i,e){this.writeTag(i,t.Varint),this.writeVarint(e)},writeSVarintField:function(i,e){this.writeTag(i,t.Varint),this.writeSVarint(e)},writeStringField:function(i,e){this.writeTag(i,t.Bytes),this.writeString(e)},writeFloatField:function(i,e){this.writeTag(i,t.Fixed32),this.writeFloat(e)},writeDoubleField:function(i,e){this.writeTag(i,t.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,i){this.writeVarintField(t,Boolean(i))}};
},{"ieee754":15}],14:[function(require,module,exports) {
"use strict";function t(t,n){this.x=t,this.y=n}module.exports=t,t.prototype={clone:function(){return new t(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,n){return this.clone()._rotateAround(t,n)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var n=t.x-this.x,i=t.y-this.y;return n*n+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,n){return Math.atan2(this.x*n-this.y*t,this.x*t+this.y*n)},_matMult:function(t){var n=t[0]*this.x+t[1]*this.y,i=t[2]*this.x+t[3]*this.y;return this.x=n,this.y=i,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var n=Math.cos(t),i=Math.sin(t),s=n*this.x-i*this.y,r=i*this.x+n*this.y;return this.x=s,this.y=r,this},_rotateAround:function(t,n){var i=Math.cos(t),s=Math.sin(t),r=n.x+i*(this.x-n.x)-s*(this.y-n.y),h=n.y+s*(this.x-n.x)+i*(this.y-n.y);return this.x=r,this.y=h,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},t.convert=function(n){return n instanceof t?n:Array.isArray(n)?new t(n[0],n[1]):n};
},{}],11:[function(require,module,exports) {
"use strict";function t(t,e,n,o,i){this.properties={},this.extent=n,this.type=0,this._pbf=t,this._geometry=-1,this._keys=o,this._values=i,t.readFields(r,this,e)}function r(t,r,e){1==t?r.id=e.readVarint():2==t?function(t,r){var e=t.readVarint()+t.pos;for(;t.pos<e;){var n=r._keys[t.readVarint()],o=r._values[t.readVarint()];r.properties[n]=o}}(e,r):3==t?r.type=e.readVarint():4==t&&(r._geometry=e.pos)}var e=require("@mapbox/point-geometry");module.exports=t,t.types=["Unknown","Point","LineString","Polygon"],t.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var r,n=t.readVarint()+t.pos,o=1,i=0,a=0,s=0,p=[];t.pos<n;){if(i<=0){var h=t.readVarint();o=7&h,i=h>>3}if(i--,1===o||2===o)a+=t.readSVarint(),s+=t.readSVarint(),1===o&&(r&&p.push(r),r=[]),r.push(new e(a,s));else{if(7!==o)throw new Error("unknown command "+o);r&&r.push(r[0].clone())}}return r&&p.push(r),p},t.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var r=t.readVarint()+t.pos,e=1,n=0,o=0,i=0,a=1/0,s=-1/0,p=1/0,h=-1/0;t.pos<r;){if(n<=0){var u=t.readVarint();e=7&u,n=u>>3}if(n--,1===e||2===e)o+=t.readSVarint(),i+=t.readSVarint(),o<a&&(a=o),o>s&&(s=o),i<p&&(p=i),i>h&&(h=i);else if(7!==e)throw new Error("unknown command "+e)}return[a,p,s,h]},t.prototype.toGeoJSON=function(r,e,n){function o(t){for(var r=0;r<t.length;r++){var e=t[r],n=180-360*(e.y+h)/s;t[r]=[360*(e.x+p)/s-180,360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90]}}var i,a,s=this.extent*Math.pow(2,n),p=this.extent*r,h=this.extent*e,u=this.loadGeometry(),f=t.types[this.type];switch(this.type){case 1:var d=[];for(i=0;i<u.length;i++)d[i]=u[i][0];o(u=d);break;case 2:for(i=0;i<u.length;i++)o(u[i]);break;case 3:for(u=function(t){var r=t.length;if(r<=1)return[t];for(var e,n,o=[],i=0;i<r;i++){var a=function(t){for(var r,e,n=0,o=0,i=t.length,a=i-1;o<i;a=o++)r=t[o],e=t[a],n+=(e.x-r.x)*(r.y+e.y);return n}(t[i]);0!==a&&(void 0===n&&(n=a<0),n===a<0?(e&&o.push(e),e=[t[i]]):e.push(t[i]))}return e&&o.push(e),o}(u),i=0;i<u.length;i++)for(a=0;a<u[i].length;a++)o(u[i][a])}1===u.length?u=u[0]:f="Multi"+f;var y={type:"Feature",geometry:{type:f,coordinates:u},properties:this.properties};return"id"in this&&(y.id=this.id),y};
},{"@mapbox/point-geometry":14}],12:[function(require,module,exports) {
"use strict";function e(e,r){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(t,this,r),this.length=this._features.length}function t(e,t,r){15===e?t.version=r.readVarint():1===e?t.name=r.readString():5===e?t.extent=r.readVarint():2===e?t._features.push(r.pos):3===e?t._keys.push(r.readString()):4===e&&t._values.push(function(e){var t=null,r=e.readVarint()+e.pos;for(;e.pos<r;){var s=e.readVarint()>>3;t=1===s?e.readString():2===s?e.readFloat():3===s?e.readDouble():4===s?e.readVarint64():5===s?e.readVarint():6===s?e.readSVarint():7===s?e.readBoolean():null}return t}(r))}var r=require("./vectortilefeature.js");module.exports=e,e.prototype.feature=function(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new r(this._pbf,t,this.extent,this._keys,this._values)};
},{"./vectortilefeature.js":11}],13:[function(require,module,exports) {
"use strict";function e(e,t,i){if(3===e){var a=new r(i,i.readVarint()+i.pos);a.length&&(t[a.name]=a)}}var r=require("./vectortilelayer");module.exports=function(r,t){this.layers=r.readFields(e,{},t)};
},{"./vectortilelayer":12}],10:[function(require,module,exports) {
module.exports.VectorTile=require("./lib/vectortile.js"),module.exports.VectorTileFeature=require("./lib/vectortilefeature.js"),module.exports.VectorTileLayer=require("./lib/vectortilelayer.js");
},{"./lib/vectortilefeature.js":11,"./lib/vectortilelayer.js":12,"./lib/vectortile.js":13}],8:[function(require,module,exports) {
"use strict";function e(e){a.clearRect(0,0,o,o);var t=a,r=o/4096;t.scale(r,r);for(var l=e.layers,i=0,n=l.length;i<n;i++)for(var s=l[i],f=s.features,h=0,c=f.length;h<c;h++){var g=f[h];switch(g.type){case 0:break;case 1:!function(e,t,r){var l=r.values,a=0;e.beginPath(),e.font="60px Open Sans Bold",e.fillStyle="white";var o=[0,0],i=t.geometry,n=t.tags,s=i.length;for(;a<s;){var f=7&i[a],h=i[a]>>3;if(1===f){for(;h>0;){var c=i[a+1]>>1^-(1&i[a+1]),g=i[a+2]>>1^-(1&i[a+2]),v=l[n[3]].string_value;e.fillText(v,o[0]+c,o[1]+g),o=[o[0]+c,o[1]+g],a+=2,h--}a+=1}else if(2===f){for(;h>0;){var c=i[a+1]>>1^-(1&i[a+1]),g=i[a+2]>>1^-(1&i[a+2]),v=l[n[3]].string_value;e.fillText(v,o[0]+c,o[1]+g),o=[o[0]+c,o[1]+g],a+=2,h--}a+=1}else e.closePath()}e.stroke(),e.closePath()}(t,g,s);break;case 2:!function(e,t){var r=0;a.beginPath(),e.strokeStyle="rgb(0.2,0.2,0.2)",e.lineWidth="5",e.strokeStyle="yellow";var l=t.geometry,o=[0,0],i=l.length;for(;r<i;){var n=7&l[r],s=l[r]>>3;if(1===n){for(;s>0;){var f=l[r+1]>>1^-(1&l[r+1]),h=l[r+2]>>1^-(1&l[r+2]);e.moveTo(o[0]+f,o[1]+h),o=[o[0]+f,o[1]+h],r+=2,s--}r+=1}else if(2===n){for(;s>0;){var f=l[r+1]>>1^-(1&l[r+1]),h=l[r+2]>>1^-(1&l[r+2]);e.lineTo(o[0]+f,o[1]+h),o=[o[0]+f,o[1]+h],r+=2,s--}r+=1}else e.closePath()}e.stroke(),e.closePath()}(t,g);break;case 3:!function(e,t){var r=!1,l=0;e.beginPath(),e.lineWidth="3",e.fillStyle="#343332",e.strokeStyle="#6E6E6E";var a=t.geometry,o=[0,0],i=a.length;for(;l<i-1;){!0===r&&(e.beginPath(),e.lineWidth="3",e.fillStyle="#343332",e.strokeStyle="#6E6E6E",r=!1);var n=7&a[l],s=a[l]>>3;if(1===n){for(;s>0;){var f=a[l+1]>>1^-(1&a[l+1]),h=a[l+2]>>1^-(1&a[l+2]);e.moveTo(o[0]+f,o[1]+h),o=[o[0]+f,o[1]+h],l+=2,s--}l+=1}else if(2===n){for(;s>0;){var f=a[l+1]>>1^-(1&a[l+1]),h=a[l+2]>>1^-(1&a[l+2]);e.lineTo(o[0]+f,o[1]+h),o=[o[0]+f,o[1]+h],l+=2,s--}l+=1}else 7===n&&(e.fill(),e.closePath(),r=!0,l++)}}(t,g)}}}var t=require("@mapbox/vector-tile").VectorTile,r=require("pbf"),l=document.getElementById("canvas"),a=l.getContext("2d"),o=l.height=l.width=window.innerHeight-5,i=document.getElementById("back");devicePixelRatio>1&&(l.style.width=l.width+"px",l.style.height=l.height+"px",l.width*=2,l.height*=2,a.scale(2,2)),a.textAlign="center",a.font="48px Helvetica, Arial",a.fillText("将一个pbf文件放进来",o/2,o/2),l.ondragover=function(){return this.className="hover",!1},l.ondragend=function(){return this.className="",!1},l.ondrop=function(l){this.className="loaded",a.clearRect(0,0,o,o),a.fillText("加载中...",o/2,o/2);var i=new FileReader;return i.onload=function(l){console.log("data size",function(e){var t=Math.floor(Math.log(e)/Math.log(1024));return Math.round(e/Math.pow(1024,t)*100)/100+" "+["B","kB","MB","GB"][t]}(l.target.result.byteLength));var i=new t(new r(l.target.result)),n=MBTile.read(new r(l.target.result));console.log(i),a.clearRect(0,0,o,o),a.fillText("解析成功!结果看控制台！",o/2,o/2),e(n)},i.readAsArrayBuffer(l.dataTransfer.files[0]),l.preventDefault(),!1},a.lineWidth=1;i.style.display="none";
},{"pbf":9,"@mapbox/vector-tile":10}]},{},[8])
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
/**
 * Created by bingqixuan on 2018/5/17.
 */



},{}]},{},[6])