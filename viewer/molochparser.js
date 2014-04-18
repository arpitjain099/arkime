/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var molochparser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"OP":6,"lt":7,"lte":8,"gt":9,"gte":10,"==":11,"!=":12,"VALUE":13,"STR":14,"QUOTEDSTR":15,"REGEXSTR":16,"LIST":17,"&&":18,"||":19,"!":20,"-":21,"(":22,")":23,"EXISTS":24,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"lt",8:"lte",9:"gt",10:"gte",11:"==",12:"!=",14:"STR",15:"QUOTEDSTR",16:"REGEXSTR",17:"LIST",18:"&&",19:"||",20:"!",21:"-",22:"(",23:")",24:"EXISTS"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[13,1],[13,1],[13,1],[13,1],[4,3],[4,3],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2:this.$ = 'lt'
break;
case 3:this.$ = 'lte'
break;
case 4:this.$ = 'gt'
break;
case 5:this.$ = 'gte'
break;
case 6:this.$ = 'eq'
break;
case 7:this.$ = 'ne'
break;
case 12:this.$ = {bool: {must: [$$[$0-2], $$[$0]]}};
break;
case 13:this.$ = {bool: {should: [$$[$0-2], $$[$0]]}};
break;
case 14:this.$ = {not: $$[$0]};
break;
case 15:this.$ = -$$[$0];
break;
case 16:this.$ = $$[$0-1];
break;
case 17:this.$ = {exists: {field: field2Raw(yy, $$[$0-2])}};
break;
case 18:this.$ = {not: {exists: {field: field2Raw(yy, $$[$0-2])}}};
break;
case 19: this.$ = formatQuery(yy, $$[$0-2], $$[$0-1], $$[$0]);
          //console.log(util.inspect(this.$, false, 50));
        
break;
}
},
table: [{3:1,4:2,14:[1,6],20:[1,3],21:[1,4],22:[1,5]},{1:[3]},{5:[1,7],18:[1,8],19:[1,9]},{4:10,14:[1,6],20:[1,3],21:[1,4],22:[1,5]},{4:11,14:[1,6],20:[1,3],21:[1,4],22:[1,5]},{4:12,14:[1,6],20:[1,3],21:[1,4],22:[1,5]},{6:15,7:[1,16],8:[1,17],9:[1,18],10:[1,19],11:[1,13],12:[1,14]},{1:[2,1]},{4:20,14:[1,6],20:[1,3],21:[1,4],22:[1,5]},{4:21,14:[1,6],20:[1,3],21:[1,4],22:[1,5]},{5:[2,14],18:[2,14],19:[2,14],23:[2,14]},{5:[2,15],18:[2,15],19:[2,15],23:[2,15]},{18:[1,8],19:[1,9],23:[1,22]},{14:[2,6],15:[2,6],16:[2,6],17:[2,6],24:[1,23]},{14:[2,7],15:[2,7],16:[2,7],17:[2,7],24:[1,24]},{13:25,14:[1,26],15:[1,27],16:[1,28],17:[1,29]},{14:[2,2],15:[2,2],16:[2,2],17:[2,2]},{14:[2,3],15:[2,3],16:[2,3],17:[2,3]},{14:[2,4],15:[2,4],16:[2,4],17:[2,4]},{14:[2,5],15:[2,5],16:[2,5],17:[2,5]},{5:[2,12],18:[2,12],19:[2,12],23:[2,12]},{5:[2,13],18:[1,8],19:[2,13],23:[2,13]},{5:[2,16],18:[2,16],19:[2,16],23:[2,16]},{5:[2,17],18:[2,17],19:[2,17],23:[2,17]},{5:[2,18],18:[2,18],19:[2,18],23:[2,18]},{5:[2,19],18:[2,19],19:[2,19],23:[2,19]},{5:[2,8],18:[2,8],19:[2,8],23:[2,8]},{5:[2,9],18:[2,9],19:[2,9],23:[2,9]},{5:[2,10],18:[2,10],19:[2,10],23:[2,10]},{5:[2,11],18:[2,11],19:[2,11],23:[2,11]}],
defaultActions: {7:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


var    util           = require('util');

function parseIpPort(yy, field, ipPortStr) {
  var dbField = yy.fieldsMap[field].dbField;

  function singleIp(dbField, ip1, ip2, port) {
    var obj;

    if (ip1 !== -1) {
      if (ip1 === ip2) {
        obj = {term: {}};
        obj.term[dbField] = ip1>>>0;
      } else {
        obj = {range: {}};
        obj.range[dbField] = {from: ip1>>>0, to: ip2>>>0};
      }
    }

    if (port !== -1) {
      if (yy.fieldsMap[field].portField) {
        obj = {bool: {must: [obj, {term: {}}]}};
        obj.bool.must[1].term[yy.fieldsMap[field].portField] = port;
      } else {
        throw field + " doesn't support port";
      }

      if (ip1 === -1) {
        obj = obj.bool.must[1];
      }
    }

    return obj;
  }


  var obj;

  ipPortStr = ipPortStr.trim();

// We really have a list of them
  if (ipPortStr[0] === "[" && ipPortStr[ipPortStr.length -1] === "]") {
      obj =  {bool: {should: []}};
      CSVtoArray(ipPortStr).forEach(function(str) {
        obj.bool.should.push(parseIpPort(yy, field, str));
      });
      return obj;
  }

  // Support '10.10.10/16:4321'

  var ip1 = -1, ip2 = -1;
  var colons = ipPortStr.split(':');
  var slash = colons[0].split('/');
  var dots = slash[0].split('.');
  var port = -1;
  if (colons[1]) {
    port = parseInt(colons[1], 10);
  }

  if (dots.length === 4) {
    ip1 = ip2 = (parseInt(dots[0], 10) << 24) | (parseInt(dots[1], 10) << 16) | (parseInt(dots[2], 10) << 8) | parseInt(dots[3], 10);
  } else if (dots.length === 3) {
    ip1 = (parseInt(dots[0], 10) << 24) | (parseInt(dots[1], 10) << 16) | (parseInt(dots[2], 10) << 8);
    ip2 = (parseInt(dots[0], 10) << 24) | (parseInt(dots[1], 10) << 16) | (parseInt(dots[2], 10) << 8) | 255;
  } else if (dots.length === 2) {
    ip1 = (parseInt(dots[0], 10) << 24) | (parseInt(dots[1], 10) << 16);
    ip2 = (parseInt(dots[0], 10) << 24) | (parseInt(dots[1], 10) << 16) | (255 << 8) | 255;
  } else if (dots.length === 1 && dots[0].length > 0) {
    ip1 = (parseInt(dots[0], 10) << 24);
    ip2 = (parseInt(dots[0], 10) << 24) | (255 << 16) | (255 << 8) | 255;
  }

  // Can't shift by 32 bits in javascript, who knew!
  if (slash[1] && slash[1] !== '32') {
     var s = parseInt(slash[1], 10);
     ip1 = ip1 & (0xffffffff << (32 - s));
     ip2 = ip2 | (0xffffffff >>> s);
  }
  
  if (dbField !== "ipall") {
    return singleIp(dbField, ip1, ip2, port);
  }

  var ors = [];
  var completed = {};
  for (field in yy.fieldsMap) {
    var info = yy.fieldsMap[field];

    // If ip itself or not an ip field stop
    if (field === "ip" || info.type !== "ip")
      continue;

    // Already completed
    if (completed[info.dbField])
      continue;
    completed[info.dbField] = 1;

    // If port specified then skip ips without ports
    if (port !== -1 && !info.portField)
      continue;

    if (info.requiredRight && yy[info.requiredRight] !== true) {
      continue;
    }
    obj = singleIp(info.dbField, ip1, ip2, port);
    if (obj) {
      ors.push(obj);
    }
  }

  return {bool: {should: ors}};
}

function stripQuotes (str) {
  if (str[0] === "\"") {
    str =  str.substring(1, str.length-1);
  }
  return str;
}

function formatQuery(yy, field, op, value)
{
  var obj;
  //console.log("yy", util.inspect(yy, false, 50));

  if (!yy.fieldsMap[field])
    throw "Unknown field " + field;

  var info = yy.fieldsMap[field];

  if (info.requiredRight && yy[info.requiredRight] !== true) {
    throw field + " - permission denied";
  }

  if (info.regex) {
    var regex = new RegExp(info.regex);
    var obj = [];
    var completed = [];
    for (var f in yy.fieldsMap) {
      if (f.match(regex) && !completed[yy.fieldsMap[f].dbField]) {
        if (yy.fieldsMap[f].requiredRight && yy[yy.fieldsMap[f].requiredRight] !== true) {
          continue;
        }
        /* If a not equal op then format as if an equal and do the not below */
        obj.push(formatQuery(yy, f, (op === "ne"?"eq":op), value));
        completed[yy.fieldsMap[f].dbField] = 1;
      }
    }
    if (op === "ne")
      return {bool: {must_not: obj}};
    else
      return {bool: {should: obj}};
    throw "Invalid operator '" + op + "' for " + field;
  }

  switch (info.type) {
  case "ip":
    if (op === "eq")
      return parseIpPort(yy, field, value);
    if (op === "ne")
      return {not: parseIpPort(yy, field, value)};
    throw "Invalid operator '" + op + "' for ip";
  case "integer":
    if (value[0] === "/")
      throw value + " - Regex queries not supported for integer queries";

    if (op === "eq" || op === "ne") {
      obj = termOrTermsInt(info.dbField, value);
      if (op === "ne") {
        obj = {not: obj};
      }
      return obj;
    }

    if (value[0] === "\[")
      throw value + " - List queries not supported for gt/lt queries";

    obj = {range: {}};
    obj.range[info.dbField] = {};
    obj.range[info.dbField][op] = value;
    return obj;
  case "lotermfield":
  case "lotextfield":
    if (op === "eq")
      return stringQuery(yy, field, value.toLowerCase());
    if (op === "ne")
      return {not: stringQuery(yy, field, value.toLowerCase())};
    throw "Invalid operator '" + op + "' for " + field;
  case "termfield":
  case "textfield":
    if (op === "eq")
      return stringQuery(yy, field, value);
    if (op === "ne")
      return {not: stringQuery(yy, field, value)};
    throw "Invalid operator '" + op + "' for " + field;
  case "uptermfield":
  case "uptextfield":
    if (op === "eq")
      return stringQuery(yy, field, value.toUpperCase());
    if (op === "ne")
      return {not: stringQuery(yy, field, value.toUpperCase())};
    throw "Invalid operator '" + op + "' for " + field;
  case "fileand":
    if (value[0] === "\[")
      throw value + " - List queries not supported for file queries";

    if (op === "eq")
      return {fileand: stripQuotes(value)}
    if (op === "ne")
      return {not: {findand: stripQuotes(value)}};
    throw op + " - not supported for file queries";
    break;
  default:
    throw "Unknown field type: " + info.type;
  }
}

function field2Raw(yy, field) {
  var info = yy.fieldsMap[field];
  var dbField = info.dbField;
  if (info.rawField)
    return info.rawField;

  if (dbField.indexOf(".snow", dbField.length - 5) === 0)
    return dbField.substring(0, dbField.length - 5) + ".raw";

  return dbField;
}

function stringQuery(yy, field, str) {

  var info = yy.fieldsMap[field];
  var dbField = info.dbField;


  if (str[0] === "/" && str[str.length -1] === "/") {
    str = str.substring(1, str.length-1);
    if (info.transform) {
      str = global.moloch[info.transform](str).replace(/2e/g, '.');
    }
    dbField = field2Raw(yy, field);
    obj = {regexp: {}};
    obj.regexp[dbField] = str.replace(/\\(.)/g, "$1");
    return obj;
  }


  var quoted = false;
  if (str[0] === "\"" && str[str.length -1] === "\"") {
    str = str.substring(1, str.length-1).replace(/\\(.)/g, "$1");
    quoted = true;
  } else if (str[0] === "[" && str[str.length -1] === "]") {
    strs = CSVtoArray(str);
    if (info.transform) {
      for (var i = 0; i < strs.length; i++) {
        strs[i] = global.moloch[info.transform](strs[i]);
      }
    }

    if (info.type.match(/termfield/)) {
      obj = {terms: {}};
      obj.terms[dbField] = strs;
    } else if (info.type.match(/textfield/)) {
      var obj =  {query: {bool: {should: []}}};
      strs.forEach(function(str) {
        var should = {match: {}};
        should.match[dbField] = {query: str, type: "phrase", operator: "and"}
        obj.query.bool.should.push(should);
      });
    }
    return obj;
  }

  if (info.transform) {
    str = global.moloch[info.transform](str);
  }

  if (!isNaN(str) && !quoted) {
    obj = {term: {}};
    obj.term[dbField] = str;
  } else if (typeof str === "string" && str.indexOf("*") !== -1) {
    dbField = field2Raw(yy, field);
    obj = {query: {wildcard: {}}};
    obj.query.wildcard[dbField] = str;
  } else if (info.type.match(/textfield/)) {
    obj = {query: {match: {}}};
    obj.query.match[dbField] = {query: str, type: "phrase", operator: "and"}
  } else if (info.type.match(/termfield/)) {
    obj = {term: {}};
    obj.term[dbField] = str;
  }

  return obj;
}

if (!global.moloch) global.moloch = {};
global.moloch.utf8ToHex = function (utf8) {
    var hex = new Buffer(stripQuotes(utf8)).toString("hex").toLowerCase();
    hex = hex.replace(/2a/g, '*');
    return hex;
}

var protocols = {
    icmp: 1,
    tcp:  6,
    udp:  17
};

global.moloch.ipProtocolLookup = function (text) {
    if (typeof text !== "string") {
        for (var i = 0; i < text.length; i++) {
            text[i] = protocols[text[i]] || +text[i];
        }
        return text;
    } else {
        return protocols[text] || +text;
    }
};

// http://stackoverflow.com/a/8497474
// Return array of string values, or NULL if CSV string not well formed.
function CSVtoArray(text) {
  if (text[0] !== "[" || text[text.length -1] !== "]")
    return text;

    text = text.substring(1, text.length-1);
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
};

function termOrTermsStr(dbField, str) {
  var obj = {};
  if (str[0] === "[" && str[str.length -1] === "]") {
    obj = {terms: {}};
    obj.terms[dbField] = CSVtoArray(str);
  } else {
    obj = {term: {}};
    obj.term[dbField] = str;
  }
  return obj;
}
function termOrTermsInt(dbField, str) {
  var obj = {};
  if (str[0] === "[" && str[str.length -1] === "]") {
    obj = {terms: {}};
    obj.terms[dbField] = CSVtoArray(str);
    obj.terms[dbField].forEach(function(str) {
      str = stripQuotes(str);
      if (typeof str !== "integer" && str.match(/[^\d]+/))
        throw str + " is not a number";
    });
  } else {
    str = stripQuotes(str);
    if (str.match(/[^\d]+/))
      throw str + " is not a number";
    obj = {term: {}};
    obj.term[dbField] = str;
  }
  return obj;
}
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 14
break;
case 2:return 15
break;
case 3:return 16
break;
case 4:return 17
break;
case 5:return "EXISTS"
break;
case 6:return 8
break;
case 7:return 7
break;
case 8:return 10
break;
case 9:return 9
break;
case 10:return 12
break;
case 11:return 11
break;
case 12:return 11
break;
case 13:return 19
break;
case 14:return 19
break;
case 15:return 18
break;
case 16:return 18
break;
case 17:return 22
break;
case 18:return 23
break;
case 19:return 20
break;
case 20:return 5
break;
case 21:return 'INVALID'
break;
case 22:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/,/^(?:[-a-zA-Z0-9_.@:*?/]+)/,/^(?:"[^"\\]*(?:\\.[^"\\]*)*")/,/^(?:\/[^/\\]*(?:\\.[^/\\]*)*\/)/,/^(?:\[[^/\\]*(?:\\.[^/\\]*)*\])/,/^(?:EXISTS!)/,/^(?:<=)/,/^(?:<)/,/^(?:>=)/,/^(?:>)/,/^(?:!=)/,/^(?:==)/,/^(?:=)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:&&)/,/^(?:&)/,/^(?:\()/,/^(?:\))/,/^(?:!)/,/^(?:$)/,/^(?:.)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = molochparser;
exports.Parser = molochparser.Parser;
exports.parse = function () { return molochparser.parse.apply(molochparser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}