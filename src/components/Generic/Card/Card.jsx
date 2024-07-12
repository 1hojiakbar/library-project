import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Chip, Stack, IconButton } from "@mui/material";
import { CardWrapper, ChangeMenuWrapper, IconWrapper } from "./style";
import ChangeMenu from "./Menu";

const GenericCard = ({ id, title, data, date, status }) => {
  return (
    <>
      <CardWrapper sx={{ borderRadius: "12px", position: "relative" }}>
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
        {id === 3 && (
          <ChangeMenuWrapper>
            <ChangeMenu id={id === 3 && id} />
          </ChangeMenuWrapper>
        )}
      </CardWrapper>
    </>
  );
};

export default GenericCard;
