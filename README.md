# JavaScript CWE CodeQL

Intentionally vulnerable JavaScript Code Snippets which are intended to benchmark Static Application Security Testing tools.

**Do not use any of this code in production.**

## Snippets

Each folder contains one `main.js` with exactly one intended weakness. Client-side snippets run in the browser, server-side snippets are minimal [Express](https://expressjs.com/) apps. Dependencies are only referenced via `require` and are not installed, which is sufficient for static analysis.

| CWE | Name | Context | Weakness |
| --- | --- | --- | --- |
| [CWE-20](CWE-20/main.js) | Improper Input Validation | Client | Suffix check returns `true` if the suffix is one character longer than the input |
| [CWE-22](CWE-22/main.js) | Path Traversal | Server | `req.query.file` is joined into a file path, `../` escapes the upload folder |
| [CWE-78](CWE-78/main.js) | OS Command Injection | Server | `req.query.host` is interpolated into a shell command |
| [CWE-79](CWE-79/main.js) | Cross-site Scripting (DOM) | Client | URL parameter is written to `innerHTML` |
| [CWE-80](CWE-80/main.js) | Basic XSS | Client | HTML is only inserted if it contains a `<script>` tag |
| [CWE-89](CWE-89/main.js) | SQL Injection | Server | `req.query.category` is concatenated into an SQL query |
| [CWE-95](CWE-95/main.js) | Eval Injection | Client | URL fragment is passed to `eval` |
| [CWE-117](CWE-117/main.js) | Log Injection | Server | Unsanitized user name is logged, newlines forge log entries |
| [CWE-209](CWE-209/main.js) | Information Exposure Through an Error Message | Server | Stack trace is sent to the client |
| [CWE-256](CWE-256/main.js) | Plaintext Storage of a Password | Client | Password is stored in `localStorage` |
| [CWE-258](CWE-258/main.js) | Empty Password in Configuration File | Server | Admin login succeeds with an empty password |
| [CWE-259](CWE-259/main.js) | Use of Hard-coded Password | Client | Bearer token is hard-coded |
| [CWE-312](CWE-312/main.js) | Cleartext Storage of Sensitive Information | Client | Credit card number is stored in a cookie |
| [CWE-327](CWE-327/main.js) | Use of a Broken Cryptographic Algorithm | Server | Credit card number is encrypted with DES-ECB |
| [CWE-330](CWE-330/main.js) | Use of Insufficiently Random Values | Client | Reset token is generated with `Math.random()` |
| [CWE-338](CWE-338/main.js) | Use of Cryptographically Weak PRNG | Client | Password is generated with `Math.random()` |
| [CWE-352](CWE-352/main.js) | Cross-Site Request Forgery | Server | State-changing POST request relies on cookies without a CSRF token |
| [CWE-502](CWE-502/main.js) | Deserialization of Untrusted Data | Server | Cookie is deserialized with `node-serialize` |
| [CWE-561](CWE-561/main.js) | Dead Code | Client | Unreachable branch skips the ban check |
| [CWE-563](CWE-563/main.js) | Assignment to Variable without Use | Client | Sanitized input is unused, raw input goes to `innerHTML` |
| [CWE-601](CWE-601/main.js) | Open Redirect | Server | `req.query.returnUrl` is used as redirect target |
| [CWE-611](CWE-611/main.js) | XML External Entity | Server | XML is parsed with entity expansion enabled |
| [CWE-614](CWE-614/main.js) | Sensitive Cookie Without 'Secure' Attribute | Server | Session cookie is sent over HTTP |
| [CWE-834](CWE-834/main.js) | Excessive Iteration | Client | Loop bound is taken from the API response |
| [CWE-916](CWE-916/main.js) | Weak Password Hash | Server | Password is hashed with MD5 |
| [CWE-918](CWE-918/main.js) | Server-Side Request Forgery | Server | Server fetches `req.query.url` |
| [CWE-942](CWE-942/main.js) | Permissive CORS Policy | Server | Any origin is reflected with credentials allowed |
| [CWE-943](CWE-943/main.js) | NoSQL Injection | Server | Request body is used as MongoDB query, `{"$ne": null}` bypasses login |
| [CWE-1022](CWE-1022/main.js) | Untrusted Link Target | Client | `window.open` without `noopener` |
| [CWE-1321](CWE-1321/main.js) | Prototype Pollution | Client | Recursive merge copies `__proto__` from parsed JSON |
| [CWE-1333](CWE-1333/main.js) | Inefficient Regular Expression (ReDoS) | Client | Nested quantifier causes catastrophic backtracking |
