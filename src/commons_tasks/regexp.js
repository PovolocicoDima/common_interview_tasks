/**
 * match method will return the array with result and null if
 * there are no mathes for the pattern
 */

const pattern = /Hello/
const input = 'Hello, World!'
const result = input.match(pattern)
// console.log(result)

/**
 *  The test method searches a string for a regular expression
 *  pattern and returns true if it finds a match and false
 *  if it doesnt
 */

const pattern2 = new RegExp('peaky', 'gi')
const input2 = 'Peaky Blinder is an interesting series'
const result2 = pattern2.test(input2)
// console.log(result2)

/**
 * Exec method searches a string for a regular expression pattern and returns
 * an array containing the matched substrings. Unlike the match method, the
 * exec method returns multiple arrays for multiple matches
 */

const pattern3 = /\(\d{3}\) \d{3}-\d{4}/g
const string = `My phone numbers are (123) 456-7800 and (555) 555-2121.`

let mathes = pattern3.exec(string)
// console.log(mathes)

/**
 * The search method typically works on all strings,
 * but you can also use it to test regex patterns:
 */

let text = 'Hello, welcome to the world of hello!'
let pattern4 = /hello/i
let index = text.search(pattern4)
// console.log(index) // returns 0

/*
 * FLAGS
 * g - global, regexp engine will search patter in whole string,
 *     not only first coincidences
 * i - case-insensitive pattern matching
 * m - multiple line pattern matching. regexp engine will treat
 *     the input string as a multi-line string
 * s - single line pattern matching
 * u - unicode pattern matching
 */

/*
 *
 * Character classes
 *
 * Also known as character sets, character classes are
 * used to tell the regex engine to match certain characters
 * in a given string. A good example is when you are unsure
 * whether the text you're checking uses American or British English.
 */

let pattern5 = new RegExp('apologi[sz]e', 'g')
let input5 = 'apologize and apologise are both correct'
let result5 = input5.match(pattern5)
// console.log(result5) // returns ['apologize', 'apologise']

/**
 * Negated character set

    A negated character class does the opposite of what a 
    character class does. You can negate a character class 
    by adding a caret ^ after the opening square brackets:
 */

let pattern6 = new RegExp('[^vwy]et', 'g') // NOT
let input6 = 'get, yet, bet, wet, let, vet'
let result6 = input6.match(pattern6)
// console.log(result6)

/**
 * Ranges

A range is a shorter way to write a character set. 
For example, if you want to match all figures that 
start with any number between 2 and 6 and end with 
double zeroes, you can do this with a range:
 */

let pattern7 = new RegExp('[2-6]00', 'g')
let input7 = '200, 700, 300, 100, 590, 400'
let result7 = input7.match(pattern7)
// console.log(result7) // returns ['200', '300', '400']

/**
 * There's another way to write ranges, which is to use the
 * short codes for [a-z, [0-9] and their exact opposites.
 * For example, you can write a function that extracts email
 * addresses from text:
 */

const pattern8 = /\w+@\w+\.\w+/g
const text8 = `John's email is john@example.com and Jane's email is jane@example.com. 
    You can contact them at these addresses.`
// console.log(text8.match(pattern8)) // returns ['john@example.com', 'jane@example.com

/**
 * SPECIAL CHARACTERS 
 * 
    \d - Matches any digit.
    \w - Matches any word character, which includes any alphanumeric character and underscore (_).
    \s - Matches any whitespace character, including spaces, tabs, and line breaks.
    \D - Opposite of \d; matches any character that is not a digit.
    \W - Opposite of \w; matches any character that is not a word character.
    \S - Opposite of \s; matches any character that is not a whitespace character.

 */

const text9 = ` ,.;!?99 _ aaa999_aaa `
const patter9 = /\s/gi
// console.log(text9.match(patter9))

/**
 * Quantifiers

    Quantifiers specify how many times a particular character or group of characters 
    should appear in a given string. They are used to define the quantity or range of 
    characters that a regular expression should match. The following paragraphs explain 
    some special characters that represent quantifiers.
    \d{3}-\d{2}-\d{4} 
*/

const pattern10 = /a*/g
const text10 = `Our organisation is committed to providing excellent customer 
    service and fostering strong relationships with our clients.`
// console.log(text10.match(pattern10))

/**
 * Another common quantifier is the plus sign (+),
 * which represents one or more occurrences of the
 * preceding character or group. For example, the
 * regular expression "a+" will match any string
 * that contains one or more "a" characters. This
 * means that it will not match an empty string but
 * will match any string that consists entirely of "a"
 * characters or contains at least one "a":
 */

const pattern11 = /a+/g
const text11 = `Our organisation is committed to 
    providing excellent customer service and fostering strong relationships with our clients.`
// console.log(text11.match(pattern11)) // returns ['a', 'a', 'a', 'a']

/**
 * Curly braces ({})

    The curly braces ({}) quantifier specifies an exact number of 
    occurrences of a character or group. For example, the regular 
    expression /a{2,4}/ will match any string between two and four "a" 
    characters. This means that it will match strings like "aa", "aaa", 
    or "aaaa", but not strings with fewer than two "a" characters or more 
    than four:
 */

const pattern12 = /a{2,4}/g
const text12 =
    'Our orgaanisation is committed to providing excellent customer service aaand fostering strong relaaaationships with our clients.'
// console.log(text12.match(pattern12)) // returns ['aa', 'aaa', 'aaaa']

/**
 * Lazy quantifiers

    As seen in the previous section, quantifiers are used in regular 
    expressions to match multiple pattern occurrences. For example, 
    the + quantifier matches one or more occurrences of a pattern, 
    and the * quantifier matches zero or more occurrences of a pattern. 
    The ? quantifier matches zero or one occurrence of a pattern.

    By default, quantifiers are greedy, meaning they match as much 
    of the string as possible. You can make quantifiers lazy by 
    appending a ? to the quantifier. Lazy quantifiers can be helpful 
    when you want to match a pattern that occurs multiple times in a 
    string, but you only want to match the first occurrence. For example, 
    consider the following regular expression:
 */

const string13 = 'the cat sat on the mat, the cat sat on the mat'
const regex13 = /the.+?on/
const match13 = string13.match(regex13)
// console.log(match13) // returns ['the cat sat on']

/**
 * Repetition

    Another important feature of regular expressions is repetition. 
    Repetition is matching patterns that occur multiple times within 
    a string. This is often achieved using quantifiers, but there are 
    other ways to achieve repetition.
    Parentheses (())

    You can achieve repetition by using parentheses to group a 
    pattern and then applying a quantifier to that group. For example, 
    the pattern (ab)+ will match any string that contains one or more 
    occurrences of the pattern "ab":
 */

const pattern14 = /(ab)+/g
const text14 = 'abb abcb ababab'
// console.log(text14.match(pattern14)) // returns ['ab', 'ab', 'ababab']

/**
 * Dot (.)

    Another way to achieve repetition is by using the dot (.) metacharacter. 
    For example, the dot character represents any single character, and the 
    question mark (?) character represents zero or one occurrence of the 
    preceding character or group. These characters can be combined with 
    quantifiers to match patterns that repeat in specific ways.

    For example, the pattern a.{?}b will match any string that starts with 
    an "a", followed by between three and five of any character, and ends 
    with a "b":
 */

const pattern15 = /a.{3,5}b/g
const text15 = 'abbabcb desbdd cescse ababaadsadawdadb'
// console.log(text15.match(pattern15)) // returns ['abbabcb', 'ababab']

/**
 * Pipe (|)

    Another metacharacter often used for repetition is the pipe 
    character (|), which represents a choice between two patterns. 
    For example, the pattern a(b|c)d will match any string that 
    starts with an "a", followed by either a "b" or a "c",
    and ends with a "d":
 */

const pattern16 = /a(b|c|g)d/g
const text16 = 'abcd agd dde acd abd'
// console.log(text16.match(pattern16)) // returns  ['acd', 'abd']

/**
 * Escaping

    One of the most important concepts you need to understand to avoid 
    errors when using regular expressions is how to escape special 
    characters with a backslash \ in front of them. For example, to 
    match words that ends with a + sign, you need to escape the \+ special character:
 */

let pattern17 = new RegExp('\\w+\\+', 'g')
let input17 = 'wee+, let, kit, iPhone8+, i010290, n010290, s010290'
let result17 = input17.match(pattern17)
// console.log(result17) // returns ['wee+', 'iPhone8+']

/**
 * The code above creates a pattern that matches words that end
 * with a + sign by escaping the \+ special character. Without the
 * extra \ before the special characters, the regex engine will read
 * the pattern as /w++/, which is invalid.
 *
 * Note: When using a literal notation, you can define the pattern like
 * let pattern = /\w+\+/g
 * and the code above should work fine.
 */

/**
 * Anchors

    You can use anchors to match the start or end of a line or word in a string. 
    The commonly used anchors are ^, which matches the beginning of a line, 
    and $, which matches the end of a line.
 */

const pattern18 = /^The/
const string18 = 'The quick brown fox jumps over the lazy dog.'
// console.log(string18.match(pattern18)) // Output: ["The"]

const pattern19 = /\.$/g
const string19 = 'The quick brown fox. jumps over the lazy dog.'
// console.log(string19.match(pattern19)) // Output: ["."]

/**
 * Word boundaries

    Word boundaries serve the same purpose as anchors but match a word 
    instead of a single character. These are the two-word boundaries for special characters:

    \b - Matches a word boundary, which is the position between 
         a word character and a non-word character.
    \B - Opposite of \b; matches a non-word boundary.

    For example, you can match all words that start with "bet":
 */

const pattern20 = /\bbet/gi
const text20 = "Betty's better bet was to buy the blue belotusebet"
// console.log(text20.match(pattern20)) // returns ['Bet', 'bet', 'bet']

const pattern21 = /sion\b/gi
const text21 =
    'After much discussion, the team came to a consensus on the vision for the project.'
// console.log(text21.match(pattern21)) // returns ['sion', 'sion']

/**
 * Grouping

Grouping is used when you want to use alternatives multiple times in your pattern. For example:
 */

const pattern22 = /(quick|lazy) (brown|gray) (fox|dog)/g
const text22 = 'The quick brown fox jumps over the lazy dog.'
// console.log(text22.match(pattern22)) // returns ["quick brown fox"]

/**
 * Capturing groups

    Capturing groups are used to group and capture parts of a pattern 
    in a regular expression. Capturing groups are enclosed within parentheses, 
    instructing the regular expression engine to remember the matched content 
    within the group.

    For example, the following pattern, (hello)+, will match any sequence 
    of the word "hello" one or more times. However, if you wrap the "hello" 
    sequence within a capturing group, ((hello)+), you can capture the matched 
    content within the group. The regular expression engine will match and capture 
    the entire sequence, including repeated occurrences of the word "hello".
 */

const date = '02/18/2023'
const regex = /(\d{2})\/(\d{2})\/(\d{4})/
const newDate = date.replace(regex, '$3-$1-$2') // через $ меняет порядок
// console.log(newDate) // returns '2023-02-18'

/**
 * Backreferences

    Backreferences are a powerful feature of regular expressions that 
    allow you to reference captured groups within a regular expression. 
    As the previous example shows, I used the $n notation to reference a 
    captured group, where n is the group number.

    Backreferences are commonly used to find and replace duplicate words 
    within a string. For example, you can use a regular expression with a 
    capturing group and a backreference to find and replace duplicate words:
 */

const string1 = 'the the cat sat on the mat'
const regex1 = /\b(\w+)\b\s+\1/g
const newString1 = string1.replace(regex1, '$1')
// console.log(newString1) // Output: 'the cat sat on mat.'

/**
 * The code above creates a pattern that matches any duplicate
 * word within the string. The pattern uses a word boundary \b
 * to ensure that it matches only complete words, a capturing
 * group (\w+) to capture the word, and a backreference \1 to
 * reference the captured word. Then, it uses the replace method
 * to replace the entire match with the captured word, effectively
 * removing the duplicate word.
 */

/**
 * Named capturing groups

    Named capturing groups are a variation of 
    capturing groups that allow you to assign names 
    to the captured groups, making it easier to extract 
    the matched text. Named capturing groups are represented 
    by the (?<name>...) syntax, where name is the name of the 
    capturing group. Here is an example:
 */

const strinG = 'John Doe'
const regeX = /(?<first>\w+)\s(?<last>\w+)/
const match = strinG.match(regeX)
// console.log(match.groups) // returns { first: 'John', last: 'Doe' }

/**
 * The code above creates a pattern that matches two words separated 
 * by a space and creates two named capturing groups, first for the 
 * first word and last for the second word, and then logs the group 
 * properties to the console using the groups method.

    Named capturing groups can be helpful when you want to extract specific 
    parts of a string using regular expressions. For example, you can use 
    named capturing groups to extract data from a structured text file, such 
    as a log file or a configuration file.

Let's explore the lookahead and lookbehind assertions in the next section.
 */

/**
 * Parsing data

    Regular expressions can be used to extract specific data from a string. 
    For example, you could use a regular expression to 
    extract all the URLs from a block of text:
 */

const texted =
    'Check out this site: https://www.example.com and also this one: http://www.another-example.com'
const urls = texted.match(/https?:\/\/\S+/g)
console.log(urls) // returns ['https://www.example.com', 'http://www.another-example.com']
