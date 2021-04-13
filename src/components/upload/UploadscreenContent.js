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
  inputAudio: {
    marginTop: "8px",
  },
  inputUrl: {
    minWidth: "200px",
    maxWidth: "500px",
  },
}));

export default function HandleContentShown(
  activeRadio,
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
  switch (activeRadio) {
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
                label="Geben Sie die URL des Videos an"
                helperText='Navigieren Sie in Youtube zu dem Video, das Sie einbetten m&ouml;chten. Klicken Sie unter dem Video auf den "Teilen"-Button (englisch: "Share"). Nun werden die Optionen zum Teilen des Videos angezeigt. Klicken Sie auf "Einbetten" (englisch: "Embed"). Kopieren Sie aus dem angezeigten Text nun die URL und f&uuml;gen Sie sie hier ein.'
                defaultValue="url"
                shrink
                className={classes.inputUrl}
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
                label="Bitte fügen Sie hier Ihren Text ein."
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
                className={classes.inputAudio}
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
