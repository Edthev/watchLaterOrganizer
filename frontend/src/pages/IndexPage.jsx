const IndexPage = () => {
   const link = window.location.href.slice();
   const storeUserAuthorizationCode = () => {
      const AuthorizationCode = link.slice(
         link.indexOf("code=") + 5,
         link.indexOf("&", link.indexOf("code="))
      );
      return AuthorizationCode;
   };
   if (link.includes("code=")) {
      sessionStorage.setItem(storeUserAuthorizationCode());
   }
   return <a href="http://localhost:3001/login">Login</a>;
};

export default IndexPage;
