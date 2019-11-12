export const styles = {
  root: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: "#F7F4EA",
    minHeight: "100vh"
  },
  header: {
    position: "relative",
  height: "300px",
  overflow: "hidden"
  },
  headerBg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#6675D5",
    transform: "skewY(-6deg)",
    transformOrigin: "top left"
  },
  paper: {
    margin: "20px auto",
    padding: 20,
    maxWidth: 600
  },
  paperMobile: {
    width: "90%",
    padding: "5%",
    minHeight: "90vh",
    borderTopLeftRadius: 35,
    backgroundColor: "white"
  },
  image: { width: "100%", marginBottom: 15, opacity: "0.7" },
  mobile: { backgroundColor: "#6675D5", padding: 0, hight: "100vh" }
};