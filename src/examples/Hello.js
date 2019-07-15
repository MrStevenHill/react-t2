import React, { memo } from "react";

const Hello = ({ name }) => <div>Hello {name}!</div>;

export default memo(Hello);
