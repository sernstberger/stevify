import * as React from "react";

import Paper from "material-ui/Paper";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import Svg from "../shared/Svg";

import ReportTableRows from "./ReportTableRows";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface IReportTableProps extends StyledComponentProps {
  tableName: string;
  columnData: any;
  tableData: any;
  children?: any;
}

interface IReportTableState {
  data: any;
  sortBy: string;
  sortOrder: string;
  tableHeaderFromTop: number;
}

class ReportTable extends React.Component<IReportTableProps, IReportTableState> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: this.props.tableData,
      sortBy: "",
      sortOrder: "",
      tableHeaderFromTop: 0,
    };
  }

  public componentDidMount() {
    const headerChildren = document.getElementById("FixedHeaderRow")!.children;
    const headerChildrenElements = [].slice.call(headerChildren);
    for (const child of headerChildrenElements) {
      const width = child.offsetWidth;
      child.style.cssText = "width: " + width;
    }

    const bodyChildren = document.getElementById("TableRow")!.children;
    const bodyChildrenElements = [].slice.call(bodyChildren);
    for (const child of bodyChildrenElements) {
      const width = child.offsetWidth;
      child.style.cssText = "width: " + width;
    }

    const distanceFromTop = document.getElementById("FixedHeader")!.getBoundingClientRect().top;

    setTimeout( () => {
      this.setState({tableHeaderFromTop: distanceFromTop});
      window.addEventListener("scroll", () => this.handleScroll(this.state.tableHeaderFromTop));
    }, 50);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll(0));
  }

  public handleScroll(fromTop: number) {
    if (window.pageYOffset > (fromTop - 90)) {
      document.getElementById("FixedHeader")!.style.cssText = "position: fixed; top: 90px; left: 240px; right: 40px; z-index: 100";
      document.getElementById("TableWithFixedHeader")!.style.cssText = "margin-top: 56px";
    } else {
      document.getElementById("FixedHeader")!.style.cssText = "";
      document.getElementById("TableWithFixedHeader")!.style.cssText = "";
    }
  }

  public whichSVG = (columnId: string) => {
    let svg = "";
    this.state.sortOrder === "ASC" && this.state.sortBy === columnId ? svg = "TableSortDESC"
    : this.state.sortOrder === "DESC" && this.state.sortBy === columnId ? svg = "TableSortASC"
    : svg = "TableSortAvailable";
    return svg;
  }

  public handleSortRequest = (sortFilter: string) => {
    const mySortOrder = this.state.sortOrder === "ASC" ? "DESC" : "ASC";
    const myData = this.props.tableData.sort((a: any, b: any) => (
      mySortOrder === "ASC"
      ? a[sortFilter] < b[sortFilter] ? -1 : 1
      : b[sortFilter] < a[sortFilter] ? -1 : 1
    ));
    this.setState({
      data: myData,
      sortBy: sortFilter,
      sortOrder: mySortOrder,
    });
  }

  public render() {
    return (

      <Paper style={{padding: 8}}>
        <Table id="TableWithFixedHeader">
          <TableHead id="FixedHeader">
            <TableRow id="FixedHeaderRow">

              {this.props.columnData.map((column: any) => {
                return (
                  column.sortable ?
                    <TableCell
                      key={column.id}
                      id={`${column.id}Header`}
                      className={`
                        ${this.props.classes!.stickyHeader}
                        ${this.props.classes!.sortableHeader}
                        ${this.state.sortOrder !== "" && this.state.sortBy === column.id && this.props.classes!.sortableHeaderActive}
                      `}
                      numeric={ column.numeric ? true : false}
                      onClick={ () => this.handleSortRequest(`${column.id}`) }
                    >
                      {column.label}
                      <Svg image={this.whichSVG(column.id)!} className={this.props.classes!.svg}/>
                    </TableCell>
                  :
                  <TableCell
                    key={column.id}
                    id={`${column.id}Header`}
                    numeric={ column.numeric ? true : false}
                    className={this.props.classes!.stickyHeader}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((n: any) => {
              return (
                <ReportTableRows report={this.props.tableName} key={n.id} object={n} />
              );
            })}
          </TableBody>
          {this.props.children}
        </Table>
      </Paper>

    );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(ReportTable);
