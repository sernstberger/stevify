import * as React from "react";

import { TableCell, TableRow } from "material-ui/Table";
import { formattedNumber, money } from "../shared/helpers";

interface IReportTableProps {
  object: any;
  report: string;
}

class ReportTableRows extends React.Component<IReportTableProps> {

  public renderUserMessage() {
    if (this.props.report === "AdjustmentAnalysis") {
      return (
        <TableRow id="TableRow">
          <TableCell>{this.props.object.medication}</TableCell>
          <TableCell numeric>{formattedNumber(this.props.object.quantity)}</TableCell>
          <TableCell numeric>{money(this.props.object.current)}</TableCell>
          <TableCell numeric>{money(this.props.object.distributionAndMail)}</TableCell>
          <TableCell numeric>{money(this.props.object.mail)}</TableCell>
        </TableRow>
      );
    } else if (this.props.report === "ActualDispenses") {
      return (
        <TableRow id="TableRow">
          <TableCell>{this.props.object.medication}</TableCell>
          <TableCell numeric>{formattedNumber(this.props.object.quantity)}</TableCell>
          <TableCell numeric>{money(this.props.object.price)}</TableCell>
          <TableCell>{this.props.object.category}</TableCell>
          <TableCell>{this.props.object.transactionDate}</TableCell>
          <TableCell numeric>{this.props.object.salesOrderNumber}</TableCell>
        </TableRow>
      );
    } else if (this.props.report === "InventoryTurns") {
      return (
        <TableRow id="TableRow">
          <TableCell>{this.props.object.medication}</TableCell>
          <TableCell numeric>{formattedNumber(this.props.object.yourClinic)}</TableCell>
          <TableCell numeric>{formattedNumber(this.props.object.benchmark)}</TableCell>
        </TableRow>
      );
    } else {
      return "nothing";
    }
  }

  public render() {
    return this.renderUserMessage();
  }
}

export default ReportTableRows;
