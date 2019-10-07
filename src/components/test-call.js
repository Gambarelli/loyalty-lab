import React, { useEffect } from 'react';
import ApiService  from "../services/apiService";

const Testcall = () => {

    const apiService = new ApiService();

    useEffect(() => {
        debugger;
        const list = apiService.addPoints(1000).then(({data}) => {
        debugger;
        console.log(data);
        });
            
    },[]);

    return (
        <div>
            
        </div>
    );
};

export default Testcall;

