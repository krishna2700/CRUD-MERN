import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../service/api";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
        <TableBody></TableBody>
      </TableHead>
    </Table>
  );
};

export default AllUser;
