import React, { useState } from 'react';
import { 
  Container, Typography, Box, Paper, Card, CardMedia, 
  CardContent, CardActions, Button, Collapse, IconButton 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const personalitiesData = [
  {
    name: "Captain America",
    image: "https://wallpapers.com/images/featured/marvel-captain-america-w9n6ryri2sljuwzl.jpg",
    description: "Steve Rogers is a World War II veteran who was enhanced to the peak of human physicality by an experimental serum and frozen in ice for decades."
  },
  {
    name: "Iron Man",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:512,cw:2048,ch:2048,q:80,w:2048/ZvJSBXg4cW6WN4S4xrVuf4.jpg",
    description: "Tony Stark is a genius billionaire, playboy, and philanthropist who created a powered suit of armor to save his life and protect the world."
  },
  {
    name: "Thor",
    image: "https://static.wikia.nocookie.net/marvelcentral/images/f/fb/Thor_n-1-.jpg/revision/latest/scale-to-width-down/1200?cb=20141018024144",
    description: "The God of Thunder and former King of Asgard, Thor wields the powerful hammer Mjolnir and the axe Stormbreaker to control lightning."
  },
  {
    name: "Hulk",
    image: "https://queenstudios.shop/cdn/shop/files/2.Hulk1-3StatueAdvengersPost_620x.png?v=1711017244",
    description: "Bruce Banner is a brilliant scientist who transforms into a giant, green-skinned monster when angry."
  },
  {
    name: "Black Widow",
    image: "https://i.pinimg.com/474x/70/f8/f0/70f8f08931e6798e02f9e83c0c066550.jpg",
    description: "Natasha Romanoff is a highly trained former KGB assassin and agent of S.H.I.E.L.D., known for her master spy skills."
  },
  {
    name: "Hawkeye",
    image: "https://m.media-amazon.com/images/M/MV5BMTAxMTM0MjA1NDleQTJeQWpwZ15BbWU3MDA0Nzk2Nzc@._V1_.jpg",
    description: "Clint Barton is an expert marksman and archer, utilizing a variety of specialized 'trick arrows' to fight alongside the Avengers."
  },
  {
    name: "Vision",
    image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/c09857a7_bae2_4268_aabd_d3f50edb5fdf.jpeg",
    description: "An android possessing a synthetic vibranium body, Vision was brought to life by the Mind Stone."
  },
  {
    name: "Scarlet Witch",
    image: "https://static.wikia.nocookie.net/marvelmovies/images/2/21/DSMOM_-_Scarlet_Witch.jpg/revision/latest?cb=20220410131401",
    description: "Wanda Maximoff possesses powerful chaos magic and reality-warping abilities, fueled by her emotions."
  },
  {
    name: "Quicksilver",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1e/Quicksilver_Infobox.jpg/revision/latest?cb=20241211144208",
    description: "Pietro Maximoff is capable of moving at superhuman speeds, allowing him to react faster than the human eye can perceive."
  },
  {
    name: "War Machine",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/77/WarMachine-EndgameProfile.jpg/revision/latest?cb=20231025163822",
    description: "James Rhodes is a U.S. Air Force officer who operates the War Machine armor, a heavily weaponized version of the Iron Man suit."
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Logic to loop to the start when reaching the end
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % personalitiesData.length);
    setExpanded(false);
  };

  const handleBack = () => {
    setIndex((prev) => (prev - 1 + personalitiesData.length) % personalitiesData.length);
    setExpanded(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Header & Identification */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          THE AVENGERS
        </Typography>
        <Paper elevation={0} sx={{ p: 2, bgcolor: '#f0f0f0', border: '1px solid #ddd' }}>
          <Typography variant="h6" sx={{ fontWeight: 400 }}>Henry Yeoj Dela Cruz</Typography>
          <Typography variant="body1">C-PEITEL3</Typography>
          <Typography variant="body1">IT3B</Typography>
        </Paper>
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={handleBack} startIcon={<NavigateBeforeIcon />}>
          PREVIOUS
        </Button>
        <Button variant="contained" onClick={handleNext} endIcon={<NavigateNextIcon />}>
          NEXT
        </Button>
      </Box>

      {/* Main Personality Card */}
      <Card variant="outlined" sx={{ borderRadius: 1 }}>
        <CardMedia
          component="img"
          height="450"
          image={personalitiesData[index].image}
          alt={personalitiesData[index].name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ pb: 0 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>{personalitiesData[index].name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Character {index + 1} of {personalitiesData.length}
          </Typography>
        </CardContent>

        <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setExpanded(!expanded)}>
            <Typography variant="button" sx={{ mr: 1 }}>{expanded ? "LESS" : "MORE"}</Typography>
            <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
          </IconButton>
        </CardActions>

        {/* Togglable Information */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ pt: 0 }}>
            <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif' }}>
              {personalitiesData[index].description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
}
