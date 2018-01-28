import * as React from "react";

import { history } from "configureStore";
import * as moment from "moment";

import Avatar from "material-ui/Avatar";
import Badge from "material-ui/Badge";
import Card, {CardContent} from "material-ui/Card";
import Grid from "material-ui/Grid";
import IconButton from "material-ui/IconButton";
import { ListItemText } from "material-ui/List";

// icons
import AutorenewIcon from "material-ui-icons/Autorenew";
import CheckIcon from "material-ui-icons/Check";
import ClearIcon from "material-ui-icons/Clear";
import MoreHorizIcon from "material-ui-icons/MoreHoriz";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import variables from "../../../assets/styles/variables";
import styleSheet from "./styles";

interface IAdjustmentAnalysisListItemProps extends StyledComponentProps {
    title: string;
    link: string;
    // icon: string;
    // menu?: JSX.Element;
    status: string;
    statusText: string;
    dateTime: string;
}

const AdjustmentAnalysisListItem = (props: IAdjustmentAnalysisListItemProps) => {
    const { title, link, status, statusText, dateTime } = props;

    let statusIcon = null;
    let statusColor = "";
    let statusLink = "#";
    let statusClass = null;
    if (props.status === "Processing" || props.status === "ProcessingQueued") {
      statusIcon = <AutorenewIcon className={props.classes!.statusIcon}/>;
      statusColor = variables.primaryColor;
      statusClass = props.classes!.clickNotAllowed;
    } else if (props.status === "Finished") {
      // finished
      statusIcon = <CheckIcon className={props.classes!.statusIcon}/>;
      statusColor = variables.success;
      statusLink = link;
      statusClass = props.classes!.clickAllowed;
    } else {
      // rejected
      statusIcon = <ClearIcon className={props.classes!.statusIcon}/>;
      statusColor = variables.error;
      statusClass = props.classes!.clickNotAllowed;
    }

    const avatar = <Avatar className={props.classes!.squareAvatar}>
      <img
        src="/assets/images/File.svg"
        alt={title}
        className={props.classes!.icon}
      />
    </Avatar>;

    const formatedDateTime = moment(dateTime).format("LLL");

    return (
      <Card onClick={() => history.push(`${statusLink}`)} className={statusClass} >
        <CardContent className={props.classes!.CardContent}>
          <div style={{position: "relative", marginRight: 20}}>
            { avatar }
            <div
              className={`${props.classes!.statusIconBg}
              ${props.classes!.statusColor}`}
              style={{ backgroundColor: statusColor }}
            >
              {statusIcon}
            </div>
          </div>
          <div>
            <h3 style={{margin: 0}}>{title}</h3>
            <p style={{marginBottom: 10, marginTop: 6}}>{statusText}</p>
            <h6 style={{margin: 0, fontWeight: "normal"}}><em>{formatedDateTime}</em></h6>
          </div>
          {/* will need this for delete action */}
          {/* { menu &&
            <IconButton aria-label="Delete">
              <MoreHorizIcon />
            </IconButton>
          } */}
        </CardContent>
      </Card>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(AdjustmentAnalysisListItem);
