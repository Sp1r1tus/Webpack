import * as React from "react";
import * as ReactDOM from "react-dom";

import FirstComponent from "./FirstComponent";

export class App extends React.Component {
    render() {
        return <div>
            ich bin App.tsx
             <FirstComponent test="Hello FirstComponent" />
            </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));