import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider } from "@mui/system";
import { theme } from "../fixtures/theme";
export const Deleteuser: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
        アカウント削除
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="error">警告</DialogTitle>
        <DialogContent>
          <center>
            <DialogContentText color="error">
              本当に削除していいですか
              <br />
              ※削除した後は復旧てきません
              <br />
              パスワードを入力してください
            </DialogContentText>
          </center>
          <TextField
            autoFocus
            margin="dense"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button color="error" onClick={handleClose}>
            実行
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
