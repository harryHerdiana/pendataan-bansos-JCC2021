import { useRouter } from "next/router";
import { Fragment, useState,useEffect } from "react";
import Button from "@mui/material/Button";
import classes from "./css/index.module.css";
import error from "../src/images/error.png";
import Image from "next/image";
import RK from '../src/images/RK 2.png'

function Waiter() {
  const [number, setNumber] = useState([0]);
  const [generatorStart,setGeneratorStart] = useState([true])
  const router = useRouter();
  function randomNumberGen() {
    let randomNumber = Math.round(Math.random() * 10);
    setNumber(randomNumber);
    console.log(number);
  }
  useEffect(()=>{
    if(number<=5 && generatorStart){
      randomNumberGen()
      console.log(generatorStart);
    }else{
      setGeneratorStart(false)
    }
  },generatorStart,number)

  function loadingData() {
    router.push("/loading-page");
  }

  function goToHome() {
    router.push("/");
  }

  return (
    <Fragment>
      {number <= 5 && generatorStart ? (
        <div className={classes.center}>
          <div className={classes.logo}>
            <Image height="245" width="350" src={error} />
          </div>
          <h1>Gagal mengirim data, mohon kirim ulang.</h1>
          <Button variant="contained" onClick={loadingData}>
            Kirim Ulang
          </Button>
        </div>
      ) : (
        <div className={classes.center}>
          <Image height="350" width="350" src={RK} />
          <h2>Terimakasih telah mengisi formulir, data akan segera kami proses.</h2>
          <Button variant="contained" onClick={goToHome}>
            Kembali ke Halaman Utama
          </Button>
        </div>
      )}
    </Fragment>
  );
}

export default Waiter;
