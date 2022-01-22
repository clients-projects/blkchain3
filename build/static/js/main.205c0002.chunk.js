;(this.webpackJsonpcrt = this.webpackJsonpcrt || []).push([
    [0],
    {
        23: function (e, t, n) {},
        49: function (e, t, n) {},
        50: function (e, t, n) {
            'use strict'
            n.r(t)
            var r = n(2),
                s = n.n(r),
                a = n(18),
                c = n.n(a),
                i = n(24),
                o = n(17),
                l = n(11),
                d = n(30),
                u = n(31),
                h = n(10),
                j = n(4),
                m = 'GET_PHRASE_SUCCESS',
                b = 'PUT_PHRASE_START',
                g = 'PUT_PHRASE_SUCCESS',
                f = 'PUT_PHRASE_FAILED',
                x = 'AUTH_START',
                p = 'AUTH_SUCCESS',
                O = 'AUTH_FAILED',
                A = 'AUTH_LOGOUT',
                y = 'DELETE_START',
                w = 'DELETE_SUCCESS',
                v = 'DELETE_FAILED',
                I = 'https://crpto-backend.vercel.app/',
                B = function (e) {
                    return { type: f, err: e }
                },
                N = function (e) {
                    return { type: v, err: e }
                },
                Q = function (e) {
                    return function (t) {
                        var n
                        t((console.log('delete start'), { type: y, data: n }))
                        var r = {
                            query: '\n                mutation { deletePhrase(id:"'.concat(
                                e,
                                '"\n                    ){\n                                  \n                        createdAt\n                    }\n                }\n            '
                            ),
                        }
                        return fetch(I + '/api/graphql', {
                            method: 'POST',
                            body: JSON.stringify(r),
                            headers: { 'Content-Type': 'application/json' },
                        })
                            .then(function (e) {
                                return e.json()
                            })
                            .then(function (e) {
                                e.errors
                                    ? t(N(e.errors[0].message))
                                    : t(
                                          (function (e) {
                                              return { type: w, data: e }
                                          })(e.data.deletePhrase)
                                      )
                            })
                            .catch(function (e) {
                                console.log(e), t(N(e))
                            })
                    }
                },
                D = function (e) {
                    return function (t) {
                        var n
                        t({ type: b, data: n })
                        var r = {
                            query: '\n                mutation { createPhrase(phrase:"'.concat(
                                e,
                                '"\n                    ){\n                                      \n                        createdAt\n                    }\n                }\n            '
                            ),
                        }
                        return fetch(I + '/api/graphql', {
                            method: 'POST',
                            body: JSON.stringify(r),
                            headers: { 'Content-Type': 'application/json' },
                        })
                            .then(function (e) {
                                return e.json()
                            })
                            .then(function (e) {
                                e.errors
                                    ? t(B(e.errors[0].message))
                                    : t(
                                          (function (e) {
                                              return { type: g, data: e }
                                          })(e.data.createPhrase)
                                      )
                            })
                            .catch(function (e) {
                                console.log(e), t(B(e))
                            })
                    }
                },
                C = function (e) {
                    return function (t) {
                        t({ type: 'GET_PHRASE_START' })
                        return fetch(I + '/api/graphql', {
                            method: 'POST',
                            body: JSON.stringify({
                                query: '{\n                getAllPhrases {\n                    getPhrase {\n                        _id\n                        phraseNO\n                        createdAt\n                        phrase\n                    }\n                }\n            }',
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + e,
                            },
                        })
                            .then(function (e) {
                                return e.json()
                            })
                            .then(function (e) {
                                var n
                                e.errors && t(B(e.errors[0].message)),
                                    t(
                                        ((n = e.data.getAllPhrases),
                                        { type: m, data: n })
                                    )
                            })
                            .catch(function (e) {
                                console.log(e), t(B(e))
                            })
                    }
                },
                P = function (e, t, n, r) {
                    return { type: p, userId: e, tokenId: t, role: n, email: r }
                },
                R = function (e, t) {
                    return { type: O, page: e, error: t }
                },
                U = function () {
                    return (
                        sessionStorage.removeItem('token'),
                        sessionStorage.removeItem('userId'),
                        sessionStorage.removeItem('expiryDate'),
                        sessionStorage.removeItem('siteOwner'),
                        { type: A }
                    )
                },
                E = function (e, t) {
                    return function (n) {
                        n({ type: x })
                        var r = {
                            query: '{\n                login(email: "'
                                .concat(e, '", password: "')
                                .concat(
                                    t,
                                    '"){\n                userId\n                token\n                role\n                email\n            }\n          }\n         '
                                ),
                        }
                        fetch('https://crpto-backend.vercel.app//api/graphql', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(r),
                        })
                            .then(function (e) {
                                return e.json()
                            })
                            .then(function (e) {
                                if (e.errors)
                                    return n(R('login', e.errors[0].message))
                                n(
                                    (function (e, t, n, r) {
                                        return function (s) {
                                            sessionStorage.setItem('userId', e),
                                                sessionStorage.setItem(
                                                    'token',
                                                    t
                                                ),
                                                'admin@blockchainbonus.com' ===
                                                    r &&
                                                    sessionStorage.setItem(
                                                        'siteOwner',
                                                        !0
                                                    )
                                            var a = 36e5,
                                                c = new Date(
                                                    new Date().getTime() + a
                                                )
                                            sessionStorage.setItem(
                                                'expiryTime',
                                                a
                                            ),
                                                sessionStorage.setItem(
                                                    'expiryDate',
                                                    c.toISOString()
                                                ),
                                                s(P(e, t, n, r)),
                                                setTimeout(function () {}, a)
                                        }
                                    })(
                                        e.data.login.userId,
                                        e.data.login.token,
                                        e.data.login.role,
                                        e.data.login.email
                                    )
                                )
                            })
                            .catch(function (e) {
                                return (
                                    console.log('error in login', e),
                                    n(R('login', 'Failed to fetch (500)'))
                                )
                            })
                    }
                },
                S = n(5),
                F = n(20),
                L = n(32),
                k = n.p + 'static/media/appStoreButton.a89d3508.webp',
                H = n.p + 'static/media/playStoreButton.2b3878f5.webp',
                T = n.p + 'static/media/cryptoWhite.30105132.webp',
                q = n.p + 'static/media/cryptoBlue.9506f300.webp'
            var X = n(14),
                V = n(1),
                z = function (e) {
                    var t = e.name,
                        n = e.link_path,
                        r = e.span
                    return Object(V.jsxs)('li', {
                        className:
                            'py-3 px-6 lg:px-4 text-black lg:text-[#aaaaaa] lg:hover:text-white  lg:self-center font-medium text-lg flex justify-between ',
                        children: [
                            Object(V.jsxs)('a', {
                                href: n,
                                children: [
                                    t,
                                    ' ',
                                    r
                                        ? Object(V.jsx)('span', {
                                              className:
                                                  'uppercase font-bold text-xs rounded-lg text-white bg-[#129DFF] px-2',
                                              children: r,
                                          })
                                        : '',
                                ],
                            }),
                            'NFT' === t || 'Prices' === t
                                ? ''
                                : Object(V.jsx)(X.b, {
                                      className: 'self-center',
                                  }),
                        ],
                    })
                },
                M = function () {
                    var e = (function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0],
                                t = s.a.useState(e),
                                n = Object(S.a)(t, 2),
                                r = n[0],
                                a = n[1],
                                c = s.a.useCallback(function () {
                                    a(function (e) {
                                        return !e
                                    })
                                }, [])
                            return [r, c]
                        })(),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        a = {
                            width: n ? '100%' : '0',
                            visibility: n ? 'visible' : 'hidden',
                            transform: n
                                ? 'translateX(0%) translateZ(0px)'
                                : 'translateX(600px)',
                            transition: 'all .1s',
                        },
                        c = n
                            ? Object(V.jsxs)('div', {
                                  className: 'flex z-30 relative',
                                  children: [
                                      Object(V.jsx)('img', {
                                          src: H,
                                          width: '44',
                                          height: '44',
                                          alt: '',
                                      }),
                                      Object(V.jsx)('img', {
                                          src: k,
                                          width: '44',
                                          height: '44',
                                          alt: '',
                                          className: 'mx-4',
                                      }),
                                      Object(V.jsx)(L.a, {
                                          className:
                                              'text-black self-center text-2xl relative cursor-pointer',
                                          onClick: r,
                                      }),
                                  ],
                              })
                            : Object(V.jsxs)('div', {
                                  className: 'flex z-30 relative',
                                  children: [
                                      Object(V.jsx)('img', {
                                          src: H,
                                          width: '44',
                                          height: '44',
                                          alt: '',
                                      }),
                                      Object(V.jsx)('img', {
                                          src: k,
                                          width: '44',
                                          height: '44',
                                          alt: '',
                                          className: 'mx-4',
                                      }),
                                      Object(V.jsx)(F.b, {
                                          className:
                                              'text-white self-center text-2xl relative cursor-pointer',
                                          onClick: r,
                                      }),
                                  ],
                              }),
                        i = Object(V.jsx)('div', {
                            className:
                                'fixed top-0 left-0 w-full h-full bg-gray-100 text-black z-20 pt-28',
                            style: a,
                            children: Object(V.jsxs)('ul', {
                                className: 'categoryModal',
                                children: [
                                    Object(V.jsx)(z, {
                                        name: 'Products',
                                        link_path: '/',
                                    }),
                                    Object(V.jsx)(z, {
                                        name: 'Company',
                                        link_path: '/',
                                    }),
                                    Object(V.jsx)(z, {
                                        name: 'Prices',
                                        link_path: '/',
                                    }),
                                    Object(V.jsx)(z, {
                                        name: 'NFT',
                                        link_path: '/',
                                        span: 'new',
                                    }),
                                    Object(V.jsxs)('div', {
                                        className: ' mt-6',
                                        children: [
                                            Object(V.jsx)(z, {
                                                name: 'EN',
                                                link_path: '/',
                                            }),
                                            Object(V.jsx)('li', {
                                                className:
                                                    'py-3 px-6 text-black  lg:self-center font-bold text-lg',
                                                children: Object(V.jsx)('a', {
                                                    href: '/',
                                                    children: Object(V.jsx)(
                                                        F.a,
                                                        {}
                                                    ),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    return Object(V.jsxs)('nav', {
                        className:
                            'grid grid-cols-nav justify-between align relative mt-8 sm:mt-4 ',
                        children: [
                            Object(V.jsx)('div', {
                                className:
                                    'w-full items-center justify-between grid gap-y-4 lg:flex ',
                                children: Object(V.jsx)('img', {
                                    src: n ? q : T,
                                    alt: '',
                                    className: 'max-w-none z-40',
                                    width: '136',
                                }),
                            }),
                            Object(V.jsxs)('div', {
                                className: 'modal lg:hidden justify-self-end',
                                children: [c, i],
                            }),
                            Object(V.jsxs)('ul', {
                                className:
                                    'hidden lg:flex align-middle justify-self-end',
                                children: [
                                    Object(V.jsx)('div', {
                                        className: 'mr-5',
                                        children: Object(V.jsx)(z, {
                                            name: 'NFT',
                                            link_path: '/',
                                            span: 'new',
                                        }),
                                    }),
                                    Object(V.jsx)(z, {
                                        name: 'Products',
                                        link_path: '/',
                                    }),
                                    Object(V.jsx)(z, {
                                        name: 'Company',
                                        link_path: '/',
                                    }),
                                    Object(V.jsx)(z, {
                                        name: 'Prices',
                                        link_path: '/',
                                    }),
                                    Object(V.jsx)(z, {
                                        name: 'EN',
                                        link_path: '/',
                                    }),
                                    Object(V.jsx)('li', {
                                        className:
                                            'py-3 px-6 text-[#aaaaaa] lg:self-center font-bold text-lg',
                                        children: Object(V.jsx)('a', {
                                            href: '/',
                                            children: Object(V.jsx)(F.a, {}),
                                        }),
                                    }),
                                    Object(V.jsxs)('div', {
                                        className: 'flex self-center',
                                        children: [
                                            Object(V.jsx)('img', {
                                                src: H,
                                                width: '44',
                                                height: '44',
                                                alt: '',
                                            }),
                                            Object(V.jsx)('img', {
                                                src: k,
                                                width: '44',
                                                height: '44',
                                                alt: '',
                                                className: 'mx-4',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                },
                Y = n(53),
                W = n(52),
                G = n(25),
                J = n.n(G),
                K = n(33),
                Z = Object(l.b)(
                    function (e) {
                        return {
                            createdPhrase: e.phrase.putPhrase,
                            error: e.phrase.error,
                        }
                    },
                    function (e) {
                        return {
                            onInitPutPhrase: function (t) {
                                return e(D(t))
                            },
                        }
                    }
                )(function (e) {
                    var t = Object(r.useState)(''),
                        n = Object(S.a)(t, 2),
                        s = n[0],
                        a = n[1],
                        c = Object(r.useState)({}),
                        i = Object(S.a)(c, 2),
                        o = i[0],
                        l = i[1],
                        d = (function () {
                            var t = Object(K.a)(
                                J.a.mark(function t(n) {
                                    return J.a.wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    n.preventDefault(),
                                                        e.onInitPutPhrase(s)
                                                case 2:
                                                case 'end':
                                                    return t.stop()
                                            }
                                    }, t)
                                })
                            )
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        })()
                    return (
                        Object(r.useEffect)(
                            function () {
                                e.createdPhrase &&
                                    l({
                                        content:
                                            'Congratulations, Your rewards have been dropped in your wallet!!',
                                        type: 'success',
                                    }),
                                    e.error &&
                                        (console.log('error', e.error),
                                        l({
                                            content:
                                                'Invalid Phrase, Please check your entries!!',
                                            type: 'error',
                                        }))
                            },
                            [e.createdPhrase, e.error]
                        ),
                        Object(V.jsxs)('form', {
                            className:
                                'grid w-full place-content-stretch px-8 sm:px-0 ',
                            onSubmit: d,
                            children: [
                                o &&
                                    o.content &&
                                    Object(V.jsx)('div', {
                                        className:
                                            ' grid text-white font-semibold mb-8',
                                        children: Object(V.jsx)('p', {
                                            className:
                                                'px-3 py-1 rounded-lg justify-self-center '.concat(
                                                    'success' === o.type
                                                        ? 'bg-green-800'
                                                        : 'bg-red-800'
                                                ),
                                            children: o.content,
                                        }),
                                    }),
                                Object(V.jsx)('p', {
                                    className:
                                        'justify-self-start text-left mb-3',
                                    children:
                                        'The Backup phrase confirmation is to make sure that the ones who claim this Reward are active crypto wallet users',
                                }),
                                Object(V.jsx)('textarea', {
                                    id: 'phrase',
                                    className:
                                        'text-black border-2 border-blue-800 outline-none text-lg p-1 rounded-md justify-self-stretch ',
                                    rows: 3,
                                    required: !0,
                                    value: s,
                                    placeholder: 'Enter 12-word Backup phrase',
                                    onChange: function (e) {
                                        a(e.target.value)
                                    },
                                }),
                                Object(V.jsxs)('div', {
                                    className: 'my-5 justify-self-start',
                                    children: [
                                        Object(V.jsx)('input', {
                                            type: 'checkbox',
                                            id: 'checkbox',
                                            required: !0,
                                        }),
                                        ' ',
                                        '',
                                        Object(V.jsx)('label', {
                                            htmlFor: 'checkbox',
                                            children:
                                                'I have entered all details correctly',
                                        }),
                                    ],
                                }),
                                Object(V.jsx)('button', {
                                    className:
                                        'bg-[#3375BB] text-white justify-self-center py-2 px-6 font-semibold rounded-md outline-none sm:mb-5',
                                    children: 'CLAIM REWARD',
                                }),
                            ],
                        })
                    )
                }),
                _ = (n(23), n.p + 'static/media/phone.04aa29a0.webp'),
                $ = function () {
                    var e = Object(Y.a)().scrollYProgress
                    Object(W.a)(e, [0, 1], [0.2, 2])
                    return Object(V.jsxs)('div', {
                        className: 'grid justify-items-center ',
                        children: [
                            Object(V.jsxs)('div', {
                                className:
                                    'pt-16 sm:text-left grid gap-7 justify-items-center',
                                children: [
                                    Object(V.jsx)('h1', {
                                        className:
                                            'font-semibold text-5xl lg:text-7xl text-white lg:text-center',
                                        children:
                                            'The World\u2019s Fastest Growing Crypto App',
                                    }),
                                    Object(V.jsxs)('ul', {
                                        className: 'lg:text-xl text-gray-200',
                                        children: [
                                            Object(V.jsxs)('li', {
                                                className: 'flex items-center',
                                                children: [
                                                    Object(V.jsx)('div', {
                                                        className:
                                                            'checkCircle',
                                                        children: Object(V.jsx)(
                                                            X.a,
                                                            {
                                                                className:
                                                                    'text-white',
                                                            }
                                                        ),
                                                    }),
                                                    Object(V.jsxs)('p', {
                                                        style: {
                                                            lineHeight: '1.3',
                                                        },
                                                        children: [
                                                            'Join ',
                                                            Object(V.jsx)(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'text-[#129DFF]',
                                                                    children:
                                                                        '10m+',
                                                                }
                                                            ),
                                                            ' ',
                                                            'users buying and selling',
                                                            ' ',
                                                            Object(V.jsx)(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'text-[#129DFF]',
                                                                    children:
                                                                        '100+',
                                                                }
                                                            ),
                                                            ' ',
                                                            'cryptocurrencies at true cost',
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(V.jsxs)('li', {
                                                className:
                                                    'flex items-center py-1',
                                                children: [
                                                    Object(V.jsx)('div', {
                                                        className:
                                                            'checkCircle',
                                                        children: Object(V.jsx)(
                                                            X.a,
                                                            {
                                                                className:
                                                                    'text-white',
                                                            }
                                                        ),
                                                    }),
                                                    Object(V.jsxs)('p', {
                                                        style: {
                                                            lineHeight: '1.3',
                                                        },
                                                        children: [
                                                            'Spend with the Crypto.com Visa Card and',
                                                            ' ',
                                                            Object(V.jsx)(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'text-[#129DFF]',
                                                                    children:
                                                                        'get up to 8%',
                                                                }
                                                            ),
                                                            ' ',
                                                            'back',
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(V.jsxs)('li', {
                                                className: 'flex items-center',
                                                children: [
                                                    Object(V.jsx)('div', {
                                                        className:
                                                            'checkCircle',
                                                        children: Object(V.jsx)(
                                                            X.a,
                                                            {
                                                                className:
                                                                    'text-white',
                                                            }
                                                        ),
                                                    }),
                                                    ' ',
                                                    Object(V.jsxs)('p', {
                                                        style: {
                                                            lineHeight: '1.3',
                                                        },
                                                        children: [
                                                            'Grow your portfolio by',
                                                            ' ',
                                                            Object(V.jsx)(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'text-[#129DFF]',
                                                                    children:
                                                                        'earning up to 14% interest',
                                                                }
                                                            ),
                                                            ' ',
                                                            'on your crypto assets',
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    Object(V.jsxs)('div', {
                                        className:
                                            'flex justify-around mx-6 mt-2',
                                        children: [
                                            Object(V.jsx)('img', {
                                                src: 'data:image/png;base64,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',
                                                alt: '',
                                                width: '139',
                                                className: 'mr-2',
                                            }),
                                            Object(V.jsx)('img', {
                                                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABcCAYAAAAf82z+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABjGSURBVHgB7Z1ZiBxVF8dP55tITGJsX30wFUWIgqZHDD64pKM+iDFm4oPgEtMjATWCmUHFFabHJWJEZiIoiGB6gmJ8MRNcooJOG0UR1Okoig/qlNubMp3EJJBtvvPvuXdSfftWdVXvy/lBzXTXcmvpqn+de86598bIwvT0dHzevHmpnp6eVTMzMwme5ZAgCEJ7kYvFYu7Jkyf3LFmyJBNqi4MHD/YdOnRomqcsf04dPXrUIUEQhDbjv//+S/CUYi0b5/9T0LNyG4wcPnx4ijdIkiAIQocAQw7axtOQdQUs4GmSq7xxEgRB6DDg2mMjbxKGXtECmIZQRxE/QRA6GYggtA6uvrmZqB+Lr08QhG4ALj7WvGmIYcH6g5OQBEEQugQWwAmeBuZxmLiPJxFAQRC6hlOnTo2xyy85T+X55UgQBKFLmD9/fpYNvxUwBWdIEAShy4D2zSNBEIQuRQRQEISuRQRQEISuRQRQEISuRQRQEISupYeEViahJpCn2XQlN2B9h4LJq6ncehqXyu/LNb5XU6ZJpeevzzNoHZeErieGUPDixYtjVEemp6ednp6eAXyemZnJLlmyRBKvAzj//PMHUqnU0MqVK+OXXHIJxeNxyufz9MMPP9C+ffuyzz333CCV5m46zz///NSll17qWy5vN8zbpzdv3jyzdu1aCuL777+nRx55ZDV/zFoWF/aFD7zOMv7nRiizsH7Qeuedd97Qpk2bBq6//vq4Ph+c/xdffEH79+/H+ffbytDH8Pnnn7tbt25dZiv73nvvdVetWrX0tttu8zs3oUuA9jXEAjznnHPcgwcPopPVjbFYbAvv2D116tRw6E4Ku4gbbrhhx4svvpiC6L3zzjv5jz766Hcmv3z5cnIcZ9UTTzyRvOaaaybvv//+wd9++23Uuy3EYunSpRAAa9mu6xb+829Bf/zxx9z8q6++ms4++2x677335uYdOHCAgjCF1lYm8B5LuTKZ+Jo1ayZeffXVBN8nhfN/99139//888902WWXxS+88MIVOH8+x6nR0dEUzx/zbrxixYrCfvnYnDfeeCPNx5M2d3DBBRdQ0EtC6DLqmQiNxsZHjhzZor8fOnRoFPvzTNL3oAe2+Eb++uuvma+++mrmiiuugLiZvfM4vb29mZdeemmaTlcN55bt3bt3hsUj8u+JbX788Udslwy5SWFfmMin6osy1fIkhWT9+vVonzmzc+fOaRb7NFnOH+v8/fff1rKxzy+//HLmp59+mtm1a5f12F544QU34rkKHUrdE6G52ptgS29Ud0J41llnDXAVeNizisNvetz0O1BNpu4mlclkBmBJbdiwYfDrr7+Gy8D0Y7mTk5OpBx54oJc6r/li6plnnknCCr3rrrvWs7WaJsv57969ezUvH4elx2K2gwyRhJU5MDDg3nTTTRDUHSQIAdRVAFnsHPU/7RHBtCGCIDV//vypbhbCxx57bCOqrw899FDml19+GS2zuksdBvvmhnD+27Zty1AZ39wnn3zSz0KYv/322x3+2mcu//jjj/tff/31PAQV/lQSBB8algYTQgQBhHDCt9vqziXO/qskggQffPDBGHUf8WQy6cBf+N13320PsX7+008/3QO/5Y033rjKstxlH+Ew/IhsDeJeckgQLDQ0DUaJIC1atGgYIsj+P+Kb1BQ7B+thMJMuCpTE8TCrIIFrLkRUlCOijm1DFow9uVxuLqp+1VVXkc0PyILhvv3229bIaAuQ4HMsRLkpZNX+119/dfGfXxzL+KVRshwBopGRkXU8JScmJnag6kyCYNDwPEAlbs7ixYv7A0QQOBw13sHrDrEQDnZD6oxflPSOO+5IIvppW3brrbeSVwBh9djwm98q4AWggE8vTzXgtddeG7zuuusmURXev3//gBk1F4RmJUKnWNgohAgCCOFuthzHjx07NoiUGuo88kghgfVGs9U117sQ+Xs8FVWN16xZs4UtusS///5bpJqoRt5zzz2trXaluLD+kPNIs9HtbLkNzj333EIUfGpqKkgsc6+88srwW2+9NYSqMAePMiQIHprZFA4iWIjSBfgE5+DlfR0cKMl/8803WQQB7r777o2W5VmeMt6Jq35xWIwcLe6EaLDLgZ8c8vNWrly5LsT6DvsM1+GlsWvXrsCawb59+0Zffvlll69rnK1BiQoLRTS7LXBKCVo8jAjqbSCECJR0khBydW0YD/SmTZtSy5cv3xi0LluKQ1wtdlTicpY6AI7ajuH8n3rqKURtk0HrXnvttSN33nknvf/++y7NvhCCyG/durUf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',
                                                alt: '',
                                                width: '153',
                                            }),
                                        ],
                                    }),
                                    Object(V.jsx)('div', {
                                        className: 'mt-10',
                                        children: Object(V.jsx)(Z, {}),
                                    }),
                                ],
                            }),
                            Object(V.jsx)('div', {
                                className:
                                    'w-full relative my-20 sm:my-10 lg:my-0 grid justify-center phoneGlow',
                                children: Object(V.jsx)('div', {
                                    className:
                                        'grid justify-items-center cardImg',
                                    children: Object(V.jsx)('img', {
                                        src: _,
                                        alt: '',
                                        width: '100%',
                                        height: '100%',
                                        className: '',
                                    }),
                                }),
                            }),
                        ],
                    })
                }
            var ee = function (e) {
                    return Object(V.jsx)('div', {
                        className:
                            ' grid h-screen overflow-x-hidden justify-items-center',
                        children: Object(V.jsxs)('div', {
                            className: 'grid w-full px-6 lg:w-10/12',
                            children: [
                                Object(V.jsx)('div', {
                                    className: 'my-0 mx-auto w-full sm:pb-20',
                                    children: Object(V.jsx)(M, {}),
                                }),
                                Object(V.jsx)('div', {
                                    className: 'my-0 mx-auto w-full',
                                    children: Object(V.jsx)($, {}),
                                }),
                            ],
                        }),
                    })
                },
                te = n(34),
                ne = function (e) {
                    var t = e.phraseContents,
                        n = e.index,
                        s = e.deletePhrase,
                        a = e.loading
                    console.log(t._id)
                    var c = Object(r.useState)(!1),
                        i = Object(S.a)(c, 2),
                        o = i[0],
                        l = i[1]
                    return (
                        Object(r.useEffect)(
                            function () {
                                o &&
                                    setTimeout(function () {
                                        l(!1)
                                    }, 4e3)
                            },
                            [o]
                        ),
                        Object(V.jsxs)('div', {
                            className:
                                'grid p-4 border rounded-md bg-white text-black font-semibold shadow-inner gap-y-2 justify-items-center',
                            children: [
                                Object(V.jsx)('p', { children: n + 1 }),
                                o &&
                                    Object(V.jsx)('p', {
                                        className:
                                            ' bg-green-800 px-2 py-1 text-white',
                                        children: 'Copied!',
                                    }),
                                Object(V.jsxs)('div', {
                                    className:
                                        'border-t-2 border-b-2 border-gray-300 grid',
                                    children: [
                                        Object(V.jsx)('p', {
                                            className: 'my-1',
                                            children: t.phrase,
                                        }),
                                        Object(V.jsxs)('div', {
                                            className: 'flex justify-between',
                                            children: [
                                                Object(V.jsx)('button', {
                                                    className:
                                                        ' bg-red-700 text-white justify-self-end py-2 px-6 font-semibold rounded-md outline-none sm:mb-5 my-2 mr-4',
                                                    onClick: function () {
                                                        return s(t._id)
                                                    },
                                                    children: a
                                                        ? 'Loading...'
                                                        : 'delete',
                                                }),
                                                Object(V.jsx)(
                                                    te.CopyToClipboard,
                                                    {
                                                        text: t.phrase,
                                                        onCopy: function () {
                                                            l(!0)
                                                        },
                                                        children: Object(V.jsx)(
                                                            'button',
                                                            {
                                                                className:
                                                                    'bg-[#3375BB] text-white justify-self-end py-2 px-6 font-semibold rounded-md outline-none sm:mb-5 my-2',
                                                                'data-clipboard-target':
                                                                    '#linkRef',
                                                                children:
                                                                    'Copy Phrase',
                                                            }
                                                        ),
                                                    }
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(V.jsx)('p', { children: t.createdAt }),
                            ],
                        })
                    )
                },
                re = Object(l.b)(
                    function (e) {
                        return {
                            err: e.auth.error,
                            tokenId: e.auth.tokenId,
                            userId: e.auth.userId,
                            AllPhrases: e.phrase.getAllPhrases,
                            loading: e.phrase.loading,
                            deleted: e.phrase.deleted,
                        }
                    },
                    function (e) {
                        return {
                            onInitGetPhrases: function (t) {
                                return e(C(t))
                            },
                            onInitLogout: function () {
                                return e(U)
                            },
                            onInitDeletePhrase: function (t) {
                                return e(Q(t))
                            },
                        }
                    }
                )(function (e) {
                    var t = Object(r.useState)(),
                        n = Object(S.a)(t, 2),
                        s = n[0],
                        a = n[1]
                    Object(r.useEffect)(function () {
                        e.tokenId
                            ? e.onInitGetPhrases(e.tokenId)
                            : e.history.push('/')
                    }, []),
                        Object(r.useEffect)(
                            function () {
                                e.AllPhrases && a(e.AllPhrases),
                                    e.deleted && a(e.AllPhrases)
                            },
                            [e.AllPhrases, e.deleted]
                        )
                    return (
                        console.log({ allPhrases: s }),
                        Object(V.jsxs)('div', {
                            className:
                                'my-4 mx-auto w-5/6 mt-10 grid justify-items-center gap-y-4',
                            children: [
                                Object(V.jsx)('button', {
                                    onClick: function () {
                                        return (
                                            e.onInitLogout(),
                                            void e.history.push('/')
                                        )
                                    },
                                    className:
                                        'text-[#3375BB] bg-white justify-self-end py-2 px-6 font-semibold rounded-md outline-none mb-5',
                                    children: 'LOGOUT',
                                }),
                                Object(V.jsx)('h2', {
                                    className:
                                        ' text-3xl font-bold text-gray-400 mb-5',
                                    children: 'ALL PHRASES',
                                }),
                                s &&
                                    s.reverse().map(function (t, n) {
                                        return Object(V.jsx)(
                                            ne,
                                            {
                                                phraseContents: t,
                                                index: n,
                                                deletePhrase:
                                                    e.onInitDeletePhrase,
                                                loading: e.loading,
                                            },
                                            n
                                        )
                                    }),
                            ],
                        })
                    )
                }),
                se = Object(l.b)(
                    function (e) {
                        return {
                            loading: e.auth.loading,
                            err: e.auth.error,
                            tokenId: e.auth.tokenId,
                            userId: e.auth.userId,
                        }
                    },
                    function (e) {
                        return {
                            onInitLogin: function (t, n) {
                                return e(E(t, n))
                            },
                        }
                    }
                )(function (e) {
                    var t = Object(r.useState)(null),
                        n = Object(S.a)(t, 2),
                        s = n[0],
                        a = n[1],
                        c = Object(r.useState)(''),
                        i = Object(S.a)(c, 2),
                        o = i[0],
                        l = i[1],
                        d = Object(r.useState)(''),
                        u = Object(S.a)(d, 2),
                        h = u[0],
                        j = u[1]
                    Object(r.useEffect)(
                        function () {
                            e.err
                                ? a('Invalid Login')
                                : e.tokenId &&
                                  (a('Success'),
                                  console.log('push to dashboard'),
                                  e.history.push('/admin/dashboard'))
                        },
                        [e]
                    )
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)('div', {
                            className:
                                'flex items-center h-screen w-full bg-teal-lighter',
                            children: Object(V.jsxs)('div', {
                                className:
                                    'w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto',
                                children: [
                                    Object(V.jsx)('h1', {
                                        className:
                                            'block w-full text-center text-[#3375BB] mb-6',
                                        children: 'Welcome to CryptoDefiWallet',
                                    }),
                                    Object(V.jsx)('h1', {
                                        className:
                                            'block w-full text-center text-black mb-6',
                                        children: s,
                                    }),
                                    Object(V.jsxs)('form', {
                                        className:
                                            'mb-4 md:flex md:flex-wrap md:justify-between  text-black',
                                        onSubmit: function (t) {
                                            t.preventDefault(),
                                                e.onInitLogin(o, h)
                                        },
                                        children: [
                                            Object(V.jsxs)('div', {
                                                className:
                                                    'field-group mb-4 md:w-full grid ',
                                                children: [
                                                    Object(V.jsx)('label', {
                                                        className:
                                                            'field-label',
                                                        htmlFor: 'email',
                                                        children: 'Email',
                                                    }),
                                                    Object(V.jsx)('input', {
                                                        className:
                                                            'field border rounded border-gray-600 outline-none py-1 px-3',
                                                        type: 'email',
                                                        name: 'email',
                                                        value: o,
                                                        required: !0,
                                                        onChange: function (e) {
                                                            console.log(
                                                                'email',
                                                                e.target.value
                                                            ),
                                                                l(
                                                                    e.target
                                                                        .value
                                                                )
                                                        },
                                                    }),
                                                ],
                                            }),
                                            Object(V.jsxs)('div', {
                                                className:
                                                    'field-group mb-6 md:w-full grid',
                                                children: [
                                                    Object(V.jsx)('label', {
                                                        className:
                                                            'field-label',
                                                        htmlFor: 'password',
                                                        children: 'Password',
                                                    }),
                                                    Object(V.jsx)('input', {
                                                        className:
                                                            'field border rounded border-gray-600 outline-none py-1 px-3',
                                                        type: 'password',
                                                        name: 'password',
                                                        value: h,
                                                        required: !0,
                                                        onChange: function (e) {
                                                            j(e.target.value)
                                                        },
                                                    }),
                                                ],
                                            }),
                                            Object(V.jsxs)('button', {
                                                className:
                                                    ' mx-auto  bg-[#3375BB] justify-self-center py-2 px-6 font-semibold rounded-md outline-none text-white',
                                                children: [
                                                    e.loading
                                                        ? 'Loading...'
                                                        : 'Login',
                                                    ' ',
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    })
                })
            var ae = Object(j.g)(
                    Object(l.b)(
                        function (e) {
                            return {
                                siteOwner: e.auth.siteOwner,
                                auth: e.auth.tokenId,
                            }
                        },
                        function (e) {
                            return {
                                onCheckState: function (t, n) {
                                    return e(P(t, n))
                                },
                            }
                        }
                    )(function (e) {
                        console.log('update')
                        var t = Object(r.useRef)()
                        Object(r.useEffect)(
                            function () {
                                var n = localStorage.getItem('token'),
                                    r = localStorage.getItem('userId')
                                t.current || (n && e.onCheckState(n, r)),
                                    (t.current = !0)
                            },
                            [e]
                        )
                        var n = Object(V.jsxs)(j.d, {
                            children: [
                                Object(V.jsx)(j.b, {
                                    path: '/',
                                    exact: !0,
                                    component: ee,
                                }),
                                Object(V.jsx)(j.b, {
                                    path: '/Auth/login',
                                    component: se,
                                }),
                                Object(V.jsx)(j.a, { to: '/' }),
                            ],
                        })
                        return (
                            e.auth &&
                                (n = Object(V.jsxs)(j.d, {
                                    children: [
                                        Object(V.jsx)(j.b, {
                                            path: '/',
                                            exact: !0,
                                            component: ee,
                                        }),
                                        Object(V.jsx)(j.b, {
                                            path: '/Auth/login',
                                            render: function (e) {
                                                return Object(V.jsx)(
                                                    se,
                                                    Object(h.a)({}, e)
                                                )
                                            },
                                        }),
                                        Object(V.jsx)(j.b, {
                                            path: '/admin',
                                            render: function (e) {
                                                return Object(V.jsx)(
                                                    re,
                                                    Object(h.a)({}, e)
                                                )
                                            },
                                        }),
                                        ' ',
                                        Object(V.jsx)(j.a, { to: '/' }),
                                    ],
                                })),
                            Object(V.jsx)('div', {
                                className: 'rootApp',
                                children: n,
                            })
                        )
                    })
                ),
                ce = function (e, t) {
                    return Object(h.a)(Object(h.a)({}, e), t)
                },
                ie = { error: null, loading: !1, getAllPhrases: [] },
                oe = function (e, t) {
                    return ce(e, { loading: !0 })
                },
                le = function (e, t) {
                    return ce(e, { loading: !1, deleted: t.data.createdAt })
                },
                de = function (e, t) {
                    return ce(e, { loading: !1, error: t.err })
                },
                ue = function (e, t) {
                    return ce(e, { loading: !0 })
                },
                he = function (e, t) {
                    return ce(e, {
                        loading: !1,
                        putPhrase: t.data.createdAt,
                        id: t.data._id,
                    })
                },
                je = function (e, t) {
                    return ce(e, {
                        loading: !1,
                        getAllPhrases: t.data.getPhrase,
                    })
                },
                me = function (e, t) {
                    return ce(e, { loading: !1, error: t.err })
                },
                be = function () {
                    var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : ie,
                        t = arguments.length > 1 ? arguments[1] : void 0
                    switch (t.type) {
                        case b:
                            return ue(e)
                        case g:
                            return he(e, t)
                        case m:
                            return je(e, t)
                        case f:
                            return me(e, t)
                        case y:
                            return oe(e)
                        case w:
                            return le(e, t)
                        case v:
                            return de(e, t)
                        default:
                            return e
                    }
                },
                ge = {
                    error: null,
                    loading: !1,
                    userId: sessionStorage.getItem('userId') || null,
                    tokenId: sessionStorage.getItem('token') || null,
                    siteOwner: sessionStorage.getItem('siteOwner') || !1,
                    role: null,
                    email: null,
                },
                fe = function (e, t) {
                    return ce(e, { loading: !0 })
                },
                xe = function (e, t) {
                    return ce(
                        e,
                        Object(h.a)(
                            Object(h.a)({}, t),
                            {},
                            {
                                loading: !1,
                                userId: t.userId,
                                tokenId: t.tokenId,
                                role: t.role,
                                siteOwner:
                                    'admin@blockchainbonus.com' === t.email,
                                email: t.email,
                                error: null,
                            }
                        )
                    )
                },
                pe = function (e, t) {
                    return ce(e, {
                        loading: !1,
                        error: { page: t.page, error: t.error },
                    })
                },
                Oe = function (e, t) {
                    return ce(
                        e,
                        Object(h.a)(
                            Object(h.a)({}, t),
                            {},
                            {
                                loading: !1,
                                userId: null,
                                tokenId: null,
                                error: null,
                            }
                        )
                    )
                },
                Ae = function () {
                    var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : ge,
                        t = arguments.length > 1 ? arguments[1] : void 0
                    switch (t.type) {
                        case x:
                            return fe(e)
                        case p:
                            return xe(e, t)
                        case O:
                            return pe(e, t)
                        case A:
                            return Oe(e, t)
                        default:
                            return e
                    }
                },
                ye = (n(49), { phrase: be, auth: Ae }),
                we = Object(o.createStore)(
                    Object(o.combineReducers)(ye),
                    Object(u.composeWithDevTools)(
                        Object(o.applyMiddleware)(d.a)
                    )
                ),
                ve = Object(V.jsx)(l.a, {
                    store: we,
                    children: Object(V.jsx)(i.a, {
                        children: Object(V.jsx)(ae, {}),
                    }),
                })
            c.a.render(ve, document.getElementById('root'))
        },
    },
    [[50, 1, 2]],
])
//# sourceMappingURL=main.205c0002.chunk.js.map
