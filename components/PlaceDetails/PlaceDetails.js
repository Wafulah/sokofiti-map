import React from "react";
import Image from "next/image";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles.js";

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const classes = useStyles();

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Format the date as you like
  }
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.images[0].url}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        {/* <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box> */}
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            Ksh.{place.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Size</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.size.name}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Color</Typography>
          <div
            style={{
              width: "20px", // Adjust the width and height as needed
              height: "20px",
              backgroundColor: place.color.value, // Use the hex color as the background
              borderRadius: "50%", // Make it a circle
            }}
          ></div>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Uploaded</Typography>
          <Typography gutterBottom variant="subtitle1">
            {formatDate(place.createdAt)}
          </Typography>
        </Box>
        {/* {place?.awards?.map((award, i) => (
          <Box
            key={i}
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <Image src={award.images.small} alt="sokofiti" />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))} */}
        {/* {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))} */}
        <Chip
          size="small"
          label="Organic"
          className={`${classes.chip} ${classes.backgroundColor}`}
        />
        {/* {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )} */}
        {/* {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )} */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            window.open(
              "https://sokofiti-store.vercel.app/product/" + place.id,
              "_blank"
            )
          }
        >
          View Product
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            window.open(
              "https://sokofiti-store.vercel.app/product/" + place.id,
              "_blank"
            )
          }
        >
          Farmer
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
