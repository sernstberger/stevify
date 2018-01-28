import * as React from "react";

import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";

import CheckboxCollapsable from "./CheckboxCollapsable";
import TextAreaWithCounter from "./TextAreaWithCounter";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface IReport {
  id: number;
  name: string;
  elementId: string;
  medication: boolean;
  category: boolean;
}

interface IReportListProps extends StyledComponentProps {
  reports: IReport[];
}

class CreateReportListItem extends React.Component<IReportListProps> {

  constructor(props: any) {
    super(props);
  }

  public displayReports(reports: IReport[]) {
    return this.props.reports.map((report) =>
      <div key={report.id}>
          <CheckboxCollapsable
            id={report.id}
            name={report.name}
            content={
              <div>
                { report.id === 6 &&
                  <div>
                    <TextField
                      id="select-adjustment-analysis"
                      select
                      label={false}
                      value={1}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      margin="normal"
                      fullWidth={true}
                    >
                      <MenuItem>alksjdf</MenuItem>
                      <MenuItem>ijoagjodfsa</MenuItem>
                    </TextField>

                    <CheckboxCollapsable
                      id={`${report.elementId}Summary`}
                      name="Summary"
                      disableGutters
                      content={
                        <TextAreaWithCounter
                          id={`${report.elementId}SummaryTextArea`}
                        />
                      }
                    />

                    <CheckboxCollapsable
                      id={`${report.elementId}Detailed`}
                      name="Detailed"
                      disableGutters
                      content={
                        <TextAreaWithCounter
                          id={`${report.elementId}DetailedTextArea`}
                        />
                      }
                    />
                  </div>
                }

                { report.medication &&
                  <div>
                    <CheckboxCollapsable
                      id={`${report.elementId}Medication`}
                      name="Medication"
                      disableGutters
                      content={
                        <TextAreaWithCounter
                          id={`${report.elementId}MedicationTextArea`}
                        />
                      }
                    />
                  </div>
                }

                { report.category &&
                  <div>
                    <CheckboxCollapsable
                      id={`${report.elementId}Category`}
                      name="Category"
                      disableGutters
                      content={
                        <TextAreaWithCounter
                          id={`${report.elementId}CategoryTextArea`}
                        />
                      }
                    />
                  </div>
                }

                { !report.medication && !report.category && report.id !== 6 &&
                  <TextAreaWithCounter
                    id={`${report.elementId}TextArea`}
                  />
                }
              </div>

            }
          />
          <Grid item xs={12}>
            <Divider />
          </Grid>
      </div>,
    );
  }

  public render() {
      return (
        <div>
          {this.displayReports(this.props.reports)}
        </div>
      );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(CreateReportListItem);
