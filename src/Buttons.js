import React from 'react';
import CalcButton from './CalcButton';


class Buttons extends React.Component{
  render(){
    return (
      <div className="buttons">
        <CalcButton id="clear" icon="CE"/>
        <CalcButton id="divide" icon="/"/>
        <CalcButton id="multiply" icon="X"/>
        <CalcButton id="nine" icon={9}/>
        <CalcButton id="eight" icon={8}/>
        <CalcButton id="seven" icon={7}/>
        <CalcButton id="subtract" icon="-"/>

        <CalcButton id="six" icon={6}/>
        <CalcButton id="five" icon={5}/>
        <CalcButton id="four" icon={4}/>
        <CalcButton id="three" icon={3}/>
        <CalcButton id="two" icon={2}/>
        <CalcButton id="one" icon={1}/>
        <CalcButton id="zero" icon={0}/>
        <CalcButton id="decimal" icon="."/>
        <CalcButton id="equals" icon="="/>
        <CalcButton id="add" icon="+"/>

      </div>
    )
  }
}

export default Buttons;
