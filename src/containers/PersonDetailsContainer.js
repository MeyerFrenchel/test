import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Item from '../components/Item';


class PersonDetailsContainer extends React.Component {
  
  
    
  render() {
    const { name, height, mass, gender, birth_year, 
            hair_color, skin_color, eye_color} = this.props.person;
    return(
      <div>
        <Header title={name} />
        
        <Item topText="Height" bottomText={`${height} cm`} />
        <Item topText="Mass" bottomText={mass} />
        <Item topText="Gender" bottomText={gender} />
        <Item topText="Birth Year" bottomText={birth_year} />
        <Item topText="Hair Color" bottomText={hair_color} />
        <Item topText="Skin Color" bottomText={skin_color} />
        <Item topText="Eye Color" bottomText={eye_color} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    person: state.global.person,
    personHomeworld: state.global.planet.name
  }
}

export default connect(mapStateToProps)(PersonDetailsContainer);