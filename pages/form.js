import Container from "@mui/material/Container";;
import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import classes from "./css/index.module.css";
import Image from "next/image";
import daftar from "../src/images/daftar.png";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Form(props) {
  const [lainnyaToggler, setLainnyaToggler] = useState(false);
  const router = useRouter();
  const inputNamaRef = useRef();
  const inputNikRef = useRef();
  const inputKkRef = useRef();
  const fotoKtpRef = useRef();
  const fotoKkRef = useRef();
  const inputUmurRef = useRef();
  const inputJenisKelaminRef = useRef();
  const inputAlamatRef = useRef();
  const inputRtRef = useRef();
  const inputRwRef = useRef();
  const penghasilanSebelumRef = useRef();
  const penghasilanSetelahRef = useRef();
  const alasanBantuanRef = useRef();

  const submitHandler = function (event) {
    event.preventDefault();
    const enteredName = inputNamaRef.current.value;
    const enteredNik = inputNikRef.current.value;
    const enteredKk = inputKkRef.current.value;
    const enteredFotoKtp = fotoKtpRef.current.value;
    const enteredFotoKk = fotoKkRef.current.value;
    const enteredUmur = inputUmurRef.current.value;
    const enteredJenisKelamin = inputJenisKelaminRef.current.value;
    const enteredAlamat = inputAlamatRef.current.value;
    const enteredRt = inputRtRef.current.value;
    const enteredRw = inputRwRef.current.value;
    const enteredPenghasilanSebelum = penghasilanSebelumRef.current.value;
    const enteredPenghasilanSetelah = penghasilanSetelahRef.current.value;
    const enteredAlasanBantuan = alasanBantuanRef.current.value;

    const dataForm = {
      nama: enteredName,
      nik: enteredNik,
      kk: enteredKk,
      fotoktp: enteredFotoKtp,
      fotokk: enteredFotoKk,
      umur: enteredUmur,
      jenisKelamin: enteredJenisKelamin,
      alamat: enteredAlamat,
      rt: enteredRt,
      rw: enteredRw,
      penghasilanSebelum: enteredPenghasilanSebelum,
      penghasilanSetelah: enteredPenghasilanSetelah,
      alasanBantuan: enteredAlasanBantuan,
    };

    props.onTestData(dataForm);
    
    router.push("/loading-page");
  };
  const Input = styled("input")({
    display: "none",
  });
  const [umur, setUmur] = useState([]);
  const [idNomor, setIdNomor] = useState([]);
  const [kkNomor, setKkNomor] = useState([]);
  const [alamatLength, setAlamatLength] = useState([]);

  const identityHandler = function (event) {
    const identityValue = event.target.value;
    setIdNomor(identityValue);
  };

  const kKHandler = function (event) {
    const identityValue = event.target.value;
    setKkNomor(identityValue);
  };

  const umurHandler = function (event) {
    const umurValue = event.target.value;
    setUmur(umurValue);
  };

  const alamatHandler = function (event) {
    const alamatValue = event.target.value;
    setAlamatLength(alamatValue);
  };

  const lainnyaHandler = function (event) {
    const alasanValue = event.target.value;
    if (alasanValue === 4) {
      setLainnyaToggler(true);
    } else {
      setLainnyaToggler(false);
    }
  };
  return (
    <Container maxWidth="sm">

      <div className={classes.logo}>
        <Image height="200" width="200" src={daftar} />
      </div>
      <h2 className={classes.text}>
        Silakan isi
        <span className={classes.green_text}> Formulir </span>
        Dibawah ini.
      </h2>
      <div className={classes.form}>
        <form method="post" onSubmit={submitHandler}>
          <Stack spacing={2}>
            <TextField
              id="nama"
              variant="outlined"
              label="Nama"
              type="text"
              required
              inputRef={inputNamaRef}
            />
            <TextField
              variant="outlined"
              label="NIK"
              name="nik"
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              required
              helperText="Masukkan NIK anda sesuai kartu identitas"
              inputRef={inputNikRef}
              onChange={identityHandler}
              error={idNomor.length < 16}
            />
            <TextField
              variant="outlined"
              label="Nomor Kartu Keluarga"
              name="kk"
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              required
              helperText="Masukkan Nomor KK anda."
              inputRef={inputKkRef}
              onChange={kKHandler}
              error={kkNomor.length < 16}
            />
            <label htmlFor="contained-button-file">
              <Input
                name="fotoktp"
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                ref={fotoKtpRef}
              />
              <Button variant="contained" component="span">
                Unggah KTP
              </Button>
              <p className={classes.label_button}>
                Unggah Foto KTP anda dengan max file 2Mb (JPG/JPEG/PNG/BMP)
              </p>
            </label>
            <label htmlFor="contained-button-file">
              <Input
                name="fotokk"
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                ref={fotoKkRef}
              />
              <Button variant="contained" component="span">
                Unggah KK
              </Button>
              <p className={classes.label_button}>
                Unggah Foto KK anda dengan max file 2Mb (JPG/JPEG/PNG/BMP)
              </p>
            </label>
            <TextField
              variant="outlined"
              label="Umur"
              name="umur"
              type="number"
              defaultValue={25}
              helperText="Minimal umur pendaftar adalah 25 tahun"
              inputRef={inputUmurRef}
              onChange={umurHandler}
              error={umur < 25}
            />
            <TextField
              select
              label="Jenis Kelamin"
              name="jenisKelamin"
              inputRef={inputJenisKelaminRef}
            >
              <MenuItem key="pria" value="pria">
                Laki-laki
              </MenuItem>
              <MenuItem key="wanita" value="wanita">
                Perempuan
              </MenuItem>
            </TextField>
            <TextField
              variant="outlined"
              label="Alamat"
              name="alamat"
              type="text"
              required
              inputRef={inputAlamatRef}
              onChange={alamatHandler}
              error={alamatLength > 250}
            />
            <TextField
              variant="outlined"
              label="RT"
              name="rt"
              type="number"
              required
              inputRef={inputRtRef}
            />
            <TextField
              variant="outlined"
              label="RW"
              name="rw"
              type="number"
              required
              inputRef={inputRwRef}
            />
            <TextField
              variant="outlined"
              label="Penghasilan Sebelum Pandemi"
              name="penghasilanSebelum"
              type="number"
              required
              inputRef={penghasilanSebelumRef}
              helperText="Masukkan rata-rata penghasilan anda per bulan"
            />
            <TextField
              variant="outlined"
              label="Penghasilan Setelah Pandemi"
              name="penghasilanSetelah"
              type="number"
              required
              inputRef={penghasilanSetelahRef}
              helperText="Masukkan rata-rata penghasilan anda per bulan"
            />
            <TextField
              select
              label="Alasan Bantuan"
              name="alasanBantuan"
              inputRef={alasanBantuanRef}
              onChange={lainnyaHandler}
            >
              <MenuItem key={1} value={1}>
                Kehilangan pekerjaan
              </MenuItem>
              <MenuItem key={2} value={2}>
                Kepala keluarga terdampak atau korban Covid
              </MenuItem>
              <MenuItem key={3} value={3}>
                Tergolong fakir/miskin semenjak sebelum Covid
              </MenuItem>
              <MenuItem key={4} value={4}>
                Lainnya..
              </MenuItem>
            </TextField>
            {lainnyaToggler ? (
              <TextField
                variant="outlined"
                label="Alasan Bantuan Lainnya"
                name="alasanBantuan"
                type="text"
                required
                inputRef={alasanBantuanRef}
              />
            ) : (
              ""
            )}
            <FormControlLabel
              sx={{ fontSize: "0.8rem" }}
              control={<Checkbox required />}
              label="Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut."
            />
            <Button
              sx={{ width: "30%", textAlign: "center" }}
              variant="contained"
              type="submit"
            >
              Kirim
            </Button>
          </Stack>
        </form>
      </div>
    </Container>
  );
}
