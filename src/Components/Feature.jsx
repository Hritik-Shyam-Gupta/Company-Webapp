import React from 'react';
import Featurebox from './Featurebox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
  return (
    <div id='features'>
    <h1>Features of Our Application</h1>
        <div className='a-container'>
            <Featurebox image={featureimage} title = 'Single App for all Devices' />
            <Featurebox image={featureimage1} title = 'Faster Networking' />
            <Featurebox image={featureimage2} title = 'Easy Usability Interface' />
        </div>
    </div>
  )
}

export default Feature;