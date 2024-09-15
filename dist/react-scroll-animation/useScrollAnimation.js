import { useRef, useState, useEffect } from 'react';
export var useScrollAnimation = function (repeat, delay) {
    var _a = useState(false), isInViewport = _a[0], setIsInViewport = _a[1];
    var ref = useRef(null);
    var timeoutRef = useRef(null); // 타임아웃 참조 추가
    useEffect(function () {
        if (!ref.current)
            return; // 요소가 아직 준비되지 않은 경우 중단
        var callback = function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에 나타났을 경우
                    if (delay === 0) {
                        setIsInViewport(true);
                        return;
                    }
                    timeoutRef.current = setTimeout(function () {
                        setIsInViewport(true);
                    }, delay * 1000); // 지연 시간 후에 상태 변경
                }
                else {
                    // 요소가 뷰포트를 벗어난 경우
                    if (repeat)
                        setIsInViewport(false);
                    if (timeoutRef.current)
                        clearTimeout(timeoutRef.current); // 타임아웃 취소
                }
            }, []);
        };
        var options = { root: null, rootMargin: '0px', threshold: 0 };
        var observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current); // 요소 관찰 시작
        return function () {
            observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
        };
    }, [repeat, delay]);
    return { isInViewport: isInViewport, ref: ref };
};
