let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
  {name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
  {name: '23rd&Lex', discovered: null}
]

function depthFirstSearch(rootNode, vert, edges) {
  let stack = []
  let found = []
  stack.push(rootNode)
  while (stack.length > 0) {
    console.log("Current Stack: \n", stack, "\n")
    let node = stack.pop()
    console.log("Node: ", node.name)
    let adj = findAdjacent(node.name, vert, edges)
    if (node.discovered == null) {
      node.discovered = true;
      console.log("Adding ", adj, "to the stack")
      console.log("New Stack: \n", )
      stack.push(e => stack.concat(adj))

    }

    console.log("Adding Node: ", node.name)
    found.push(node)
  }

  return found;
}

function findAdjacent(street, vert, edges) {
  let r = edges
          .filter(edge => edge.includes(street))
          .map(edge => edge.filter(node => node != street)[0])
          .map(name => findNode(name, vert))
          .filter(node => node.discovered == null)

    console.log("ADJACENT:", r)
  return r
}

function findNode(street, vertices) {
  return vertices.find(vert => vert.name == street)
}

console.log("Search:\n", depthFirstSearch(vertices[0], vertices, edges))
