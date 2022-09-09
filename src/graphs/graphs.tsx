import './graphs.css'
import {mockSortedGraphs} from '../my-mock/my-mock';
import GraphBox from '../graph-box/graph-box';
import Edges from '../edges/edges';
import CSS from 'csstype';
import {GRID_GAP} from '../common/const';


const createGridAreas = (sortedGraphs: string[][]): string => sortedGraphs.map((i)=> (`"${i.join(' ')}"`) ).join(' ');
const gridAreas = createGridAreas(mockSortedGraphs)

const STYLE: CSS.Properties = {
  gridTemplateAreas: `${gridAreas}`,
  gap: GRID_GAP,
};

function Graphs (): JSX.Element {
  return (
    <div className='main__graphs graphs' style={STYLE} >

      <Edges />

      {mockSortedGraphs.map((items) => (
        items.flatMap((item) => <GraphBox key ={`GraphBox${item}`} name={item}/>)
      ))}

    </div>
  )
}

export default Graphs;