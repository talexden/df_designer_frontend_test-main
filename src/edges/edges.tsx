import './edges.css'
import EdgesLine from '../edges-line/edges-line';

function Edges ():JSX.Element {
  return (
    <svg className='edges' height="100%" width="100%">
      <EdgesLine />
    </svg>
  )
}

export default Edges;