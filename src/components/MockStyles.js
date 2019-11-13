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
  headerMobile: {
    position: "relative",
    height: "20vh",
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
    backgroundImage: "linear-gradient(#6675D5, #133FAC)",
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
  mobile: { backgroundColor: "#6675D5", padding: 0, hight: "100vh" },
  mobileFirst: { backgroundColor: "white", padding: 0, hight: "100vh", justifyContent: 'center' },
  headerText: {
    position: "relative",
    color: "white",
    fontFamily: "'Oswald', sans-serif",
    margin: "5%"
  },
  gradientButton: {
    backgroundImage: "linear-gradient(#6675D5, #133FAC)",
    color: "white",
    position: "fixed",
    zIndex: 1,
    bottom: 10,
    left: "65%",
    right: 10,
    margin: "0 auto"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
};
