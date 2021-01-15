# Abstract Factory Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).

### Design principles

* Depend upon abstractions. Do not depend concrete classes.

It suggests that our high-level components shoudl not depend on our low-level componets; rather, they should both depend on abstractions.

This principle aplies to the Factory Method, but is not the only technique for adhering to the Dependency Inversion principle, but is one of the more powerful ones.

* If you use *new*, you will be holding a reference to a concrete class. Use a factory to get around that.
* If you derive from a concrete class, you are depending on a concrete class. Derive from abstraction, like an interface or an abstract class.
* If you override an implemented method, then your base class wasn't really an abstraction to start with. Those methods implemented in the base class are meant to be shared by all your subclasses.

### The Abstract Factory Pattern



