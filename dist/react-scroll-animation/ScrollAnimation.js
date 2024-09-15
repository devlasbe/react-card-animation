var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import './react-scroll-animation.css';
/**
   * @example
   * type ScrollAnimationTypes {
        // default: 'top', 애니메이션 시작 지점입니다.
        startingPoint?: 'top' | 'right' | 'bottom' | 'left';

        // default: 0.5, 애니메이션 지속시간입니다. 단위는 '초'이며 0보다 작을 수 없습니다.
        duration?: number;

        // default: md, 애니메이션 움직임의 양입니다.
        amount?: 'sm' | 'md' | 'lg' | 'xl';

        // default : 0, 스크롤 감지 후 애니메이션 실행 지연시간입니다. 0보다 작을 수 없습니다.
        delay?: number;

        // default: false, 범위를 벗어났을 때 애니메이션 재적용 여부입니다.
        repeat?: boolean;
    }
   */
export var ScrollAnimation = function (_a) {
    var _b;
    var children = _a.children, _c = _a.startingPoint, startingPoint = _c === void 0 ? 'top' : _c, _d = _a.duration, duration = _d === void 0 ? 0.5 : _d, _e = _a.amount, amount = _e === void 0 ? 'md' : _e, _f = _a.delay, delay = _f === void 0 ? 0 : _f, _g = _a.repeat, repeat = _g === void 0 ? false : _g;
    var _h = useScrollAnimation(repeat, delay), ref = _h.ref, isInViewport = _h.isInViewport;
    if (duration < 0)
        throw new Error('duration 값(애니메이션 지속 시간)은 0보다 작을 수 없습니다.');
    if (delay < 0)
        throw new Error('딜레이 시간은 0보다 작을 수 없습니다.');
    return React.cloneElement(children, {
        ref: ref,
        style: __assign(__assign({}, (_b = children === null || children === void 0 ? void 0 : children.props) === null || _b === void 0 ? void 0 : _b.style), { opacity: isInViewport ? 1 : 0, animation: isInViewport &&
                "\n    scroll-animation-".concat(startingPoint, "-").concat(amount, " ").concat(duration, "s forwards ease-out\n  ") }),
    });
};
