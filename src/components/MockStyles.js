export const styles = {
  root: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: "white",
    minHeight: "100vh"
  },
  topBarMain: {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "right"
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
  mobileFirst: {
    backgroundColor: "white",
    padding: 0,
    hight: "100vh",
    justifyContent: "center"
  },
  mainTitle: {
    fontFamily: "'Bebas Neue', cursive",
    fontStretch: "expanded",
    position: "relative",
    marginTop: "10%",
    marginBottom: "3%",
    zIndex: 1,
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
  gradientButtonDesktop: {
    backgroundImage: "linear-gradient(#6675D5, #133FAC)",
    color: "white",
    position: "relative",
    marginTop: 0,
    marginBottom: "3%",
    marginLeft: "46.5%",
    zIndex: 1
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  testImage: {
    position: "fixed",
    zIndex: 0,
    bottom: 10,
    left: "75%",
    right: 10,
    margin: "0 auto"
  },
  button: {
    marginLeft: "10px"
  }
};
