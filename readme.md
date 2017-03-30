# React Event System Example

Demo for comparing React ``Synthetic Event`` and DOM ``Native Event`` handling.

Because the React ``Synthetic`` events are different from the DOM ``Native`` events, I'll do the experiments in the following:

1. DOM Native Events Propagation with ``Capture`` phase
2. DOM Native Events Propagation with ``Bubble`` phase
3. React ``Synthetic`` Events with batch ``setState``
4. React ``Synthetic`` Events with ``setState`` within Life Cycle
5. React ``Synthetic`` Events with Redux ``actions``
6. React ``Synthetic`` Events, ``setState`` and DOM Native Events
7. React ``Synthetic`` Events, Redux ``actions`` and DOM Native Events


## References

1. [解惑: JavaScript事件机制](http://www.cnblogs.com/hustskyking/p/problem-javascript-event.html)