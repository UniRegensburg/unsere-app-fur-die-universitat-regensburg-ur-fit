import { Grid, FormLabel, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    marginTop: "8px",
    fontSize: "120%",
    textAligh: "end",
  },
  textarea: {
    borderColor: theme.palette.primary.main,
    width: "100%",
  },
  input_Audio: {
    marginTop: "8px",
  },
  input_url: {
    minWidth: "400px",
  },
}));

export default function HandleContentShown(
  aktiveRadio,
  urlVideoInput,
  handleUrlVideoInput,
  lengthVideoInput,
  handleLengthVideoInput,
  textInput,
  handleTextInput,
  handleAudioInput,
  lengthAudioInput,
  handleLengthAudioInput
) {
  const classes = useStyles();
  switch (aktiveRadio) {
    case "Video":
      return (
        <div>
          <Grid container spacing={3}>
            <Grid item>
              <FormLabel component="legend" className={classes.label}>
                Video hochladen:
              </FormLabel>
            </Grid>
            <Grid item>
              <TextField
                value={urlVideoInput}
                onChange={handleUrlVideoInput}
                id="urlVideoInput"
                label="Geben sie die URL des Videos an"
                defaultValue="url"
                shrink
                className={classes.input_url}
              />
            </Grid>
            <Grid item>
              <TextField
                value={lengthVideoInput}
                onChange={handleLengthVideoInput}
                id="lengthVideo"
                label="Länge des Videos:"
                defaultValue="00:00:00"
                helperText="Format: hh:mm:ss"
              />
            </Grid>
          </Grid>
        </div>
      );

    case "Text":
      return (
        <div>
          <Grid container spacing={1}>
            <Grid item>
              <FormLabel component="legend" className={classes.label}>
                Texteingabe:
              </FormLabel>
            </Grid>
            <Grid item xs={7}>
              <TextField
                value={textInput}
                onChange={handleTextInput}
                id="textInput"
                label="Bitte fügen sie hier ihren Text ein."
                defaultValue="Text"
                fullWidth
                multiline
                className={classes.textarea}
                variant="outlined"
                rows={7}
              />
            </Grid>
          </Grid>
        </div>
      );

    case "Audio":
      return (
        <div>
          <Grid container spacing={3}>
            <Grid item>
              <FormLabel component="legend" className={classes.label}>
                Audio hochladen:
              </FormLabel>
            </Grid>
            <Grid item>
              <input
                type="file"
                name="audioInput"
                onChange={handleAudioInput}
                className={classes.input_Audio}
              ></input>
            </Grid>
            <Grid item>
              <TextField
                value={lengthAudioInput}
                onChange={handleLengthAudioInput}
                id="lengthAudio"
                label="Länge des Audios:"
                defaultValue="00:00:00"
                helperText="Format: hh:mm:ss"
              />
            </Grid>
          </Grid>
        </div>
      );
    default:
      return null;
  }
}
