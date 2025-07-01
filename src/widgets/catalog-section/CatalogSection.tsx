import GoodCard from "@/entities/good-card/GoodCard";
import SectionWrapper from "@/shared/ui/SectionWrapper";
import { Grid } from "@mui/material";

const CatalogSection = () => {
  return (
    <SectionWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoodCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoodCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoodCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoodCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoodCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoodCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoodCard />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default CatalogSection;
