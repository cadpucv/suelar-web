import { Link } from "react-router-dom";

interface IProps {
    name: string;
    image: string;
    link: string;
}

function WikiButton(props: IProps) {
    return (
        <div className="w-40 h-52 mx-auto">
            <button className="w-full h-full rounded-md bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition duration-300 relative">
                <Link to={props.link}>
                    <div className="p-2">
                        <div className="text-center pb-2">{props.name}</div>
                        <div className="w-20 h-20 mx-auto flex items-center justify-center">
                                <img
                                    style={{
                                        width: "100%",
                                    }}
                                    src={props.image}
                                />
                        </div>
                    </div>
                </Link>
            </button>
        </div>
    );
}

export default WikiButton;
