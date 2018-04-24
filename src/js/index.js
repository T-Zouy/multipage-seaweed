/**
 * Created by lin_yu on 2018/4/23 0028.
 */

import '../assets/css/index/index.scss'
import $ from 'jquery'
import 'fullpage.js'

$(document).ready(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right',
        'sectionsColor': ['#fff', '#fff', '#fff'],
        'afterLoad': function (anchorLink, index) {
            if (index === 2) {
                $('.greet-message-1').addClass('show-items-3')
                $('.greet-message-2').addClass('show-items-1')
                $('.greet-message-3').addClass('show-items-2')
            } else if (index === 3) {
                $('.server-telephone').addClass('show-items-1')
                $('.server-wechat').addClass('show-items-2')
                $('.server-wedding').addClass('show-items-3')
                $('.customer-telephone').addClass('erase-item-1')
                $('.customer-wechat').addClass('erase-item-2')
                $('.customer-wedding').addClass('erase-item-3')
                $('.child-bar').addClass('process-lengthen')
            } else if (index === 4) {
                $('.customer-part').hide()
                $('.calendar').addClass('calendar-larger')
            } else if (index === 5) {
                $('.task-1').addClass('show-items-1')
                $('.task-2').addClass('show-items-2')
                $('.task-3').addClass('show-items-3')
                $('.task-4').addClass('show-items-4')
            } else if (index === 7) {
                $('.process-number').addClass('process-running')
                $('.people').removeClass('people-number-achieve')
                $('.price-999').addClass('correspond-price')
                let clearTimeoutFirst = setTimeout(function () {
                    clearTimeout(clearTimeoutFirst)
                    $('.people-300').addClass('people-number-achieve')
                    $('.price-999').removeClass('correspond-price')
                    $('.price-1499').addClass('correspond-price')
                }, 682)
                let clearTimeoutSecond = setTimeout(function () {
                    clearTimeout(clearTimeoutSecond)
                    $('.people-300').removeClass('people-number-achieve')
                    $('.people-400').addClass('people-number-achieve')
                    $('.price-1499').removeClass('correspond-price')
                    $('.price-1999').addClass('correspond-price')
                }, 1340)
                let clearTimeoutThird = setTimeout(function () {
                    clearTimeout(clearTimeoutThird)
                    $('.people-400').removeClass('people-number-achieve')
                    $('.people-600').addClass('people-number-achieve')
                    $('.price-1999').removeClass('correspond-price')
                    $('.price-2499').addClass('correspond-price')
                }, 1997)
                let clearTimeoutFourth = setTimeout(function () {
                    clearTimeout(clearTimeoutFourth)
                    $('.people-600').removeClass('people-number-achieve')
                    $('.people-800').addClass('people-number-achieve')
                    $('.price-2499').removeClass('correspond-price')
                    $('.price-2999').addClass('correspond-price')
                }, 2654)
                let clearTimeoutFifth = setTimeout(function () {
                    clearTimeout(clearTimeoutFifth)
                    $('.people-800').removeClass('people-number-achieve')
                    $('.people-1000').addClass('people-number-achieve')
                    $('.price-2999').removeClass('correspond-price')
                }, 3324)
                window.clearIntervalSix = setInterval(function () {
                    $('.people').removeClass('people-number-achieve')
                    $('.price-999').addClass('correspond-price')
                    let clearTimeoutFirst = setTimeout(function () {
                        clearTimeout(clearTimeoutFirst)
                        $('.people-300').addClass('people-number-achieve')
                        $('.price-999').removeClass('correspond-price')
                        $('.price-1499').addClass('correspond-price')
                    }, 682)
                    let clearTimeoutSecond = setTimeout(function () {
                        clearTimeout(clearTimeoutSecond)
                        $('.people-300').removeClass('people-number-achieve')
                        $('.people-400').addClass('people-number-achieve')
                        $('.price-1499').removeClass('correspond-price')
                        $('.price-1999').addClass('correspond-price')
                    }, 1340)
                    let clearTimeoutThird = setTimeout(function () {
                        clearTimeout(clearTimeoutThird)
                        $('.people-400').removeClass('people-number-achieve')
                        $('.people-600').addClass('people-number-achieve')
                        $('.price-1999').removeClass('correspond-price')
                        $('.price-2499').addClass('correspond-price')
                    }, 1997)
                    let clearTimeoutFourth = setTimeout(function () {
                        clearTimeout(clearTimeoutFourth)
                        $('.people-600').removeClass('people-number-achieve')
                        $('.people-800').addClass('people-number-achieve')
                        $('.price-2499').removeClass('correspond-price')
                        $('.price-2999').addClass('correspond-price')
                    }, 2654)
                    let clearTimeoutFifth = setTimeout(function () {
                        clearTimeout(clearTimeoutFifth)
                        $('.people-800').removeClass('people-number-achieve')
                        $('.people-1000').addClass('people-number-achieve')
                        $('.price-2999').removeClass('correspond-price')
                    }, 3324)
                }, 4000)
            }
        },
        'onLeave': function (index, nextIndex, direction) {
            if (index === 2) {
                $('.greet-message-1').removeClass('show-items-3')
                $('.greet-message-2').removeClass('show-items-1')
                $('.greet-message-3').removeClass('show-items-2')
                if (nextIndex === 3) {
                    let offset = serverDown()
                    $('.server-window').addClass('server-down')
                    $('.server-window').css({
                        'top': `${offset.top}px`,
                        'left': `${offset.left}px`
                    })
                }
            } else if (index === 3) {
                $('.server-telephone').removeClass('show-items-1')
                $('.server-wechat').removeClass('show-items-2')
                $('.server-wedding').removeClass('show-items-3')
                $('.customer-telephone').removeClass('erase-item-1')
                $('.customer-wechat').removeClass('erase-item-2')
                $('.customer-wedding').removeClass('erase-item-3')
                if (nextIndex === 2) {
                    let offset = serverUp()
                    $('.server-window').removeClass('server-down')
                    $('.server-window').css({
                        'top': `${offset.top}px`,
                        'left': `${offset.left}px`
                    })
                    $('.child-bar').removeClass('process-lengthen')
                } else if (nextIndex === 4) {
                    $('.customer-part').addClass('customer-down')
                    let offset = customerDown()
                    $('.customer-part').css({
                        'top': `${offset.top}px`,
                        'left': `${offset.left}px`
                    })
                }
            } else if (index === 4) {
                if (nextIndex === 3) {
                    $('.calendar').removeClass('calendar-larger')
                    setTimeout(function () {
                        $('.customer-part').show()
                        $('.customer-part').removeClass('customer-down')
                        let offset = customerUp()
                        $('.customer-part').css({
                            'top': `${offset.top}px`,
                            'left': `${offset.left}px`
                        })
                    }, 100)
                }
            } else if (index === 5) {
                $('.task-1').removeClass('show-items-1')
                $('.task-2').removeClass('show-items-2')
                $('.task-3').removeClass('show-items-3')
                $('.task-4').removeClass('show-items-4')
            } else if (index === 7) {
                if (nextIndex !== 7) {
                    $('.process-number').removeClass('process-running')
                    clearInterval(clearIntervalSix)
                    if ($('.people-number-achieve').length > 0) {
                        $('.people-number-achieve').removeClass('people-number-achieve')
                    }
                    if ($('.correspond-price').length > 0) {
                        $('.correspond-price').removeClass('correspond-price')
                    }
                }
            }
        }
    });
});

/*
 * set position
 */
(function (win, doc) {
    function calPosition() {
        if ($('.server-down').length > 0) {
            let position = serverDown()
            $('.server-window').css({
                'top': `${position.top}px`,
                'left': `${position.left}px`
            })
        } else {
            let position = serverUp()
            $('.server-window').css({
                'top': `${position.top}px`,
                'left': `${position.left}px`
            })
        }
        if ($('.customer-down').length > 0) {
            let position = customerDown()
            $('.customer-part').css({
                'top': `${position.top}px`,
                'left': `${position.left}px`
            })
        } else {
            let position = customerUp()
            $('.customer-part').css({
                'top': `${position.top}px`,
                'left': `${position.left}px`
            })
        }
    }

    function throttle(method, context) {
        clearTimeout(method.tid)
        method.tid = setTimeout(function () {
            method.call(context)
        }, 20)
    }

    function change() {
        throttle(calPosition, window)
        document.documentElement.style.fontSize = document.documentElement.clientHeight / 34 + 'px';
    }

    win.addEventListener('resize', change, false);
    window.serverUp = function () {
        let offset = $('#section-2-right').position()
        return {
            top: offset.top,
            left: offset.left + 207
        }
    }
    window.serverDown = function () {
        let offset = $('#section-3-right').position()
        return {
            top: offset.top + document.documentElement.clientHeight + 43,
            left: offset.left + 51
        }
    }
    window.customerUp = function () {
        let offset = $('#section-3-right').position()
        return {
            top: offset.top + document.documentElement.clientHeight,
            left: offset.left + 500
        }
    }
    window.customerDown = function () {
        let offset = $('#section-4-right').position()
        return {
            top: offset.top + document.documentElement.clientHeight * 2,
            left: offset.left + 510
        }
    }
    setTimeout(function () {
        let positionServer = serverUp()
        $('.server-window').css({
            'top': `${positionServer.top}px`,
            'left': `${positionServer.left}px`
        })
        let positionCustomer = customerUp()
        $('.customer-part').css({
            'top': `${positionCustomer.top}px`,
            'left': `${positionCustomer.left}px`
        })
    }, 300)
})(window, document)