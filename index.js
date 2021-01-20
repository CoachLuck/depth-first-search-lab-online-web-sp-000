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
  let found = [rootNode]
  let stack = []
  stack.push(rootNode)
  while (stack.length > 0) {
    let node = stack.pop()
    if (node.discovered == null) {
        node.discovered = true;
        findAdjacent(node.name, vert, edges).forEach(node => {
            found.push(node)
            stack.push(node)
        })
    }
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
