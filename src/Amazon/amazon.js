import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Stack,
  TextField,
  Box,
  Rating,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Products from "./products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Amazon = () => {
  const [search, setSearch] = useState("");
  const [show1to500, setShow1TO500] = useState(false);
  const [show500to1000, set500TO1000] = useState(false);
  const [show1000to1500, set1000TO1500] = useState(false);
  const [show1500to2020, setShow1500TO2020] = useState(false);
  const [show45to5k, setShow45TO5K] = useState(false);
  const [isElmChecked, setIsElmChecked] = useState(false);
  const [sneakers, setSneakers] = useState(false);
  const [shirtsfilter, setShirtFilter] = useState(false);
  const [tshirtfilter, setTShirtFilter] = useState(false);
  const [loafersfilter, setLoafersFilter] = useState(false);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterData = Products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const shirt = () => {
    toast.success("Shirts are In-Stock", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const priceavailable = () => {
    toast.success("Price available In-Stock", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handlerFilterShirt = (e) => {
    setShirtFilter(e.target.checked);
    if (e.target.checked) {
      shirt();
    }
  };
  // tshirt notification
  const TShilterfilter = () => {
    toast.success("T-Shirt are available In-Stock", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handlerTshirts = (e) => {
    setTShirtFilter(e.target.checked);
    if (e.target.checked) {
      TShilterfilter();
    }
  };

  // indoor plants

  const indoorPlants = () => {
    toast.success("Plants are available In-Stock", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handlerPlants = (e) => {
    setIsElmChecked(e.target.checked);
    if (e.target.checked) {
      indoorPlants();
    }
  };
  // loofers
  const Loofersfilter = () => {
    toast.success("Loofer's are available In-Stock", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const HandlerLoofers = (e) => {
    setLoafersFilter(e.target.checked);
    if (e.target.checked) {
      Loofersfilter();
    }
  };
  // sneaker
  const Sneakernotification = () => {
    toast.success("Sneaker's are available In-Stock", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const HandlerSneakers = (e) => {
    setSneakers(e.target.checked);
    if (e.target.checked) {
      Sneakernotification();
    }
  };
  const handlerprice1to500 = () => {
    setShow1TO500(!show1to500);
  };
  const handlerprice500to1000 = () => {
    set500TO1000(!show500to1000);
  };

  const handlerprice1000to1500 = () => {
    set1000TO1500(!show1000to1500);
  };

  const handlerprice1500to2k = () => {
    setShow1500TO2020(!show1500to2020);
  };

  const handlerprice45to5k = () => {
    setShow45TO5K(!show45to5k);
    priceavailable();
  };

  const filteredData = filterData.filter((item) => {
    const priceValue = parseInt(
      item.price.replace("Rs: ", "").replace(",", "")
    );

    if (
      (show1to500 && priceValue >= 1 && priceValue <= 500) ||
      (show500to1000 && priceValue > 500 && priceValue <= 1000) ||
      (show1000to1500 && priceValue > 1000 && priceValue <= 1500) ||
      (show1500to2020 && priceValue > 1500 && priceValue <= 2020) ||
      (show45to5k && priceValue > 4500 && priceValue <= 5000) ||
      (!show1to500 &&
        !show500to1000 &&
        !show1000to1500 &&
        !show1500to2020 &&
        !show45to5k)
    ) {
      return true;
    }

    return false;
  });

  const filteredProducts = filteredData.filter((p) => {
    if (
      (!isElmChecked ||
        (isElmChecked && p.title.toLowerCase().includes("plant"))) &&
      (!sneakers || (sneakers && p.title.toLowerCase().includes("sneakers"))) &&
      (!shirtsfilter ||
        (shirtsfilter && p.title.toLowerCase().includes("shirts"))) &&
      (!tshirtfilter ||
        (tshirtfilter && p.title.toLowerCase().includes("t-shirt"))) &&
      (!loafersfilter ||
        (loafersfilter && p.title.toLowerCase().includes("loafers")))
    ) {
      return true;
    }
    return false;
  });

  return (
    <React.Fragment>
      <Container
        sx={{
          position: "relative",
          zIndex: +15,
          mt: 100,
          pt: 30,
          bgcolor: "white",
        }}
      >
        <TextField
          label="Search Product"
          value={search}
          onChange={handlerSearch}
          focused
          sx={{
            ml: 18,
            mt: -30,
            width: 1150,
            position: "absolute",
            zIndex: +5,
          }}
        />
        <Box
          sx={{
            bgcolor: "white",
            p: 4,
            ml: -20,
            mt: -30,
            width: 250,
            float: "left",
            position: "absolute",
            zIndex: +5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "primary.main",
              marginBottom:2

            }}
          >
            Choose your Products 
          </Typography>
          <Grid spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={shirtsfilter}
                    onChange={handlerFilterShirt}
                  />
                }
                label="Shirts"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox checked={tshirtfilter} onChange={handlerTshirts} />
                }
                label="T-shirts"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox checked={isElmChecked} onChange={handlerPlants} />
                }
                label="Indoor Plant"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox checked={loafersfilter} onChange={HandlerLoofers} />
                }
                label="Loafers"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox checked={sneakers} onChange={HandlerSneakers} />
                }
                label="Sneakers"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            p: 4,
            ml: -20,
            mt: 15,
            width: 250,
            float: "left",
            position: "absolute",
            zIndex: +5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "primary.main",
              marginTop:-4,
              marginBottom:2
              
            }}
          >
            Choose Price Products
          </Typography>
          <Grid spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show1to500}
                    onChange={handlerprice1to500}
                  />
                }
                label="1 to 500Rs"
              />
              <ToastContainer />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show500to1000}
                    onChange={handlerprice500to1000}
                  />
                }
                label="500 to 1000Rs"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show1000to1500}
                    onChange={handlerprice1000to1500}
                  />
                }
                label="1000 to 1500Rs"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show1500to2020}
                    onChange={handlerprice1500to2k}
                  />
                }
                label="1500 to 2000Rs"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel control={<Checkbox />} label="2000 to 2500Rs" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel control={<Checkbox />} label="2500 to 3000Rs" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel control={<Checkbox />} label="3000 to 3500Rs" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel control={<Checkbox />} label="3500 to 4000Rs" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel control={<Checkbox />} label="4000 to 4500Rs" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show45to5k}
                    onChange={handlerprice45to5k}
                  />
                }
                label="4500 to 5000Rs"
              />
              <Typography
                variant="h5"
                sx={{
                  float: "left",
                  position: "relative",
                  zIndex: 10,
                  fontWeight: "bold",
                  color: "primary.main",
                  marginTop:3,
                }}
              >
              Choose Brand
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ ml: 15, mt: -23 }}
        >
          {(filteredData && filteredProducts).map((item) => (
            <Grid item md={3} key={item.id} className="productsitems">
              <Card>
                <CardMedia
                  component="img"
                  src={item.img}
                  alt="image"
                  sx={{ minWidth: 150, height: 250 }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    {item.author}
                  </Typography>
                  <Stack spacing={1} sx={{ alignItems: "center" }}>
                    <Rating name="size-large" defaultValue={2} size="small" />
                  </Stack>
                  <Typography variant="h5" component="div" align="center">
                    Rs: {item.price}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "16px",
                    }}
                  >
                    <Button variant="contained" color="primary">
                      Add to Cart
                    </Button>
                    &nbsp;
                    <Button variant="contained" color="success">
                      Buy now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Amazon;
