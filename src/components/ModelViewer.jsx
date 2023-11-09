import "@google/model-viewer";

function ModelViewer(props) {
    return (
        <div className="mviewer mx-auto">
            <model-viewer
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    touchAction: "none",
                }}
                src={props.modelSrc}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                shadow-intensity="1.7"
                autoplay
                exposure="1.31"
                environment-image="legacy"
                shadow-softness="0.78"
                auto-rotate
                camera-orbit="-118.3deg 65.78deg 9.952m"
                field-of-view="30deg"
            ></model-viewer>
        </div>
    );
}

export default ModelViewer;
