import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Item from '../components/Item';


import { getPlanet } from '../actions/planetsActions';
import { format } from '../utils';

class PlanetDetailsContainer extends React.Component {
  
  componentWillMount() {
    // Request API if there is no planet on state
    if (this.props.planet.name === undefined) {
      const id = this.props.match.params.id;
      this.props.dispatch(getPlanet(id));
    }
  }
  
  render() {
    const { name, population,rotation_period, orbital_period, diameter, climate, gravity } = this.props.planet;
    return(
      <div>
        <Header title={name} />
        <Item topText="Population" bottomText={`${format(population)}`} />
        <Item topText="Diameter" bottomText={diameter} />
        <Item topText="Climate" bottomText={climate} />
        <Item topText="Rotation-period" bottomText={rotation_period} />
        <Item topText="Rotation-period" bottomText={orbital_period} />
        <Item topText="Gravity" bottomText={gravity} />
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    planet: state.global.planet
  }
}

export default connect(mapStateToProps)(PlanetDetailsContainer);