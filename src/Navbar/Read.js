import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useEffect, useState } from "react";
import {Button} from "@mui/material"


function Read() {
  const [apiData, setApiData] = useState([]);

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    callGetApi();
  };
  const callGetApi = async () => {
    const resp = await axios.get(API_URL);
    setApiData(resp.data);
  };
  
  useEffect(() => {
    callGetApi();
  }, []);
  return (
    <>
    
        <Table singleLine>
        <TableHead>
              <TableRow>
                <TableCell align="right">FirstName</TableCell>
                <TableCell align="right">MobileName</TableCell>
                <TableCell align="right">Address</TableCell>  
                <TableCell align="right">Allocated</TableCell>
              </TableRow>
            </TableHead>

          <TableBody>
            {apiData.map((data) => (
              <TableRow key={data.id}>
                <TableCell align="right">{data.FirstName}</TableCell>
                <TableCell align="right">{data.mobileNumber}</TableCell>
                <TableCell align="right">{data.address}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => deleteUser(data.id)}>Allocated</Button>
                </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      
    </>
  );
}

export default Read;





