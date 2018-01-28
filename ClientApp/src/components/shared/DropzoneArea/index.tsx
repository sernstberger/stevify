import * as React from "react";

import { history } from "configureStore";

import Dropzone from "react-dropzone";
import { formatBytes } from "../helpers";
import DropzoneBox from "./DropzoneBox";
import UploadedFile from "./UploadedFile";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IDropzoneAreaState {
  files: any;
  clientId: number;
}

interface IDropzoneAreaProps {
  beingCreatedClaim: (claim: any) => void;
  clientId: number;
}

type DropzoneAreaProps =
StyledComponentProps
& IDropzoneAreaProps;

class DropzoneArea extends React.Component<DropzoneAreaProps, IDropzoneAreaState> {

  constructor(props: any) {
    super(props);
    this.state = { files: [], clientId: this.props.clientId };
  }

  public onDrop = async (files: any) => {
    const droppedFile = files[0];
    this.props.beingCreatedClaim({name: droppedFile.name, clientId: this.props.clientId, file: files[0]});
  }

  public removeFile = () => {
    this.setState({ files: []});
  }

  public render() {
    return (
      <div className={this.props.classes!.dropzoneWrapper}>
        <div className="dropzone">
          <Dropzone
            accept="text/csv"
            onDrop={this.onDrop.bind(this)}
            className={this.props.classes!.dropzoneArea}
            activeClassName={this.props.classes!.dropzoneAreaActive}
            rejectClassName={this.props.classes!.dropzoneAreaReject}
            multiple={false}
          >
            {
              ({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }: { isDragActive: boolean, isDragReject: boolean, acceptedFiles: string, rejectedFiles: string }) => {
                if (isDragReject) {
                  return <DropzoneBox title="CSV files only please" icon="Rejected" />;
                }
                if (isDragActive) {
                  return <DropzoneBox title="Drop your claim file here" icon="Upload" />;
                }
                if (acceptedFiles.length > 0) {
                  return <DropzoneBox title='Great! Continue by clicking "Create Analysis" or drop a different claim file here' icon="Accepted" />;
                } else if (rejectedFiles.length > 0) {
                  return <DropzoneBox title="Oops, try again with a .csv" icon="Rejected" />;
                } else {
                  return <DropzoneBox title="Drop your claim file here" icon="Upload" />;
                }
              }
            }
          </Dropzone>
        </div>
        { this.state.files.length > 0 &&
          <aside>
            <h4>Your claim file</h4>
            { this.state.files.map(
              (f: any) =>
                <UploadedFile
                  key={f.name}
                  title={f.name}
                  subtitle={formatBytes(f.size)}
                  icon="File"
                  // remove={() => this.removeFile()}
                />,
              )
            }
          </aside>
        }
      </div>
    );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(DropzoneArea);
