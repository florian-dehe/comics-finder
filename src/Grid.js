import Item from "./Item"
import { Grid, CircularProgress } from "@mui/material";

// The grid for the comics view.
function ComicsGrid({comics}) {
    if (comics.length === 0) {
        return <CircularProgress />
    }

    return (
        <Grid container margin={2} sx={{ width: 0.9 }}>
            {comics.map(comic => (
                <Item key={comic.id} data={comic}/>
            ))}
        </Grid>
    )
}

export default ComicsGrid;
