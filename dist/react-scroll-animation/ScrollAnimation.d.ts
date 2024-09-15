import React from 'react';
import './react-scroll-animation.css';
import { ScrollAnimationPropsType } from './types';
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
export declare const ScrollAnimation: ({ children, startingPoint, duration, amount, delay, repeat, }: ScrollAnimationPropsType) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
