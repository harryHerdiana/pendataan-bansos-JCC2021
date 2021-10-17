import { Fragment } from "react";
import Form from "./form";
import Copyright from "../src/Copyright";


function FormDisplay(){


    function testDataHandler(testData){
        console.log(testData)

    }

return(
    <Fragment>
         <Form onTestData={testDataHandler}/>
        <Copyright/>
    </Fragment>
)
   
}
export default FormDisplay;