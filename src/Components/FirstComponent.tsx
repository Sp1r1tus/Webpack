import * as React from "react";
import * as ReactDOM from "react-dom";

 interface IMyCompomentProps {
    test?: string;
    data?: any;
}
interface IMyComponentState {
    message?: string;
}
//export class FirstComponent extends React.Component {
class FirstComponent extends React.Component<IMyCompomentProps, IMyComponentState> {
    constructor(props: IMyCompomentProps) {
        super(props);
        this.state = {
            message: '1'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this._onDemo();
        }
            , 2000);
    }

    _onDemo = () => {
        this.setState({ message: 'OnDemo' });
    }

    render() {
        return <div>
            {this.props.test}

            Ich bin FirstComponent.tsx
          

        </div>;
    }
}

//ReactDOM.render(<FirstComponent />, document.getElementById('root'));

export default FirstComponent;