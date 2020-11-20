import snackbar from "node-snackbar/dist/snackbar";
import "node-snackbar/dist/snackbar.css";
import "../styles/snackBar.css";

const showNotify = (settings) => {
  if (settings) {
    console.log(settings);
    return snackbar.show({
      customClass: "snack-bar-custom",
      actionText: "بستن",
      showAction: true,
      actionTextColor: "#85edaf",
      pos: "bottom-right",
      duration: 3000,
      ...settings,
    });
  }
};

export const closeNotify = () => snackbar.close();

export default showNotify;
