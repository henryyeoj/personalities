import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Collapse,
  IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const personalitiesData = [
  {
    name: "Captain America",
    image: "https://wallpapers.com/images/featured/marvel-captain-america-w9n6ryri2sljuwzl.jpg",
    description: "Steve Rogers is a World War II veteran who was enhanced to the peak of human physicality by an experimental serum and frozen in ice for decades. He is known for his unyielding moral compass and leadership skills. Captain America wields a nearly indestructible shield made of vibranium. He fights for justice, freedom, and the protection of the innocent. His resilience and courage inspire those around him."
  },
  {
    name: "Iron Man",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:512,cw:2048,ch:2048,q:80,w:2048/ZvJSBXg4cW6WN4S4xrVuf4.jpg",
    description: "Tony Stark is a genius billionaire, playboy, and philanthropist who created a powered suit of armor to save his life and protect the world. He is a technological innovator, constantly upgrading his suits with advanced weaponry and gadgets. Stark's quick wit and sharp intellect often get him out of tough situations. Despite his flaws, he has a strong sense of responsibility toward humanity. His sacrifice is pivotal in the fight against ultimate threats."
  },
  {
    name: "Thor",
    image: "https://static.wikia.nocookie.net/marvelcentral/images/f/fb/Thor_n-1-.jpg/revision/latest/scale-to-width-down/1200?cb=20141018024144",
    description: "The God of Thunder and former King of Asgard, Thor wields the powerful hammer Mjolnir and the axe Stormbreaker to control lightning. He is incredibly strong and nearly immortal, with centuries of combat experience. Thor often balances his divine responsibilities with his ties to Earth and its heroes. His sense of honor and bravery defines him as a warrior. Thor's presence on the battlefield is both awe-inspiring and formidable."
  },
  {
    name: "Hulk",
    image: "https://queenstudios.shop/cdn/shop/files/2.Hulk1-3StatueAdvengersPost_620x.png?v=1711017244",
    description: "Bruce Banner is a brilliant scientist who transforms into a giant, green-skinned monster when angry. Hulk possesses immense strength and near-limitless durability. Despite his destructive potential, Banner constantly seeks to control the beast within him. His duality presents a struggle between intellect and rage. Hulk’s actions often save the world, even if misunderstood by others."
  },
  {
    name: "Black Widow",
    image: "https://i.pinimg.com/474x/70/f8/f0/70f8f08931e6798e02f9e83c0c066550.jpg",
    description: "Natasha Romanoff is a highly trained former KGB assassin and agent of S.H.I.E.L.D., known for her master spy skills. She excels in hand-to-hand combat, espionage, and tactical planning. Despite a shadowy past, Natasha fights for redemption and justice. Her loyalty to her teammates is unwavering. She often uses intelligence and cunning to outsmart opponents."
  },
  {
    name: "Hawkeye",
    image: "https://m.media-amazon.com/images/M/MV5BMTAxMTM0MjA1NDleQTJeQWpwZ15BbWU3MDA0Nzk2Nzc@._V1_.jpg",
    description: "Clint Barton is an expert marksman and archer, utilizing a variety of specialized 'trick arrows' to fight alongside the Avengers. His precision and agility make him a formidable combatant even without superpowers. Clint is a dependable teammate, often providing crucial support in battle. His grounded personality balances the team dynamics. Hawkeye’s skill and determination have saved his friends countless times."
  },
  {
    name: "Vision",
    image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/c09857a7_bae2_4268_aabd_d3f50edb5fdf.jpeg",
    description: "An android possessing a synthetic vibranium body, Vision was brought to life by the Mind Stone. He combines artificial intelligence with human-like emotions. Vision has the ability to phase through objects and project powerful energy beams. His quest to understand humanity adds depth to his existence. Vision plays a critical role in balancing logic and empathy among the Avengers."
  },
  {
    name: "Scarlet Witch",
    image: "https://static.wikia.nocookie.net/marvelmovies/images/2/21/DSMOM_-_Scarlet_Witch.jpg/revision/latest?cb=20220410131401",
    description: "Wanda Maximoff possesses powerful chaos magic and reality-warping abilities, fueled by her emotions. She can manipulate energy and alter the fabric of reality itself. Wanda’s journey is marked by tragedy, loss, and immense growth. Her powers make her one of the most formidable Avengers. She continually struggles to control and understand her vast abilities."
  },
  {
    name: "Quicksilver",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1e/Quicksilver_Infobox.jpg/revision/latest?cb=20241211144208",
    description: "Pietro Maximoff is capable of moving at superhuman speeds, allowing him to react faster than the human eye can perceive. His quick reflexes make him invaluable in fast-paced combat situations. Pietro has a strong sense of loyalty to his sister and friends. Despite his impulsive nature, he is courageous and selfless. Quicksilver’s speed often turns the tide in critical battles."
  },
  {
    name: "War Machine",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/77/WarMachine-EndgameProfile.jpg/revision/latest?cb=20231025163822",
    description: "James Rhodes is a U.S. Air Force officer who operates the War Machine armor, a heavily weaponized version of the Iron Man suit. He provides vital firepower and tactical support to the Avengers. Rhodes is disciplined, loyal, and a trusted friend of Tony Stark. His combat experience makes him an expert in aerial and ground warfare. War Machine is a key defender in global threats."
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

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
      
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          THE AVENGERS
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            bgcolor: '#f0f0f0',
            border: '1px solid #ddd'
          }}
        >
          <Typography variant="h6">Henry Yeoj Dela Cruz</Typography>
          <Typography variant="body1">C-PEITEL3</Typography>
          <Typography variant="body1">IT3B</Typography>
        </Paper>
      </Box>

      {/* Navigation */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          onClick={handleBack}
          startIcon={<NavigateBeforeIcon />}
        >
          PREVIOUS
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          endIcon={<NavigateNextIcon />}
        >
          NEXT
        </Button>
      </Box>

      {/* Card */}
      <Card variant="outlined" sx={{ borderRadius: 1 }}>
        {/* Image */}
        <CardMedia
          component="img"
          image={personalitiesData[index].image}
          alt={personalitiesData[index].name}
          sx={{
            height: 500,
            width: '70%',
            objectFit: 'cover',
            display: 'block',
            margin: 'auto'  // center horizontally
          }}
        />

        {/* Content */}
        <CardContent sx={{ pb: 0 }}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            {personalitiesData[index].name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Character {index + 1} of {personalitiesData.length}
          </Typography>
        </CardContent>

        {/* More / Less */}
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{ width: 90 }}
          >
            <Typography variant="button" sx={{ mr: 1 }}>
              {expanded ? "LESS" : "MORE"}
            </Typography>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        {/* Description */}
        <Collapse in={expanded} timeout={0} sx={{ px: 2 }}>
          <CardContent sx={{ pt: 0 }}>
            <Typography variant="body2">
              {personalitiesData[index].description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
}
