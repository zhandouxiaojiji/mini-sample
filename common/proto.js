/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    test.c2s_hello = (function() {

        /**
         * Properties of a c2s_hello.
         * @memberof test
         * @interface Ic2s_hello
         * @property {string|null} [text] c2s_hello text
         */

        /**
         * Constructs a new c2s_hello.
         * @memberof test
         * @classdesc Represents a c2s_hello.
         * @implements Ic2s_hello
         * @constructor
         * @param {test.Ic2s_hello=} [properties] Properties to set
         */
        function c2s_hello(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_hello text.
         * @member {string} text
         * @memberof test.c2s_hello
         * @instance
         */
        c2s_hello.prototype.text = "";

        /**
         * Creates a new c2s_hello instance using the specified properties.
         * @function create
         * @memberof test.c2s_hello
         * @static
         * @param {test.Ic2s_hello=} [properties] Properties to set
         * @returns {test.c2s_hello} c2s_hello instance
         */
        c2s_hello.create = function create(properties) {
            return new c2s_hello(properties);
        };

        /**
         * Encodes the specified c2s_hello message. Does not implicitly {@link test.c2s_hello.verify|verify} messages.
         * @function encode
         * @memberof test.c2s_hello
         * @static
         * @param {test.Ic2s_hello} message c2s_hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_hello.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified c2s_hello message, length delimited. Does not implicitly {@link test.c2s_hello.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.c2s_hello
         * @static
         * @param {test.Ic2s_hello} message c2s_hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_hello.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_hello message from the specified reader or buffer.
         * @function decode
         * @memberof test.c2s_hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.c2s_hello} c2s_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_hello.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.c2s_hello();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_hello message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.c2s_hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.c2s_hello} c2s_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_hello.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_hello message.
         * @function verify
         * @memberof test.c2s_hello
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_hello.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a c2s_hello message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.c2s_hello
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.c2s_hello} c2s_hello
         */
        c2s_hello.fromObject = function fromObject(object) {
            if (object instanceof $root.test.c2s_hello)
                return object;
            var message = new $root.test.c2s_hello();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a c2s_hello message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.c2s_hello
         * @static
         * @param {test.c2s_hello} message c2s_hello
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_hello.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this c2s_hello to JSON.
         * @function toJSON
         * @memberof test.c2s_hello
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_hello.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_hello;
    })();

    test.s2c_hello = (function() {

        /**
         * Properties of a s2c_hello.
         * @memberof test
         * @interface Is2c_hello
         * @property {number|null} [err] s2c_hello err
         */

        /**
         * Constructs a new s2c_hello.
         * @memberof test
         * @classdesc Represents a s2c_hello.
         * @implements Is2c_hello
         * @constructor
         * @param {test.Is2c_hello=} [properties] Properties to set
         */
        function s2c_hello(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_hello err.
         * @member {number} err
         * @memberof test.s2c_hello
         * @instance
         */
        s2c_hello.prototype.err = 0;

        /**
         * Creates a new s2c_hello instance using the specified properties.
         * @function create
         * @memberof test.s2c_hello
         * @static
         * @param {test.Is2c_hello=} [properties] Properties to set
         * @returns {test.s2c_hello} s2c_hello instance
         */
        s2c_hello.create = function create(properties) {
            return new s2c_hello(properties);
        };

        /**
         * Encodes the specified s2c_hello message. Does not implicitly {@link test.s2c_hello.verify|verify} messages.
         * @function encode
         * @memberof test.s2c_hello
         * @static
         * @param {test.Is2c_hello} message s2c_hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_hello.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.err);
            return writer;
        };

        /**
         * Encodes the specified s2c_hello message, length delimited. Does not implicitly {@link test.s2c_hello.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.s2c_hello
         * @static
         * @param {test.Is2c_hello} message s2c_hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_hello.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_hello message from the specified reader or buffer.
         * @function decode
         * @memberof test.s2c_hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.s2c_hello} s2c_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_hello.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.s2c_hello();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.err = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_hello message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.s2c_hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.s2c_hello} s2c_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_hello.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_hello message.
         * @function verify
         * @memberof test.s2c_hello
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_hello.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isInteger(message.err))
                    return "err: integer expected";
            return null;
        };

        /**
         * Creates a s2c_hello message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.s2c_hello
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.s2c_hello} s2c_hello
         */
        s2c_hello.fromObject = function fromObject(object) {
            if (object instanceof $root.test.s2c_hello)
                return object;
            var message = new $root.test.s2c_hello();
            if (object.err != null)
                message.err = object.err | 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_hello message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.s2c_hello
         * @static
         * @param {test.s2c_hello} message s2c_hello
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_hello.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = 0;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this s2c_hello to JSON.
         * @function toJSON
         * @memberof test.s2c_hello
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_hello.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_hello;
    })();

    return test;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.User = (function() {

        /**
         * Properties of a User.
         * @memberof user
         * @interface IUser
         * @property {number|Long|null} [uid] User uid
         * @property {string|null} [nickname] User nickname
         */

        /**
         * Constructs a new User.
         * @memberof user
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {user.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User uid.
         * @member {number|Long} uid
         * @memberof user.User
         * @instance
         */
        User.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof user.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof user.User
         * @static
         * @param {user.IUser=} [properties] Properties to set
         * @returns {user.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encode
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.user.User)
                return object;
            var message = new $root.user.User();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.User
         * @static
         * @param {user.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.nickname = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof user.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    user.c2s_data = (function() {

        /**
         * Properties of a c2s_data.
         * @memberof user
         * @interface Ic2s_data
         */

        /**
         * Constructs a new c2s_data.
         * @memberof user
         * @classdesc Represents a c2s_data.
         * @implements Ic2s_data
         * @constructor
         * @param {user.Ic2s_data=} [properties] Properties to set
         */
        function c2s_data(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_data instance using the specified properties.
         * @function create
         * @memberof user.c2s_data
         * @static
         * @param {user.Ic2s_data=} [properties] Properties to set
         * @returns {user.c2s_data} c2s_data instance
         */
        c2s_data.create = function create(properties) {
            return new c2s_data(properties);
        };

        /**
         * Encodes the specified c2s_data message. Does not implicitly {@link user.c2s_data.verify|verify} messages.
         * @function encode
         * @memberof user.c2s_data
         * @static
         * @param {user.Ic2s_data} message c2s_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_data message, length delimited. Does not implicitly {@link user.c2s_data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.c2s_data
         * @static
         * @param {user.Ic2s_data} message c2s_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_data message from the specified reader or buffer.
         * @function decode
         * @memberof user.c2s_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.c2s_data} c2s_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.c2s_data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.c2s_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.c2s_data} c2s_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_data message.
         * @function verify
         * @memberof user.c2s_data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.c2s_data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.c2s_data} c2s_data
         */
        c2s_data.fromObject = function fromObject(object) {
            if (object instanceof $root.user.c2s_data)
                return object;
            return new $root.user.c2s_data();
        };

        /**
         * Creates a plain object from a c2s_data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.c2s_data
         * @static
         * @param {user.c2s_data} message c2s_data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_data.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_data to JSON.
         * @function toJSON
         * @memberof user.c2s_data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_data;
    })();

    user.s2c_data = (function() {

        /**
         * Properties of a s2c_data.
         * @memberof user
         * @interface Is2c_data
         * @property {number|null} [err] s2c_data err
         * @property {user.IUser|null} [user] s2c_data user
         */

        /**
         * Constructs a new s2c_data.
         * @memberof user
         * @classdesc Represents a s2c_data.
         * @implements Is2c_data
         * @constructor
         * @param {user.Is2c_data=} [properties] Properties to set
         */
        function s2c_data(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_data err.
         * @member {number} err
         * @memberof user.s2c_data
         * @instance
         */
        s2c_data.prototype.err = 0;

        /**
         * s2c_data user.
         * @member {user.IUser|null|undefined} user
         * @memberof user.s2c_data
         * @instance
         */
        s2c_data.prototype.user = null;

        /**
         * Creates a new s2c_data instance using the specified properties.
         * @function create
         * @memberof user.s2c_data
         * @static
         * @param {user.Is2c_data=} [properties] Properties to set
         * @returns {user.s2c_data} s2c_data instance
         */
        s2c_data.create = function create(properties) {
            return new s2c_data(properties);
        };

        /**
         * Encodes the specified s2c_data message. Does not implicitly {@link user.s2c_data.verify|verify} messages.
         * @function encode
         * @memberof user.s2c_data
         * @static
         * @param {user.Is2c_data} message s2c_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.err);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.user.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_data message, length delimited. Does not implicitly {@link user.s2c_data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.s2c_data
         * @static
         * @param {user.Is2c_data} message s2c_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_data message from the specified reader or buffer.
         * @function decode
         * @memberof user.s2c_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.s2c_data} s2c_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.s2c_data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.err = reader.int32();
                    break;
                case 2:
                    message.user = $root.user.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.s2c_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.s2c_data} s2c_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_data message.
         * @function verify
         * @memberof user.s2c_data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isInteger(message.err))
                    return "err: integer expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.user.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.s2c_data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.s2c_data} s2c_data
         */
        s2c_data.fromObject = function fromObject(object) {
            if (object instanceof $root.user.s2c_data)
                return object;
            var message = new $root.user.s2c_data();
            if (object.err != null)
                message.err = object.err | 0;
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".user.s2c_data.user: object expected");
                message.user = $root.user.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.s2c_data
         * @static
         * @param {user.s2c_data} message s2c_data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err = 0;
                object.user = null;
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.user.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this s2c_data to JSON.
         * @function toJSON
         * @memberof user.s2c_data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_data;
    })();

    return user;
})();

module.exports = $root;
