/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/circle.ts":
/*!******************************!*\
  !*** ./src/models/circle.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var shape_1 = __webpack_require__(/*! ./shape */ "./src/models/shape.ts");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.r, 2);
    };
    return Circle;
}(shape_1.default));
exports["default"] = Circle;


/***/ }),

/***/ "./src/models/community.ts":
/*!*********************************!*\
  !*** ./src/models/community.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Community = void 0;
// generic je izveden iz Person
var Community = /** @class */ (function () {
    function Community() {
        this.member = [];
    }
    Community.prototype.add = function (newMember) {
        this.member.push(newMember);
    };
    Community.prototype.getAverageAge = function () {
        var sum = this.member.reduce(function (acc, cur) { return (acc += cur.age); }, 0);
        return sum / this.member.length;
    };
    return Community;
}());
exports.Community = Community;


/***/ }),

/***/ "./src/models/shape.ts":
/*!*****************************!*\
  !*** ./src/models/shape.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.getArea = function () {
        throw new Error('Not implemented');
    };
    return Shape;
}());
exports["default"] = Shape;


/***/ }),

/***/ "./src/models/square.ts":
/*!******************************!*\
  !*** ./src/models/square.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var shape_1 = __webpack_require__(/*! ./shape */ "./src/models/shape.ts");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(a) {
        var _this = _super.call(this) || this;
        _this.a = a;
        return _this;
    }
    Square.prototype.getArea = function () {
        return Math.pow(this.a, 2);
    };
    return Square;
}(shape_1.default));
exports["default"] = Square;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/klase.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var circle_1 = __webpack_require__(/*! ./models/circle */ "./src/models/circle.ts");
var community_1 = __webpack_require__(/*! ./models/community */ "./src/models/community.ts");
var square_1 = __webpack_require__(/*! ./models/square */ "./src/models/square.ts");
var krug = new circle_1.default(3.0);
console.log("Pk-".concat(krug.getArea()));
var kvadrat = new square_1.default(4.0);
console.log("Ps-".concat(kvadrat.getArea()));
// Ovde je pokazao konacan primer za Generics za Community i za Person
var marko = {
    id: 'wedsd',
    name: 'Marko',
    age: 20,
    prosekOcena: 8.5,
};
var petar = {
    id: 'dsada2',
    name: 'Petar',
    age: 22,
    // 400 cega ? evra, u type stavi
    prosekPlata: 400,
};
var community = new community_1.Community();
community.add(marko);
community.add(petar);
console.log("Prosek godina je: ".concat(community.getAverageAge()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGLElBQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBVSxDQUFDO0FBQzFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUFxQixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3AtdHMvLi9zcmMvbW9kZWxzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly93cC10cy8uL3NyYy9tb2RlbHMvY29tbXVuaXR5LnRzIiwid2VicGFjazovL3dwLXRzLy4vc3JjL21vZGVscy9zaGFwZS50cyIsIndlYnBhY2s6Ly93cC10cy8uL3NyYy9tb2RlbHMvc3F1YXJlLnRzIiwid2VicGFjazovL3dwLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dwLXRzLy4vc3JjL2tsYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFwZSBmcm9tICcuL3NoYXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIFNoYXBlIHtcclxuICBwcml2YXRlIHI6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvcihyOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJlYSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgKiBNYXRoLnBvdyh0aGlzLnIsIDIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuL3BlcnNvbic7XHJcblxyXG4vLyBnZW5lcmljIGplIGl6dmVkZW4gaXogUGVyc29uXHJcbmV4cG9ydCBjbGFzcyBDb21tdW5pdHk8VCBleHRlbmRzIFBlcnNvbj4ge1xyXG4gIC8vIGlzdG8gamUgaSBBcnJheTxUPlxyXG4gIHByaXZhdGUgbWVtYmVyOiBUW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tZW1iZXIgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZChuZXdNZW1iZXI6IFQpIHtcclxuICAgIHRoaXMubWVtYmVyLnB1c2gobmV3TWVtYmVyKTtcclxuICB9XHJcblxyXG4gIGdldEF2ZXJhZ2VBZ2UoKSB7XHJcbiAgICBjb25zdCBzdW0gPSB0aGlzLm1lbWJlci5yZWR1Y2UoKGFjYywgY3VyOiBUKSA9PiAoYWNjICs9IGN1ci5hZ2UpLCAwKTtcclxuICAgIHJldHVybiBzdW0gLyB0aGlzLm1lbWJlci5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIHtcclxuICBnZXRBcmVhKCk6IG51bWJlciB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU2hhcGUgZnJvbSAnLi9zaGFwZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcXVhcmUgZXh0ZW5kcyBTaGFwZSB7XHJcbiAgcHJpdmF0ZSBhOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoYTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hID0gYTtcclxuICB9XHJcblxyXG4gIGdldEFyZWEoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmEsIDIpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL21vZGVscy9jaXJjbGUnO1xyXG5pbXBvcnQgeyBDb21tdW5pdHkgfSBmcm9tICcuL21vZGVscy9jb21tdW5pdHknO1xyXG5pbXBvcnQgeyBSYWRuaWssIFN0dWRlbnQsIFBlcnNvbiB9IGZyb20gJy4vbW9kZWxzL3BlcnNvbic7XHJcbmltcG9ydCBTcXVhcmUgZnJvbSAnLi9tb2RlbHMvc3F1YXJlJztcclxuXHJcbmNvbnN0IGtydWcgPSBuZXcgQ2lyY2xlKDMuMCk7XHJcbmNvbnNvbGUubG9nKGBQay0ke2tydWcuZ2V0QXJlYSgpfWApO1xyXG5cclxuY29uc3Qga3ZhZHJhdCA9IG5ldyBTcXVhcmUoNC4wKTtcclxuY29uc29sZS5sb2coYFBzLSR7a3ZhZHJhdC5nZXRBcmVhKCl9YCk7XHJcblxyXG4vLyBPdmRlIGplIHBva2F6YW8ga29uYWNhbiBwcmltZXIgemEgR2VuZXJpY3MgemEgQ29tbXVuaXR5IGkgemEgUGVyc29uXHJcbmNvbnN0IG1hcmtvOiBTdHVkZW50ID0ge1xyXG4gIGlkOiAnd2Vkc2QnLFxyXG4gIG5hbWU6ICdNYXJrbycsXHJcbiAgYWdlOiAyMCxcclxuICBwcm9zZWtPY2VuYTogOC41LFxyXG59O1xyXG5cclxuY29uc3QgcGV0YXI6IFJhZG5payA9IHtcclxuICBpZDogJ2RzYWRhMicsXHJcbiAgbmFtZTogJ1BldGFyJyxcclxuICBhZ2U6IDIyLFxyXG4gIC8vIDQwMCBjZWdhID8gZXZyYSwgdSB0eXBlIHN0YXZpXHJcbiAgcHJvc2VrUGxhdGE6IDQwMCxcclxufTtcclxuXHJcbmNvbnN0IGNvbW11bml0eSA9IG5ldyBDb21tdW5pdHk8UGVyc29uPigpO1xyXG5jb21tdW5pdHkuYWRkKG1hcmtvKTtcclxuY29tbXVuaXR5LmFkZChwZXRhcik7XHJcbmNvbnNvbGUubG9nKGBQcm9zZWsgZ29kaW5hIGplOiAke2NvbW11bml0eS5nZXRBdmVyYWdlQWdlKCl9YCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==