function UserProfilePage(props) {
  return (
    <>
      <h1>{props.username}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  //console.log(params);
  // console.log(req);
  //console.log(req);
  return {
    props: {
      username: 'Munif',
    },
  };
}

export default UserProfilePage;
