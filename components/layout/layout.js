const { default: MainHeader } = require('./main-header');

function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
export default Layout;
