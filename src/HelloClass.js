import * as React from "react";

class HelloClass extends React.PureComponent {
  render() {
    const { name } = this.props;
    return <div>Hello: {name}</div>;
  }
}

export default HelloClass;
