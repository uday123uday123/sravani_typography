(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$cursor$2d$driven$2d$particles$2d$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/cursor-driven-particles-typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$welcome$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/welcome-toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tab$2d$interaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-tab-interaction.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const { showWelcome, welcomeMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tab$2d$interaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabInteraction"])({
        awayMessages: [
            "hey, you. ♡",
            "oh, leaving already?",
            "I was getting to the good part...",
            "fine. I'll pretend I don't miss you.",
            "you know, the particles are lonely.",
            "come baaack ♡",
            "I'll wait right here...",
            "still gone? okay then.",
            "the tab misses you more than it should."
        ],
        returnMessages: [
            "there you are. ♡",
            "welcome back, gorgeous. ♡",
            "I knew you'd come back. ♡",
            "the particles just lit up. ♡",
            "hey again. missed you. ♡"
        ],
        messageCycleMs: 4000,
        welcomeDurationMs: 3000,
        swapFavicon: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-black text-white flex items-center justify-center relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$welcome$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomeToast"], {
                show: showWelcome,
                message: welcomeMessage
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$cursor$2d$driven$2d$particles$2d$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorDrivenParticleTypography"], {
                text: "SRAVANI❤️🦋",
                fontSize: 160,
                particleDensity: 5,
                dispersionStrength: 20
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Home, "8is2r6RTt8mK/SUVycxW9Lc7J3o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tab$2d$interaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabInteraction"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/cursor-driven-particles-typography.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorDrivenParticleTypography",
    ()=>CursorDrivenParticleTypography
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
class Particle {
    x;
    y;
    originX;
    originY;
    vx;
    vy;
    size;
    color;
    dispersion;
    returnSpd;
    constructor(x, y, size, color, dispersion, returnSpd){
        this.x = x + (Math.random() - 0.5) * 10;
        this.y = y + (Math.random() - 0.5) * 10;
        this.originX = x;
        this.originY = y;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.size = size;
        this.color = color;
        this.dispersion = dispersion;
        this.returnSpd = returnSpd;
    }
    update(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 120;
        if (distance < interactionRadius && mouseX !== -1000 && mouseY !== -1000) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (interactionRadius - distance) / interactionRadius;
            const repulsionX = forceDirectionX * force * this.dispersion;
            const repulsionY = forceDirectionY * force * this.dispersion;
            this.vx -= repulsionX;
            this.vy -= repulsionY;
        }
        this.vx += (this.originX - this.x) * this.returnSpd;
        this.vy += (this.originY - this.y) * this.returnSpd;
        this.vx *= 0.85;
        this.vy *= 0.85;
        const distToOrigin = Math.sqrt(Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2));
        if (distToOrigin < 1 && Math.random() > 0.95) {
            this.vx += (Math.random() - 0.5) * 0.2;
            this.vy += (Math.random() - 0.5) * 0.2;
        }
        this.x += this.vx;
        this.y += this.vy;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function CursorDrivenParticleTypography({ className, text, fontSize = 120, fontFamily = "Inter, sans-serif", particleSize = 1.5, particleDensity = 6, dispersionStrength = 15, returnSpeed = 0.08, color }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorDrivenParticleTypography.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d", {
                willReadFrequently: true
            });
            if (!ctx) return;
            let animationFrameId;
            let particles = [];
            let mouseX = -1000;
            let mouseY = -1000;
            let containerWidth = 0;
            let containerHeight = 0;
            const init = {
                "CursorDrivenParticleTypography.useEffect.init": ()=>{
                    const container = containerRef.current;
                    if (!container) return;
                    containerWidth = container.clientWidth;
                    containerHeight = container.clientHeight;
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = containerWidth * dpr;
                    canvas.height = containerHeight * dpr;
                    canvas.style.width = `${containerWidth}px`;
                    canvas.style.height = `${containerHeight}px`;
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.scale(dpr, dpr);
                    const computedStyle = window.getComputedStyle(container);
                    const textColor = color || computedStyle.color || "#000000";
                    ctx.clearRect(0, 0, containerWidth, containerHeight);
                    const effectiveFontSize = Math.min(fontSize, containerWidth * 0.15);
                    ctx.fillStyle = textColor;
                    ctx.font = `bold ${effectiveFontSize}px ${fontFamily}`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(text, containerWidth / 2, containerHeight / 2);
                    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    particles = [];
                    const step = Math.max(1, Math.floor(particleDensity * dpr));
                    for(let y = 0; y < textCoordinates.height; y += step){
                        for(let x = 0; x < textCoordinates.width; x += step){
                            const index = (y * textCoordinates.width + x) * 4;
                            const alpha = textCoordinates.data[index + 3] || 0;
                            if (alpha > 128) {
                                particles.push(new Particle(x / dpr, y / dpr, particleSize, textColor, dispersionStrength, returnSpeed));
                            }
                        }
                    }
                }
            }["CursorDrivenParticleTypography.useEffect.init"];
            const animate = {
                "CursorDrivenParticleTypography.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, containerWidth, containerHeight);
                    particles.forEach({
                        "CursorDrivenParticleTypography.useEffect.animate": (particle)=>{
                            particle.update(mouseX, mouseY);
                            particle.draw(ctx);
                        }
                    }["CursorDrivenParticleTypography.useEffect.animate"]);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["CursorDrivenParticleTypography.useEffect.animate"];
            const handleMouseMove = {
                "CursorDrivenParticleTypography.useEffect.handleMouseMove": (e)=>{
                    const rect = canvas.getBoundingClientRect();
                    mouseX = e.clientX - rect.left;
                    mouseY = e.clientY - rect.top;
                }
            }["CursorDrivenParticleTypography.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "CursorDrivenParticleTypography.useEffect.handleMouseLeave": ()=>{
                    mouseX = -1000;
                    mouseY = -1000;
                }
            }["CursorDrivenParticleTypography.useEffect.handleMouseLeave"];
            const handleResize = {
                "CursorDrivenParticleTypography.useEffect.handleResize": ()=>{
                    init();
                }
            }["CursorDrivenParticleTypography.useEffect.handleResize"];
            const timeoutId = setTimeout({
                "CursorDrivenParticleTypography.useEffect.timeoutId": ()=>{
                    init();
                    animate();
                }
            }["CursorDrivenParticleTypography.useEffect.timeoutId"], 100);
            const resizeObserver = new ResizeObserver(handleResize);
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
            }
            canvas.addEventListener("mousemove", handleMouseMove);
            canvas.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "CursorDrivenParticleTypography.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    resizeObserver.disconnect();
                    canvas.removeEventListener("mousemove", handleMouseMove);
                    canvas.removeEventListener("mouseleave", handleMouseLeave);
                    cancelAnimationFrame(animationFrameId);
                }
            })["CursorDrivenParticleTypography.useEffect"];
        }
    }["CursorDrivenParticleTypography.useEffect"], [
        text,
        fontSize,
        fontFamily,
        particleSize,
        particleDensity,
        dispersionStrength,
        returnSpeed,
        color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: cn("w-full h-full min-h-[400px] flex items-center justify-center relative touch-none", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "block w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/cursor-driven-particles-typography.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/cursor-driven-particles-typography.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s(CursorDrivenParticleTypography, "+xMqLuoGzbrZrbRmx5ZxmPZsVhQ=");
_c = CursorDrivenParticleTypography;
var _c;
__turbopack_context__.k.register(_c, "CursorDrivenParticleTypography");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/welcome-toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeToast",
    ()=>WelcomeToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WelcomeToast({ show, message }) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomeToast.useEffect": ()=>{
            if (show) {
                setVisible(true);
                // Trigger enter animation on next frame.
                requestAnimationFrame({
                    "WelcomeToast.useEffect": ()=>{
                        requestAnimationFrame({
                            "WelcomeToast.useEffect": ()=>setAnimate(true)
                        }["WelcomeToast.useEffect"]);
                    }
                }["WelcomeToast.useEffect"]);
            } else {
                // Trigger exit animation, then remove from DOM.
                setAnimate(false);
                const timeout = setTimeout({
                    "WelcomeToast.useEffect.timeout": ()=>setVisible(false)
                }["WelcomeToast.useEffect.timeout"], 500);
                return ({
                    "WelcomeToast.useEffect": ()=>clearTimeout(timeout)
                })["WelcomeToast.useEffect"];
            }
        }
    }["WelcomeToast.useEffect"], [
        show
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none",
        "aria-live": "polite",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
          pointer-events-auto mt-6 px-8 py-4
          rounded-2xl backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(196,77,255,0.15),0_0_80px_rgba(255,107,157,0.08)]
          transition-all duration-500 ease-out
          ${animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}
        `,
            style: {
                background: "linear-gradient(135deg, rgba(20,20,30,0.85) 0%, rgba(30,15,40,0.85) 100%)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 rounded-full",
                    style: {
                        background: "linear-gradient(90deg, transparent, #ff6b9d, #c44dff, transparent)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/welcome-toast.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base md:text-lg font-medium tracking-wide text-center select-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-clip-text text-transparent",
                        style: {
                            backgroundImage: "linear-gradient(135deg, #ff6b9d 0%, #c44dff 50%, #00e5ff 100%)"
                        },
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/welcome-toast.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/welcome-toast.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/welcome-toast.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/welcome-toast.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(WelcomeToast, "DKCsIwN0eG8ngdVr9Zno4ECyBug=");
_c = WelcomeToast;
var _c;
__turbopack_context__.k.register(_c, "WelcomeToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-tab-interaction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTabInteraction",
    ()=>useTabInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// ─── Default message sets ────────────────────────────────────────────
const DEFAULT_AWAY_MESSAGES = [
    "hey, you. ♡",
    "oh, leaving already?",
    "I was getting to the good part...",
    "fine. I'll pretend I don't miss you.",
    "you know, the particles are lonely.",
    "come baaack ♡",
    "I'll wait right here...",
    "still gone? okay then.",
    "the tab misses you more than it should."
];
const DEFAULT_RETURN_MESSAGES = [
    "there you are. ♡",
    "welcome back, gorgeous. ♡",
    "I knew you'd come back. ♡",
    "the particles just lit up. ♡",
    "hey again. missed you. ♡"
];
// ─── Helpers ─────────────────────────────────────────────────────────
/** Fisher-Yates shuffle (returns a new array). */ function shuffle(arr) {
    const copy = [
        ...arr
    ];
    for(let i = copy.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [
            copy[j],
            copy[i]
        ];
    }
    return copy;
}
/** Pick a random element that is not `last`, if possible. */ function pickRandom(arr, last) {
    if (arr.length <= 1) return arr[0];
    const filtered = arr.filter((m)=>m !== last);
    return filtered[Math.floor(Math.random() * filtered.length)];
}
/** Upsert a `<link rel="icon">` element in the document head. */ function setFavicon(href) {
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = href;
}
function useTabInteraction(config = {}) {
    _s();
    const { awayMessages = DEFAULT_AWAY_MESSAGES, returnMessages = DEFAULT_RETURN_MESSAGES, messageCycleMs = 4000, welcomeDurationMs = 3000, awayFaviconHref = "/favicon-away.svg", defaultFaviconHref = "/favicon-default.svg", swapFavicon = true } = config;
    const [showWelcome, setShowWelcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [welcomeMessage, setWelcomeMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Refs survive across renders without triggering them.
    const originalTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const cycleTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const welcomeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const shuffledAway = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastReturn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const hiddenAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // ── Clear any running cycle timer ──────────────────────────────────
    const clearCycle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTabInteraction.useCallback[clearCycle]": ()=>{
            if (cycleTimer.current !== null) {
                clearInterval(cycleTimer.current);
                cycleTimer.current = null;
            }
        }
    }["useTabInteraction.useCallback[clearCycle]"], []);
    // ── Clear the welcome-back timer ───────────────────────────────────
    const clearWelcome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTabInteraction.useCallback[clearWelcome]": ()=>{
            if (welcomeTimer.current !== null) {
                clearTimeout(welcomeTimer.current);
                welcomeTimer.current = null;
            }
        }
    }["useTabInteraction.useCallback[clearWelcome]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTabInteraction.useEffect": ()=>{
            // Bail out if the API is not supported (e.g. SSR or very old browser).
            if (typeof document === "undefined" || typeof document.hidden === "undefined") {
                return;
            }
            // Capture the title that was already set when the hook mounts.
            originalTitle.current = document.title;
            // Set the default favicon on mount.
            if (swapFavicon) {
                setFavicon(defaultFaviconHref);
            }
            // ── Visibility change handler ────────────────────────────────────
            const handleVisibilityChange = {
                "useTabInteraction.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) {
                        // ──── Page just became hidden ────────────────────────────────
                        hiddenAt.current = Date.now();
                        // Shuffle the away messages to keep them fresh each time.
                        shuffledAway.current = shuffle(awayMessages);
                        messageIndex.current = 0;
                        // Set the first message immediately.
                        document.title = shuffledAway.current[0];
                        // Swap favicon.
                        if (swapFavicon) {
                            setFavicon(awayFaviconHref);
                        }
                        // Dismiss any visible welcome toast.
                        clearWelcome();
                        setShowWelcome(false);
                        // Start cycling through subsequent messages.
                        clearCycle();
                        cycleTimer.current = setInterval({
                            "useTabInteraction.useEffect.handleVisibilityChange": ()=>{
                                messageIndex.current = (messageIndex.current + 1) % shuffledAway.current.length;
                                document.title = shuffledAway.current[messageIndex.current];
                            }
                        }["useTabInteraction.useEffect.handleVisibilityChange"], messageCycleMs);
                    } else {
                        // ──── Page just became visible again ─────────────────────────
                        clearCycle();
                        // Restore original title.
                        document.title = originalTitle.current;
                        // Restore default favicon.
                        if (swapFavicon) {
                            setFavicon(defaultFaviconHref);
                        }
                        // Show a welcome-back message (non-repetitive when possible).
                        const msg = pickRandom(returnMessages, lastReturn.current);
                        lastReturn.current = msg;
                        setWelcomeMessage(msg);
                        setShowWelcome(true);
                        // Auto-dismiss after the configured duration.
                        clearWelcome();
                        welcomeTimer.current = setTimeout({
                            "useTabInteraction.useEffect.handleVisibilityChange": ()=>{
                                setShowWelcome(false);
                            }
                        }["useTabInteraction.useEffect.handleVisibilityChange"], welcomeDurationMs);
                    }
                }
            }["useTabInteraction.useEffect.handleVisibilityChange"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            // ── Cleanup on unmount ───────────────────────────────────────────
            return ({
                "useTabInteraction.useEffect": ()=>{
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    clearCycle();
                    clearWelcome();
                    // Always restore the original title so the tab is left in a clean state.
                    document.title = originalTitle.current;
                    // Restore default favicon.
                    if (swapFavicon) {
                        setFavicon(defaultFaviconHref);
                    }
                }
            })["useTabInteraction.useEffect"];
        }
    }["useTabInteraction.useEffect"], [
        awayMessages,
        returnMessages,
        messageCycleMs,
        welcomeDurationMs,
        awayFaviconHref,
        defaultFaviconHref,
        swapFavicon,
        clearCycle,
        clearWelcome
    ]);
    return {
        showWelcome,
        welcomeMessage
    };
}
_s(useTabInteraction, "nnCCArp9/OXuUjihHr1fE/pu+WA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0_6_juc_9oux-._.js.map