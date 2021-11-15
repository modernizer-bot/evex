import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../Redux/actions/userActions";
import Spinner from "../Common/Spinner";
import PropTypes from "prop-types";

const IndexPage = ({ userList, loading, actions }) => {
  useEffect(() => {
    if (userList.length === 0) {
      actions.loadUsers();
      // .catch((error) => {
      //   console.log(`Loading users failed ${error}`);
      // });
    }
  }, []);
  return (
    <>
      <h1>User Profiles</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {userList == null ? (
              <tr key={0}>
                <td colSpan={3}>No data found...</td>
              </tr>
            ) : (
              userList.map((i) => {
                return (
                  <tr key={i.name}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.lastName}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}
    </>
  );
};
IndexPage.propTypes = {
  userList: PropTypes.array,
  actions: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  const userList = state.users;
  console.log(state);
  console.log({ userList, loading: state.apiCallStatusReducer > 0 });
  return { userList, loading: state.apiCallStatusReducer > 0 };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
