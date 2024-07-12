import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Stack, IconButton } from "@mui/material";
import { CardWrapper, IconWrapper } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const GenericCard = ({ title, data, date, status, onEdit, onDelete }) => {
  return (
    <CardWrapper sx={{ borderRadius: "12px", position: "relative" }}>
      <IconWrapper>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </IconWrapper>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div variant="body2">
          {data?.map((value) => {
            const keys = Object.keys(value)[1];
            const values = Object.values(value);
            const FirstLetter = keys.charAt().toUpperCase();
            return (
              <ul key={value.id} type="none">
                <li>
                  {FirstLetter + keys.slice(1).toString()}: {values[1]}
                </li>
              </ul>
            );
          })}
        </div>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography color="text.secondary">{date}</Typography>
          <Chip label={status[0]} color={status[1]} />
        </Stack>
      </CardActions>
    </CardWrapper>
  );
};

export default GenericCard;
