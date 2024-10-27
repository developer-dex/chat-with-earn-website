import Header from "../components/header/Header";

const PublicHeader = () => {

  // const logoutFunction = async () => {
  //   const payload = await deleteApi(apiEndPoints.LOG_OUT_PATH);
  //   if (payload.status === OK) {
  //     Mixpanel.track("User Logged Out", {
  //       Page: "logout",
  //     });
  //     showSuccess(payload.data.message);
  //     clearSession();
  //     navigate("/");
  //   }
  // };

  return (
    <>
     <Header/>
    </>
  );
};

export default PublicHeader;
