import _JSONBigInt from 'json-bigint'

export const JSONBigInt = _JSONBigInt({ useNativeBigInt: true })

// JSON support bigint
JSON.parse = JSONBigInt.parse
JSON.stringify = JSONBigInt.stringify

export default JSONBigInt
