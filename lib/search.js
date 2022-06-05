'use strict'

/**
 * Value constants and ASN.1 tags as defined in:
 * https://datatracker.ietf.org/doc/html/rfc4511#section-4.5.1
 */
module.exports = {
  SCOPE_BASE_OBJECT: 0,
  SCOPE_ONE_LEVEL: 1,
  SCOPE_SUBTREE: 2,

  NEVER_DEREF_ALIASES: 0,
  DEREF_IN_SEARCHING: 1,
  DEREF_BASE_OBJECT: 2,
  DEREF_ALWAYS: 3,

  FILTER_AND: 0xa0,
  FILTER_OR: 0xa1,
  FILTER_NOT: 0xa2,
  FILTER_EQUALITY: 0xa3,
  FILTER_SUBSTRINGS: 0xa4,
  FILTER_GE: 0xa5,
  FILTER_LE: 0xa6,
  FILTER_PRESENT: 0x87,
  FILTER_APPROX: 0xa8,
  FILTER_EXT: 0xa9
}
