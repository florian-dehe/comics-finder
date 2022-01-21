import { Card, CardMedia, CardActions, IconButton, CardContent, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import conf from './conf.js';

import axios from 'axios';

// The comic item to show.
function Item({data}) {

    const handleEditClick = () => {
        console.log("Edit !");
    };

    const handleInfoClick = () => {
        console.log("Info !");
    }

    const handleDeleteClick = () => {
        console.log("Delete !" + data.id);

        conf.then( conf => axios.delete( conf.comics_api_uri + "/id", {
            data: {
                id: data.id
            }
        })).then( res => console.log(res.data))
    }

    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: 1 }}>
                <CardMedia
                    component="img"
                    image={data.cover_url}
                    alt="Comics cover"
                    height={400}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        {data.series.name}
                    </Typography>
                    Volume {data.volume}
                </CardContent>
                <CardActions>
                    <IconButton aria-label="info" onClick={handleInfoClick}>
                        <InfoOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={handleEditClick}>
                        <EditOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleDeleteClick}>
                        <DeleteOutlinedIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

export default Item;
