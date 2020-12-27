import react,{createContext,Component, Children} from "react";

export const MenyContext = createContext();


class MenyContextProvider extends Component {
    state ={
        foods:[],
        drinks:[]
    };
    render() {
        return (
            <MenyContext.Provider value={...this.state}>
                {this.props.children }
            </MenyContext.Provider>
        );
    }
}
export default MenyContextProvider;

