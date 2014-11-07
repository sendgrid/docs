---
seo:
  title: Vlang Hello World
title: Hello World
weight: 100
layout: page
navigation:
  show: true
---
Vlang is an open source Domain Specific Embedded Language (DSEL) built on top of D programming language. At the moment Vlang consists multiple packages. The core part of Vlang is the esdl package. ESDL stands for Electronic System Description Language. Additionally Vlang also has a port of the UVM (Universal Verification Methodology). Since the Vlang UVM port is a word-by-word translation of the SystemVerilog UVM library, much of the Vlang User Manual will focus on the core language capabilities provided by the esdl package. For UVM, please refer to the UVM user guide provided by accellera. In this manual, we will only document the UVM extensions exclusive to Vlang.

For details of the underlying D Programming Language, please refer to its homepage at http://dlang.org.

## Installation
Since Vlang is built on top of D Programming Language, you need a working installation of D Compiler DMD to compile Vlang programs. To install DMD, follow the instructions available at http://dlang.org

You also need to download the Vlang package. Follow the instructions available at http://github.com/coverify/vlang .

## Hello World
To compile the program, we use the rdmd build utility installed with DMD compiler.

{% codeblock lang:d %}
import esdl;
class Hello: Entity {
  void sayHello() {
    import std.stdio: writeln;
    writeln("Hello World from: ", getFullName());
  }
  Task!sayHello greet[2];
}
class VlangWorld: RootEntity {
  this(string name) {
    super(name);
  }
  Hello hello[2];
}
void main() {
  auto theRoot = new VlangWorld("theRoot");
  theRoot.elaborate();
  theRoot.simulate(100.nsec);
}
{% endcodeblock %}

The program prints "Hello World" greetings four times, each from the pair of tasks instantiated in the couple of entity objects. The greetings strings also indicate the hierarchy the greetings originates from.

```
$ rdmd -I${VLANGDIR}/src helloWorld.d
>>>>>>>>>> Starting Phase: ELABORATE
>>>>>>>>>> starting Phase: CONFIGURE
********** No default timeUnit specified; setting timeUnit to timePrecision: 1.psec
>>>>>>>>>> Starting Phase: BIND
>>>>>>>>>> Calling "endElab" for all module instances
>>>>>>>>>> Start of Simulation
Hello World from: theRoot.hello[0].greetWorker[0]
Hello World from: theRoot.hello[0].greetWorker[1]
Hello World from: theRoot.hello[1].greetWorker[0]
Hello World from: theRoot.hello[1].greetWorker[1]
 > Shutting down all the active tasks ....
 > Shutting down all the Routine Threads ....
 > Simulation Complete....
```

