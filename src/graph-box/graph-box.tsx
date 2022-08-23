import './graph-box.css'
import {GraphType} from '../type/graph-type';

type GraphBoxType = {
  node: GraphType,

}

function GraphBox ():JSX.Element {
  let graphBoxMod = '';
  if (false) {
    graphBoxMod = ' graph-box--first'
  }
  if (false) {
    graphBoxMod = ' graph-box--last'
  }

  return(
    <div className={`graph-box${graphBoxMod}`}>Lorem</div>
  )
}

export default GraphBox;