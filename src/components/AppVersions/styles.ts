import { makeStyles } from "@saleor/macaw-ui";

const useStyles = makeStyles(
  theme => ({
    container: {
      display: "flex",
      justifyContent: "flex-end"
    },
    versionItem: {
      color: "rgba(40, 35, 74, 0.6)",
      marginLeft: theme.spacing(1.25),
      letterSpacing: "0.02em"
    }
  }),
  {
    name: "AppVersions"
  }
);

export default useStyles;
