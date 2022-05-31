import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TableLoading = ({ loading }) => {
  const users = [
    { id: 11, name: "Sam", role: "Admin", active: true },
    { id: 19, name: "Kelly", role: "Salesperson", active: true },
    { id: 23, name: "John", role: "Manager", active: false },
    { id: 23, name: "John", role: "Manager", active: false },
  ];
  const rows = [
    <Skeleton />,
    <Skeleton />,
    <Skeleton />,
    <Skeleton />,
    <Skeleton />,
  ];
  return (
    <SkeletonTheme
      baseColor="#dedede"
      highlightColor="#efefef"
      borderRadius="0.3rem"
      duration={4}
    >
      <table className="table_skeleton_loading">
        <thead>
          <tr>
            <th>
              <Skeleton />
            </th>
            <th>
              <Skeleton />
            </th>
            <th>
              <Skeleton />
            </th>
            <th>
              <Skeleton />
            </th>
            <th>
              <Skeleton />
            </th>
            <th>
              <Skeleton />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <TableRow key={u.id} user={u} loading={loading} />
          ))}
        </tbody>
      </table>
    </SkeletonTheme>
  );
};

export default TableLoading;

function TableRow({ loading, user }) {
  return (
    <tr>
      <td>{loading && <Skeleton />}</td>
      <td>{loading && <Skeleton />}</td>
      <td>{loading && <Skeleton />}</td>
      <td>{loading && <Skeleton />}</td>
      <td>{loading && <Skeleton />}</td>
      <td>{loading && <Skeleton />}</td>
    </tr>
  );
}
