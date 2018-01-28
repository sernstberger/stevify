import * as React from "react";

import Button from "material-ui/Button";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";
import List, {ListItem} from "material-ui/List";
import { LinearProgress } from "material-ui/Progress";
import Typography from "material-ui/Typography";
import CardHeaderWithAction from "../../shared/CardHeaderWithAction";
import ProgressGroupButton from "./ProgressGroupButton";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface ITopItem {
  id: number;
  name: string;
  amountNumber: number;
  amountPercentage: number;
}

interface IProgressGroupProps extends StyledComponentProps {
  title: any;
  topMedicationItems: ITopItem[];
  topCategoryItems: ITopItem[];
}

interface IProgressGroupState {
  selected: string;
}

class ProgressGroup extends React.Component<IProgressGroupProps, IProgressGroupState> {

  constructor(props: any) {
    super(props);
    this.state = {selected: "Medication"};
  }

  public topItems = this.props.topMedicationItems;

  public handleClick = (tab: string) => {
    this.setState({ selected: tab });

    tab === "Medication"
    ? this.topItems = this.props.topMedicationItems
    : this.topItems = this.props.topCategoryItems;
  }


  public render() {
    return (
        <Card>
            <CardHeaderWithAction
                title={this.props.title}
                action={
                  <div className={this.props.classes!.buttonGroup}>
                    <ProgressGroupButton
                      title="Medication"
                      selected={this.state.selected}
                      onClick={() => this.handleClick("Medication")}
                    />
                    <ProgressGroupButton
                      title="Category"
                      selected={this.state.selected}
                      onClick={() => this.handleClick("Category")}
                    />
                  </div>
                }
            />
            <List>
                {this.topItems.map((item: any) => {
                    return (
                      <ListItem key={item.id}>
                        <Grid container spacing={24}>
                          <Grid item xs={6} className={this.props.classes!.noPadding}>
                            <Typography type="body1">
                              {item.name}
                            </Typography>
                          </Grid>
                          <Grid item xs={6} className={this.props.classes!.noPadding}>
                            <Typography type="body1" className={this.props.classes!.alignRight}>
                              {`$${item.amountNumber} / ` + `${item.amountPercentage}%`}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} className={this.props.classes!.paddingFix}>
                            <LinearProgress mode="determinate" value={item.amountPercentage} />
                          </Grid>
                        </Grid>
                      </ListItem>
                    );
                })}
            </List>
        </Card>
    );
  }
};

export default withStyles<IStyles["classes"]>(styleSheet)(ProgressGroup);
