import * as React from "react";

import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface ILoginCardProps extends StyledComponentProps {
  children?: any;
  submitAction: any;
}

const LoginCard = (props: ILoginCardProps) => {
  const { children, submitAction } = props;

  return (
    <div className={props.classes!.loginCardWrapper}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <div className={props.classes!.loginContainer}>
            <img src={require("../../assets/images/logo.png")} className={props.classes!.logoImg}/>
            <Typography type="headline" className={props.classes!.loginTitle}>Sign In</Typography>
            { children }

            <Button
              raised
              onClick={submitAction}
              className={props.classes!.loginButton}
            >
              Sign In
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(LoginCard);
