let g = new Graph(6);
var vtcs = [a, b, c, d, e, f];
for (let i = 0; i < vtcs.length; i++) {
  g.addEdge("a", "b");
  g.addEdge("a", "d");
  g.addEdge("a", "e");
  g.addEdge("b", "c");
  g.addEdge("d", "e");
  g.addEdge("e", "f");
  g.addEdge("e", "c");
  g.printGraph();
}
