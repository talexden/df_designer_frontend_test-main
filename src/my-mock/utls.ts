import graphs from '../mocks/graphs';
import {GraphEdgeType, inGraphsSetType} from '../type/in-graphs-set-type';

type edgesMapValueType = {
  fromId: number[],
  toId: number[],
}

const edgesMap = new Map<number, edgesMapValueType>();

export const createGraphsMap = (edges: GraphEdgeType[]): void => {
  for (const edge of edges) {
    const graphFromId = edgesMap.get(edge.fromId);
    if (graphFromId) {
      graphFromId.toId.push(edge.toId);
    } else {
      edgesMap.set(edge.fromId, {fromId: [], toId: [edge.toId]})
    }

    const graphToId = edgesMap.get(edge.toId);
    if (graphToId) {
      graphToId.fromId.push(edge.fromId);
    } else {
      edgesMap.set(edge.fromId, {fromId: [], toId: [edge.toId]})
    }

  }

};

type EdgeType = {
  from: number[],
  to: number[],
};

type TableType = {
  [key: number]: Map<number, EdgeType>
}

class Graph {
  private table: TableType = {
    [0]: new Map<number, EdgeType>()
  }

  setRow = (row: number, content: EdgeType) => {
    this.table[row].set(1, content);
  }


  newRow = (name: string) => {
    const row = {
      [`row${name}`] : {
        rowName: name,
        rowContent: [],
      }
    }

    this.table = Object.assign(this.table, row)
  }
}