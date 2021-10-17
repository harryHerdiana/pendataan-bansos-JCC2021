import Image from "next/image";
import loadingImg from '../src/images/loading.jpg'
import Copyright from "../src/Copyright";
import classes from './css/loading-page.module.css'
import { useRouter } from "next/router";

function LoadingPage() {
const router = useRouter()


setTimeout(function(){router.push("/form-response")},1500)
  return (
   <div className={classes.center}>
       <Image height="300" width="300" src={loadingImg}/>
   <h1 className={classes.text}>
          Silakan tunggu..
      </h1>
      <Copyright/>
   </div>
  );
}

export default LoadingPage;