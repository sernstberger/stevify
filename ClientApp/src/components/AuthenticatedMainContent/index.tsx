import * as React from "react";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface IAuthenticatedMainContentProps extends StyledComponentProps {
    children?: any;
    noSidebar?: boolean;
}

class AuthenticatedMainContent extends React.Component<IAuthenticatedMainContentProps> {

  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return (
      <div className={`${this.props.classes!.content} ${this.props.noSidebar && this.props.classes!.noSidebar}`}>
          { this.props.children }
      </div>
    );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(AuthenticatedMainContent);
