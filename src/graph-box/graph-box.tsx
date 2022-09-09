import './graph-box.css'
import {inGraphsSetType} from '../type/in-graphs-set-type';
import CSS from 'csstype';

type GraphBoxType = {
  // node: GraphType,
  name: string
}



function GraphBox ({name}: GraphBoxType ):JSX.Element {
  const boxStyle: CSS.Properties = ({gridArea: name});
  let graphBoxMod = '';
  if (false) {
    graphBoxMod = ' graph-box--first'
  }
  if (false) {
    graphBoxMod = ' graph-box--last'
  }

  return(
    <div style={boxStyle} className={`graph-box${graphBoxMod}`}>{name}</div>
  )
}

export default GraphBox;