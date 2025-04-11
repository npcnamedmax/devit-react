import { useEffect } from 'react';
import React from 'react';

class Test extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        Object.entries(this.props).forEach(
            ([key, val]) =>
                prevProps[key] !== val && console.log(`Prop '${key}' changed`),
        );
        if (this.state) {
            Object.entries(this.state).forEach(
                ([key, val]) =>
                    prevState[key] !== val &&
                    console.log(`State '${key}' changed`),
            );
        }
    }

    render() {
        return <div className='hidden'>Test component</div>;
    }
}

export default Test;
