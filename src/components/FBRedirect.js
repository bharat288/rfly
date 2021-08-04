import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { isIOS,isAndroid } from "react-device-detect";
import "bootstrap/dist/css/bootstrap.min.css"
const FBRedirect = () => {
    const {id}= useParams();
    const [deviceName,setDeviceName] = useState();
    const [deviceLink,setDeviceLink] = useState();


    useEffect(()=>{
        console.log("Effect "+id)
        detectDevice(id)
    },[])

    const detectDevice = (id)=>{
       console.log(id)
        if(isIOS){
            console.log("ios")
           
           setDeviceName("IOS")
           setDeviceLink("fb://profile/"+id)
           window.location.href="fb://profile/"+id;
        
         
        }
        else if (isAndroid){
            console.log("android")
            setDeviceName("Android")
            setDeviceLink("fb://page/"+id)
            window.location.href="fb://page/"+id;
       
        }else{
            console.log("other")
            setDeviceName("Other")
            setDeviceLink("https://www.facebook.com/"+id)
         
        }
      
    }
   // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    return ( 
        <div className="container-fluid">
            <div className="row justify-content-center mt-5">
                <div className="col-8">
                    <div className="card">
                        <div className="card-body text-center">
                            <a href={"https://www.facebook.com/"+id}>Open in Browser</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center m-4">
                <div className="col-6 text-center">
                    OR
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card">
                        <div className="card-body text-center">
                            <a href={deviceLink}>Open Facebook App</a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
     );
}
 
export default FBRedirect;