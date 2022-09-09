export type GraphNodeType = {
  id: number,
  name: string
}

export type GraphEdgeType = {
  fromId: number,
  toId: number
}

export type inGraphsSetType = {
  nodes: GraphNodeType[],
  edges: GraphEdgeType[],
}

export type GraphPositionType = {
  posX: number;
  posY: number;
}

export type GraphType = {
  node: GraphNodeType;
  edge: GraphEdgeType;
  position: GraphPositionType;
}

export type EdgeLineType = {
  startX: number,
  startY: number,
  endX: number,
  endY: number
}