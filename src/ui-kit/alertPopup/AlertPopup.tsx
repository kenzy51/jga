import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import {
  Alert,
  AlertColor,
  AlertTitle,
  Box,
  Slide,
  useTheme,
} from "@mui/material";
import { useAlert } from "../../hooks/useAlert";
import { boxStyles, useStyles } from "./alertPopup.styles";

export const AlertPopup = (): JSX.Element => {
  const { text, type } = useAlert();
  const theme: any = useTheme();
  const classes = useStyles({ theme });

  if (text && type && true) {
    return (
      <div className={classes.alert}>
        <Slide direction="left" in mountOnEnter unmountOnExit>
          <Alert
            icon={
              <Box sx={boxStyles}>
                <WarningAmberRoundedIcon />
              </Box>
            }
            severity={type as AlertColor}
          >
            <AlertTitle>Warining Message</AlertTitle>
            {text}
          </Alert>
        </Slide>
      </div>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};
