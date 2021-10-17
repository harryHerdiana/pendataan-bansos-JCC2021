import Container from "@mui/material/Container";
import Link from "../src/Link";
import Button from "@mui/material/Button";
import classes from "./css/index.module.css";
import Image from 'next/image'
import LogoBandung from '../src/images/logo-bandung.png'
import WaliWakil from '../src/images/Walikotawakil.png'
import { Fragment } from "react";
import Copyright from "../src/Copyright";

export default function Index() {
 
  return (
<Fragment>

<Container maxWidth="sm">
      <div className={classes.logo}><Image height="200" width="200" src={LogoBandung}/></div>
      <h1 className={classes.text}>
        <span className={classes.green_text}>
          Hayu wargi komplek Panghegar.
        </span>
        <br /> 
        Daftarkan diri anda agar dapat menikmati bantuan bansos.
        <br />
      </h1>
      <div className={classes.center}>
        <Button variant="contained" component={Link} noLinkStyle href="/form-container">
          Daftar
        </Button>
      </div>
      <div className={classes.logo}><Image height="200" width="350" src={WaliWakil}/></div>
    </Container>
    <Copyright/>
</Fragment>
  );
}
