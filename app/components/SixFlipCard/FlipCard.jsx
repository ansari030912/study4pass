import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const FlipCard = () => {
  const features = [
    {
      title: "Exam Prince",
      description: "Easy to refund",
      img: "1.png",
    },
    {
      title: "Exam Prince",
      description: "Latest Questions & Answers",
      img: "2.png",
    },
    {
      title: "Exam Prince",
      description: "High success rate of 96.6%",
      img: "3.png",
    },
    {
      title: "Exam Prince",
      description: "Instantly prepared access",
      img: "4.png",
    },
    {
      title: "Exam Prince",
      description: "Quick access availability",
      img: "5.png",
    },
    {
      title: "Exam Prince",
      description: "Safe, Private, Reliable",
      img: "6.png",
    },
  ];

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center" }}
      className="-mt-44 lg:-mt-48"
    >
      <Grid container spacing={1}>
        {features.map((item, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={2}
            key={index}
            className="flex justify-center"
          >
            <div className="flip-card cursor-pointer">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/img/${item.img}`}
                    alt={item.description}
                  />
                </div>
                <div className="flip-card-back">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      className="text-blue-500"
                      component="div"
                      fontSize={18}
                    >
                      <b>{item.title}</b>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b
                        className="text"
                        style={{
                          fontSize: 12,
                          display: "flex",
                          justifyContent: "center",
                          padding: "0px",
                        }}
                      >
                        {item.description}
                      </b>
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlipCard;
