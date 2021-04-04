import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";


export const Spinner = (props) => {
    const { promiseInProgress } = usePromiseTracker({ area: props.area, delay: 0 });

    return (
        promiseInProgress && (
            <div style={{
                zIndex: 10001, display: 'flex', justifyContent: 'center', position: 'absolute', alignItems: 'center',
                width: '100%', height: '100%',
                backgroundColor: 'rgba(0,0,0,0.2)'
            }}>
                <Loader type="Oval" color="#0fa8fa" height={100} width={100} />
            </div>
        )
    );
};

export default Spinner;