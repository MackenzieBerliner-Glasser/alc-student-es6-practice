// a somewhat straightforward topic.
const name = 'jim';
const greeter = name => 'hi ' + name;
greeter(name);

const greeterWithTemplate = name => `hi ${name}`;
greeterWithTemplate(name);

//pretty cool syntactic sugar and a good way to avoid long ambiguous strings.

